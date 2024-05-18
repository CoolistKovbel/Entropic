import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>


      {/* // */}
      <header>
        <h2 className='text-2xl'>Latest mint</h2>

        <div className='w-[300px] h-[300px] relative'>
          <Image src="/ephonite.png" alt='art concept nft' fill />
        </div>

        


      </header>



    </div>
  )
}

export default page