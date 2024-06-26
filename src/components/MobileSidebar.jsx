import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";


export default function MobileSidebar({Links}) {
 const pathName = usePathname();
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <AiOutlineMenu size={30} />
        </SheetTrigger>
        <SheetContent>
          <div className="space-y-4 pt-5">
            <div>
              <Image src="/images/logo.png" width={80} height={30} alt="alt" />
            </div>
            <div>
              <ul className="space-y-3">
                {Links.map((item, index) => (
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
            <div className="gap-6  ">
              <div className="border border-[#05C1EF] flex items-center justify-between px-2">
                <input
                  type="text"
                  placeholder="Explore"
                  className="border-none bg-transparent focus:ring-0"
                />
                <button>
                  <Search className="text-#05C1EF" />
                </button>
              </div>
              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href="/sign-up"
                  className="bg-[#05C1EF] text-center border border-[#05C1EF] px-4 rounded-full py-2 hover:bg-transparent text-white hover:text-[#05C1EF]"
                >
                  Register
                </Link>

                <Link
                  href="/sign-in"
                  className="border border-[#05C1EF] text-[#05C1EF] text-center  px-5 rounded-full cursor-pointer hover:bg-[#05C1EF] hover:text-white py-2"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
