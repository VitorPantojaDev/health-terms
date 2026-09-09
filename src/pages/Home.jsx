import { useEffect, useMemo, useState } from 'react';
import useTerms from '../hooks/useTerms';
import SearchBar from '../components/SearchBar';
import TermList from '../components/TermList';
import RandomTermCard from '../components/RandomTermCard';
import useDebouncedValue from '../hooks/useDebouncedValue';
import TermSkeleton from '../components/TermSkeleton';

function pickRandom(list) {
  if (!list.length) return null;
  return list[Math.floor(Math.random() * list.length)];
}

function Home() {
  const { terms, loading, error } = useTerms();
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebouncedValue(query, 250);
  const [randomTerm, setRandomTerm] = useState(null);

  useEffect(() => {
    if (terms.length && !randomTerm) setRandomTerm(pickRandom(terms));
  }, [terms, randomTerm]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return terms
      .filter((t) => t.word.toLowerCase().includes(q))
      .sort((a, b) => a.word.localeCompare(b.word, 'en', { sensitivity: 'base' }));
  }, [terms, debouncedQuery]);

    if (loading) {
        return (
            <div className="container">
                <TermSkeleton count={1} />
            </div>
        );
    }

  if (error) return <p className="container">Não foi possível carregar os termos agora.</p>;

  const isSearching = query.trim().length > 0;

  return (
    <div className="container">
      <SearchBar value={query} onChange={setQuery} />

      {!isSearching && randomTerm && (
        <RandomTermCard term={randomTerm} onShuffle={() => setRandomTerm(pickRandom(terms))} />
      )}

      {isSearching && (
        filtered.length === 0
          ? <p>Nenhum termo encontrado para "{query}".</p>
          : <TermList terms={filtered} query={query} />
      )}
    </div>
  );
}

export default Home;