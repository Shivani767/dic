import "./style.css";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <header className="header">
      <div className="header__navigation">
        <ul>
          <li className="header__navigation__logo-box">
            <Link to="/">DIC</Link>
          </li>
          <li>Home</li>
          <li>Upload Details</li>
          <li>Patient Details</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="header__btn">
        <Link to="/contact">Contact Us</Link>
      </div>
    </header>
  );
};

export default Index;
