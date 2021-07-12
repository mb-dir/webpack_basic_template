//https://www.npmjs.com/package/regenerator-runtime
//runtime import - thanks to this we can use async function
import regeneratorRuntime from "regenerator-runtime";

// styles import
import "../styles/test.scss";

// place your code below(you can delete the code below and write your own)

//js modules import
import "./test.js";

console.log("Hello 🐼");

//Babel test
document.body.addEventListener("click", ()=>{
    console.log("Do not touch me!");
});

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();