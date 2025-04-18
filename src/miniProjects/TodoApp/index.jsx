import { useEffect, useState } from 'react';
import pencil from "/images/icons/pencil.png"
import trash from "/images/icons/trash.png"
const TodoApp = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  };

  const updateTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? editValue : todo
    );
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditValue('');
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  return (
    <div>
      <h2 className="text-2xl font-[600]">Todo App</h2>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border font-[400] border-gray-400 rounded-lg w-full md:w-[300px] mt-7 px-3 py-2"
          required
        />
        <button
          className="px-10 py-2 rounded-lg shadow-sm bg-[#475962] text-white cursor-pointer font-[500] mt-5 md:mt-0 md:mx-3"
          type="submit"
        >
          Add Todo
        </button>
      </form>
      <ul className="mt-5 text-left md:w-[460px] m-auto">
        {todos.map((todo, index) => (
          <li className="font-[500] mb-4 leading-5 rounded-lg shadow-sm p-3 flex justify-between items-center" key={index}>
            {editIndex === index ? (
              <input
                type="text"
                value={editValue}
                onChange={handleEditChange}
                className="border-0 border-b font-[400] border-gray-400 focus:outline-0 px-3 py-2 flex-1 mr-2"
              />
            ) : (
              <span>{index + 1}. {todo}</span>
            )}
            <div>
              {editIndex === index ? (
                <>
                  <button
                    className="text-green-500 mx-2 cursor-pointer"
                    onClick={() => updateTodo(index)}
                  >
                    Save
                  </button>
                  <button
                    className="text-red-500 cursor-pointer"
                    onClick={() => setEditIndex(null)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="text-blue-500 mx-2 cursor-pointer"
                    onClick={() => {
                      setEditIndex(index);
                      setEditValue(todo);
                    }}
                  >
                    <img src={pencil} width="20" alt="" />
                  </button>
                  <button
                    className="text-red-500 cursor-pointer"
                    onClick={() => deleteTodo(index)}
                  >
                     <img src={trash} width="20" alt="" />
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
