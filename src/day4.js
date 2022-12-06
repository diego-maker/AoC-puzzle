
import fs from 'fs';

var FINALSUM = 0;


fs.readFile('./src/file/day4.txt','utf8', function(err,data){

 let day4_1 = day4Part1(data)
 console.log(day4_1)
 let day4_2 = day4Part2(data)
 console.log(day4_2)
})


const day4Part1 = data => {
  let answer = 0;
  const dataArr = data.split(/\r?\n/);
  const pairedRanges = dataArr.map( 
    line => line.split(',').map(   // A-B,X-Y 👉 ['A-B','X-Y']
      numRange=> numRange.split('-').map( // 👉 [['A','B'],['X','Y']]
        num => parseInt(num) // (make numbers)
      )
    )
  )

  pairedRanges.forEach(coordinateSet => {
    let [A, B] = coordinateSet[0];
    let [X, Y] = coordinateSet[1];

    if (( (A <= X) && (B >=Y) ) || ( (A >= X) && (B <= Y) )){
      answer += 1;
    }
  })

  return answer;
}


const day4Part2 = data => {
  let answer = 0;
  const dataArr = data.split(/\r?\n/);
  const pairedRanges = dataArr.map( 
    line => line.split(',').map(   // A-B,X-Y 👉 ['A-B','X-Y']
      numRange=> numRange.split('-').map( // 👉 [['A','B'],['X','Y']]
        num => parseInt(num) // (make numbers)
      )
    )
  )

  pairedRanges.forEach(coordinateSet => {
    // let [rangeArrA,rangeArrB] = coordinateSet;
    let [A, B] = coordinateSet[0];
    let [X, Y] = coordinateSet[1];

    if ( (A<X && B<X) || (A>Y && B>Y)) {
      answer += 0;
    } else {
      answer += 1;
    }
  })

  return answer;
}