import Navbar from "@/components/Navbar";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
export default function checkout() {
  return (
    <div>
      <Navbar />
      {/*checkoutbanner*/}
      <section>
        <div className="relative">
          <Image
            src={"/Rectangle 1.png"}
            alt="shopbg"
            height={316}
            width={14440}
            className="bg-cover"
          />
          <div className="absolute lg:top-[120px] top-9 left-44 lg:left-[650px]">
            <Image
              src={"/Meubel House_Logos-05.png"}
              alt="logo"
              width={70}
              height={70}
              className="pb-4 ml-9 hidden"
            />
            <h1 className="font-bold pl-7 text-xl lg:pl-0 lg:text-5xl">
              CheckOut{" "}
            </h1>
            <div className="flex lg:mt-5 lg:text-xl">
              <Link href={"/"} className="font-bold">
                Home
              </Link>
              <ChevronRight />
              <p className="font-thin">Checkout</p>
            </div>
          </div>
        </div>
      </section>
      <main>
        <div className="flex justify-between mt-16">
          <div className="ml-44 mb-7 ">
            <h1 className="font-bold text-3xl ">Billing detailes</h1>
            <div className="mt-8 text-[#000000]">
              <form className="flex flex-col gap-4">
                <div className="flex gap-24 justify-center">
                  <div className="flex flex-col">
                    {" "}
                    <label className="font-medium text-lg">First Name</label>
                    <input
                      type="text"
                      className="border-2 mt-3 rounded-lg h-16 w-48"
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    {" "}
                    <label className="font-medium text-lg">Last Name</label>
                    <input
                      type="text"
                      className="border-2 mt-3 rounded-lg h-16 w-48"
                    ></input>
                  </div>
                </div>
                <label className="font-medium text-lg">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  className="border-2 mt-3 rounded-lg h-16 w-72"
                ></input>
                <label className="font-medium text-lg">Country / Region</label>
                <input
                  type="text"
                  className="border-2 mt-3 rounded-lg h-16 w-72"
                ></input>
                <label className="font-medium text-lg">Street address</label>
                <input
                  type="text"
                  className="border-2 mt-3 rounded-lg h-16 w-72"
                ></input>
                <label className="font-medium text-lg">Town / City</label>
                <input
                  type="text"
                  className="border-2 mt-3 rounded-lg h-16 w-72"
                ></input>
                <label className="font-medium text-lg">Province</label>
                <input
                  type="text"
                  className="border-2 mt-3 rounded-lg h-16 w-72"
                ></input>
                <label className="font-medium text-lg">ZIP code</label>
                <input
                  type="number"
                  className="border-2 mt-3 rounded-lg h-16 w-72"
                ></input>
                <label className="font-medium text-lg">Phone</label>
                <input
                  type="tel"
                  className="border-2 mt-3 rounded-lg h-16 w-72"
                ></input>
                <label className="font-medium text-lg">Email Address</label>
                <input
                  type="email"
                  className="border-2 mt-3 rounded-lg h-16 w-72"
                ></input>
                <input
                  type="text"
                  placeholder="Additional information"
                  className="border-2 mt-6 rounded-lg h-16 w-72 pl-5 "
                ></input>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
