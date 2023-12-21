import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="w-full h-[80px] bg-white">
      <div className=" flex flex-row items-center">
        <Image
          src={"/images/PSILogo.png"}
          alt="logo"
          className=" h-[80px]"
          width={100}
          height={80}
        />
        <p className=" text-xl text-[#576983] uppercase font-bold">
          Prakriti Shots Industries
        </p>
      </div>
    </div>
  );
};

export default NavBar;
