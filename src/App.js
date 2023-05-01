import { Calculator } from "./apps/calculator";
import { User } from "./apps/user";
// import logo from './logo.svg';
// import './App.css';


// function hello(user){

//   if (user){
//     return <div>
//            <span>{user.name}</span>
//            <strong>{user.last_name}</strong>
//          </div>;
//   }
//   return 'undefined';
// }

/*function это компонент*/ 

function App() {

//   // const a = 10;
//   // const b = 15;
  
  // let user = {
  //      name: 'John'... there is a user

// каждый html тег это компонент

//   const c = <span>Hello</span>;
//   const name = hello();

/*выводим значение переменной    A: {a} */
  return (
    <div>
     {/* <p> A: {a} </p>  
     <p> B: {b} </p>  

     <p> Sum: {a + b} </p>  

     <p>{c}, {name}</p>  

     <Calculator/>  */}
     <User/>

    </div>
  );
}

export default App;
