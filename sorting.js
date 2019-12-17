  const arr = [0, 2, 3, 28, 55, 1, 0, 44, 5];

  function Sorting(array) {
    if (array.length < 2 ) return array;

    const pivot = Math.floor(Math.random()*(array.length - 1));
    const arrayPivot = array[pivot];
    const big = [], low = [];

    const arraySecond = [...array.slice(0, pivot), ...array.slice(pivot+1, array.length)];

    for (let i of arraySecond) {
      if (i > arrayPivot) {
        big.push(i);
      } else {
        low.push(i);
      }
    }
    return [...Sorting(low), arrayPivot, ...Sorting(big)]
  }


  console.log(Sorting(arr))