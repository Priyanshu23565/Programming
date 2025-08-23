let meraPromise = new Promise(function(resolve, reject) {
  let kaamHoGaya = true;

  if (kaamHoGaya) {
    resolve("✅ Kaam sahi se ho gaya! Success!");
  } else {
    reject("❌ Arre bhai, kaam nahi hua. Error!");
  }
});

meraPromise
  .then(function(successMessage) {
    console.log(successMessage);
  })
  .catch(function(errorMessage) {
    console.log(errorMessage);
  });
