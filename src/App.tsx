import { useState, FormEvent } from 'react';

type Todos = {
  todo: string
  isComplete: boolean
}

function App() {

  // list of todos then create a type for it for a stricter version of the type
  const [todos,setTodos] = useState<Todos[]>([]);
  const [todo,setTodo] = useState('');
  const [isComplete,setIsComplete] = useState(false);

  type Todo = {
    todo: string
    isComplete: boolean
  }

  const addTodo = (e: FormEvent) => {
    e.preventDefault();

    let values: Todo;
    values = {
      todo,
      isComplete
    }

    setTodos([...todos,values]);
    // After submitting a value clear the input field
    setTodo('');
  }
  
  return (
    <>
    <form onSubmit={addTodo}>
      <h1 className="form__title">Todo List</h1>
      <div className="form__input">
        <label htmlFor="todo">Enter Todo</label>
        <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text" placeholder="What are you gonna do?" required />
      </div>
      <div className="form__checkbox">
        <label htmlFor="todo">Mark as Complete</label>
        <input onChange={() => setIsComplete(!isComplete)} type="checkbox" placeholder="What are you gonna do?" />
      </div>
      <button className="form__submit">Submit</button>
    </form>
    { todos.map(todo => (
      <div className="list">
        <h2>{todo.isComplete ? 'Done' : 'Not done'}</h2>
        <p>{todo.todo}</p>
      </div>
    )) }
    </>
  )
}

export default App
