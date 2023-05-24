import {useRouter} from "next/router";
import {useEffect} from "react";
import Cookies from 'js-cookie';

const Logout = () => {
    const router = useRouter();
    const token = Cookies.get('token');

    useEffect(() => {
        const logout = async () => {
            try {
                // Make a GET request to the logout API with authorization header
                await fetch(`${process.env.BASE_URL}/api/logout`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                // Clear the token from cookies
                Cookies.remove('token');

                // Redirect to login page
                await router.replace('/login');
            } catch (error) {
                console.error('Logout failed', error);
                // Handle error if necessary
            }
        };

        if (token) {
            logout();
        } else {
            // If token is not present, redirect to login page directly
            router.replace('/login');
        }
    }, [router, token]);

    return null;
};


export default Logout;