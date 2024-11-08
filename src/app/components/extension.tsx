import Image from 'next/image';
import btnarrow from "../../../public/btnarrow.png";

const Extension = () => {
    return (
        <div className="w-[1921px] h-[759px] px-[220px] py-[140px] flex gap-[98px] absolute top-[2509px] left-[1px] bg-[#043873] items-center">

            {/* Text section */}
            <div className="w-[697px] h-[294px] gap-[60px] flex flex-col">

                {/* HeadingNpara section */}

                <div className="w-[697px] h-[171px] gap-[24px] flex flex-col">
                    <h1 className="w-[697px] h-[87px] font-inter font-bold text-[72px] leading-[87.14px] text-[#FFFFFF]">Use as Extension</h1>
                    <p className="w-[697px] h-[60px] font-inter font-normal text-[18px] leading-[30px] text-[#FFFFFF]">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
                </div>

                {/* Button section */}
                <button className="w-[201px] h-[63px] rounded-[8px] px-[40px] px-[20px] gap-[10px] bg-[#4F9CF9] flex justify-center items-center">
                        <p className="w-[159px] h-[23px] font-inter font-medium leading-[23px] text-[18px] text-white tracking-[-0.02em]">Let's Go</p>
                        <Image src={btnarrow} alt="btnarrow" className='w-[10x] h-[10px]'></Image>
                </button>
            </div>

            {/* Image section */}
            <div className='w-[686px] h-[479px] bg-[#C4DEFD]'></div>
        </div>
    )
}

export default Extension;