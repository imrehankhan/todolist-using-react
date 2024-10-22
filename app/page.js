"use client"
import React, {useState} from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  
  const submitHandler = (e) => {
    e.preventDefault(); 
    setmainTask([...mainTask, {title, desc}])
    settitle(""); 
    setdesc("");
  }

  const deleteHandler = (index) => {
    let copyTask = [...mainTask]
    copyTask.splice(index, 1)
    setmainTask(copyTask)
  }

  let renderTask
  if (mainTask.length === 0) {
    renderTask = <h2 className='text-xl text-center'>No tasks available</h2>
  } else {
    renderTask = mainTask.map((task, index) => {
      return (
        <li className='list-none flex justify-between bg-green-200 mb-5 p-5 rounded-lg shadow-md flex-wrap'>
          <div className='w-full md:w-auto'>
            <h3 className='text-2xl md:text-3xl'>{task.title}</h3>
            <h4 className='text-lg md:text-xl'>{task.desc}</h4>
          </div>
          <div className='w-full md:w-auto flex justify-end mt-4 md:mt-0'>
            <button 
              onClick={() => deleteHandler(index)} 
              className='bg-red-500 rounded p-2 text-white hover:bg-red-700 transition duration-200'>
              Delete
            </button>
          </div>
        </li>
      )
    })
  }

  return (
    <>
      <h1 className='bg-green-800 p-6 text-white text-3xl md:text-4xl text-center font-bold'>
        Rehan's <span className='text-green-400'>ToDo list</span> App
      </h1>
      
      <form className='flex flex-col md:flex-row items-center justify-center' onSubmit={submitHandler}>
        <input 
          type="text" 
          placeholder="Enter task's title" 
          className='border-gray-700 text-lg md:text-2xl rounded m-4 px-4 py-2 border-2 w-full md:w-1/3'
          value={title} 
          onChange={(e) => settitle(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Enter Description" 
          className='border-gray-700 text-lg md:text-2xl rounded m-4 px-4 py-2 border-2 w-full md:w-1/3'
          value={desc} 
          onChange={(e) => setdesc(e.target.value)}
        />
        <button 
          type='submit' 
          className='border-black border-2 rounded p-2 bg-green-400 hover:bg-green-500 transition duration-200 w-full md:w-auto'>
          Add task
        </button>
      </form>
      
      <hr className='my-6' />

      <div className='p-4 md:p-8'>
        <ul className='space-y-4'>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page