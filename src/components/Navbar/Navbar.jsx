import { CartWidget } from "../CartWidget/CartWidget";
import { Categorias } from "./Categorias/Categorias";
import { Secciones } from "./Secciones/Secciones";
import { Link } from "react-router-dom";
export const Navbar = ({ nombre }) => {
  return (
    <div className="navContainer">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <li className="nav-item">
            <Link className="nav-link" to={"/"}>
              <button className="brand">{nombre}</button>
            </Link>
          </li>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Secciones />
              <Categorias />
            </ul>
            <CartWidget cantCarrito={10} />
          </div>
        </div>
      </nav>
    </div>
  );
};
