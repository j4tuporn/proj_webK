import React from "react";

// Footer - ส่วนล่างของเว็บไซต์
const Footer = () => {
  return (
    <div className="w-full bg-white text-gray-800 px-10 md:px-20 py-10 shadow-inner">  {/* พื้นหลังขาว ข้อความดำ */}
      {/* ชื่อแบรนด์ */}
      <div className="text-4xl my-6 font-bold">Kouragez</div>
      
      {/* ข้อมูล: ลูกค้า vs ติดต่อ */}
      <div className="flex justify-between mb-6 ">
        {/* ส่วนซ้าย: Customer Service */}
        <div>
          <div className="text-xl text-bold">Customer Service</div>
          <div className="text-sm">About</div>
          <div className="text-sm">Contact</div>
          <div className="text-sm">FAQ</div>
        </div>
        {/* ส่วนขวา: Contact */}
        <div>
          <div className="text-xl text-bold">Contact</div>
          <div className="text-sm">About</div>
          <div className="text-sm">Contact</div>
          <div className="text-sm">FAQ</div>
        </div>
      </div>
      
      {/* เส้นคั่น */}
      <hr className="border-t border-gray-300 my-6" />
      
      {/* ส่วนล่างสุด: ลิงค์กฎหมาย + ลิขสิทธิ์ */}
      <div className="flex justify-between my-6 ">
        <div className="flex gap-32">
          <div>Term of Use</div>
          <div>Privacy Policy</div>
        </div>
        <div>&copy;2026 Kouragez, Inc</div>
      </div>
    </div>
  );
};

export default Footer;
