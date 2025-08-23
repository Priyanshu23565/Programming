let khaanaBanRahaHai = new Promise(function(resolve, reject) {
  let gasHai = false;

  if (gasHai) {
    resolve("✅ Mummy ne khaana bana diya! Aaja khane!");
  } else {
    reject("❌ Gas nahi thi, khaana nahi bana...");
  }
});

khaanaBanRahaHai
  .then(function(msg) {
    console.log(msg); // Jab kaam ho jaye
  })
  .catch(function(err) {
    console.log(err); // Jab kaam fail ho jaye
  });
