import React from "react";
import "./BaiTapBookingTicket.css";

const ThongTinGhe = () => {
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

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Số ghế
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Giá
                            </th>

                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                            <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                            >
                                Apple MacBook Pro 17"
                            </th>

                            <td class="px-6 py-4">$2999</td>
                            <td class="px-6 py-4">
                                <a
                                    href="#"
                                    class="font-medium text-blue-600  hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr>
                        <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                            <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                            >
                                Microsoft Surface Pro
                            </th>

                            <td class="px-6 py-4">$1999</td>
                            <td class="px-6 py-4">
                                <a
                                    href="#"
                                    class="font-medium text-blue-600 hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr>
                        <tr class="odd:bg-white  even:bg-gray-50  border-b dark:border-gray-700">
                            <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap d"
                            >
                                Magic Mouse 2
                            </th>

                            <td class="px-6 py-4">$99</td>
                            <td class="px-6 py-4">
                                <a
                                    href="#"
                                    class="font-medium text-blue-600  hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ThongTinGhe;
