const addNum_10 = (num, callback) => {
  setTimeout(() => {
    callback(num + 10);
  }, 1000);
};

const addNum_20 = (num, callback) => {
  setTimeout(() => {
    callback(num + 20);
  }, 1000);
};

const numLog = (num) => console.log(num);

const result = () => {
  addNum_10(0, (callbackNum1) => {
    addNum_20(callbackNum1, (callbackNum2) => {
      numLog(callbackNum2);
    });
  });
};

result();
