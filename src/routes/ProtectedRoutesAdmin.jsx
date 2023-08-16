import { Navigate } from "react-router-dom";

const ProtectedRoutesAdmin = ({ children, user }) => {
  if (user.rol === "ADMIN") {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoutesAdmin;
