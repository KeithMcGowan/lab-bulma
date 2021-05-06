import React from "react";
import CoolButton from "../coolButton/CoolButton";
import "bulma/css/bulma.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <div
            className="navbar-burger"
            data-target="navbarExampleTransparentExample"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a
              className="navbar-item"
              href="https://animation-station.herokuapp.com/"
            >
              Home
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  {/* <a
                    className="bd-tw-button button"
                    data-social-network="Twitter"
                    data-social-action="tweet"
                    data-social-target="https://bulma.io"
                    target="_blank"
                    href="https://animation-station.herokuapp.com/login"
                  >
                    <span>Login</span>
                  </a> */}
                  <CoolButton className="is-info">Login</CoolButton>
                </p>
                <p className="control">
                  {/* <a
                    className="button is-primary"
                    href="https://animation-station.herokuapp.com/signup"
                  >
                    <span>Signup</span>
                  </a> */}
                  <CoolButton isPrimary>Signup</CoolButton>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
