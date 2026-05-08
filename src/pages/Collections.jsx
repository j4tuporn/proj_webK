import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// หน้า Collections - แสดงสินค้าต่างๆ
const Collections = () => {
  return (
    <div className="min-h-screen flex flex-col">  {/* เต็มหน้าจอ */}
      <Header />  {/* Navigation */}
      
      {/* เนื้อหาตรงกลาง - สำหรับเพิ่มสินค้า collections ต่อไป */}
      <div className='h-full flex-1'></div>

      <Footer />  {/* ข้อมูล */}
    </div>
  )
}

export default Collections