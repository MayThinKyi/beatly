import logo from '../images/logo.png'
const Navbar = () => {
    const links=['Home','Specs','Case','Products']
  return (
    <div className='z-10 bg-[#0F0F10] cursor-pointer sticky top-0 left-0 right-0 flex gap-x-4  items-center justify-between py-8 px-10 sm:px-[150px]'>
      <img alt='Beatly Logo' src={logo} className='h-[35px] w-[35px]' />
      <ul className='text-[#616568] font-[500] flex items-center gap-x-3 sm:gap-x-10'>
        {links?.map((item,key)=>{
            return <li className='hover:text-white text-sm sm:text-[16px] transition-all ease-in' key={key}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default Navbar
