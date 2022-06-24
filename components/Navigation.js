import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

import burger from "./../public/assets/shared/tablet/icon-hamburger.svg";
import logo from "./../public/assets/shared/desktop/logo.svg";
import cart from "./../public/assets/shared/desktop/icon-cart.svg";

const Navigation = () => {
  const router = useRouter();
  const [isNavActive, setActive] = useState("false");
  const toggleNav = () => {
    setActive(!isNavActive);
  };

  return (
    <>
      <header>
        <div className="header__burger" onClick={toggleNav}>
          <Image src={burger} alt="Open navigation"></Image>
        </div>

        <Link href="/">
          <a>
            <Image src={logo} alt="audiophile"></Image>
          </a>
        </Link>

        <nav className={isNavActive ? null : "active"}>
          <ul>
            <li>
              <Link href="/">
                <a className={router.pathname == "/" ? "active" : ""}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/headphones">
                <a className={router.pathname == "/headphones" ? "active" : ""}>
                  Headphones
                </a>
              </Link>
            </li>
            <li>
              <Link href="/speakers">
                <a className={router.pathname == "/speakers" ? "active" : ""}>
                  Speakers
                </a>
              </Link>
            </li>
            <li>
              <Link href="/earphones">
                <a className={router.pathname == "/earphones" ? "active" : ""}>
                  Earphones
                </a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header__cart">
          <Image src={cart} alt="View cart"></Image>
        </div>
      </header>
    </>
  );
};

export default Navigation;
