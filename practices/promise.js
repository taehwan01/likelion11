const addNum_10 = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num + 10);
    }, 1000);
  });
};
const addNum_20 = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num + 20);
    }, 1000);
  });
};

const numLog = (num) => console.log(num);

const result = () => {
  addNum_10(0)
    .then((res) => addNum_20(res))
    .then((res) => numLog(res));
};

result();
