import React from "react";
import "./BaiTapBookingTicket.css";

const HangGhe = ({ dataHangandGhe, index }) => {
    let { hang, danhSachGhe } = dataHangandGhe;

    return (
        <>
            {/* {renderSoHangGhe(dataHangandGhe)} */}

            {index === 0 ? (
                <>
                    <button className="rowNumber border-none">
                        {dataHangandGhe.hang}
                    </button>
                    {danhSachGhe.map((item, index) => {
                        return (
                            <button className="rowNumber border-none">
                                {item.soGhe}
                            </button>
                        );
                    })}
                </>
            ) : (
                <>
                    <button className="rowNumber border-none">
                        {dataHangandGhe.hang}
                    </button>
                    {danhSachGhe.map((item, index) => {
                        let disable = item.daDat || false;
                        if (item.daDat) {
                            disable = true;
                        }

                        return (
                            <button
                                onClick={() => {
                                    alert("hello");
                                }}
                                disabled={disable}
                                className={`ghe text-white ${
                                    disable ? "gheDuocChon" : ""
                                }`}
                            >
                                {item.soGhe}
                            </button>
                        );
                    })}
                </>
            )}
        </>
    );
};

export default HangGhe;
