'use client'

import {useState} from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import {AiOutlineMenu} from "react-icons/ai"
import MobileSidebar from "./MobileSidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {

  const pathName = usePathname();

  const navMenuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Live",
      path: "/live",
    },
    {
      name: "Shows",
      path: "/shows"
    },
    {
      name: "Latest",
      path: "/latest"
    }
  
  ]



  return (
    <div className="shadow-md fixed w-screen bg-white z-50 px-5">
      <div className="flex mx-auto justify-between  items-center align-middle ">
        <div>
          <Image src="/images/logo.png" width={80} height={30} alt="alt" />
        </div>
        <div className="lg:hidden block ">
          <MobileSidebar Links={navMenuItems} />
        </div>
        <div className="lg:flex hidden ">
          <ul className="flex gap-9">
            {navMenuItems.map((item, index) => (
              <li
                key={index}
                className="hover:text-[#4aaac2] active:text-[#4aaac2]"
              >
                <Link
                  className={`${
                    pathName === item.path ? "text-[#4aaac2]" : " "
                  }`}
                  href={item.path}
                >
                  {item.name}{" "}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="gap-4 lg:flex hidden ">
          <div className="border border-[#05C1EF] flex items-center px-2 rounded-full">
            <input
              type="text"
              placeholder="Explore"
              className="border-none focus:ring-0 rounded-full"
            />
            <button>
              <Search className="text-#05C1EF" size={20} />
            </button>
          </div>
          <div className="flex gap-2">
            <button className="bg-[#05C1EF]  px-5 text-white rounded-full cursor-pointer hover:bg-white hover:border border-[#05C1EF] hover:text-[#05C1EF]">
              Register
            </button>
            <button className="border border-[#05C1EF] text-[#05C1EF]  px-5 rounded-full cursor-pointer hover:bg-[#4aaac2] hover:text-white">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
