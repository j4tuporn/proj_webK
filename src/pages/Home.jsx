import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Product from "../components/Product";
import Footer from "../components/Footer";

// หน้าแรกของเว็บไซต์ - ประกอบด้วยส่วนต่างๆ
const Home = () => {
  return (
    <>
      <Header />   {/* Navigation ด้านบน */}
      <Body />     {/* Hero section - ตรงกลางหน้า */}
      <Product />  {/* Product showcase - แสดงสินค้า */}
      <Footer />   {/* ข้อมูล + ลิงค์ ด้านล่าง */}
    </>
  );
};

export default Home;
