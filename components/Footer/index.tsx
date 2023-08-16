import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const Footer = () => {
  return (
    <div
      className={`flex justify-between mt-40 mx-16 py-10 px-20  mb-20 rounded-xl ${inter.className}`}
      style={{
        background: "#E1E8F8",
      }}
    >
      <div className="">Copyright © 2020 Travelo. All rights reserved</div>
      <div className="items-center flex">
        {" "}
        <ul className="flex gap-14 nav">
          <li>
            <a href="#" className="link-item">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="link-item">
              About
            </a>
          </li>
          <li>
            <a href="#" className="link-item">
              Places
            </a>
          </li>
          <li>
            <a href="#" className="link-item">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="link-item">
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <Image
          src={"/assets/images/icons/facebook.svg"}
          width={30}
          height={30}
          alt="facebook"
        />
        <Image
          src={"/assets/images/icons/instagram.svg"}
          width={30}
          height={30}
          alt="instagram"
        />
        <Image
          src={"/assets/images/icons/linkedin.svg"}
          width={30}
          height={30}
          alt="linkedin"
        />
      </div>
    </div>
  );
};

export default Footer;
