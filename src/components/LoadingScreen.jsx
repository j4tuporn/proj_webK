import React from "react";

// Loading overlay - แสดงหน้าดำพร้อม "Kouragez" ตรงกลาง
const LoadingScreen = ({ isVisible }) => {
  return (
    <div
      className={`
        fixed inset-0              /* ครอบทั้งหน้าจอ */
        bg-black                    /* พื้นหลังสีดำ */
        flex items-center justify-center  /* จัดเนื้อหาให้อยู่ตรงกลาง */
        z-[9999]                    /* อยู่บนสุด */
        transition-opacity duration-700  /* fade in/out ใน 700ms */
        ${
          isVisible 
            ? "opacity-100" 
            : "opacity-0 pointer-events-none"  /* ไม่เห็น + ไม่บล็อก clicks */
        }
      `}
    >
      {/* ข้อความ "Kouragez" ที่กะพริบ */}
      <div className="text-white text-4xl font-bold animate-pulse">
        Kouragez
      </div>
    </div>
  );
};

export default LoadingScreen;
