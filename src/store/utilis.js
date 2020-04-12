export const removeFromLocalStorage = (taskId) => {
  const arr = JSON.parse(localStorage.getItem("item"));
  const newArr = arr.filter((task) => task.id !== taskId);
  localStorage.setItem("item", JSON.stringify(newArr));
};
