import { Card } from 'react-bootstrap';

export default function TermCard({ term }) {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title className="text-capitalize">{term.word}</Card.Title>
                <Card.Text>{term.description}</Card.Text>
                <Card.Text className="fst-italic text-muted">"{term.useCase}"</Card.Text>
            </Card.Body>
        </Card>
    );
}
