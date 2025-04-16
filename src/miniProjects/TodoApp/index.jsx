import  { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault()
    setTodos([...todos, input]);
    setInput('');
  };

  return (
    <div>
      <h2 className='text-2xl font-[600]'>Todo App</h2>
     <form onSubmit={addTodo}>
     <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='border font-[400] border-gray-400 rounded-lg w-[300px] mx-3 mt-7 px-3 py-2'
      />
      <button className='px-10 py-2 rounded-lg shadow-sm bg-[#475962] text-white 
      cursor-pointer font-[500]' type='submit'>Add Todo</button>
     </form>
      <ul className='mt-5 text-left w-[430px] m-auto'>
        {todos.map((todo, index) => (
          <li className='font-[500] mb-3 leading-5 ' key={index}>{index+1}. {todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;