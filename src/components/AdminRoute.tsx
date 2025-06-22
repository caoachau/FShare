import React from "react";
import { Navigate } from "react-router-dom";

interface AdminRouteProps {
    children: React.ReactNode;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
    // Replace this with your actual admin authentication logic
    const isAdmin = true; // Example: get from context or state

    if (!isAdmin) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};

export default AdminRoute;