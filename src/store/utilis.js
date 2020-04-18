export const addToLocalStorage = (task) => {
  const item = localStorage.getItem("item");
  if (item) {
    const arr = JSON.parse(localStorage.getItem("item")).concat(task);
    localStorage.setItem("item", JSON.stringify(arr));
  } else {
    localStorage.setItem("item", JSON.stringify([task]));
  }
};

export const removeFromLocalStorage = (taskId) => {
  const arr = JSON.parse(localStorage.getItem("item"));
  const newArr = arr.filter((task) => task.id !== taskId);
  localStorage.setItem("item", JSON.stringify(newArr));
};

export const changeItem = (curr, name) => {
  const arr = JSON.parse(localStorage.getItem("item"));
  const newArr = arr.map((item) => {
    if (item.title === curr) {
      item.title = name;
    }
    return item;
  });
  localStorage.setItem("item", JSON.stringify(newArr));
};
