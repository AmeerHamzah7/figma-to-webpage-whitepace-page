import Image from "next/image";
import sponsor from "../../../public/sponsors.jpg"

const Sponsor = () => {
    return (
        <div className="w-[1922px] h-[538px] absolute top-[4654px] px-[220px] py-[140px] gap-[100px] flex flex-col bg-white">
            <h1 className="w-[1482px] h-[87px] font-inter font-bold text-[72px] leading-[87.14px] text-center text-[#212529]">Our sponsors</h1>
            <Image src={sponsor} alt="sp" className="w-[1482px] h-[71px]"></Image>
        </div>
    )
}

export default Sponsor;