import useImages from "@/Hooks/useImages";

export default function OnBoardingHeader() {
    const { Logo } = useImages();
    return (
        <div className="flex justify-between items-center h-20 fixed w-full px-8">
            <div>
                <img src={Logo} alt="Mercury Logo" className="h-10" />
            </div>
            <div>
                {/* <button className="text-headertext text-sm">Sign In</button> */}
            </div>
        </div>
    );
}
