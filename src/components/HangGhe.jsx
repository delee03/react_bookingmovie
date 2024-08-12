import React from "react";
import "./BaiTapBookingTicket.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { capNhatSeat } from "../redux/gheSlice";

const HangGhe = ({ dataHangandGhe, index }) => {
    let { hang, danhSachGhe } = dataHangandGhe;
    const dispatch = useDispatch();
    const [dangChon, setDangChon] = React.useState([]);
    const { gheDuocChon } = useSelector((state) => state.gheSlice);

    const handleButton = (soGhe) => {
        let updateDangChon;
        if (gheDuocChon.includes(soGhe)) {
            // setDangChon(dangChon.filter((ghe) => ghe !== soGhe));
            updateDangChon = gheDuocChon.filter((ghe) => ghe !== soGhe);
            // xóa ghế khỏi danh sách ghế đang chọn khi click vào ghế đã chọn trước đó
        } else {
            // setDangChon([...dangChon, soGhe]);
            updateDangChon = [...gheDuocChon, soGhe];
        }
        // setDangChon(updateDangChon);
        dispatch(capNhatSeat(updateDangChon));
    };

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
                                key={index}
                                onClick={() => {
                                    // console.log("đang chọn", item.soGhe);
                                    handleButton(item.soGhe);
                                }}
                                disabled={disable}
                                className={`ghe text-white ${
                                    disable ? "gheDuocChon" : ""
                                } ${
                                    gheDuocChon.includes(item.soGhe) //includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate
                                        ? "gheDangChon"
                                        : ""
                                }`} // Check if dangChon includes the current button's value
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
