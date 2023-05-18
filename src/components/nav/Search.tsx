"use client";
import React from "react";
import { BiSearch } from "react-icons/bi";
const Search = () => {
    return (
        <div className="w-full sm:w-auto shadow-sm hover:shadow-md transition rounded-full p-1 border border-gray-200 flex items-center text-sm font-medium">
            <div className="flex-1 sm:border-r border-gray-200 py-1  px-3  cursor-pointer ">
                Địa điểm bất kì
            </div>
            <div className="hidden sm:block border-r border-gray-200 py-1  px-3 cursor-pointer">
                Tuần bất kỳ
            </div>
            <div className="hidden sm:block px-3 cursor-pointer  justify-center gap-2">
                <span className="py-1 text-slate-500">Thêm khách</span>
            </div>
            <div className="w-[35px] h-[35px] text-white flex justify-center items-center p-1 rounded-full bg-rose-500">
                <BiSearch></BiSearch>
            </div>
        </div>
    );
};

export default Search;
