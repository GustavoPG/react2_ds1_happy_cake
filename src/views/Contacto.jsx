import { Container } from 'react-bootstrap';

const Contacto = () => {
    return (
        <>
            <Container className="text-center col-sm-6">
                <form>
                    <div className="mb-3 mt-5">
                        <h2>Cuéntanos, ¿En que te podemos ayudar?</h2>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Correo:</label>
                        <input type="email" className="form-control" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Descripción:</label>
                        <textarea className="form-control"></textarea>
                    </div>
                    <button type="button" className="btn btn-danger my-button">Enviar</button>
                </form>
            </Container>
        </>
    );
};

export default Contacto;