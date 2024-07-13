import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
 

  return (
    <>
    <div className='max-w-lg m-auto mt-24  border-2 bg-gray-400   p-4 shadow-lg '>
  <h1 className='text-3xl'>Welcome to own TodoList</h1>
  <AddTodo/>
  <Todos/>
  </div>
    </>
  )
}

export default App
