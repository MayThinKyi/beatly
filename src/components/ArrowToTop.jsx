import {BsArrowUp} from 'react-icons/bs'
const ArrowToTop = () => {
    const arrowToTopHandler=()=>{
        window.scrollTo(0,0)
    }
  return (
    <div onClick={arrowToTopHandler} className='bg-[#181A1B] cursor-pointer p-3 rounded-lg fixed w-max  bottom-5 right-10 '>
      <BsArrowUp size={20} color='white' />
    </div>
  )
}

export default ArrowToTop
