import React, {useState} from "react"; //useState is a hook that allows us to manage state within a functional component
import { Link } from "react-router-dom"; //Link is a react router component that allows us to create links between routes
import {useMutation} from "@apollo/client"; //useMutation is a hook that allows us to execute mutations in our component
import {ADD_USER} from "../../../utils/mutations"; //ADD_USER is a mutation we will create in the front end
import {Form, Button} from "react-bootstrap"; //Form and Button are bootstrap components that will make it easier for us to create a form


//using signup code
function SignUpForm(props) {
    const [addUser] = useMutation(ADD_USER);
    const [formState, setFormState] = useState({
        username: "",
        email: "",
        password: ""
    });
    //

    const handleFormSubmit = async (event) => { //handleFormSubmit is an async function that will execute when the form is submitted
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
            <Link to="/login">← Go to Login</Link>
            <Link to ="/login">← Go to Login</Link>

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
        </div>
    );
}

export default SignUpForm; //exporting SignUpForm function