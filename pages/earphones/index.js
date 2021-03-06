import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import PageHeader from "../../components/PageHeader";
import Categories from "../../components/Categories";
import Presentation from "../../components/Presentation";

import imgYX1 from "../../public/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";

export default function Earphones() {
  return (
    <>
      <Head>
        <title>Earphones – audiophile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader />

      <section>
        <div className="product-showcase">
          <div className="product-showcase__product">
            <div>
              <Image src={imgYX1}></Image>
            </div>

            <div className="product-showcase__product--text">
              <p className="text__new">NEW PRODUCT</p>
              <p className="text__title">YX1 WIRELESS EARPHONES</p>
              <p className="text__description">
                Tailor your listening experience with bespoke dynamic drivers
                from the new YX1 Wireless Earphones. Enjoy incredible
                high-fidelity sound even in noisy environments with its active
                noise cancellation feature.
              </p>

              <Link href="">
                <a>See product</a>
              </Link>
            </div>
          </div>
        </div>

        <Categories />
        <Presentation />
      </section>
    </>
  );
}
