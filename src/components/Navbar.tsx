"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div  className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50  p-4 md:top-10", className)} >
        <Menu setActive={setActive} >
            <MenuItem setActive={setActive} active={active} item="Home">
                {/* <HoveredLink href="/">Home</HoveredLink> */}
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Our Menu">
            <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/instruments/drums">Drums</HoveredLink>
            <HoveredLink href="/instruments/guitar">Guitar</HoveredLink>
            <HoveredLink href="/instruments/piano">Piano</HoveredLink>
            <HoveredLink href="/instruments/violin">Violin</HoveredLink>
            </div>
               
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Contact Us">
                <HoveredLink href="/contact">Contact Us</HoveredLink>
            </MenuItem>
        </Menu>
    </div>
  )
}

export default Navbar