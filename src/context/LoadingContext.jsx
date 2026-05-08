import React, { createContext, useState } from "react";

// สร้าง Context สำหรับแชร์ loading state ไปยัง components ต่างๆ
export const LoadingContext = createContext();

// Component ที่ครอบแอป เพื่อให้บริการ loading state
export const LoadingProvider = ({ children }) => {
  // isLoading: true = แสดง loading screen, false = แสดง content
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

