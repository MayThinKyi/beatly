import React from 'react'

const ProductItem = ({img,color,price}) => {
  return (
    <div data-aos="fade-up" className='cursor-pointer bg-[#181A1B] rounded-2xl p-5'>
      <img src={img} className='mt-[-50px] h-[100px] mx-auto w-auto object-contain' />
      <h1 className='font-semibold'>{color}</h1>
      <h1 className='font-[500]'>{price}</h1>
    </div>

  )
}

export default ProductItem
