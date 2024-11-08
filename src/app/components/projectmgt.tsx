import Image from 'next/image';
import btnarrow from "../../../public/btnarrow.png";
import workTogether from "../../../public/WorkTogether.jpg"

const Projectmgt = () => {
    return (
        <div className="w-[1920px] h-[1588px] px-[220px] py-[140px] flex flex-col justify-center items-center gap-[100px] top-[921px] left-[1px] absolute">

            {/* Project Management */}
            <div className="w-[1480px] h-[547px] gap-[60px] flex items-center">

                <div className="w-[672px] max-h-[411px] gap-[60px] flex flex-col">

                    {/* Text block */}
                    <div className='w-[672px] h-[288px] gap-[24px] flex flex-col'>
                        <h1 className="font-inter w-[672px] h-[174px] font-bold text-[64px] leading-[87.14px] text-[#212529] text-[72px]">Project Management</h1>
                        <p className="text-[#212529] w-[656px] h-[60px] font-inter font-normal text-[18px] leading-[30px]">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                    </div>

                    <button className="w-[201px] h-[63px] rounded-[8px] px-[40px] px-[20px] gap-[10px] bg-[#4F9CF9] flex justify-center items-center">
                        <p className="w-[159px] h-[23px] font-inter font-medium leading-[23px] text-[18px] text-white tracking-[-0.02em]">Get Started</p>
                        <Image src={btnarrow} alt="btnarrow" className='w-[10x] h-[10px]'></Image>
                    </button>
                </div>

                {/* Image cont */}
                <div className='w-[748px] h-[547px] bg-[#C4DEFD]'></div>
            </div>

            {/* Work Together */}
            <div className="w-[1480px] h-[661px] gap-[60px] flex items-center">
                <Image src={workTogether} alt='wt' className='w-[710px] h-[661px]'></Image>

                <div className='w-[670px] h-[294px] flex flex-col gap-[60px]'>
                    {/* Text block */}
                    <div className='w-[670px] h-[171px] flex flex-col gap-[24px]'>
                        <h1 className='w-[670px] h-[87px] font-inter font-bold text-[72px] leading-[87.14px] text-[#212529]'>Work together</h1>
                        <p className='w-[670px] h-[60px] font-inter font-normal text-[18px] leading-[30px] text-[#212529]'>With whitepace, share your notes with your colleagues and collaborate on them.
                            You can also publish a note to the internet and share the URL with others.
                        </p>
                    </div>

                    <button className="w-[201px] h-[63px] rounded-[8px] px-[40px] px-[20px] gap-[10px] bg-[#4F9CF9] flex justify-center items-center">
                        <p className="w-[159px] h-[23px] font-inter font-medium leading-[23px] text-[18px] text-white tracking-[-0.02em]">Try it now</p>
                        <Image src={btnarrow} alt="btnarrow" className='w-[10x] h-[10px]'></Image>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Projectmgt;