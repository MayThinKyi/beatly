import Heading from './Heading'
import sepcsImg from '../images/specs.png'
import {BiBluetooth,BiSolidMicrophone} from 'react-icons/bi'
import {BsBatteryCharging} from 'react-icons/bs'
import {PiPlugChargingFill} from 'react-icons/pi'
import SpecsItem from './SpecsItem'
const Specs = () => {
    const specs=[
        {id:0,icon:<BiBluetooth/>,title:'Connection',text:'Bluetooth v5.2'},
        {id:1,icon:<BsBatteryCharging/>,title:'Battery',text:'Duration 40h'},
        {id:2,icon:<PiPlugChargingFill/>,title:'Charging',text:'Fast charge 4.2-AAC'},
        {id:3,icon:<BiSolidMicrophone/>,title:'Microphone',text:'Supports Apple Siri and Google'},

    ]
  return (
    <div className='px-5 sm:px-0'>
      <Heading title={'Specs'} />
      <div className='flex flex-wrap sm:flex-nowrap justify-center gap-10'>
            <div className='order-2 sm:order-1 '>
               {specs?.map((item)=>{
                return <SpecsItem key={item?.id} {...item} />
               })}
            </div>
            <img src={sepcsImg} className=' order-1 sm:order-2  h-[300px] w-auto object-contain' alt='Sepcs Image' />
      </div>
    </div>
  )
}

export default Specs
