import { HiOutlineShoppingBag } from 'react-icons/hi'
import discount from '../images/discount.png'
const Discount = () => {
  return (
    <div className='cursor-pointer flex flex-wrap sm:flex-nowrap items-center gap-x-10 mx-5 sm:mx-20 xl:mx-[250px] py-10 px-5 sm:px-[50px] bg-[#181A1B] my-[100px] rounded-2xl  '>
      <div>
        <h1 className='text-2xl font-semibold text-white'>Immerse yourself in your music</h1>
      <p className='text-zinc-400'>Get it now, up to 50% off.</p>
      <div className='mt-8  w-[max-content] flex items-center gap-5 bg-black py-5 px-10 rounded-2xl'>
                    <div className='flex items-center gap-2 font-[500]'>
                    <HiOutlineShoppingBag size={26}/>Shop Now
                </div>

            </div>
      </div>
      <img src={discount} alt='Discount Image' className='mt-10 sm:mt-0 h-[200px] w-auto object-contain' />
    </div>
  )
}

export default Discount
