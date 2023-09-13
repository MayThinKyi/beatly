import img1 from '../images/sponsor1.png'
import img2 from '../images/sponsor2.png'
import img3 from '../images/sponsor3.png'
import img4 from '../images/sponsor4.png'

const Sponsor = () => {
    const sponsors=[img1,img2,img3,img4]
  return (
    <div data-aos="fade-up" className=' flex flex-wrap gap-10 sm:gap-0 sm:flex-nowrap items-center justify-between py-[200px] px-5 sm:px-20 xl:px-[200px]'>
        {sponsors?.map((item,key)=>{
            return <img className='h-[30px] md:h-[40px] w-auto object-contain' key={key} src={item} />
        })}
    </div>
  )
}

export default Sponsor
