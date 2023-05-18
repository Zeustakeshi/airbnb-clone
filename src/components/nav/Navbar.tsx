import React from "react";
import Search from "./Search";
import UserMenu from "./UserMenu";
import Logo from "../Logo";

const Navbar = () => {
    return (
        <div className="w-full shadow-sm bg-white sticky top-0">
            <div className="container flex justify-between items-center w-full py-2 gap-2">
                <Logo />
                <Search />
                <UserMenu />
            </div>
        </div>
    );
};

export default Navbar;
