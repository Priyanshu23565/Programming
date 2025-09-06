fetch('https://api.agify.io000?name=anu')  // Agify API se data mang rahe hain
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error('Error aaya!', err);
  });