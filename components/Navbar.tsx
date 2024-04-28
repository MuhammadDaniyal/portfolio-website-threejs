'use client'
import React, { useState, useEffect } from "react";
import { styles } from "@/styles";
import { logo, menu, close } from "@/assets";
import { navLinks } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center fixed top-0 z-20 bg-primary`}
    >
      <div className=" w-full flex justify-between items-center mx-auto max-w-7xl">
        <Link
          href={"/"}
          className=" flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        ></Link>
      </div>
    </nav>
  );
};

export default Navbar;
