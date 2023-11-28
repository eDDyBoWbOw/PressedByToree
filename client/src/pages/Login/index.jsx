import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import { Form, Button } from "react-bootstrap";
import './style.css'
 
//using signup code 
function Login(props) {
    const [addUser] = useMutation(ADD_USER);
    const [formState, setFormState] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                username: formState.username,
                email: formState.email,
                password: formState.password
            }
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    };

    const handleChannge = (event) => {  
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className="container my-1">

            <h2>Sign Up</h2>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group>
                    <Form.Label htmlFor="username">Username:</Form.Label>
                    <Form.Control type="text" placeholder="Your username" name="username" onChange={handleChannge} value={formState.username} />
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="email">Email:</Form.Label>
                    <Form.Control type="email" placeholder="Your email" name="email" onChange={handleChannge} value={formState.email} />
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="password">Password:</Form.Label>
                    <Form.Control type="password" placeholder="Your password" name="password" onChange={handleChannge} value={formState.password} />
                </Form.Group>

                <Button type="submit" variant="success">Submit</Button>
            </Form>

            {/* logout code */}
            <div className="container my-1">

                <h2>Sign In</h2>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor="username">Username:</Form.Label>
                        <Form.Control type="text" placeholder="Your username" name="username" onChange={handleChannge} value={formState.username} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="email">Email:</Form.Label>
                        <Form.Control type="email" placeholder="Your email" name="email" onChange={handleChannge} value={formState.email} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="password">Password:</Form.Label>
                        <Form.Control type="password" placeholder="Your password" name="password" onChange={handleChannge} value={formState.password} />
                    </Form.Group>

                    <Button type="submit" variant="success">Submit</Button>
                </Form>
        </div>

    </div>
    );
}

export default Login;