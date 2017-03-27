import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const PQueue = require('p-queue');
const got = require('got');
const queue = new PQueue({concurrency: 1});

// var Queue = function () {
//     var queue = Promise.resolve(true);
//     var add = function (job) {
//       queue = queue.then(job);
//     };
//     this.add = add;
// };

// var queue = new Queue();

class App extends Component {

  componentDidMount=()=>{
    queue.onEmpty().then(() => {
      console.log('7. Queue is empty');
    });

    queue.add(() => got('https://sindresorhus.com')).then(() => {
      console.log('Done: sindresorhus.com');
    });
    queue.add(() => got('https://sindresorhus.com')).then(() => {
      console.log('Done: sindresorhus.com');
    });
    queue.add(() => got('https://sindresorhus.com')).then(() => {
      console.log('Done: sindresorhus.com');
    });
    queue.add(() => got('https://sindresorhus.com')).then(() => {
      console.log('Done: sindresorhus.com');
    });

    queue.add(() => Promise.resolve('🦄')).then(console.log.bind(null, '5. Resolved'));
    queue.add(() => Promise.resolve('🐴')).then(console.log.bind(null, '6. Resolved'));

    // queue.add(function () {
    //   var promise = new Promise(function (resolve) {
    //     setTimeout(function () {
    //       console.log('1');
    //       resolve();
    //     }, 100);
    //   });
    //   return promise;
    // });
    // queue.add(function () {
    //   var promise = new Promise(function (resolve) {
    //     setTimeout(function () {
    //       console.log('2');
    //       resolve();
    //     }, 200);
    //   });
    //   return promise;
    // });
    // queue.add(function () {
    //   var promise = new Promise(function (resolve) {
    //     setTimeout(function () {
    //       console.log('3');
    //       resolve();
    //     }, 300);
    //   });
    //   return promise;
    // });

    // for (;;) {
    //   console.log(queue)
    // }
  }

  test1=()=>{
    queue.onEmpty().then(() => {
      console.log('7. Queue is empty');
    });
    queue.add(() => Promise.resolve('🦄')).then(console.log.bind(null, '5. Resolved'));
    queue.add(() => Promise.resolve('🐴')).then(console.log.bind(null, '6. Resolved'));
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
