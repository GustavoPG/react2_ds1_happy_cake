import { Container, Row } from 'react-bootstrap';
import cake from '../images/444.png';
const Home = () => {
    return (
        <>
            <Container className="text-center">
                <Row className="mt-5">
                    <h1>Bienvenido a <span className="my-bold">Happy Cake</span></h1>
                </Row>
                <Row>
                    <h4>El lugar de los pasteles felices</h4>
                </Row>
                <Row className="text-center mt-3">
                    <img src={cake} alt="torta" className="mx-auto my-cake" />
                </Row>
            </Container>
        </>
    );
};

export default Home;