import SignInForm  from "@/components/SignInForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const SignUp = () => {
  return (
    <>
      <div className="flex">
        <div className=" hidden md:flex h-screen w-[50%] bg-tbhgreen/80">
          <iframe
            className="video-background w-[100%]"
            src="https://www.youtube.com/embed/Hgg7M3kSqyE?autoplay=1&mute=1&loop=1&playlist=Hgg7M3kSqyE&controls=0&showinfo=0&modestbranding=1"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
        <div className="md:w-[50%] place-items-center flex p-[10%] bg-gray-200 h-screen dark:bg-[#020817]  ">
          <div className="space-y-5">
            <div>
              <Link href="/">
                <FaArrowLeft
                  className="bg-tbhgreen rounded-full p-3 mb-5 hover:bg-tbhblue dark:text-white text-white"
                  size={50}
                />
              </Link>
              <h1 className="dark:text-white text-tbhgreen text-4xl mb-8">
                Sign In
              </h1>
              <p className="">
                Over 10 million users connect with the THE TBH360 community, and
                their happy faces tell the story.
              </p>
            </div>
            <SignInForm />
            <div></div>

            <div className="space-y-4 justify-center items-center flex flex-col">
              <h1 className="dark:text-white text-black">or Sign in with</h1>
              <div className="flex gap-4  w-full">
                <Link
                  href="/"
                  className="bg-white text-black shadow-sm p-2 flex items-center gap-3 rounded-sm w-[50%] justify-center"
                >
                  <Image
                    src="/images/google.svg"
                    height={25}
                    width={25}
                    alt="google"
                  />
                  <span>Google</span>
                </Link>
                <Link
                  href="/"
                  className="bg-white text-black shadow-sm p-2 flex items-center gap-3 w-[50%] rounded-sm justify-center"
                >
                  <Image
                    src="/images/facebook.svg"
                    height={30}
                    width={30}
                    alt="facebook"
                  />
                  <span>Facebook</span>
                </Link>
              </div>
              <div>
                <Link
                  className="flex items-center gap-4 text-tbhgreen pt-8 cursor-pointer hover:text-tbhblue"
                  href="/sign-up"
                >
                  <h1 className="dark:text-white text-black ">
                    Create An Account
                  </h1>
                  <FaArrowRightLong className="dark:text-white text-black " />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
