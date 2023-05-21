import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import {useEffect} from "react";

const useTokenValidation = () => {
    const router = useRouter();
    const token = Cookies.get('token');

    useEffect(() => {
        // Redirect to /login if token is not present
        if (!token) {
            router.replace('/login');
        }
    }, [token, router]);
};

export default useTokenValidation;
