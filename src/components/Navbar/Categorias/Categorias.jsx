export const Categorias = () => {
  return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle"href="#"role="button"data-bs-toggle="dropdown"aria-expanded="false">
          Qué encontrarás?
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Calderos</a></li>
          <li><a className="dropdown-item" href="#">Grimorios</a></li>
          <li><a className="dropdown-item" href="#">Objetos</a></li>
        </ul>
      </li>    
  );
};


