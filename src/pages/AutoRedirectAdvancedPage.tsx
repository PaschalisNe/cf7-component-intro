import {useEffect} from "react";
import AutoRedirectAdvanced from "../components/AutoRedirectAdvanced.tsx";


const AutoRedirectAdvancedPage = () => {

    useEffect(() => {
        document.title = "CF-7 Auto-Redirect Advanced Page";
    });
    return (
        <>
            <AutoRedirectAdvanced />
        </>
    )
}
export default AutoRedirectAdvancedPage;