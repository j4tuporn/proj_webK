import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <input type="text" placeholder="Username" className="m-3 p-2 border border-gray-300 rounded"/>
        <input type="password" placeholder="Password" className="m-3 p-2 border border-gray-300 rounded"/>
        <button className="bg-black text-white py-2 px-4 mt-3 rounded hover:bg-gray-800 cursor-pointer transition-colors">
          Login
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
