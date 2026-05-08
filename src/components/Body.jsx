import React from "react";

// Hero section - ส่วนตรงกลางของหน้าแรก
const Body = () => {
  return (
    <div className="
      text-white
      flex flex-col justify-between  /* จัดเนื้อหาบนล่างห่าง */
      w-full h-screen               /* เต็มหน้าจอ */
      px-6 pt-6
      bg-[url('/uploads/gpc.jpg')]  /* ใช้รูปจากโฟลเดอร์ uploads */
      bg-cover bg-center            /* ปกคลุมทั้งพื้นที่และจัดตรงกลาง */
      bg-no-repeat                  /* ไม่ซ้ำรูป */
    ">
      {/* ข้อความ "Kouragez" ด้านบน */}
      <div className="flex justify-center items-center">
        <div className="text-9xl pt-32">Kouragez</div>
      </div>

      {/* Tagline ด้านล่าง */}
      <div className="pb-10">
        <div className="text-xl">
          World wide shipping, free 30 days returns.
        </div>
      </div>
    </div>
  );
};

export default Body;
