"use client";

import React from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import logo from "../../../public/logo3.svg";
import Image from "next/image";
import { MenuToggle, useDimensions } from "./header-mobile";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Header = (props: any) => {
  const { toggleOpen, isOpen, containerRef } = props;
  const scrolled = useScroll();
  const selectedLayout = usePathname();
  const { height } = useDimensions(containerRef);
  const router = useRouter();
  const dir = router.locale === "he" || router.locale === "ar" ? "rtl" : "ltr";
  return (
    <>
      <div
        className={cn(
          `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`,
          {
            "border-b border-gray-200 bg-white/75 backdrop-blur-lg": scrolled,
            "border-b border-gray-200 bg-white": selectedLayout,
          }
        )}
        style={{
          padding: "0px 0px 4px 0px",
          boxShadow: "0px 2px 4px rgba(21, 22, 26, 0.15)",
        }}
      >
        <div
          className="flex h-[47px] items-center justify-between px-4"
          id="Marshood01"
        >
          <div className="flex items-center space-x-4" id="Marshood11">
            <Link
              href="/"
              className="flex flex-row space-x-3 items-center justify-center md:hidden"
            >
              {/* <span className="h-7 w-7 bg-zinc-300 rounded-lg" /> */}
              {/* <div className="font-bold text-xl flex ">Logo</div> */}
              <Image
                src={logo}
                alt="Cultural Events Logo"
                width={128}
                height={32}
                layout="fixed"
                className="pt-5"
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="h-8 w-8 rounded-full bg-zinc-300 flex items-center justify-center text-center">
              <div className="font-semibold text-sm">HQ</div>
            </div>
          </div>
        </div>
      </div>
      {!isOpen ? (
        <div
          id=" Marshood2"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {" "}
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            className={`  inset-0 z-50 w-full md:hidden ${
              isOpen ? "" : "pointer-events-none"
            }`}
            ref={containerRef}
          >
            <MenuToggle toggle={toggleOpen} ltr={dir === "ltr"} />{" "}
          </motion.nav>
        </div>
      ) : null}
    </>
  );
};

export default Header;
