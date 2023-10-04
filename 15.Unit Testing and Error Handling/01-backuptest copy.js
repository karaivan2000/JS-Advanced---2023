
function test () {
     
    let expectedSum = 150;
    let actualSum = sumSum([10, 20, 30, 40, 50, 60], 3, 300);

    if (actualSum === expectedSum) {
        console.log(`Correct`);
    } else {
        console.log(`Error`);
    }
  
 }

 test();