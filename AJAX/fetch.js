let msg = await test();
console.log(msg);

function test() {
    return new Promise((resolve, reject) => {setTimeout(resolve("rejected"), 1000)})
  }
  
