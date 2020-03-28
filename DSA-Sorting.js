function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function bubbleSort(array) {
    let swaps = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++;
        }
    }

    if (swaps > 0) {
        return bubbleSort(array);
    }
    return array;
};

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};

/*
    #2. Understanding quicksort

    1)Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about the partition step? Explain your answer.



    2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list 
    after the second partitioning according to the quicksort algorithm.

    A: Last item as pivot [3, 9, 10, 12, 19, 14, 17, 16, 13, 15]
    A: First item as pivot [14, 13, 10, 3, 9, 12, 15, 16, 19, 17]



*/

//#3 Implementing quicksort
let data = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]

console.log(quickSort(data))

/*

[
   1,  2,  3,  5,  6,  6,  6,  7,  7,  9,  9, 11,
  13, 13, 13, 14, 14, 15, 16, 16, 17, 21, 22, 23,
  24, 25, 25, 26, 26, 27, 27, 27, 28, 28, 28, 30,
  31, 32, 32, 33, 34, 38, 38, 39, 40, 40, 42, 42,
  43, 44, 45, 46, 46, 46, 48, 49, 50, 51, 51, 53,
  53, 54, 55, 56, 62, 63, 64, 64, 64, 65, 67, 68,
  69, 69, 70, 70, 72, 72, 73, 73, 76, 78, 78, 80,
  81, 82, 83, 84, 85, 87, 87, 88, 88, 89, 90, 91,
  93, 97, 98, 98
]
*/


//#4 Implementing merge sort
console.log(mergeSort(data))

/*
[
   1,  2,  3,  5,  6,  6,  6,  7,  7,  9,  9, 11,
  13, 13, 13, 14, 14, 15, 16, 16, 17, 21, 22, 23,
  24, 25, 25, 26, 26, 27, 27, 27, 28, 28, 28, 30,
  31, 32, 32, 33, 34, 38, 38, 39, 40, 40, 42, 42,
  43, 44, 45, 46, 46, 46, 48, 49, 50, 51, 51, 53,
  53, 54, 55, 56, 62, 63, 64, 64, 64, 65, 67, 68,
  69, 69, 70, 70, 72, 72, 73, 73, 76, 78, 78, 80,
  81, 82, 83, 84, 85, 87, 87, 88, 88, 89, 90, 91,
  93, 97, 98, 98
]
*/

//#6 Bucket sort

function mySort(array, lowest, highest) {
    let count = {};
    for (let i = lowest; i <= highest; i++) {
        count[i] = 0;
    }
    for(let i = 0; i< array.length; i++) {
        count[array[i]] += 1;
    }
    let sortedArray = [];
    for (let i = lowest; i <= highest; i++) {
        while(count[i] > 0) {
            sortedArray.push(i)
            count[i]--;
        }
    }
    return sortedArray;
}
console.log(mySort(data, 1, 98));


// #7 Sort in place
function shuffleArray(array) {
    for(let i = 0; i < array.length; i++) {
        let randomIndex = Math.floor(Math.random() * array.length)
        swap(array, i, randomIndex)
    } 

    return array
}

console.log(shuffleArray(data))


//#8 Sorting books
function abcOrder (str1, str2, charIndex=0) {
  //returns true if str1 comes before str2 in abc order
  //returns false if str2 comes before str1 in abc order
  //if strings are identical, return true
  if (str1 === str2) {
    return true;
  }
  if (str1.toLowerCase().charCodeAt([charIndex]) < str2.toLowerCase().charCodeAt([charIndex])) {
    return true;
  }
  else if (str1.toLowerCase().charCodeAt([charIndex]) > str2.toLowerCase().charCodeAt([charIndex])) {
    return false;
  }
  else {
    return abcOrder (str1, str2, charIndex+1);
  }
}

//do a slightly modified merge sort on the array 
//to account for the difference in input type

function mSortStrings (arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length/2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  left = mSortStrings (left);
  right = mSortStrings (right);
  return mergeStringArr (left, right, arr);
}

function mergeStringArr (left, right, arr) {
  let leftI = 0;
  let rightI = 0;
  let outputI = 0;
  while (leftI < left.length && rightI < right.length) {
    if (abcOrder(left[leftI], right[rightI])) {
      arr[outputI++] = left[leftI++];
    }
    else {
      arr[outputI++] = right[rightI++];
    }
  }
  for (let i = leftI; i < left.length; i++) {
    arr[outputI++] = left[i];
  }
  for (let i = rightI; i < right.length; i++) {
    arr[outputI++] = right[i];
  }
  return arr
}

function main () {
    const DATA = [
      'Goodnight Moon',
      'Tome of Horrors',
      'Where the Wild Things Are',
      'Modern Thermodynamics',
      'Intro tt C++',
      'Papercraft',
      'Grimms Fairy Tales',
      'Bedtime Bestsellers'
    ];
    mSortStrings(DATA);
    console.log(DATA);
  }
  main();