import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import PageHeader from "../../components/PageHeader";
import Categories from "../../components/Categories";
import Presentation from "../../components/Presentation";

import imgXX992 from "../../public/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import imgXX99 from "../../public/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import imgXX59 from "../../public/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";

export default function Headphones() {
  return (
    <>
      <Head>
        <title>Headphones – audiophile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader />

      <section>
        <div className="product-showcase">
          <div className="product-showcase__product">
            <div>
              <Image src={imgXX992}></Image>
            </div>

            <div className="product-showcase__product--text">
              <p className="text__new">NEW PRODUCT</p>
              <p className="text__title">XX99 Mark II Headphones</p>
              <p className="text__description">
                The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience by
                reproducing the balanced depth and precision of studio-quality
                sound.
              </p>

              <Link href="">
                <a>See product</a>
              </Link>
            </div>
          </div>

          <div className="product-showcase__product">
            <div className="product-showcase__product--text">
              <p className="text__title">XX99 Mark I Headphones</p>
              <p className="text__description">
                As the gold standard for headphones, the classic XX99 Mark I
                offers detailed and accurate audio reproduction for audiophiles,
                mixing engineers, and music aficionados alike in studios and on
                the go.
              </p>

              <Link href="">
                <a>See product</a>
              </Link>
            </div>

            <div>
              <Image src={imgXX99}></Image>
            </div>
          </div>

          <div className="product-showcase__product">
            <div>
              <Image src={imgXX59}></Image>
            </div>

            <div className="product-showcase__product--text">
              <p className="text__title">XX59 Headphones</p>
              <p className="text__description">
                Enjoy your audio almost anywhere and customize it to your
                specific tastes with the XX59 headphones. The stylish yet
                durable versatile wireless headset is a brilliant companion at
                home or on the move.
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
