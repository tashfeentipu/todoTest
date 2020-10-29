import addTodoModel from '../model/addTodo';

import {TODO_DELETE, TODO_ADD, EMIT_EDIT, EMIT_NAME} from './TodoActions';

const initialState = {
  TodoList: [
    new addTodoModel(
      Math.floor(Math.random() * 100).toString(),
      'Tipu',
      'New Todo',
      'black',
    ),
    new addTodoModel(
      Math.floor(Math.random() * 100).toString(),
      'Tipu',
      'New Todo',
      'black',
    ),
    new addTodoModel(
      Math.floor(Math.random() * 100).toString(),
      'Tipu',
      'New Todo',
      'black',
    ),
  ],
  headerName: '',
  edit: false,
  editId: '',
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
        ),
      );
      return {...state, TodoList: newState};

    case EMIT_EDIT:
      return {...state, editId: action.editId, edit: true};
    case EMIT_NAME:
      return {...state, headerName: action.name};

    default:
      return state;
  }
};

export default todoReducer;
