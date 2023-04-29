import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Placeholder } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <Placeholder xs={12} size="lg" />
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;

/* 
1. check user is logged in or not 
2. if user is logged in, then allow them to visit the route
3. else redirect the user to the login page
4. setup the private router
5. handle loading
*/