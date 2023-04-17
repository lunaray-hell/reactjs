import logo from './logo.svg';
import './App.css';

function hello(user){

  if (user){
    return <div>
           <span>{user.name}</span>
           <strong>{user.last_name}</strong>
         </div>;
  }
  return 'undefined';
}

/*function это компонент*/ 

function App() {

  const a = 10;
  const b = 15;
  
  let user = {
       name: 'John',
       last_name: 'Barlowe',
       age: 30,
       cat: {
           name: 'Happy',
           age: 1,
       },
       salaries: [
    {
        salary: '5670',
        from_date: '2009'
        },
        {
        salary: '1670',
        from_date: '2018'
        },
        {
        salary: '15670',
        from_date: '2012'
        },
    ],
    };
  const salaries = user.salaries.map((salary, index) =>{
    return <tr><td>{index + 1}</td><td>{salary.salary}</td><td>{salary.from_date}</td></tr> 
  });




  const c = <span>Hello</span>;
  const name = hello();

/*выводим значение переменной    A: {a} */
  return (
    <div>
     <p> A: {a} </p>  
     <p> B: {b} </p>  

     <p> Sum: {a + b} </p>  

     <p>{c}, {name}</p>  
     <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Salary</th>
          <th>Date</th>
        </tr>
      </thead>
        <tbody>
          {salaries}
        </tbody>
       {/*<tfoot>
        <tr>
          <td>#</td>
          <td>Salary</td>
          <td>Date</td>
        </tr>
       </tfoot>*/ }
     </table>
    
    </div>
  );
}

export default App;
