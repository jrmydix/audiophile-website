import Image from "next/image";

import presentationImg from "../public/assets/shared/desktop/image-best-gear.jpg";

const Presentation = () => {
  return (
    <>
      <div className="presentation">
        <div className="left">
          <p>
            Bringing you the <span>best</span> audio gear
          </p>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>

        <div className="right">
          <Image src={presentationImg}></Image>
        </div>
      </div>
    </>
  );
};

export default Presentation;
