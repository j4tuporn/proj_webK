import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import Login from "./pages/Login";
import LoadingScreen from "./components/LoadingScreen";
import { LoadingContext } from "./context/LoadingContext";

// Component หลักที่ควบคุม routing และ loading logic
const AppContent = () => {
  // เรียก loading state จาก Context
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  // ควบคุมระยะเวลาแสดง loading screen
  useEffect(() => {
    if (isLoading) {
      // ซ่อน loading screen หลังจาก 600ms
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 600);
      return () => clearTimeout(timer);  // ล้าง timer เมื่อ component unmount
    }
  }, [isLoading, setIsLoading]);

  return (
    <>
      {/* แสดง loading screen ก่อน */}
      <LoadingScreen isVisible={isLoading} />
      
      {/* ถ้าไม่ loading แล้วจึง render routes */}
      {!isLoading && (
        <div className="transition-opacity duration-500 opacity-100">  {/* fade-in smooth */}
          <Routes>
            <Route path="/" element={<Home />} />            {/* หน้าแรก */}
            <Route path="/collections" element={<Collections />} />  {/* หน้าสินค้า */}
            <Route path="/login" element={<Login />} />          {/* หน้า login */}
          </Routes>
        </div>
      )}
    </>
  );
};

// Root component ที่ครอบ routing
const App = () => {
  return (
    <Router>  {/* ให้บริการ routing ไปยัง components ทั้งหมด */}
      <AppContent />
    </Router>
  );
};

export default App;
