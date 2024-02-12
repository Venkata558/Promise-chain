//promise-chain

function getData(dataId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("data ", dataId);
      res("promise full-filled");
      //rej("some error");
    }, 3000);
  });
}

(function getAllData() {
  console.log("fetching data 1 ...");
  getData(1)
    .then((res) => {
      console.log("fetching data 2 ...");
      return getData(2);
    })
    .then((res) => {
      console.log("fetching data 3 ...");
      return getData(3);
    })
    .then((res) => {
      console.log(res);
    });
})();
