import homeImg from '../images/home.png'
import {HiOutlineShoppingBag} from 'react-icons/hi'
const Hero = () => {
  return (
    <div className='flex flex-wrap md:flex-nowrap gap-x-10 lg:gap-x-20 cursor-pointer'>
      <img alt="Home Image" src={homeImg} className='mx-auto w-auto h-[680px]  md:pl-[100px] xl:pl-[200px] mt-[-200px]' />
      <div className='flex flex-col px-5 md:px-0 pt-16'>
            <h1 className='text-[#2C2E2F] font-semibold  text-6xl sm:text-9xl'>On ear</h1>
            <h1 className='text-5xl sm:text-6xl shadow-md ml-4 mt-2 font-semibold text-white'>Beats 3</h1>
            <p className='text-xl sm:text-2xl ml-4  font-[500] mt-8'>Overview</p>
            <p className='text-[16px] sm:text-[18px] mx-4 mt-4 text-zinc-400'>Enjoy award-winning Beats sound with wireless listening freedom and a sleek, streamlined design with comfortable padded earphones, delivering first-rate playback.</p>
            <div className='mt-8  w-[max-content] flex items-center gap-5 bg-black py-5 px-10 rounded-2xl'>
                    <div className='flex items-center gap-2 font-[500]'>
                    <HiOutlineShoppingBag size={26}/>Add To Bag
                </div>
                <p className='font-semibold text-xl'>$199</p>

            </div>
      </div>
    </div>
  )
}

export default Hero
