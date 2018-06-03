const http = new EasyHTTP;

//GET Users
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

//USER data
const data = {
  name: 'John Doe',
  username: 'jodoe',
  email: 'jdoe@gmail.com'
}

http.post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));
