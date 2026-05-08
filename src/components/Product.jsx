import React from "react";
import Card from "./card";

const Product = () => {
  const chromeBackgroundParent = {
    position: "relative", // สำคัญมาก เพื่อให้ Pseudo-element อ้างอิง
    width: "100%",
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden", // เก็บส่วนที่ Blur เกินออกมา
  };

  // ชั้นที่ 1: สีพื้นฐานแบบไล่เฉดเบาๆ
  const chromeBackgroundBase = {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(135deg, #e5e7eb 0%, #d1d5db 40%, #ffffff 50%, #d1d5db 60%, #e5e7eb 100%)",
    zIndex: 1, // อยู่ล่างสุด
  };

  // ชั้นที่ 2: สร้างลายมั่วๆ และแสงสะท้อนฟุ้งๆ
  const chromeBackgroundNoise = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transform: "scale(1.1)", // ขยายเฉพาะตัวลายด้านใน ไม่กระทบขนาดตัวแม่
    zIndex: 2,
    opacity: 0.8,
    filter: "blur(20px)",
    mixBlendMode: "overlay",
    background: `
    linear-gradient(110deg, transparent 20%, rgba(255, 255, 255, 0.8) 25%, transparent 30%, rgba(255, 255, 255, 1) 32%, transparent 35%, rgba(0,0,0,0.1) 40%, transparent 45%),
    linear-gradient(210deg, transparent 0%, rgba(255, 255, 255, 0.9) 10%, transparent 15%, transparent 20%, rgba(255,255,255,1) 25%, transparent 30%, transparent 70%, rgba(255,255,255,0.7) 75%, transparent 80%),
    linear-gradient(45deg, rgba(0, 0, 0, 0.05) 0%, transparent 15%, transparent 30%, rgba(255,255,255,1) 35%, transparent 40%)
  `,
    backgroundSize: "200% 200%",
  };

  // ข้อความตัวอักษร KOURAGEZ LUXURY... (เพิ่ม Style เพื่อให้ชัดขึ้นบนพื้นหลังมั่วๆ)
  const subTitleStyle = {
    className:
      "text-black mt-1 tracking-[0.2em] text-xs sm:text-sm drop-shadow-[0_1px_0_rgba(255,255,255,0.7)]", // เพิ่ม drop-shadow สีขาวด้านหลังตัวอักษรเพื่อให้เด่น
  };

  return (
    <div style={chromeBackgroundParent}>
      {/* เพิ่มส่วนพื้นหลังทั้งสองชั้นที่นี่ */}
      <div style={chromeBackgroundBase} />
      <div style={chromeBackgroundNoise} />

      {/* ส่วนเนื้อหาหลัก */}
      <div className="relative z-10 p-8 md:p-12">
        <h1 className="text-x sm:text-xl md:text-2xl text-black tracking-tighter drop-shadow-sm">
          new arrival!!!
        </h1>
        <p {...subTitleStyle}>kouragez so fucking cool streetwear 2026</p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 md:px-12 pb-20">
        <Card img="./uploads/jort.png" name="jort boxer" price="2,900 THB" />
        <Card name="Metallic Baggy Jeans" price="1,850 THB" />
        <Card name="Silver Mesh T-Shirt" price="990 THB" />
        <Card name="Kouragez Cyber Cap" price="750 THB" />
      </div>
    </div>
  );
};

export default Product;
