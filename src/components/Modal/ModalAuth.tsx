"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
interface ModalAuthProps {
    onClose: () => void;
}

type Inputs = {
    phone: string;
};
const ModalAuth: React.FC<ModalAuthProps> = ({ onClose }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <div className="bg-white rounded-lg shadow-md sm:w-[580px] w-full">
            <div className="relative flex justify-center items-center border-b border-b-gray-200">
                <div
                    onClick={onClose}
                    className="cursor-pointer absolute top-3 left-3 flex justify-center items-center w-[30px] h-[30px] rounded-full hover:bg-gray-200"
                >
                    <IoMdClose></IoMdClose>
                </div>
                <h3 className="p-5 font-semibold">Đăng nhập hoặc đăng ký</h3>
            </div>
            <div className="p-5">
                <h3 className="font-semibold">Chào mừng bạn đến với Airbnb</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-4 w-full flex justify-center items-start flex-col gap-2">
                        <input
                            className="w-full border rounded-lg outline-none border-gray-200 focus:border-rose-500 transition px-5 py-2"
                            placeholder="Số điện thoại"
                            {...register("phone", {
                                required: true,
                                pattern:
                                    /^(0|\+84)?(3[2-9]|5[2689]|7[06-9]|8[1-689]|9[0-9])[0-9]{7}$/,
                            })}
                        />
                        {errors.phone && (
                            <span className="text-red-500 text-xs">
                                Vui lòng kiểm tra trường này{" "}
                            </span>
                        )}
                    </div>
                    <p className="text-gray-500 text-xs my-3">
                        Chúng tôi sẽ gọi điện hoặc nhắn tin cho bạn để xác nhận
                        số điện thoại. Có áp dụng phí dữ liệu và phí tin nhắn
                        tiêu chuẩn.{" "}
                        <a
                            className="underline"
                            href="https://www.airbnb.com.vn/terms/privacy_policy?source=signup"
                        >
                            Chính sách về quyền riêng tư
                        </a>
                    </p>

                    <button className="primary-btn w-full" type="submit">
                        Tiếp tục
                    </button>
                </form>
                <div className="flex justify-center gap-3 items-center my-5">
                    <span className="border border-gray-200 w-[80%]"></span>
                    <span className="text-gray-500">Hoặc</span>
                    <span className="border border-gray-200 w-[80%]"></span>
                </div>
                <div className="w-full flex flex-col justify-center items-center gap-4">
                    <button className="outline-btn flex justify-center items-center gap-3 w-full">
                        <span className="flex justify-center items-center">
                            <FcGoogle></FcGoogle>
                        </span>
                        <span>tiếp tục với google</span>
                    </button>
                    <button className="outline-btn flex justify-center items-center gap-3 w-full">
                        <span className="flex justify-center items-center text-blue-500">
                            <AiFillFacebook></AiFillFacebook>
                        </span>
                        <span>tiếp tục với facebook</span>
                    </button>
                    <button className="outline-btn flex justify-center items-center gap-3 w-full">
                        <span className="flex justify-center items-center ">
                            <BsGithub></BsGithub>
                        </span>
                        <span>tiếp tục với github</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalAuth;
