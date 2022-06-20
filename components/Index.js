import Link from "next/link";

import Categories from "./Categories";
import Presentation from "./Presentation";

const Index = () => {
  return (
    <>
      <section>
        <Categories />

        <div className="index__showcase">
          <div className="product text">
            <div className="big">
              <p className="product--name">ZX9 SPEAKER</p>
              <p>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link href="">
                <a className="product--details">See product</a>
              </Link>
            </div>
          </div>

          <div className="product text">
            <p className="product--name">ZX7 SPEAKER</p>
            <Link href="">
              <a className="product--details">See product</a>
            </Link>
          </div>

          <div className="products--split">
            <div className="product"></div>

            <div className="product text">
              <p className="product--name">YX1 EARPHONES</p>
              <Link href="">
                <a className="product--details">See product</a>
              </Link>
            </div>
          </div>
        </div>

        <Presentation />
      </section>
    </>
  );
};

export default Index;
