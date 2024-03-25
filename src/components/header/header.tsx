"use client";
import React from "react";
import Link from "next/link";
import { MenuToggle, useDimensions } from "./header-mobile";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Header = (props: any) => {
  const { toggleOpen, isOpen, containerRef } = props;
  const { height } = useDimensions(containerRef);
  const router = useRouter();
  const dir = router.locale === "he" || router.locale === "ar" ? "rtl" : "ltr";

  return (
    <>
      {!isOpen && (
        <div
          className={`sticky block inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200 md:hidden`}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <nav className="  block  md:hidden sticky top-0  w-full h-[47px]  flex-wrap items-center justify-between bg-[#cfcfcf] py-2 shadow-dark-mild  lg:py-4">
            <div className="flex w-full flex-wrap items-center justify-between px-3">
              <div className="ms-2">
                <a className="text-xl text-black dark:text-white" href="#">
                  <motion.nav
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    custom={height}
                    className={`md:hidden ${
                      isOpen ? "" : "pointer-events-none"
                    }`}
                    ref={containerRef}>
                    <MenuToggle toggle={toggleOpen} ltr={dir === "ltr"} />
                  </motion.nav>
                </a>
              </div>
            </div>
          </nav>
          <div className="bg-[#cfcfcf]   px-10 flex items-center	">
            <Link href="/" className=" block  md:hidden ">
              {/* <Image
                src={logo}
                alt="Cultural Events Logo"
                width={128}
                height={32}
                layout="fixed"
                // className="pt-5"
              /> */}
              LOGO
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
