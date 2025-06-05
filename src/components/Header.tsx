import CodingFactoryLogo from "./CodingFactoryLogo.tsx";

const Header = () => {
    return (
        <>
            <header className="bg-[#782024] fixed w-full" >
                <div className="container mx-auto px-4 flex items-center justify-between">
                <CodingFactoryLogo/>
                </div>
                <a className="text-white hover:underline underline-offset-4"  href = "/" >Home</a>
            </header>
        </>
    )
}
export default Header;