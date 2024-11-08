import Image from "next/image";
import logo from "../../../public/Logo.png"

const Footer = () => {
    return (
        <div className="w-[1920px] h-[461px] absolute top-[5195px] left-[1px] pt-[140px] pr-[220px] pl-[220px] pb-[32px] gap-[200px] bg-[#043873]">
            <div className="w-[1480px] h-[289px] flex flex-col gap-[100px]">

                    <div className="w-1480px h-[169px] gap-[100px] flex">

                        <div className="w-[295px] h-[169px] flex flex-col gap-[15px]">
                            <Image src={logo} alt="logo" className="w-[191px] h-[34px]"></Image>
                            <p className="w-[240px] h-[120px] font-inter font-normal text-[17px] leading-[30px] text-[#F7F7EE]">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                        </div>

                        <div className="w-[295px] h-[127px] flex flex-col gap-[15px]">
                            <p className="w-[68px] h-[22px] font-bold font-inter text-[18px] leading-[21.78px] text-[#FFFFFF]">Product</p>
                            <p className="w-[70px] h-[20px] font-inter font-normal text-[16px] leading-[20px] text-[#FFE492]">Overview</p>
                            <p className="w-[70px] h-[20px] font-inter font-normal text-[16px] leading-[20px] text-[#FFFFFF]">Pricing</p>
                            <p className="w-[177px] h-[20px] font-inter font-normal text-[16px] leading-[20px] text-[#FFFFFF]">Customer stories</p>
                        </div>

                        <div className="w-[295px] h-[130px] flex flex-col gap-[16px]">
                            <p className="w-[33px] h-[20px] font-bold font-inter text-[18px] leading-[21.78px] text-[#FFFFFF]">Resources</p>
                            <p className="w-[70px] h-[20px] font-inter font-normal text-[16px] leading-[20px] text-[#FFFFFF]">Blog</p>
                            <p className="w-[133px] h-[20px] font-inter font-normal text-[16px] leading-[20px] text-[#FFFFFF]">Guides & tutorials</p>
                            <p className="w-[130px] h-[20px] font-inter font-normal text-[16px] leading-[20px] text-[#FFFFFF]">Help center</p>
                        </div>

                        <div className="w-[295px] h-[127px] flex flex-col gap-[15px]">
                            <p className="w-[68px] h-[22px] font-bold font-inter text-[18px] leading-[21.78px] text-[#FFFFFF]">Company</p>
                            <p className="w-[70px] h-[20px] font-inter font-normal text-[16px] leading-[20px] text-[#FFFFFF]">About us</p>
                            <p className="w-[70px] h-[20px] font-inter font-normal text-[16px] leading-[20px] text-[#FFFFFF]">Careers</p>
                            <p className="w-[70px] h-[20px] font-inter font-normal text-[16px] leading-[20px] text-[#FFFFFF]">Media kit</p>
                        </div>
                    </div>

                    <div className="w-1480px h-[20px] justify-between">
                        <p className="text-white text-center font-inter text-[16px] leading-[20px] font-normal">©2021 Whitepace LLC.</p>
                    </div>
            </div>
        </div>
    )
}

export default Footer;