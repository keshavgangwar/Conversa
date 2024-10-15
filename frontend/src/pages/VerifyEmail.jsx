import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom"; // Make sure to import this
import { toast } from "react-hot-toast";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
    const { id, token } = useParams();
    const [loading, setLoading] = useState(false);
    const { isAuthenticated, checkAuth } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        checkAuth();
        if (isAuthenticated) navigate("/");
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`/api/user/${id}/verify/${token}`);
                
                toast.success(response.data.message);
            } catch (error) {
                setLoading(false);
                toast.error(error.response.data.message);
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
    }, [id, token]);

    return (
        <div className="bg-dark min-h-screen text-white flex justify-center items-center">
            {loading && (
                <div className="mb-10 flex flex-col items-center" role="status">
                    <svg 
                        aria-hidden="true" 
                        className="w-20 h-20 animate-spin fill-primarySecondary" 
                        viewBox="0 0 100 101" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591 22.3858 100.591 0 78.2051 0 50.5908 0 22.9765 22.3858 0.59082 50 0.59082 77.6142 0.59082 100 22.9765 100 50.5908Z" 
                            fill="currentColor" 
                        />
                        <path 
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.911 97.8624 35.911H97.8623C97.8623 35.911 35.911 35.911H97.8623C35.911 35.911 93.9676 39.0409Z" 
                            fill="currentFill" 
                        />
                    </svg>
                    <span className="my-4 text-lg">Loading...</span>
                </div>
            )}
            {!loading && (
                <span className="my-4 text-xl font-medium">Verification Complete!</span>
            )}
            {!loading && !isAuthenticated && (
                <Link 
                    to="/login" 
                    className="inline-flex items-center justify-center px-4 py-2 text-white bg-primary hover:bg-primaryDark"
                >
                    Login
                    <svg 
                        className="w-5 h-5 ml-2 -mr-1" 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            fillRule="evenodd" 
                            d="M10 9a1 1 0 100 2h6a1 1 0 100-2h-6zM5 9H3a1 1 0 000 2h2a1 1 0 000-2zm10-5a1 1 0 10-2 0v10a1 1 0 102 0V4zm-5 5a1 1 0 10-2 0v1a1 1 0 102 0V9z" 
                            clipRule="evenodd" 
                        />
                    </svg>
                </Link>
            )}
        </div>
    );
};

export default VerifyEmail;
