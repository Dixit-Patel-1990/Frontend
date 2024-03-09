const shiftZerosAndOnes = (arr) => {
  let zeroArr = [];
  let oneArr = [];
  for(let num of arr){
    if(num == 1) {
      oneArr.push(num)
    }else{
      zeroArr.push(num);
    } 
  }
  return zeroArr.concat(oneArr);
}

const mostDuplicatedElement = (arr) => { 
  const obj = {};
  for(let i=0; i<arr.length; i++){
    if(obj[arr[i]] == undefined){
      obj[arr[i]] = 0;
    }else{
      obj[arr[i]]= obj[arr[i]] + 1;
    }
  }
  let max=0;
  let ans = 0;
  for(let prop in obj){
    if(obj[prop]>max){
      ans = prop;
      max = obj[prop]
    }
  }
  console.log(ans);
}

let arr = [1,1,2,3,4,2,2,2,3,4,2];
// mostDuplicatedElement(arr);

let arr1 = [0,1,0,0,1,1,1,1,1,0,0,1];
// console.log(shiftZerosAndOnes(arr1));