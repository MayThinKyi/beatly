import Heading from './Heading'
import product1 from '../images/product1.png'
import product2 from '../images/product2.png'
import product3 from '../images/product3.png'
import product4 from '../images/product4.png'
import product5 from '../images/product5.png'
import ProductItem from './ProductItem'

const ChooseYourStyle = () => {
    const products=[
        {id:1,img:product1,color:'Black',price:'$230'},
        {id:1,img:product2,color:'Black',price:'$230'},
        {id:1,img:product3,color:'Black',price:'$230'},
        {id:1,img:product4,color:'Black',price:'$230'},
        {id:1,img:product5,color:'Black',price:'$230'},

    ]
  return (
    <div className='py-20 px-5 md:px-20 xl:px-[250px]'>
      <Heading title={'Choose Your Style'} />
      <div className='mt-16 grid grid-cols-2 sm:grid-cols-3 gap-x-10 sm:gap-x-20 gap-y-10'>
        {products?.map((item)=>{
            return <ProductItem key={item?.id} {...item} />
        })}
      </div>
    </div>
  )
}

export default ChooseYourStyle
