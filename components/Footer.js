import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import logo from "./../public/assets/shared/desktop/logo.svg";
import logoFacebook from "./../public/assets/shared/desktop/icon-facebook.svg";
import logoTwitter from "./../public/assets/shared/desktop/icon-twitter.svg";
import logoInstagram from "./../public/assets/shared/desktop/icon-instagram.svg";

const Footer = () => {
  const router = useRouter();

  return (
    <>
      <footer>
        <div className="footer__logo">
          <Link href="/">
            <Image src={logo} alt="audiophile"></Image>
          </Link>
        </div>

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

        <p>
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </p>

        <div className="footer__bottom">
          <p className="footer__copyright">
            Copyright 2022. All Rights Reserved
          </p>

          <div className="footer__socials">
            <Link href="/">
              <Image src={logoFacebook} alt="Follow us on Facebook"></Image>
            </Link>

            <Link href="/">
              <Image src={logoTwitter} alt="Follow us on Twitter"></Image>
            </Link>

            <Link href="/">
              <Image src={logoInstagram} alt="Follow us on Instagram"></Image>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
