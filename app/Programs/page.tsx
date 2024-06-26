import React from 'react'

const page = () => {
  return (
    <div className='py-24 px-8 mx-auto bg-gray-200'>
        <div className='container'>
            <h4 className='uppercase front-semibold text-center mb-1 text-red-700 text-xl'>{`vienss`}</h4>
            <h2>chooser your program</h2>
           <div className='grid lg:grid-cols-3 gap-5'>
             <div className='bg-green-500'>Fleet</div>
             <div className='bg-green-500'>Fleet</div>
             <div className='bg-green-500'>Fleet</div>
           </div>
        </div>
       
    </div>
    
  )
}

export default page