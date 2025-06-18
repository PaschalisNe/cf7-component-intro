import HeaderResponsive from "./HeaderResponsive"
import Footer from "./Footer.tsx";
import {Outlet} from "react-router";
import ExamplesSection from "./ExamplesSection.tsx";


const RouterExamplesLayout = () => {
    return (
        <>
            <HeaderResponsive/>
            <div className="container mx-auto min-h-[95vh] pt-36">
                <Outlet/>
            </div>

            <ExamplesSection/>

            <Footer/>
        </>
    )
}
export default RouterExamplesLayout