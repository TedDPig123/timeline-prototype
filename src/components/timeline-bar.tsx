import LeftArrow from '../assets/arrow-left.png'
import RightArrow from '../assets/arrow-right.png'

export default function Timeline(){
    return(
        <div className="relative flex flex-row justify-center items-center">
            <img src={LeftArrow} alt="move-left" className='w-[50px] mr-[20px] ml-[130px]'/>
            <div className="h-[0.4rem] w-[100%] bg-black"></div>
            <img src={RightArrow} alt="move-right" className='w-[50px] ml-[20px] mr-[130px]'/>
        </div>
    )
}