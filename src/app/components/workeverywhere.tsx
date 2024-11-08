import Image from 'next/image';
import btnarrow from "../../../public/btnarrow.png";

const Workeverywhere = () => {
    return (
        <div className="w-[1921px] h-[574px] absolute top-[4080px] left-[1px] px-[220px] py-[140px] bg-[#043873]">
            <div className="w-[1481px] h-[294px] gap-[60px] flex flex-col items-center">
                <div className="w-[1064px] h-[171px] gap-[24px] flex flex-col text-center">
                    <h1 className="w-[1064px] h-[87px] font-inter font-bold text-[70px] leading-[87.14px] text-white">Your work, everywhere you are</h1>
                    <p className="w-[1064px] h-[60px] font-inter font-normal text-[18px] text-white">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
                </div>
                
                <button className="w-[201px] h-[63px] rounded-[8px] px-[40px] px-[20px] gap-[10px] bg-[#4F9CF9] flex justify-center items-center">
                        <p className="w-[159px] h-[23px] font-inter font-medium leading-[23px] text-[18px] text-white tracking-[-0.02em]">Try Taskey</p>
                        <Image src={btnarrow} alt="btnarrow" className='w-[10x] h-[10px]'></Image>
                </button>
            </div>
        </div>
    )
}

export default Workeverywhere;