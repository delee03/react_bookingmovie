import React from "react";
import "./BaiTapBookingTicket.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { capNhatSeat } from "../redux/gheSlice";

const ThongTinGhe = () => {
    const dispatch = useDispatch();
    const { gheDuocChon } = useSelector((state) => state.gheSlice);

    const deleteSeat = (soGhe) => {
        const updatedGheDuocChon = gheDuocChon.filter((item) => item !== soGhe);
        dispatch(capNhatSeat(updatedGheDuocChon));
    };
    return (
        <div className="mt-10 space-y-5">
            <div>
                <button className="gheDuocChon"></button>
                <span className="text-white text-xl ms-2"> Ghế đã đặt</span>
            </div>
            <div>
                <button className="gheDangChon"></button>
                <span className="text-white text-xl ms-2"> Ghế đang chọn</span>
            </div>
            <div>
                <button className="ghe ms-0"></button>
                <span className="text-white text-xl ms-2 "> Ghế chưa đặt</span>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Số ghế
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Giá
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {gheDuocChon.map((item, index) => {
                            return (
                                <>
                                    <tr
                                        className="odd:bg-white  even:bg-gray-50  border-b "
                                        key={index}
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                        >
                                            {item}
                                        </th>

                                        <td className="px-6 py-4">75 000đ</td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => {
                                                    console.log("delete");
                                                    deleteSeat(item);
                                                }}
                                                className="font-medium text-blue-600  hover:underline"
                                            >
                                                <svg
                                                    className="w-6 h-6 text-gray-800 "
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                                                    />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                </>
                            );
                        })}
                        <tr className="text-white h-6">
                            <td>Tổng tiền</td>
                            <td>
                                {(gheDuocChon.length * 75000).toLocaleString()}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ThongTinGhe;
