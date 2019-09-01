import React from "react";
import { NavLink } from "react-router-dom";
import authStore from "./stores/authStore";
import { observer } from "mobx-react";

// Logo
import logo from "./assets/theindex.svg";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <img src={logo} className="logo" alt="the index logo" />
      <section>
        <h4 className="menu-item active">
          <NavLink to="/authors">AUTHORS</NavLink>
        </h4>
        <h4 className="menu-item">
          <NavLink to="/books">BOOKS</NavLink>
        </h4>
        {!authStore.user ? (
          <>
            <h4 className="menu-item">
              <NavLink to="/signup">Sign Up</NavLink>
            </h4>
            <h4 className="menu-item">
              <NavLink to="/login">Log In</NavLink>
            </h4>
          </>
        ) : (
          <h4 className="menu-item">
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => authStore.logoutUser()}
            >
              Log Out {authStore.user.username}
            </button>
          </h4>
        )}
      </section>
    </div>
  );
};

export default observer(Sidebar);
