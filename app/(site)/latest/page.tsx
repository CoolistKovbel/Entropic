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
    <section>
      <h2>Latest collection</h2>

      <div>
        {
          latest_collactions.map((item) => ( 
            <div className='bg-[#222]' key=" bg-[#222]">
                {item.collection}
            </div>
          ))
        }

      </div>



    </section>
  )
}

export default page