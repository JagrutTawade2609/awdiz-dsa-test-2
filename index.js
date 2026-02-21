// 1 Swap Two Numbers (Without Third Variable)
//Answer:
let a = 5
let b = 10
a = a + b 
b = a - b 
a = a - b 
console.log("a=",a,"b=", b)


// 2️. Check Divisible by Both 3 and 5
function divisible(num) {
    return num % 3===0 && num % 5===0;
}
console.log(divisible(15))


// 3. Find First Element Greater Than 10
let arr = [3, 7, 12, 5, 20]
function findGreater(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            console.log(arr[i])
        }
    }
    return "Not Found"; 
}
console.log(findGreater(arr))


// 4. Repeat String N Times
function repeatString(str,n) {
    let result = ""
    for (let i = 0; i < n; i++) {
        result += str
    }
    return result;
}
console.log(repeatString("Hi",3))

// 5. Count Words in a Sentence
function countWords(sentence) {
    let count = 1; //return 3 instead 4 start count from 1 because last word  not followed by space
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === " ") {
            console.log(i)
            count++;
        }
    }
    return count;
}
console.log(countWords("I love MERN stack"))

// 6️. Check if Array is Empty
function empty(arr) {
    return arr.length === 0;
}
console.log(empty([]))

// 7️. Find Index of Element (Without indexOf) 
let arr1 = [5, 8, 2, 9]; //not able to solve binary unsorted data
let match = 2;
let result = arr1
  .map((value, index) => (value === match ? index : -1))
  .filter((index) => index !== -1);
console.log(result[0])

// 8️.  Remove First Element of Array
function remove(arr) {
    return arr.filter((value, index) => index !== 0);
  }
  console.log(remove([10, 20, 30, 40]));
  

// 9. Check if String Starts With Vowel
function Vowel(str) {
    let firstChar = str[0];
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < vowels.length; i++) {
      if (firstChar === vowels[i]) {
        return true;
      }
    }
    return false;
  }
  console.log(Vowel("apple")); 


// 10. Find Sum of Digits of a Number
let num = [1,2,3,4];
let sum = num.reduce((acc, digit) => acc + digit, 0);
console.log(sum);
