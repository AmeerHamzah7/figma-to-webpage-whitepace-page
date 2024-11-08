import Image from "next/image";
import Logo from "@../../../public/Logo.png";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="w-[1920px] min-h-[92px] pt-[16px] pr-[220px] pb-[16px] pl-[220px] bg-[#043873] flex justify-between items-center relative left-[1px]">
                <div id="logo" className="w-[191px] min-h-[34px] justify-between">
                    <Image src={Logo} alt="logo" className="w-[191px] h-[34px]"></Image>
                </div>

                <div id="navItems" className="w-[737.5px] h-[60px] gap-[60px] flex items-center">
                     <div id="navMenu" className="w-[549px] h-[23px]">
                            <ul className="flex gap-[32px] font-dmSans font-medium">
                                <li><Link href='#' className="text-white">Products</Link></li>
                                <li><Link href='#' className="text-white">Solutions</Link></li>
                                <li><Link href='#' className="text-white">Resources</Link></li>
                                <li><Link href='#' className="text-white">Pricing</Link></li>
                            </ul>
                     </div>

                     <button className="bg-[#FFE492] w-[126px] h-[60px] font-inter font-medium text-[18px] leading-[23px] text-[#043873] rounded-[8px]">Login</button>
                </div>
        </div>
    )
}

export default Navbar;