import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__text">
          <p className="hero__text--new-product">New product</p>
          <h1>XX99 Mark II Headphones</h1>
          <p className="hero__text--description">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <Link href="">
            <a>See product</a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
