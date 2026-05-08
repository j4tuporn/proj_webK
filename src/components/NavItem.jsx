import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "../context/LoadingContext";
import { flushSync } from "react-dom";

// Menu item ที่มี dropdown - ใช้ใน Header
const NavItem = ({ title, children, navigationPath }) => {
  const [isOpen, setIsOpen] = useState(false);  // ควบคุม dropdown เปิด/ปิด
  const navigate = useNavigate();
  const { setIsLoading } = useContext(LoadingContext);

  // เมื่อกด menu item: ตั้ง loading + navigate ไปหน้าใหม่
  const handleClick = () => {
    if (navigationPath) {
      // บังคับให้ loading state อัปเดต synchronously
      flushSync(() => {
        setIsLoading(true);
      });

      // รอจนกว่า DOM render เสร็จ แล้วค่อย navigate
      requestAnimationFrame(() => {
        navigate(navigationPath);
      });

      setIsOpen(false);  // ปิด dropdown หลังกด
    }
  };

  return (
    <div
      className="px-6 h-[60px] flex items-center cursor-pointer"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={handleClick}
    >
      {/* หัวข้อเมนูหลัก */}
      <div
        className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
          isOpen ? "text-red-500" : "text-white"
        }`}
      >
        {title}
      </div>

      {/* Mega Dropdown Panel */}
      {children && (
        <div
          className={`
            fixed left-0 top-[60px] w-screen bg-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-[100]
            transition-all duration-300 ease-out border-t border-gray-100
            ${isOpen 
              ? "opacity-100 visible translate-y-0" 
              : "opacity-0 invisible -translate-y-2 pointer-events-none"}
          `}
          /* ให้ Dropdown ยังค้างอยู่ตราบใดที่เมาส์ยังอยู่ในพื้นที่สีขาว */
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {/* Container ด้านในเพื่อจัดระเบียบเนื้อหาไม่ให้ชิดขอบจอเกินไป */}
          <div className="max-w-[1400px] mx-auto p-12 min-h-[250px]">
            {children}
          </div>
          
          {/* แถบสีด้านล่าง dropdown เพื่อความพรีเมียม */}
          <div className="h-1.5 bg-gradient-to-r from-red-600 via-black to-red-600 opacity-10"></div>
        </div>
      )}
    </div>
  );
};

export default NavItem;