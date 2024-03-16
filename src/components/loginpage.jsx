// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginForm() {
    return (
        <Form method='POST'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label >Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" className='form-box'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label >Password</Form.Label>
                <Form.Control type="password" placeholder="Password" className='form-box'/>
            </Form.Group>
            <button type="submit">
                Submit
            </button>
        </Form>
    );
}

export default LoginForm;