"use client";
import React from "react";
import Image from "next/image";
import { Search, Heart, ShoppingCart, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import PersonAlert from "@mui/icons-material/PersonSearch";
import Link from "next/link";
export default function navbar() {
  return (
    <div className="flex justify-between items-center p-8">
      <div className="flex items-center ml-0 md:ml-7 ">
        <Image
          src={"/Meubel House_Logos-05.png"}
          alt="logo"
          width={50}
          height={20}
        />{" "}
        <h1 className="font-bold font-200 text-2xl">Furniro</h1>
      </div>
      <div className="justify-center gap-12 font-bold hidden md:flex">
        <Link href={"/"}>Home</Link>
        <Link href={"/navshop"}>Shop</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      <div className="gap-5 hidden mr-9 md:flex ">
        <PersonAlert />
        <Search />
        <Heart />
        <ShoppingCart />
      </div>
      <div className="block lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-3 ">
              <h1 className="font-extrabold font-400 flex justify-center items-center">
                WEB PAGE
              </h1>
              <a className="font-semibold">Home</a>
              <Link className="font-semibold" href={"/navshop"}>
                Shop
              </Link>
              <a className="font-semibold">Blog</a>
              <a className="font-semibold">Contact</a>
              <hr className="text-gray-600"></hr>
              <div className="flex flex-col gap-3 ">
                <h1 className="font-extrabold font-400 flex justify-center items-center">
                  fav item
                </h1>
                <PersonAlert />
                <Search />
                <Heart />
                <ShoppingCart />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
