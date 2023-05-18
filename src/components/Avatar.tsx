"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface AvatarProps {
    src: string;
    to?: string;
    size: 50 | 100 | number;
    className?: string;
    onClick?: () => void;
}

const Avatar: React.FC<AvatarProps> = ({
    src,
    to,
    className = "",
    size = 50,
    onClick = () => {},
}) => {
    const router = useRouter();
    const handleClick = () => {
        if (to) {
            router.replace(to);
        }
        onClick();
    };
    return (
        <div
            onClick={handleClick}
            style={{
                width: size,
                height: size,
            }}
            className={`relative md:w-[${size}px] md:h-[${size}px] !w-[${
                size * 0.8
            }px] !h-[${
                size * 0.8
            }px] rounded-full skeleton ${className} cursor-pointer`}
        >
            <img
                alt="avatar"
                className="w-full h-full rounded-full object-cover "
                src={src}
                width={size}
                height={size}
            ></img>
        </div>
    );
};

export default Avatar;
