import { useRef, useContext } from 'react';

import TodosContext from '../store/todos-context';
import classes from './NewTodo.module.css';

// type Props = {
//   children?: React.ReactNode;
//   onAddTodo: (text: string) => void;
// };

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    // ? when u are not sure if the value exists. ! when you are sure that the value will always be present at that point
    // const enteredText = todoTextInputRef.current?.value;
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label>Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
