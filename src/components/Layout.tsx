import React from "react";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx"; // οχι απαραιτητο στη react 19 και μετα
// import CodingFactoryLogo from "./CodingFactoryLogo.tsx";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children} : LayoutProps) => {
    return (
        <>
            {/*<CodingFactoryLogo/>*/}
            <Header/>
                <div className="container mx-auto min-h-[95vh] pt-36">
                {children}
                </div>
            <Footer/>

        </>
    )
}
export default Layout