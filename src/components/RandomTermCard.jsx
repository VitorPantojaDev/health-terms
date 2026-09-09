import { Card, Badge, Button } from 'react-bootstrap';

export default function RandomTermCard({ term, onShuffle }) {
  return (
    <Card className="mb-3 random-term-card">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Badge className="random-badge">Random Health Term</Badge>
          <Button size="sm" variant="outline-secondary" onClick={onShuffle}>
            🔀 Outro termo
          </Button>
        </div>
        <Card.Title className="text-capitalize">{term.word}</Card.Title>
        <Card.Text>{term.description}</Card.Text>
        <Card.Text className="fst-italic text-muted">"{term.useCase}"</Card.Text>
      </Card.Body>
    </Card>
  );
}