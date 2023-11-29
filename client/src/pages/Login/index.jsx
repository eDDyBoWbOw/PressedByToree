import './style.css'
import NavbarComponent from '../../components/Navbar'
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER, LOGIN } from "../../utils/mutations";
import { Form, Button } from "react-bootstrap";
import Auth from '../../utils/auth';

function Login(props) {
    const [addUser] = useMutation(ADD_USER);
    const [loginUser] = useMutation(LOGIN);
    const [formState, setFormState] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [view, setView] = useState('signup');

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (view === 'signup') {
            const mutationResponse = await addUser({
                variables: {
                    //firstname: formState.firstname,
                    //lastname: formState.lastname,
                    username: formState.username,
                    email: formState.email,
                    password: formState.password
                }
            });
            const token = mutationResponse.data.addUser.token;
            Auth.login(token);
            setView('login');
        } else if (view === 'login') {
            const mutationResponse = await loginUser({
                variables: {
                    email: formState.email,
                    password: formState.password
                }
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className="container my-1">
            {view === 'signup' ? (
                <>
                <NavbarComponent/>
                    <h2>SignUp</h2>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="username">Username:</Form.Label>
                            <Form.Control type="text" placeholder="Your username" name="username" onChange={handleChange} value={formState.username} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email">Email:</Form.Label>
                            <Form.Control type="email" placeholder="Your email" name="email" onChange={handleChange} value={formState.email} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="password">Password:</Form.Label>
                            <Form.Control type="password" placeholder="Your password" name="password" onChange={handleChange} value={formState.password} />
                        </Form.Group>

                        <Button type="submit" variant="success">Submit</Button>
                    </Form>
                </>
            ) : (
                <>
                <NavbarComponent/>
                    <h2>LogIn</h2>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="email">Email:</Form.Label>
                            <Form.Control type="email" placeholder="Your email" name="email" onChange={handleChange} value={formState.email} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="password">Password:</Form.Label>
                            <Form.Control type="password" placeholder="Your password" name="password" onChange={handleChange} value={formState.password} />
                        </Form.Group>

                        <Button type="submit" variant="success">Submit</Button>
                    </Form>
                </>
            )}
        </div>
    );
}

export default Login;