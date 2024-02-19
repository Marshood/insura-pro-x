"use client";

import React, { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/newlogo.svg";
import logoText from "../../../public/logoText.svg";
import { SIDENAV_ITEMS } from "@/constants";
import { Icon } from "@iconify/react";
import { SideNavItem } from "@/type";
import { useRouter } from "next/router";
import { useLocale } from "next-intl";
const SideNav = () => {
  const locale = useLocale();

  const router = useRouter();

  const handleChange = (e: any) => {
    const newLocale = e.target.value;

    router.push(router.pathname, router.asPath, { locale: newLocale });
  };
  return (
    <div
      className="rounded-md bg-white h-screen hidden md:flex overflow-scroll top-0 sticky 
      z-100 transition-width duration-300 ease-in-out w-12 md:w-12 hover:w-60"
      style={{
        boxShadow: "0px 5px 10px rgba(21, 22, 26, 0.15)",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div>
        <div className="flex flex-col space-y-6 w-full ">
          <Link
            href="/"
            className="flex flex-row  items-center justify-center md:justify-start  h-12 w-full md:px-1.5"  
          >
            <Image
              src={logo}
              alt="Cultural Events Logo"
              width={128}
              height={32}
              layout="fixed"
              style={{
                height: "54px",
                width: "42px",
              }}
            />

            <Image
              src={logoText}
              alt="Cultural Events Logo"
              layout="fixed"
              style={{
                height: "42px",
                width: "74px",
              }}
            />
          </Link>

          <div
            className="flex flex-col space-y-2  md:px-1.5 " 
          >
            {SIDENAV_ITEMS.map((item, idx) => {
              return <MenuItem key={idx} item={item} />;
            })}
          </div>

          <select value={locale} onChange={handleChange}>
            <option value="en">English</option>
            <option value="ar">عربي</option>
            <option value="he">עברית</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SideNav;

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const handleMouseLeave = () => {
    setSubMenuOpen(false);
  };
  return (
    <div className="" onMouseLeave={handleMouseLeave}>
      {item.submenu ? (
        <>
          <button
   
            onClick={toggleSubMenu}
            className={`flex gap-4 flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${
              pathname.includes(item.path) ? "bg-zinc-100" : ""
            }`}
          >
            <div className="flex flex-row gap-4 items-center" id="1">
              {item.icon}
              <span className="font-semibold text-xl  flex">{item.title}</span>
            </div>

            <div
              className={` flex${subMenuOpen ? "rotate-180" : ""} flex`}
           
            >
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </div>
          </button>

          {subMenuOpen && (
            <div className="my-2 ml-12 flex flex-col space-y-4" >
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname ? "font-bold" : ""
                    }`}
                  >
                    <span>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
        
          className={`flex flex-row gap-4 items-center p-2 rounded-lg hover:bg-zinc-100 ${
            item.path === pathname ? "bg-zinc-100" : ""
          }`}
        >
          {item.icon}
          <span className="font-semibold text-xl flex">{item.title}</span>
        </Link>
      )}
    </div>
  );
};
