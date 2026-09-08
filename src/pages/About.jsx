import { Alert } from 'react-bootstrap';

export default function About() {
    return (
        <div className="container">
            <Alert variant="info" className="mt-4">
                <Alert.Heading>Sobre o projeto</Alert.Heading>
                <p>
                    Este site reune termos de saude em ingles, combinando o BFF criado durante o curso
                    com uma API propria de termos medicos, para apoiar o estudo de vocabulario tecnico.
                </p>
            </Alert>
        </div>
    );
}
