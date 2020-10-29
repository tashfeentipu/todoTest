import addTodoModel from '../model/addTodo';

import {TODO_DELETE, TODO_ADD, TODO_COMPLETED, EMIT_NAME} from './TodoActions';

const initialState = {
  TodoList: [
    new addTodoModel(
      Math.floor(Math.random() * 100).toString(),
      'Todo 1',
      'New Todo',
      '#498fe1',
      false,
    ),
    new addTodoModel(
      Math.floor(Math.random() * 100).toString(),
      'Todo 2',
      'New Todo',
      '#498fe1',
      false,
    ),
    new addTodoModel(
      Math.floor(Math.random() * 100).toString(),
      'Todo 3',
      'New Todo',
      '#498fe1',
      false,
    ),
  ],
  headerName: '',
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_DELETE:
      const index = state.TodoList.findIndex(
        (element) => element.id === action.todoId,
      );
      const updatedArray = [...state.TodoList];
      updatedArray.splice(index, 1);

      return {...state, TodoList: updatedArray};

    case TODO_ADD:
      const newState = [...state.TodoList];
      newState.push(
        new addTodoModel(
          Math.floor(Math.random() * 100).toString(),
          action.payload.title,
          action.payload.due,
          action.payload.color,
          false,
        ),
      );
      return {...state, TodoList: newState};

    case TODO_COMPLETED:
      const updatedTodoList = state.TodoList.filter(
        (element) => element.id === action.todoCompletedId,
      )[0];

      const indexUpdate = state.TodoList.findIndex(
        (element) => element.id === action.todoCompletedId,
      );

      updatedTodoList.completed = true;
      updatedTodoList.timeFrame = 'Completed';

      const updatedTodoArray = [...state.TodoList];

      updatedTodoArray[indexUpdate] = updatedTodoList;

      return {...state, TodoList: updatedTodoArray};

    case EMIT_NAME:
      return {...state, headerName: action.name};

    default:
      return state;
  }
};

export default todoReducer;
