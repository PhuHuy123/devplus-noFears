import "./Header.scss";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <div className="menu-area menu-sticky">
      <div className="container">
        <div className="row y-middle">
          <div className="col-lg-2">
            <div className="logo-cat-wrap">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <nav className="navi main-nav">
            <ul>
              <li>
                <a href="https://stunited.vn/" aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="https://stunited.vn/" aria-current="page">
                  Who we do
                </a>
              </li>
              <li>
                <a href="https://stunited.vn/" aria-current="page">
                  Who we are
                </a>
              </li>
              <li>
                <a href="https://stunited.vn/" aria-current="page">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="https://stunited.vn/" aria-current="page">
                  Join us
                </a>
              </li>
              <li>
                <a href="https://stunited.vn/" aria-current="page">
                  Let's talk
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
