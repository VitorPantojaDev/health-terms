import { Card } from 'react-bootstrap';

export default function TermCard({ term, query = '' }) {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title className="text-capitalize">
                    {highlightMatch(term.word, query)}
                </Card.Title>
                <Card.Text>{term.description}</Card.Text>
                <Card.Text className="fst-italic text-muted">"{term.useCase}"</Card.Text>
            </Card.Body>
        </Card>
    );
}

function highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase()
            ? <mark key={i}>{part}</mark>
            : part
    );
}