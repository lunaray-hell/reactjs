import { useState } from "react";

export function User() {

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

        return <>

        <div>User: {user.name} {user.last_name}</div>
        <div>Age: {user.age}</div>
        <div>Pet: {user.cat.name}</div>
        <div>Pet age: {user.cat.age}</div>
       
            <div>
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
        </table>

        </div>
        </>;
    };

// есть объект юзер есть имя фам возраст кот и зп нужно создать компонент юзер, который будет выводить эти данные 

//props хуки..рирендеринг(rendering визуализация).. компонент.. состояние.. зарекурсить., npm start npm i (для создания node modules) 