import React from "react";

// Card แสดงสินค้าในหน้า Product showcase
const Card = ({ name, price, img }) => {
  return (
    <div className="
      bg-white/0                         /* พื้นหลังโปร่งใส */
      border-0 rounded-xl p-4            /* border + padding */
      hover:scale-105                    /* ขยายตัวตอน hover */
      transition-transform duration-300  /* smooth animation */
      group                              /* group สำหรับควบคุมเด็ก elements */
    ">
      {/* ส่วนรูปภาพสินค้า */}
      <div className="
        aspect-square                    /* เป็นรูปสี่เหลี่ยมจตุรัส */
        bg-white/0 rounded-xl mb-4
        flex items-center justify-center
        overflow-hidden
      ">
        {img ? (
          <img src={img} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-500 font-bold uppercase">
            No Image  {/* placeholder ถ้าไม่มีรูป */}
          </span>
        )}
      </div>

      {/* ข้อมูลสินค้า: ชื่อ + ราคา */}
      <div className="flex flex-col gap-1 text-black">
        <h3 className="leading-tight uppercase tracking-tight">{name}</h3>
        <p className="tracking-wider">{price}</p>
      </div>

      {/* ปุ่ม Add to Cart - ซ่อนโดยค่าเริ่มต้น โผล่ตอน hover card */}
      <button
        className="
          mt-4 w-full py-2
          bg-black text-white rounded-lg
          text-xs font-bold
          opacity-0 group-hover:opacity-100  /* โผล่ตอน hover parent */
          transition-all duration-300
          hover:bg-red-600                   /* สีแดงตอน hover ปุ่ม */
        "
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default Card;
