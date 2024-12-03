"use client"; // Mark this file as a client-side component

import dynamic from "next/dynamic";

// Dynamically import the Header component with ssr: false to prevent SSR on it
const Header = dynamic(() => import("./Header"), { ssr: false });

export default Header;
