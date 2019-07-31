import React from 'react';
import './App.scss';

export default class App extends React.Component {
  state = {
    linearResult: null,
    binaryResult: null
  }
  linearSearch = (inputArray, inputValue) => {
    for (let i = 0; i < inputArray.length; i++) {

       if (inputArray[i] == inputValue) {
         this.setState({
           linearResult: i+1
         })
           return i;
       }
   }

   return -1;
  }
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
  handleSubmit = (e) => {
    e.preventDefault()
    const inputValue = e.target.searchValue.value
    const inputArray = e.target.searchForm.value.split(' ')
    this.linearSearch(inputArray, inputValue)
    const sortedArray = inputArray.sort()
    this.binarySearch(sortedArray, inputValue)
  }
  render() {
    return (
      <div className="App">
        <h1 className='title'>Hello, and welcome to Lucas & Michael's Search Algorithm App</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='searchForm'>Array</label>
          <textarea
            className='searchForm'
            id='searchForm'
            name='searchForm'>
          </textarea>
          <label htmlFor='searchValue'>Value you are looking for</label>
          <input type='text' id='searchValue'></input>
          <button>Algorithm Search</button>
        </form>
        <div>
          {this.state.linearResult === null
           ? ''
           : (
             <div>
               <h2>Linear Result</h2>
               <p>It took {this.state.linearResult} steps to find your answer</p>

             </div>
           )}
        </div>
        <div>
          {this.state.binaryResult === null
           ? ''
           : (
             <div>
               <h2>Binary Result</h2>
               <p>It took {this.state.binaryResult} steps to find your answer</p>

             </div>
           )}
        </div>
      </div>
    );
  }

}
