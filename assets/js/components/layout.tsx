import React from "react";
import { usePage, Link } from "@inertiajs/react";

import FlashMessage from "./flash_message";
import { CommonPageProps } from "@/types";

const NavLink = (props) => {
  const className =
    window.location.pathname == props.href ? "nav-link active" : "nav-link";

  return (
    <Link className={className} href={props.href}>
      {props.children}
    </Link>
  );
};

export default function Layout({ children }) {
  const page = usePage<CommonPageProps>();
  const flash = page.props.flash;
  const user = page.props.user;

  return (
    <>
      <header>
        <nav className="navbar navbar-light">
          <div className="container">
            <Link className="navbar-brand" href={"/"}>
              conduit
            </Link>
            <ul className="nav navbar-nav pull-xs-right">
              <li className="nav-item">
                <NavLink href={"/"}>Home</NavLink>
              </li>
              {user ? (
                <>
                  <li className="nav-item">
                    <NavLink href={"/articles/new"}>
                      <i className="ion-compose"></i>&nbsp;New Article
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink href={"/user"}>
                      <i className="ion-gear-a"></i>&nbsp;Settings
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink href={`/profile/${user.username}`}>
                      <img
                        className="user-pic"
                        src={user.image}
                        loading="lazy"
                      />
                      {user.username}
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink href={"/login"}>Sign in</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink href={"/register"}>Sign up</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <FlashMessage
          info={flash.info}
          success={flash.success}
          warning={flash.warning}
          error={flash.error}
        />
      </div>
      <main>{children}</main>
      <footer>
        <div className="container">
          <Link href="/" className="logo-font">
            conduit
          </Link>
          <span className="attribution">
            An interactive learning project from{" "}
            <Link href="https://thinkster.io">Thinkster</Link>. Code &amp;
            design licensed under MIT.
          </span>
        </div>
      </footer>
    </>
  );
}
