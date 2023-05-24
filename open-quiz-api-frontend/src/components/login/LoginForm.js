import { useState } from "react";
import { useRouter } from "next/router";
import { Card, Form, Button, Alert } from "react-bootstrap";
import Cookies from "js-cookie";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:8000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok && !data.error) {
                const { token } = data;
                // Store the token in a cookie
                Cookies.set("token", token, { expires: 7, path: "/" });

                // Redirect to the dashboard page
                await router.push("/admin/dashboard");
            } else {
                setError(data.error);
            }
        } catch (error) {
            // Handle network or server errors

        }
    };

    return (
        <Card style={{ width: "50rem" }}>
            <Card.Body>
                <Card.Title>Login</Card.Title>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formPassword" className="mt-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-3">
                        Login
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default LoginForm;
