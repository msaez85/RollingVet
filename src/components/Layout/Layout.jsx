import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Wsp from "../Wsp/Wsp";

const Layout = ({ cerrarSesion, user, children }) => {
  return (
    <>
      <Header cerrarSesion={cerrarSesion} user={user} />
      {children}
      <Wsp/>
      <Footer />
    </>
  );
};

export default Layout;
