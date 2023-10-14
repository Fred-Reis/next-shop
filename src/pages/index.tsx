import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";

import { HomeContainer, Product } from "../styles/pages/home";

import shirt1 from "../assets/shirts/t-shirt-1.png";
import shirt2 from "../assets/shirts/t-shirt-2.png";
import shirt3 from "../assets/shirts/t-shirt-3.png";
import shirt4 from "../assets/shirts/t-shirt-4.png";

import "keen-slider/keen-slider.min.css";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slideChanged() {
      console.log("slide changed");
    },
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={shirt1} alt="" width={520} height={480} />
        <footer>
          <strong>t-shirt 1</strong>
          <span>U$$ 35.90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt2} alt="" width={520} height={480} />
        <footer>
          <strong>t-shirt 2</strong>
          <span>U$$ 25.90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt3} alt="" width={520} height={480} />
        <footer>
          <strong>t-shirt 3</strong>
          <span>U$$ 25.90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt4} alt="" width={520} height={480} />
        <footer>
          <strong>t-shirt 4</strong>
          <span>U$$ 25.90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
