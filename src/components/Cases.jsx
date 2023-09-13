import Heading from './Heading'
import caseImg from '../images/case.png'
import {AiOutlineInfoCircle} from 'react-icons/ai'
const Cases = () => {
  return (
    <div className='py-[100px]'>
      <Heading title={'Cases'} />
      <div className='flex flex-wrap sm:flex-nowrap items-center justify-center gap-10 px-5 sm:px-20 xl:px-[300px]'>
      <img src={caseImg} data-aos="fade-right" className='h-[300px] w-auto object-contain' alt='Cases Image' />

            <div data-aos="fade-left">
               <p className='text-zinc-400'>With a comfortable and adaptable case so that you can store it whenever you want, and keep your durability forever.</p>
               <div className='mt-8  cursor-pointer w-[max-content]  bg-black py-5 px-10 rounded-2xl flex items-center gap-2 font-[500]'>
                    <AiOutlineInfoCircle size={26}/>More info
                </div>
            </div>
      </div>
    </div>
  )
}

export default Cases
