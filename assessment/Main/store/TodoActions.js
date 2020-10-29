export const TODO_DELETE = 'TODO_DELETE';
export const TODO_ADD = 'TODO_ADD';
export const TODO_COMPLETED = 'TODO_COMPLETED';

export const EMIT_NAME = 'EMIT_NAME';

export const todoDelete = (id) => {
  return {
    type: TODO_DELETE,
    todoId: id,
  };
};

export const todoAdd = (payload) => {
  return {
    type: TODO_ADD,
    payload: payload,
  };
};

export const todoCompleted = (id) => {
  return {
    type: TODO_COMPLETED,
    todoCompletedId: id,
  };
};

export const emitName = (name) => {
  return {
    type: EMIT_NAME,
    name: name,
  };
};
