import Image from 'next/image';
import btnarrow from "../../../public/btnarrow.png";

const Hero = () => {
    return (
        <div className="w-[1920px] h-[829px] px-[220px] py-[140px] bg-[#043873] flex justify-center items-center top-[92px] left-[1px] absolute gap-[10px]">
                <div id="headingNbutton" className="w-[656px] h-[361px] gap-[60px] flex flex-col">
                        
                        <div className="w-[656px] h-[238px] gap-[24px] flex flex-col">
                            <h2 className="font-inter w-[656px] h-[154px] font-bold text-[64px] leading-[77.45px] text-white">Get More Done with whitepace</h2>
                            <p className="text-white w-[656px] h-[60px] font-inter font-normal text-[18px] leading-[30px]">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                        </div>

                        <button className="w-[227px] max-h-[63px] rounded-[8px] p-[20px] gap-[10px] bg-[#4F9CF9] flex justify-center items-center">
                            <p className="w-[159px] h-[23px] font-inter font-medium leading-[23px] text-[18px] text-white tracking-[-0.02em]">Try Whitepace free</p>
                            <Image src={btnarrow} alt="btnarrow" className='w-[10x] h-[10px]'></Image>
                        </button>
                </div>

                <div className='w-[820px] h-[549px] bg-[#C4DEFD] gap-[4px]'></div>
        </div>
    )
}

export default Hero;