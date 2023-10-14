import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";

import shirt1 from "../assets/shirts/t-shirt-1.png";
import shirt2 from "../assets/shirts/t-shirt-2.png";
import shirt3 from "../assets/shirts/t-shirt-3.png";
import shirt4 from "../assets/shirts/t-shirt-4.png";

export default function Home() {
  // <Image src={shirt2} alt="" width={520} height={480} />
  // <Image src={shirt3} alt="" width={520} height={480} />
  // <Image src={shirt4} alt="" width={520} height={480} />
  return (
    <HomeContainer>
      <Product>
        <Image src={shirt1} alt="" width={520} height={480} />
        <footer>
          <strong>t-shirt 1</strong>
          <span>U$$ 35.90</span>
        </footer>
      </Product>
      <Product>
        <Image src={shirt2} alt="" width={520} height={480} />
        <footer>
          <strong>t-shirt 2</strong>
          <span>U$$ 25.90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
