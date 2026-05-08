import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";  // ใช้สำหรับ navigation
import { LoadingContext } from "../context/LoadingContext";
import NavItem from "./NavItem";
import { flushSync } from "react-dom";  // บังคับให้ state update synchronously

// Navigation header ที่อยู่ด้านบนหน้าจอ
const Header = () => {
  const navigate = useNavigate();
  const { setIsLoading } = useContext(LoadingContext);

  // เมื่อกด Logo: ตั้ง loading + navigate กลับหน้าแรก
  const handleLogoClick = () => {
    // flushSync: บังคับให้ loading state อัปเดต synchronously (ทันที)
    flushSync(() => {
      setIsLoading(true);
    });

    // requestAnimationFrame: รอจนกว่า DOM render เสร็จแล้วค่อย navigate
    // ป้องกัน "flash" ของหน้าใหม่ก่อนที่ loading screen จะขึ้น
    requestAnimationFrame(() => {
      navigate("/");
    });
  };
  
  const handleLoginClick = () => {
    flushSync(() => {
      setIsLoading(true);
    });

    requestAnimationFrame(()=> {
      navigate("/login");
    });
  };
  

  return (
    <>
      <nav className="sticky top-0 z-[60] flex items-center bg-black/80 h-[60px] px-6 
      w-full text-sm text-white shadow-lg backdrop-blur border-b border-gray-800"
      >
        
        {/* ส่วนที่ 1: Logo (ฝั่งซ้าย) */}
        <div className="flex-1 flex items-center">
          <div 
            className="text-red-600 text-2xl font-bold cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleLogoClick}
          >
            KOURAGEZ
          </div>
        </div>

        {/* ส่วนที่ 2: Menu (กึ่งกลางจอพอดี) */}
        <div className="flex items-center justify-center">
          <NavItem title="Collection" navigationPath="/collections">
            <div className="grid grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold border-b border-gray-200 pb-2 mb-4 text-lg text-black">
                  Fashion
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="hover:text-red-500 cursor-pointer">Men's Clothing</li>
                  <li className="hover:text-red-500 cursor-pointer">Women's Clothing</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold border-b border-gray-200 pb-2 mb-4 text-lg text-black">
                  Accessory
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="hover:text-red-500 cursor-pointer">Bags</li>
                  <li className="hover:text-red-500 cursor-pointer">Wallets</li>
                  <li className="hover:text-red-500 cursor-pointer">Hats</li>
                  <li className="hover:text-red-500 cursor-pointer">Belts</li>
                </ul>
              </div>
              <div className="col-span-2 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 group/banner cursor-pointer hover:bg-gray-200 transition-colors">
                <p className="text-gray-400 font-bold group-hover/banner:text-gray-600">
                  NEW COLLECTION BANNER
                </p>
              </div>
            </div>
          </NavItem>

          <NavItem title="About">
            <div className="flex flex-col items-center justify-center h-full py-10">
              <h2 className="text-5xl font-black mb-4 text-black tracking-tighter">
                OUR STORY
              </h2>
              <p className="text-gray-600 max-w-xl text-center text-lg leading-relaxed">
                "We are the future of luxury streetwear. Kouragez defines the boundary 
                between high-fashion and the raw energy of the streets."
              </p>
            </div>
          </NavItem>

          <NavItem title="Support">
            <div className="grid grid-cols-3 gap-6 h-full items-center py-6">
              <div className="p-8 border-2 border-gray-100 rounded-xl hover:border-red-500 hover:bg-red-50 transition-all cursor-pointer text-center text-black">
                Help Center
              </div>
              <div className="p-8 border-2 border-gray-100 rounded-xl hover:border-red-500 hover:bg-red-50 transition-all cursor-pointer text-center text-black">
                Track Order
              </div>
              <div className="p-8 border-2 border-gray-100 rounded-xl hover:border-red-500 hover:bg-red-50 transition-all cursor-pointer text-center text-black">
                Contact Us
              </div>
            </div>
          </NavItem>
        </div>

        {/* ส่วนที่ 3: Actions (ฝั่งขวา) */}
        <div className="flex-1 flex items-center justify-end space-x-6">
          <div className="cursor-pointer hover:text-red-500 transition-colors" onClick={handleLoginClick}>Log in</div>
          <div className="cursor-pointer hover:text-red-500 transition-colors font-medium">Search...</div>
          <button className="px-6 py-2 bg-white rounded-full text-black font-black cursor-pointer hover:bg-red-500 hover:text-white transition-all shadow-md active:scale-95">
            CART 🛒
          </button>
        </div>
      </nav>

      {/* สแตนบายหน้ากากดำเวลาเอาเมาส์จ่อเมนู (จะทำงานเมื่อมีการ hover ที่ NavItem) */}
      <div className="fixed inset-0 bg-black/50 pointer-events-none opacity-0 z-40 transition-opacity duration-300 group-hover:opacity-100"></div>
    </>
  );
};

export default Header;