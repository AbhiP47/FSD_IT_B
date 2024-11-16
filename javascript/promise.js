const mypromise = new Promise((resolve, reject) => {
  console.log("execute promise");
  // resolve();
  reject("network error");
});
mypromise
  .then(() => {
    console.log("All Set!");
  })
  .catch((err) => {
    "Error is", err;
  });
