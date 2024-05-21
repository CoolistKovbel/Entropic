import React from 'react'

const page = () => {



  const latest_collactions = [
    {
      collection: "chapter-1",
      collection_Name: "",
      collection_image: ""
    },
    {
      collection: "chapter-2",
      collection_Name: "",
      collection_image: ""
    },
    {
      collection: "chapter-3",
      collection_Name: "",
      collection_image: ""
    }
  ]




  return (
    <section className='p-5'>

      <header className='mb-4'>
        <h2 className='text-2xl'>Latest Collection</h2>
      </header>

      <div className='w-full h-full flex items-center gap-4 flex-col md:flex-row'>
        {
          latest_collactions.map((item) => ( 
            <div className='bg-[#222] w-[300px] h-[300px] text-center flex items-center justify-center' key={crypto.randomUUID()}>
                {item.collection}
            </div>
          ))
        }

      </div>



    </section>
  )
}

export default page