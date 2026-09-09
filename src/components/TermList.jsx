import TermCard from './TermCard';

export default function TermList({ terms, query }) {
    return (
        <>
            <p className="text-muted small">
                {terms.length} termo{terms.length !== 1 ? 's' : ''} encontrado{terms.length !== 1 ? 's' : ''}
            </p>
            <div className="term-grid">
                {terms.map((term) => (
                    <TermCard key={term.word} term={term} query={query} />
                ))}
            </div>
        </>
    );
}