import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var Queue = function () {
    var queue = Promise.resolve(true);
    var add = function (job) {
      queue = queue.then(job);
    };
    this.add = add;
};

var queue = new Queue();

class App extends Component {

  componentDidMount=()=>{
    queue.add(function () {
      var promise = new Promise(function (resolve) {
        setTimeout(function () {
          console.log('1');
          resolve();
        }, 100);
      });
      return promise;
    });
    queue.add(function () {
      var promise = new Promise(function (resolve) {
        setTimeout(function () {
          console.log('2');
          resolve();
        }, 200);
      });
      return promise;
    });
    queue.add(function () {
      var promise = new Promise(function (resolve) {
        setTimeout(function () {
          console.log('3');
          resolve();
        }, 300);
      });
      return promise;
    });
  }

  test1=()=>{
    queue.add(function () {
      var promise = new Promise(function (resolve) {
        setTimeout(function () {
          console.log('1');
          resolve();
        }, 100);
      });
      return promise;
    });
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={()=> {this.test1()}} >{"test1"}</button>
      </div>
    );
  }
}

export default App;
