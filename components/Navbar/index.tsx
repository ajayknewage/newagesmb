import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const Navbar = () => {
  return (
    <div className={`flex justify-between mt-5 px-16 ${inter.className}`}>
      <Image src="/assets/images/logo.png" width={180} height={54} alt="logo" />
      <div className="items-center flex">
        {" "}
        <ul className="flex gap-14 nav">
          <li>
            <a href="#" className="link-item active">
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
      <div className="flex items-center">
        <button className="theme-color text-white px-7 py-2 rounded-full flex text-center text-sm">
          Connect
        </button>
      </div>
    </div>
  );
};

export default Navbar;
