import { useState } from 'react';
import useTerms from '../hooks/useTerms';
import SearchBar from '../components/SearchBar';
import TermList from '../components/TermList';

function Home() {
    const { terms, loading, error } = useTerms();
    const [query, setQuery] = useState('');
    const filtered = terms.filter((t) =>
        t.word.toLowerCase().includes(query.toLowerCase())
    );

    if (loading) return <p className="container">Carregando termos...</p>;
    if (error) return <p className="container">Nao foi possivel carregar os termos agora.</p>;
 
    return (
        <div className="container">
            <SearchBar value={query} onChange={setQuery} />
            {filtered.length === 0
                ? <p>Nenhum termo encontrado.</p>
                : <TermList terms={filtered} />}
        </div>
    );
}

export default Home;
