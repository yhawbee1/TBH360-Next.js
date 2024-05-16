'use client'

import {useState} from "react";
import Image from "next/image";
import { Search } from "lucide-react";

export default function Header() {

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

  const [mobileMenu, setMobileMenu] = useState(false);


  return (
    <div className="shadow-md fixed w-full bg-white ">
      <div className="flex mx-auto justify-between w-[1698px] items-center  align-middle ">
        <div>
          <Image src="/images/logo.png" width={80} height={30} alt="alt" />
        </div>
        <div>
          <ul className="flex gap-3">
            {navMenuItems.map((item, index) => (
              <li
                key={index}
                className="hover:text-[#4aaac2] active:text-[#4aaac2]"
              >
                <a href={item.path}>{item.name} </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="gap-4 flex ">
          <div className="border border-[#05C1EF] flex items-center px-2">
            <input type="text" placeholder="Explore" className="border-none focus:ring-0" />
            <button>
              <Search className="text-#05C1EF" />
            </button>
          </div>
          <button className="bg-[#05C1EF]  px-3 text-white rounded-full cursor-pointer hover:bg-[#4aaac2]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
