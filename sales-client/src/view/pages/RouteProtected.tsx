import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { AuthContextIn } from '../../Interface/AuthIn';

const ProtectedRoute: React.FC = () => {
    const {isAutenticate, loading} = useAuth() as AuthContextIn

    if(loading) return <h1>Cargando</h1>

    if(!isAutenticate && !loading) return <Navigate to={"/login"} replace/>


    return <Outlet/> 
};

export default ProtectedRoute;