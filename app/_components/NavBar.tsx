import React from "react";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Home, Mail, Phone } from "lucide-react";

const NavBar = () => {
  return (
    <div className="w-full flex flex-row items-center justify-between px-3 h-[80px] bg-white">
      <div className=" flex flex-row items-center">
        <Image
          src={"/images/PSILogo.png"}
          alt="logo"
          className=" h-[80px]"
          width={100}
          height={80}
        />
        <p className="hidden sm:block text-base sm:text-xl text-[#576983] uppercase font-bold">
          Prakriti Shots Industries
        </p>
      </div>
      <div>
        <HoverCard>
          <HoverCardTrigger>
            <Button className=" bg-[#576983] text-xs">About US</Button>
          </HoverCardTrigger>
          <HoverCardContent className=" flex flex-col gap-3">
            <div className=" flex flex-row items-center gap-x-2">
              <Home />
              <p className=" text-xs">
                KH No. 451, Nandgram, Sihani Road, Ghaziabad-201003
              </p>
            </div>
            <div className=" flex flex-row items-center gap-x-2">
              <Phone size={"16px"} />
              <p className=" text-xs">9650787136</p>
            </div>
            <div className=" flex flex-row items-center gap-x-2">
              <Mail size={"16px"} />
              <p className=" text-xs">prakritishotindustries@gmail.com</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
};

export default NavBar;
