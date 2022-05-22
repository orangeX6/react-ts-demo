import React from 'react';
import classes from './TodoItem.module.css';

type Props = {
  children?: React.ReactNode;
  item: string;
  onRemoveTodo: () => void;
};

const TodoItem: React.FC<Props> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.item}
    </li>
  );
};

export default TodoItem;
