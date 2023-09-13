
const SpecsItem = ({id,icon,title,text}) => {
  return (
    <div className={`${id%2==0 ? 'ml-6' :''} flex flex-col mb-6` }>
      {icon}
      <h1 className='my-2 font-[500]'>{title}</h1>
      <p className='text-zinc-400 text-[15px]'>{text}</p>
    </div>
  )
}

export default SpecsItem
