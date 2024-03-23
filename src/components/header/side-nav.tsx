"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/newlogo.svg";
import logoText from "../../../public/logoText.svg";
import { SIDENAV_ITEMS } from "@/constants";
import { Icon } from "@iconify/react";
import { SideNavItem } from "@/type";
import { useRouter } from "next/router";
import { useLocale, useTranslations } from "next-intl";
import doubleLeft from "../../../public/doubleLeft.png";
import doubleright from "../../../public/doubleright.png";
import { Tooltip } from "react-tooltip";
const SideNav = () => {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations();
  const dir = router.locale === "he" || router.locale === "ar" ? "rtl" : "ltr";
  const [enableSideBarHover, setEnableSideBarHover] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem("enableSideBarHover");
      setEnableSideBarHover(value === "true");
    }
  }, []);

  const isLtr = dir === "ltr";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <div
      className={`rounded-md bg-white h-screen hidden md:flex overflow-scroll top-0 sticky 
      z-100 transition-width duration-300 ease-in-out w-12 ${
        enableSideBarHover ? "md:w-12 hover:w-60 bg-red" : "md:w-60"
      }`}>
      <div className="flex justify-between flex-col">
        <div className="flex flex-col space-y-6 w-full">
          {/* Logo Section */}
          <div className="flex flex-row space-y-6 w-full">
            <Link
              href="/"
              className="flex flex-row  items-center justify-center md:justify-start  h-12 w-full md:px-1.5">
              <Image
                src={logo}
                alt="Cultural Events Logo"
                width={128}
                height={32}
                layout="fixed"
                style={{ height: "54px", width: "42px" }}
              />
              <Image
                src={logoText}
                alt="Cultural Events Logo"
                layout="fixed"
                style={{ height: "42px", width: "74px" }}
              />
            </Link>
            {/* <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content={t("SWITCH_SIDEBAR_WIDTH")}
              src={
                isLtr
                  ? enableSideBarHover
                    ? doubleright
                    : doubleLeft
                  : enableSideBarHover
                  ? doubleLeft
                  : doubleright
              }
              alt="Cultural Events Logo"
              layout="fixed"
              style={{ height: "25px", width: "35px" }}
              onClick={() => {
                localStorage.setItem(
                  "enableSideBarHover",
                  `${!enableSideBarHover}`
                );
                setEnableSideBarHover((prev) => !prev);
              }}
            /> */}
          </div>

          {/* Menu Items Section */}
          <div className="flex flex-col space-y-2 md:px-1.5 ">
            {SIDENAV_ITEMS.map((item, idx) => (
              <MenuItem key={idx} item={item} />
            ))}
          </div>
        </div>
        <div className="flex justify-center flex-col">
          {<div>{" SIGN OUT "}</div>}
          {/* Language Selector Section */}
          <div
            className="flex flex-row p-4 gap-3 mt-0 m-0"
            style={{ marginTop: "0px !important" }}>
            <Icon icon="heroicons:language-solid" width="24" height="24" />
            <select
              value={locale}
              onChange={handleChange}
              style={{ margin: "0px" }}>
              <option value="he">🇮🇱</option>
              <option value="en">🇺🇸</option>
              <option value="ar">🇸🇦</option>
            </select>
            <label
              className="inline-flex items-center cursor-pointer"
              data-tooltip-id="my-tooltip"
              data-tooltip-content={t("SET_SIDEBAR_WIDTH")}>
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={!enableSideBarHover}
                onChange={() => {
                  localStorage.setItem(
                    "enableSideBarHover",
                    `${!enableSideBarHover}`
                  );
                  setEnableSideBarHover((prev) => !prev);
                }}
              />
              <div
                className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4
                 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 
                 
                 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
                  peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
                  after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
                  after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
            </label>
            <Tooltip id="my-tooltip" place="bottom-end" />
          </div>
        </div>
      </div>
    </div>
  );
};

// MenuItem component
const MenuItem: React.FC<{ item: SideNavItem }> = ({ item }) => {
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
            }`}>
            <div className="flex flex-row gap-4 items-center" id="1">
              {item.icon}
              <span className="font-semibold text-xl  flex">{item.title}</span>
            </div>
            <div className={` flex${subMenuOpen ? "rotate-180" : ""} flex`}>
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </div>
          </button>
          {subMenuOpen && (
            <div className="my-2 ml-12 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, idx) => (
                <Link
                  key={idx}
                  href={subItem.path}
                  className={`${subItem.path === pathname ? "font-bold" : ""}`}>
                  <span>{subItem.title}</span>
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row gap-4 items-center p-2 rounded-lg hover:bg-zinc-100 ${
            item.path === pathname ? "bg-zinc-100" : ""
          }`}>
          {item.icon}
          <span className="font-semibold text-xl flex">{item.title}</span>
        </Link>
      )}
    </div>
  );
};

export default SideNav;
