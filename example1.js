/* Here's an example of using promises in JavaScript with the async/await syntax: */

function getData() {
  return new Promise(function(resolve, reject) {
    // Async operation, such as fetching data from API
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        resolve(json); // Return data as resolved promise
      })
      .catch(error => {
        reject(error); // Return error as rejected promise
      });
  });
}

async function fetchData() {
  try {
    const data = await getData();
    console.log(data); // Output data from resolved promise
  } catch (error) {
    console.log(error); // Output error from rejected promise
  }
}

fetchData(); // Call the fetchData() function


/* In this example, we define the getData() function to return a promise as before. We then define an async function called fetchData() which uses the await keyword to wait for the getData() promise to be resolved or rejected. If the promise is resolved, the data variable is set to the resolved value, which we can then output to the console. If the promise is rejected, the error variable is set to the rejected value, which we can also output to the console.

Finally, we call the fetchData() function, which internally calls the getData() function using the await keyword to handle the promise resolution or rejection.

Using async/await can make asynchronous code easier to read and write, especially when dealing with complex chains of promises.

*