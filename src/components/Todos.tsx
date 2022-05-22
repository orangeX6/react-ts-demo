import React, { useContext } from 'react';

import TodoItem from './TodoItem';
import TodosContext from '../store/todos-context';
import classes from './Todos.module.css';

// React.FC - Functional Component
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          item={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;

/*

-> Before
import * as React from 'react';

type Props = {};
const Component: React.FC<Props> = ({children}) => {...}


-> After
import * as React from 'react';

type Props = {
  children?: React.ReactNode
};
const Component: React.FC<Props> = ({children}) => {...}

That is all that's needed.

-> Or you can stop using React.FC altogether.

import * as React from 'react';

type Props = {
  children?: React.ReactNode
};

function Component({children}: Props): React.ReactNode {
  ...
}
 */
