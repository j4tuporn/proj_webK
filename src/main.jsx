import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";              // นำเข้า global styles
import App from "./App.jsx";
import { LoadingProvider } from "./context/LoadingContext";  // Context สำหรับ loading state

// สร้าง React app และ mount ไปที่ HTML element #root
createRoot(document.getElementById("root")).render(
  <StrictMode>  {/* ตรวจหา bugs ขณะพัฒนา */}
    <LoadingProvider>  {/* ครอบแอปทั้งหมด เพื่อให้ components ต่างๆ ใช้ loading state */}
      <App />
    </LoadingProvider>
  </StrictMode>,
);
