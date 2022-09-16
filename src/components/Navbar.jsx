// importar el componente Link de la libreria react-router-dom
import { Link } from "react-router-dom";

import contacto from "../assets/img/notebook.png";
import home from "../assets/img/bakery.png";
import cupcake from "../assets/img/cupcake.png";

const BarraNav = () => {
  return (
    <>
      <nav className="barranav">
        <div className="links">
          <div className="iconos">
            <img src={home} alt="Home" />
          </div>

          <Link to="/" className="text-white ms-3 text-decoration-none">
            Home
          </Link>
          <div className="iconos">
            <img src={contacto} alt="Contacto" />
          </div>
          <Link to="/contacto" className="text-white ms-3 text-decoration-none">
            Contacto
          </Link>
        </div>

        <div className="right-icon">
          <h5>Happy Cake</h5>
          <div className="brand">
            <img src={cupcake} alt="Home" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default BarraNav;
