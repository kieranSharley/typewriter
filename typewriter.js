const sentence = "hello there";

    let iterations = 0;

    const typewriter = function(string) {
      const write = setInterval(() => {
        for (let char of string) {
          if (iterations < sentence.length) {
            process.stdout.write(string[iterations])
           iterations++;
           break;
        } else { 
          clearInterval(write);
        }    
      }
    }, 250);
    return "";
  }
  console.log(typewriter(sentence))
