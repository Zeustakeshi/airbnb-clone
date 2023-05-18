"use client";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { IMenuData, IMenuItem } from "@/interfaces/menu.interface";
import Menu from "../menu/Menu";
import MenuContentWrapper from "../menu/MenuContentWrapper";
import MenuContent from "./MenuContent";
import Modal from "../Modal/Modal";
import ModalAuth from "../Modal/ModalAuth";

const HeaderAccount = () => {
    return (
        <div className="flex justify-start items-center gap-4 py-2">
            <div>
                <Avatar
                    src={"https://source.unsplash.com/featured/?user"}
                    size={40}
                ></Avatar>
            </div>
            <div className=" flex flex-col justify-start items-start text-sm">
                <div className="font-medium">Minh Hieu</div>
                <div>hieu@gmail.com</div>
            </div>
        </div>
    );
};

const userMenuData: IMenuData = {
    header: <HeaderAccount></HeaderAccount>,
    data: [
        {
            type: "message",
            title: "Tin Nhắn",
            to: `/inbox`,
        },
        {
            type: "trips",
            title: "Chuyến đi",
            to: `/trips`,
        },
        {
            type: "wishlists",
            title: "Danh sách yêu thích",
            to: "/wishlists",
        },
        {
            type: "hostHome",
            title: "Cho thuê chỗ ở qua Airbnb",
            to: "/host/home",
        },
        {
            type: "account",
            title: "Tài khoản",
            to: "/account-settings",
        },
        {
            type: "help",
            title: "Trợ giúp",
            to: "/help",
        },
        {
            type: "logout",
            title: "Đăng xuất",
        },
    ],
};

const menuDataNoLogin: IMenuData = {
    data: [
        {
            type: "login",
            title: "Đăng nhập",
        },
        {
            type: "register",
            title: "Đăng ký",
        },
        {
            type: "hostHome",
            title: "Cho thuê chỗ ở qua Airbnb",
            to: "/host/home",
        },
        {
            type: "help",
            title: "Trợ giúp",
            to: "/help",
        },
    ],
};

const UserMenu = () => {
    const [showModal, setShowModal] = useState(false);
    const isLogin = false;
    const handleChangeMenu = (item: IMenuItem) => {
        if (item.type === "login") {
            setShowModal(true);
        }
        if (item.type === "register") {
            setShowModal(true);
        }
    };
    return (
        <div className="relative flex justify-center items-center gap-4">
            <div className="md:block hidden  px-3 py-2 font-medium rounded-full hover:bg-gray-100 transition cursor-pointer">
                Cho thuê chỗ ở qua Airbnb
            </div>
            <Menu
                onChange={handleChangeMenu}
                data={isLogin ? userMenuData : menuDataNoLogin}
                label={
                    <div className=" p-1 cursor-pointer transition rounded-full border border-gray-200 hover:shadow-md flex items-center gap-3">
                        <span className="w-[35px] h-[35px] flex justify-center items-center">
                            <AiOutlineMenu />
                        </span>
                        <Avatar
                            className="hidden md:inline-block shadow-sm"
                            src={
                                isLogin
                                    ? "https://source.unsplash.com/featured/?user"
                                    : "/placeholder.jpg"
                            }
                            size={35}
                        ></Avatar>

                        <Modal
                            isOpen={showModal}
                            onClose={() => setShowModal(false)}
                        >
                            <ModalAuth
                                onClose={() => setShowModal(false)}
                            ></ModalAuth>
                        </Modal>
                    </div>
                }
            >
                <MenuContentWrapper className="absolute top-[110%] -right-[2px]  bg-white rounded-md shadow-[rgba(0,0,0,0.1)_0px_10px_20px]">
                    <MenuContent></MenuContent>
                </MenuContentWrapper>
            </Menu>
        </div>
    );
};

export default UserMenu;
