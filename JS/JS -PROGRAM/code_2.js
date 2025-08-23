function checkResult(marks) {
  return new Promise(function(resolve, reject) {
    console.log("📄 Result check ho raha hai...");

    setTimeout(() => {
      if (marks >= 35) {
        resolve("✅ Pass ho gaya balleeee ballelee ! Marks: " + marks);
      } else {
        reject("❌ Fail ho gaya  ro rh hu bhaiiii main to ....  ! : " + marks);
      }
    }, 2000); 
  });
}

let studentMarks = 2;

checkResult(studentMarks)
  .then(function(successMsg) {
    console.log(successMsg);
  })
  .catch(function(errorMsg) {
    console.log(errorMsg);
  });
