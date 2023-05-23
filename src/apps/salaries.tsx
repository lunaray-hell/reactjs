import React from "react";
import { ISalary } from "./interfaces/salary";

interface SalariesProps {
    salaries: [
        salary: ISalary
    ]
    }

// class SalaryRow extends React.Component<SalariesProps> {
//     render() {
//       return '';
//       // return <tr key={index}><td>{index + 1}</td><td>{salary.salary}</td><td>{salary.from_date}</td></tr>
//       }
//   }

class SalaryRow extends React.Component<SalariesProps> {

  render() {
    const {salaries} = this.props;

    // return <div className="row">
    //         <div className="col-4"
    //                  onClick={()=> {
    //                   <tr key={index}><td>{index + 1}</td><td>{salary.salary}</td><td>{salary.from_date}</td></tr>
    //                  }}
    //                  />
    //         </div>

    const salaries_rows = salaries.map((salary, index) =>{
        return <tr key={index}><td>{index + 1}</td><td>{salary.salary}</td><td>{salary.from_date}</td></tr> 
       });
   
    return <>

    <table className="table">  
    <thead>
      <tr>
        <th>#</th>
        <th>Salary</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {salaries_rows} 
    </tbody>
  </table> 
  </>
}
}
export default SalaryRow;
// что-то с чилдрен This JSX tag's 'children' prop expects a single child of type 'ReactNode', but multiple children were provided.

// npm i -D react-router-dom отвечает за роутинг

// на дом сделать компонент селерис роу сейчас он конст.. разделить селери роу компонент сделать к которой надо передавать компонент селери.. и это селери будет возвращать строку передавать селери и индекс получится та же самая таблица строка будет представлять из себя какой то компонент аналог онклика   