import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import React from "react";

export default ({ children }) => {
    return (
        <>
            <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
                <Navbar />
                <div class="app-main">
                    <Sidebar />
                    <div class="app-main__outer">
                        <div class="app-main__inner">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}