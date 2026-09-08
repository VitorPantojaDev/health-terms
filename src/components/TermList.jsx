import TermCard from './TermCard';

export default function TermList({ terms }) {
    return (
        <div>
            {terms.map((term) => (
                <TermCard key={term.word} term={term} />
            ))}
        </div>
    );
}