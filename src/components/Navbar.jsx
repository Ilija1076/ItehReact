import { FaUserAstronaut } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  navbar-light bg-light bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
      <div className="container">
      <FaUserAstronaut style={{ color: 'purple' }} />
        <a className="navbar-brand" href="/">Universe</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/kontakt">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
