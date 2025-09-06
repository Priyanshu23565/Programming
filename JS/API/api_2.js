fetch("https://api.agify.io?name=anu")
  .then(a=>a.json())
  .then(res => {
    console.log(res);
  });
