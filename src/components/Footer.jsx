import logo from '../images/logo.png'
import {BiLogoFacebook,BiLogoInstagram,BiLogoTwitter} from 'react-icons/bi'
const Footer = () => {
    const products=[ 'Headphones', 'Earphones','Earbuds','Accesories'];
    const supports=['Product help','Register','Updates','Provides'];
  return (
    <div className='cursor-pointer py-10 px-5 sm:px-20 flex flex-wrap justify-between'>
      <div className='order-2 md:order-1 flex  justify-between'>
        <div className='flex flex-wrap gap-10 sm:gap-x-[100px]'>
        <img  data-aos="fade-up" className='h-[40px]' src={logo} alt="Logo" />
        <ul data-aos="fade-up" className='flex flex-col'>
            <h1 className='text-zinc-400 mb-3 text-2xl font-[500]'>Products</h1>
            {products?.map((item,key)=>{
                return <li className='mb-2' key={key}>{item}</li>
            })}
        </ul>
        <ul data-aos="fade-up" className='flex flex-col'>
            <h1 className='text-zinc-400 mb-3 text-2xl font-[500]'>Supprts</h1>
            {supports?.map((item,key)=>{
                return <li className='mb-2' key={key}>{item}</li>
            })}
        </ul>
        </div>

      </div>
      <div  data-aos="fade-up" className=' order-1 md:order-2 my-5  flex items-center gap-x-10'>
        <div className='bg-[#181A1B] p-2 rounded-lg hover:bg-black'>
        <BiLogoFacebook size={28}/>
        </div>
        <div className='bg-[#181A1B] p-2 rounded-lg hover:bg-black'>
        <BiLogoInstagram size={28}/>
        </div>
        <div className='bg-[#181A1B] p-2 rounded-lg hover:bg-black'>
        <BiLogoTwitter size={28}/>
        </div>
      </div>
    </div>
  )
}

export default Footer
