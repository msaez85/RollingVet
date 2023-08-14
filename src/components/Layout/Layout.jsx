import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ cerrarSesion, user, children }) => {
  return (
    <>
      <Header cerrarSesion={cerrarSesion} user={user} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
