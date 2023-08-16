import { Montserrat, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import getDestinations from "@/data/destinations";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const Home = () => {
  return (
    <main className={`${inter.className}`}>
      <Navbar />
      <section className="px-16 mt-5">
        <div
          className="relative overflow-hidden rounded-3xl"
          style={{
            height: "480px",
          }}
        >
          <img
            src={"/assets/images/seeshore.png"}
            alt="seashore"
            className="block mr-auto absolute"
            style={{
              objectFit: "cover",
              height: "500px",
              width: "2500px",
            }}
          />
          <div className="absolute flex flex-col h-full w-full items-center justify-center">
            <h1
              className={`text-5xl uppercase h-min text-white ${montserrat.className}`}
            >
              Travel to explore
            </h1>
            <p className={`text-white w-4/12 text-center mt-5 font-normal`}>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut Labore Pretium Nibh Ipsum. Risus Sed
              Vulputate Odio Ut
            </p>
            <div className="mt-10 bg-white flex px-4 py-3 rounded-lg gap-5">
              <div className="flex flex-col">
                <span className="font-medium text-base">
                  Where You Want to go
                </span>
                <span className="text-sm opacity-70 flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="15"
                    height="15"
                    x="0"
                    y="0"
                    viewBox="0 0 48 48"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="m40.9 39.485-7.813-7.812a14.878 14.878 0 0 0 3.72-9.865c0-4.007-1.56-7.774-4.393-10.607s-6.6-4.393-10.606-4.393S14.034 8.368 11.2 11.2s-4.393 6.6-4.393 10.607 1.56 7.773 4.393 10.606 6.6 4.394 10.607 4.394c3.67 0 7.13-1.323 9.865-3.721l7.812 7.812a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414zM12.614 31c-2.455-2.456-3.807-5.72-3.807-9.192s1.352-6.737 3.807-9.193c2.456-2.455 5.72-3.807 9.193-3.807S28.544 10.16 31 12.615c2.455 2.456 3.808 5.72 3.808 9.193S33.455 28.544 31 31c-2.456 2.455-5.72 3.808-9.192 3.808S15.07 33.455 12.615 31z"
                        fill="#979797"
                        data-original="#000000"
                        opacity="1"
                      ></path>
                    </g>
                  </svg>
                  Search your location
                </span>
              </div>
              <span className="border-r-2"></span>
              <div className="flex flex-col">
                <span className="font-medium text-base">Check-In</span>
                <span className="text-sm opacity-70">Add date</span>
              </div>
              <span className="border-r-2"></span>
              <div className="flex flex-col">
                <span className="font-medium text-base">Check-Out</span>
                <span className="text-sm opacity-70">Add date</span>
              </div>
              <button className="theme-color text-white px-5 rounded-md ml-10">
                Explore Now
              </button>
            </div>
          </div>
        </div>

        <div className="grid tiles my-24 grid-cols-4 justify-center gap-20">
          <div className="flex flex-col item rounded-xl border border-solid p-5">
            <span className="icon px-5 py-2 rounded-xl w-max h-20 flex">
              <Image
                alt="covid"
                src="/assets/images/icons/Prices.svg"
                width={40}
                height={40}
              />
            </span>
            <span className={`text-lg font-semibold mt-3`}>
              Get Best Prices
            </span>
            <span className="text-base mt-4">
              Pay through our application and save thousands and get amazing
              rewards
            </span>
          </div>

          <div className="flex flex-col item rounded-xl border border-solid p-5">
            <span className="icon px-5 py-2 rounded-xl w-max h-20 flex">
              <Image
                alt="covid"
                src="/assets/images/icons/Covid.svg"
                width={40}
                height={40}
              />
            </span>
            <span className={`text-lg font-semibold mt-3`}>Covid Safe</span>
            <span className="text-base mt-4">
              We have all the curated hotels that have all the precaution for a
              corvid safe environment
            </span>
          </div>

          <div className="flex flex-col item rounded-xl border border-solid p-5">
            <span className="icon px-5 py-2 rounded-xl w-max h-20 flex">
              <Image
                alt="covid"
                src="/assets/images/icons/Payment.svg"
                width={40}
                height={40}
              />
            </span>
            <span className={`text-lg font-semibold mt-3`}>
              Flexible Payment
            </span>
            <span className="text-base mt-4">
              Enjoy the flexible payment through our app and get rewards on
              every payment
            </span>
          </div>

          <div className="flex flex-col item rounded-xl border border-solid p-5">
            <span className="icon px-5 py-2 rounded-xl w-max h-20 flex">
              <Image
                alt="covid"
                src="/assets/images/icons/Nearby.svg"
                width={40}
                height={40}
              />
            </span>
            <span className={`text-lg font-semibold mt-3`}>
              Find The Best Near You
            </span>
            <span className="text-base mt-4">
              Find the best hotels and places to visit near you in a single
              click
            </span>
          </div>
        </div>
      </section>

      <section className="destinations px-16 pb-20 flex flex-col items-center">
        <h1 className="text-4xl pt-20 pb-14 font-bold">
          Recommended Destination
        </h1>
        <div className="pb-10 border-b-1 border-solid">
          <ul className="flex font-semibold text-lg gap-14 tabs">
            <li className="p-3 active">The Weekend Break</li>
            <li className="p-3">The Package Holiday</li>
            <li className="p-3">The Group Tour</li>
            <li className="p-3">Long Term Slow Travel</li>
          </ul>
        </div>

        <div className="grid grid-cols-3 w-full places gap-x-10 gap-y-20 relative">
          {getDestinations().map((item, key) => (
            <div className="flex flex-col z-20" key={key}>
              <img
                src={item.image}
                width={"100%"}
                height={0}
                alt={item.title}
              />
              <div className="flex flex-col m-3">
                {" "}
                <h2 className="font-semibold text-3xl">{item.title}</h2>
                <p>{item.description}</p>
                <div className="flex item mt-10 flex-col">
                  <div className="flex justify-between w-full">
                    <div className="flex gap-2">
                      <span className="facility flex">
                        <Image
                          src={"/assets/images/icons/hotel.svg"}
                          width={12}
                          height={12}
                          alt="hotel"
                        />
                      </span>
                      <span className="facility flex">
                        <Image
                          src={"/assets/images/icons/restaurent.svg"}
                          width={12}
                          height={12}
                          alt="hotel"
                        />
                      </span>
                      <span className="facility flex">
                        <Image
                          src={"/assets/images/icons/flight.svg"}
                          width={12}
                          height={12}
                          alt="hotel"
                        />
                      </span>
                    </div>
                    <span className="font-semibold text-2xl">{item.price}</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-base">{item.km}</span>

                    <span className="text-base">{item.trip}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute -top-10 -left-12 gap-3 flex flex-wrap w-24">
            {[...Array(25)].map((item, index) => (
              <span
                key={index}
                className="h-2 bg-black w-2 flex rounded opacity-50"
                style={{
                  background: "#A4CAFA",
                }}
              ></span>
            ))}
          </div>

          <div className="absolute -right-16 bottom-48 gap-3 flex flex-wrap w-24">
            {[...Array(25)].map((item, index) => (
              <span
                key={index}
                className="h-2 bg-black w-2 flex rounded opacity-50"
                style={{
                  background: "#A4CAFA",
                }}
              ></span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-16 pb-20 flex flex-col  items-center">
        <h1 className="text-4xl pt-20 pb-14 font-bold">Blogs</h1>
        <div className="grid col-span-2 grid-flow-col">
          <div className="relative flex">
            <Image
              src={"/assets/images/Paris.png"}
              alt="mount"
              width={730}
              height={10}
            />
            <div className="absolute flex flex-col h-full w-full  text-white items-center justify-center px-30 text-center">
              <h1 className={`text-4xl h-min  ${montserrat.className} flex `}>
                The Ultimate Guide to Climbing Mount Kilimanjaro
              </h1>
            </div>
          </div>
          <div className="grid">
            <div className="relative flex">
              <Image
                src={"/assets/images/plane.png"}
                alt="mount"
                width={700}
                height={10}
              />
              <div className="absolute flex flex-col h-full w-full  text-white items-center justify-center px-40 text-center">
                <h1 className={`text-3xl h-min  ${montserrat.className} flex `}>
                  12 Things I’d Tell Any New Traveler
                </h1>
              </div>
            </div>
            <div className="relative flex">
              <Image
                src={"/assets/images/girl.png"}
                alt="mount"
                width={700}
                height={10}
              />
              <div className="absolute flex flex-col h-full w-full  text-white items-center justify-center px-36 text-center">
                <h1 className={`text-3xl h-min  ${montserrat.className} flex `}>
                  The Ultimate Packing List for Female Travelers
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-16 flex flex-col items-center">
        <h1 className="text-4xl pt-20 pb-14 font-bold">Happy Customers</h1>
        <div className="grid col-span-2 grid-flow-col justify-center gap-20">
          {[0, 2].map((i) => (
            <div className="rounded-xl flex gap-3 shadow-2xl p-5" key={i}>
              <span>
                {" "}
                <img
                  src={"/assets/images/quote.png"}
                  style={{
                    width: "100px",
                    height: "auto",
                  }}
                  alt="quote"
                />
              </span>
              <div className="flex flex-col">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ultricies mi eget mauris pharetra. Amet risus nullam eget
                  felis eget nunc lobortis. Purus in massa tempor nec.
                </p>
                <div className="flex gap-5 mt-10">
                  <Image
                    src={"/assets/images/avatar.jpg"}
                    width={50}
                    height={50}
                    alt=""
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold">Shalini Singh</span>
                    <span className="text-lg opacity-70">
                      Project Manger flyhigh
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
