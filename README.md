## Search Algorithms - Lucas & Michael B



### Question 1
#### How many searches?

> A: Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and are using the recursive binary search algorithm. Identify the sequence of numbers that each recursive call will search to find 8.

* A: The sequence of numbers searched to reach 8 is: `[12, 6, 8]`


> B: Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and are using the recursive binary search algorithm. Identify the sequence of numbers that each recursive call will search to find 16?

* B: Returns `[12, 15, 18]` but the value isn't found in the sorted list

### Question 2

1. `linearSearch()` in `App.js`
```
linearSearch = (inputArray, inputValue) => {
  for (let i = 0; i < inputArray.length; i++) {

     if (inputArray[i] == inputValue) {
       this.setState({
         linearResult: i+1
       })
       // The render method will display when the result is saved
         return i;
     }
 }

 return -1;
}
```

2. `binarySearch()` in `App.js`
```
  binarySearch = (inputArray, inputValue, start=0, end=inputArray.length-1, counter=0) => {
    counter++
    console.log(counter)
    if (start > end) return -1;
    //find the midpoint and the item at the midpoint
    let index = Math.floor((start + end) / 2);
    let item = inputArray[index];

    //if the middle element is the target them return that location
    if (item === inputValue) {
        this.setState({
          binaryResult: counter
        })
        return index;
    }
    //if the middle element is less than the target then the target lies
    //on the right side so eliminate all left side and only
    //consider after the middle to the end of the array
    else if (item < inputValue) {
        return this.binarySearch(inputArray, inputValue, index + 1, end, counter);
    }
    //if the middle element is greater than the target then the
    //target is on the left side so the left of the middle
    else if (item > inputValue) {
        return this.binarySearch(inputArray, inputValue, start, index - 1, counter);
    }
  }
```


### Question 3

// Array for entire dewey Decimal system.
// Array is 10 items long, each item is a class. 
// Each class is an array of 10 Divisions
// Each sections is an array of 10 Sections
let deweySystem = [
[ 
  //First class in Array
  [
    //First Division in Class
    [ 
      //Sections in division
      Computer science, information & general works,
      Knowledge,
      The book (writing, libraries, and book-related topics),
      Systems,
      Data processing & computer science,
      Computer programming, programs & data
      Special computer methods,
      null,
      null,
      null,
    ]
  ],
  [
    //Second Division in Class
    [
      //Sections in division 2
      Bibliography,
      Bibliographies,
      Bibliographies of individuals,
      [Unassigned],
      Bibliographies of anonymous & pseudonymous works,
      Bibliographies of works from specific places,
      Bibliographies of works on specific subjects,
      General subject catalogs,
      Catalogs arranged by author, date, etc.,
      Dictionary catalogs
    ]
  ],
  //...8 more items
],
//...9 more Classes
]


 function deweySearch(array, bookNum, index=0) {
   let decimalNumber = bookNum.toString().split('.')
   index ++
    deweySearch(array[decimalNumber[index]], bookNum, index)
 }
 deweySearch(deweyClasses, 822.3)
 


### Question 4

### Question 5

### Question 6
