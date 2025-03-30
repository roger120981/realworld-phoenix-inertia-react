import React, { ReactNode } from "react";
import { usePage, Link } from "@inertiajs/react";

import FlashMessage from "./FlashMessage";
import { CommonPageProps } from "@/types";
import { Cog, FilePlus } from "lucide-react";
import { PhoenixSocketProvider } from "@/lib/phoenixSocketContext";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}
const NavLink = (props: NavLinkProps) => {
  const className =
    window.location.pathname == props.href ? "nav-link active" : "nav-link";

  return (
    <Link className={className} href={props.href}>
      {props.children}
    </Link>
  );
};

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const page = usePage<CommonPageProps>();
  const flash = page.props.flash;
  const user = page.props.user;

  return (
    <PhoenixSocketProvider userId={user?.id}>
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
                      <FilePlus className="inline h-[1rem]" />
                      New Article
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink href={"/user"}>
                      <Cog className="inline h-[1rem]" />
                      Settings
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
    </PhoenixSocketProvider>
  );
}
