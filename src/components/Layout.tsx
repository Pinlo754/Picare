import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import { Footer } from "./Footer";

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main>
                <Outlet />  {/* Hiển thị nội dung của trang hiện tại */}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;