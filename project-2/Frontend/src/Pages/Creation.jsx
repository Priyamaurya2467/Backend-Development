import React from 'react'

function Creation() {

  const handleSubmitHandler = async(e)=>{
    e.preventDefault()
  }
  return (
    
    
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-semibold mb-4">
          Create a New Post
        </h1>

        <form className="space-y-4" onSubmit={handleSubmitHandler}>
          <input 
          type="file" 
          name='image' 
          accept='image/*' 
          className="w-full border rounded-md p-2"
          required />
          
          <input
            type="text"
            placeholder="Title"
            className="w-full border rounded-md p-2"
            required
          />
          <input
            type="text"
            placeholder="Author"
            className="w-full border rounded-md p-2"
            required
          />
          <textarea
            placeholder="Caption"
            className="w-full border rounded-md p-2"
            required
          ></textarea>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
            Post
          </button>
        </form>
      </div>
  )
}

export default Creation