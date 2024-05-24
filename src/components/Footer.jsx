import Image from "next/image";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="bg-tbhgreen py-5 text-white ">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 mx-auto h-auto pb-5 space-y-5 md:space-y-5 md:gap-4 w-[90%]  md:w-[70%]">
          <div className="  px-4 md:px-0 ">
            <Image src="/images/logo.png" width={100} height={30} alt="alt" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              dicta praesentium veritatis nisi ducimus quidem vel.
            </p>
            <div className="flex space-x-4 mt-5 text-2xl">
              <IoLogoFacebook className="hover:text-tbhblue cursor-pointer" />
              <FaXTwitter className="hover:text-tbhblue cursor-pointer" />
              <FaInstagram className="hover:text-tbhblue cursor-pointer" />
              <FaYoutube className="hover:text-tbhblue cursor-pointer" />
            </div>
          </div>
          <div className="w-full md:w-auto px-4 md:px-0 ">
            <h1 className="text-xl font-bold text-white mb-3 pt-3 pb-3">
              Useful Links
            </h1>
            <div className="text-white space-y-3 flex flex-col">
              <Link href="/sign-up" className="hover:text-tbhblue ">
                Account
              </Link>
              <Link href="/sign-in" className="hover:text-tbhblue ">
                Contact Us
              </Link>
              <Link href="/about" className="hover:text-tbhblue ">
                Help Center
              </Link>
              <Link href="/cookies" className="hover:text-tbhblue ">
                Legal Notice
              </Link>
            </div>
          </div>
          <div className="w-full md:w-auto px-4 md:px-0 ">
            <h1 className="text-xl text-white mb-3 pt-3 pb-1">Other Links</h1>
            <div className="text-white space-y-3 flex-col flex ">
              <Link href="/sign-up" className="hover:text-tbhblue ">
                Register
              </Link>
              <Link href="/sign-in" className="hover:text-tbhblue ">
                Login
              </Link>
              <Link href="/about" className="hover:text-tbhblue ">
                About Company
              </Link>
              <Link href="/cookies" className="hover:text-tbhblue ">
                Cookies
              </Link>
            </div>
          </div>
          <div className="w-full  px-4 md:px-0 space-y-4 ">
            <h1 className="text-xl font-medium pt-3 pb-1">
              Subscribe to our Newsletter
            </h1>
            <p className="tracking-tight">
              Unlock exclusive updates, insider insights, and exciting news by
              subscribing to our newsletter.
            </p>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              <input
                type="email"
                placeholder="Enter your email here"
                required
                className="p-2 rounded bg-transparent"
              />
              <button className="bg-tbhblue p-2 text-white rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
