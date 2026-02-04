import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
});

const useAxiosSecure = () => {

    const {logOut} = useAuth();
    const navigate = useNavigate();

    useEffect(() =>{
        axiosSecure.interceptors.response.use( res => {
            return res;
        },
        error => {
            console.log('Response error:', error.response);
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                // Handle unauthorized or forbidden responses
                console.log('Unauthorized or Forbidden response - handling logout or redirection here.');
                // For example, you might want to log out the user or redirect to login page
                logOut()
                .then(() => {
                    console.log('User logged out due to unauthorized access.');
                    navigate('/login');
                })
                .catch(err => {
                    console.log('Error during logout:', err);
                });
            }
            return Promise.reject(error);

        }

        );

    } , [])


   return axiosSecure;
};

export default useAxiosSecure;