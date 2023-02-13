export const getAddObject = (text, isCompleted = false) => {
  const date = new Date();
  return {
    id: date.getTime(),
    title: text,
    completed: isCompleted,
  };
};

export const getPendingTasks = (todos) => {
  return todos.filter((item) => !item.completed);
};

export const getCompletedTasks = (todos) => {
  return todos.filter((item) => item.completed);
};
