function Interview1() {
  // give a method to read the inputArray and print the output as expected 
  // const inputArray = [ 'b', 'a', 'k', 'e', '',
  //                 'c', 'a', 'k', 'e', '',
  //                 'e', 'a', 't' ];

  // expected o/p:
  //   eat 
  //   cake
  //   bake

  const example1 = () => {

    const inputArray = ['b', 'a', 'k', 'e', '', 'c', 'a', 'k', 'e', '', 'e', 'a', 't'];
    let resultArray = [[]];
    let count = 0;
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] === '') {
        resultArray.push([]);
        count=count+1;
        continue;
      }
      resultArray[count].push(inputArray[i]);
    }
    
    for(let j=resultArray.length-1; j>=0; j--){
      console.log(resultArray[j].join(""))
    }

    // console.log(inputArray.join("").split(" ").reverse());
  }

  example1();

  return (
    <div className="Interview1">

    </div>
  );
}

export default Interview1;
