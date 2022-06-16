import Link from "next/link";
import Image from "next/image";

import logo from "./../public/assets/shared/desktop/logo.svg"

const Navigation = () => {
  return (
    <>
      <header>
        <Image src={logo}></Image>
        <div>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/headphones">
                <a>Headphones</a>
              </Link>
            </li>
            <li>
              <Link href="/speakers">
                <a>Speakers</a>
              </Link>
            </li>
            <li>
              <Link href="/earphones">
                <a>Earphones</a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navigation;
