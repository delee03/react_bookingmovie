import React from "react";
import "./BaiTapBookingTicket.css";
import ThongTinGhe from "./ThongTinGhe";
import danhSachGheJson from "../assets/danhSachGhe.json";
import HangGhe from "./HangGhe";

const BookingTicket = () => {
    //render hàng ghế
    const renderGhe = () => {
        return danhSachGheJson.map((item, index) => {
            return (
                <div key={index}>
                    <HangGhe index={index} dataHangandGhe={item} />
                </div>
            );
        });
    };

    return (
        <div
            className="bookingMovie"
            style={{
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundImage: "url(bgmovie.jpg)",
                backgroundSize: "cover",
            }}
        >
            <div
                style={{
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    background: "rgb(0 0 0 / 55%)",
                }}
            >
                <div className="container">
                    <div className="flex justify-between">
                        <div className="w-8/12">
                            <h1 className="py-5 uppercase text-4xl text-center text-sky-400">
                                Đặt vé xem phim Cyberlearn.vn
                            </h1>
                            <div className=" screen  mx-auto">
                                <h3 className="mb-2 text-2xl   text-white text-center ">
                                    Màn hình
                                </h3>
                            </div>

                            {/* Viết xử lí render ghế theo từng rows */}
                            {renderGhe()}
                        </div>
                        <div className="w-4/12">
                            <h2 className="uppercase pt-10 text-center text-purple-500 text-3xl">
                                Danh sách ghế bạn chọn
                            </h2>
                            <ThongTinGhe></ThongTinGhe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingTicket;
