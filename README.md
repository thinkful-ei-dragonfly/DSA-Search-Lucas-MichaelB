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
Michael will update after lunch
```


### Question 3

### Question 4

### Question 5

### Question 6
