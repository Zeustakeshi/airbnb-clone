"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LogoProps {
    size?: "nomal";
}
const Logo: React.FC<LogoProps> = ({ size }) => {
    return (
        <Link href="/" className="inline-block py-3">
            <Image
                src="/logo.png"
                height={100}
                width={100}
                className="hidden md:inline-block cursor-pointer"
                alt="logo"
            ></Image>
        </Link>
    );
};

export default Logo;
