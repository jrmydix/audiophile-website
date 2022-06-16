import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import logo from "./../public/assets/shared/desktop/logo.svg";
import cart from "./../public/assets/shared/desktop/icon-cart.svg";

const Navigation = () => {
  const router = useRouter();

  return (
    <>
      <header>
        <Image src={logo} alt="audiophile"></Image>
        <nav>
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
        <Image src={cart} alt="View cart"></Image>
      </header>
    </>
  );
};

export default Navigation;
