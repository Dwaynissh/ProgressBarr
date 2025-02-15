
// import ProgressBar from "progress";

// const bar = new ProgressBar(":bar :percent :rate/bps :etas :current/:total ", {
//   total: 40,
// });

// const time = setInterval(() => {
//   bar.tick();
//   if (bar.complete) {
//     console.log("process completed");
//     clearInterval(time);
//   }
// }, 100);

// 1 + 2 + 3 + 4 + 5 + 6 = 21

// step 1
const addUp = (n: number) => {
    let count: number = n;
    const arr: Array<number> = [];
  
    for (let i = 1; i <= count; i++) {
      arr.push(i);
    }
  
    return arr.reduce((a: number, b: number) => {
      return a + b;
    });
  };
  
  // step 2
  const addUp2 = (n: number) => {
    let count: number = n;
    const arr: Array<number> = [];
    let total: number = 0;
  
    for (let i = 1; i <= count; i++) {
      total += i;
    }
  
    return total;
  };
  
  // step 3
  const addUp3 = (n: number) => {
    return (n * (n + 1)) / 2;
  };
  
  console.time("start");
  console.timeEnd("start");
  
//   console.time("addUp");
//   console.log(addUp(150000000));
//   console.timeEnd("addUp");
//   console.log();
  
  console.time("addUp2");
  console.log(addUp2(150000000));
  console.timeEnd("addUp2");
  console.log();
  
  console.time("addUp3");
  console.log(addUp3(150000000));
  console.timeEnd("addUp3");
  console.log();



// // Assignment

// let arr = ["Superman", "Batman", "Flash", "Wonderwoman", "Cyborg"]

// // 1
// let firstRev = arr.reverse()
// console.log(firstRev);
// console.log("");


// // 2

// let secondRev = [...arr].reverse()
// console.log(secondRev);
// console.log("");

// // 3
// let thirdRev: any = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     thirdRev.push(arr[i]);
// }
// console.log(thirdRev);
// console.log(arr); 
