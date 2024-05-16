import Image from 'next/image'
import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


export default function Footer() {
  return (
    <>
      <div className="bg-tbhgreen py-5  text-white">
        <div className="flex justify-evenly mt-24 h-auto  pb-5">
          <div className="w-[20%]">
            <Image src="/images/logo.png" width={100} height={30} alt="alt" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              dicta praesentium veritatis nisi ducimus quidem vel.
            </p>
            <div className="flex space-x-4 mt-5 text-2xl  ">
              <IoLogoFacebook className="hover:text-tbhblue cursor-pointer " />
              <FaXTwitter className="hover:text-tbhblue cursor-pointer" />
              <FaInstagram className="hover:text-tbhblue cursor-pointer" />
              <FaYoutube className="hover:text-tbhblue cursor-pointer" />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white mb-3 ">Useful Links</h1>
            <div className="text-white space-y-3">
              <p>Account</p>
              <p>Contact Us</p>
              <p>Help Center</p>
              <p>Legal Notice</p>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-medium text-white mb-3">Other Links</h1>
            <div className="text-white space-y-3">
              <p>Sign Up</p>
              <p>Login</p>
              <p>About Company</p>
              <p>Cookies</p>
            </div>
          </div>
          <div className="text-white w-[20%] space-y-4">
            <h1 className="text-xl font-medium">
              Subscribe to our News Letter
            </h1>
            <p className="tracking-tight text-wrap">
              Unlock exclusive updates, insider insights, and exciting news by
              subscribing to our newsletter.
            </p>
            <div>
              <input type="email" placeholder="Enter your email" />
              <button className="bg-tbhblue p-2 text-white">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
