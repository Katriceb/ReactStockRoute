import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/About">
        <div>About</div>
      </Link>
      <Link to="/Stock">
        <div>Stock</div>
      </Link>
    </div>
  );
}

export default Nav;