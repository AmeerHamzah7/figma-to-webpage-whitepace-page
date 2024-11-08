import Image from 'next/image';
import btnarrow from "../../../public/btnarrow.png";

const Customization = () => {
    return (
        <div className="w-[1921px] h-[812.09px] px-[220px] py-[140px] flex flex-row-reverse gap-[98px] absolute top-[3268px] left-[1px] bg-white items-center">

            {/* Text section */}
            <div className="w-[669px] h-[411px] gap-[60px] flex flex-col">

                {/* HeadingNpara section */}

                <div className="w-[669px] h-[288px] gap-[24px] flex flex-col">
                    <h1 className="w-[669px] h-[174px] font-inter font-bold text-[72px] leading-[87.14px] text-[##212529]">Customise it to your needs</h1>
                    <p className="w-[669px] h-[90px] font-inter font-normal text-[18px] leading-[30px] text-[##212529]">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
                </div>

                {/* Button section */}
                <button className="w-[201px] h-[63px] rounded-[8px] px-[40px] px-[20px] gap-[10px] bg-[#4F9CF9] flex justify-center items-center">
                    <p className="w-[159px] h-[23px] font-inter font-medium leading-[23px] text-[18px] text-white tracking-[-0.02em]">Let's Go</p>
                    <Image src={btnarrow} alt="btnarrow" className='w-[10x] h-[10px]'></Image>
                </button>
            </div>

            {/* Image section */}
            <div className='w-[714px] h-[532.09px] bg-[#C4DEFD]'></div>
        </div>
    )
}

export default Customization;