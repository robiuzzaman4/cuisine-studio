import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner';

const PrivetRoute = ({ children }) => {
    const { user, spinner } = useContext(AuthContext);
    const location = useLocation();
    

    if (spinner) {
        return <Spinner/>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivetRoute;