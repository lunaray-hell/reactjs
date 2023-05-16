import React from "react";

interface SalariesProps {
    salaries: [
        {
         salary: string,
         from_date: string,
        }
    ]
    }

class Salaries extends React.Component<SalariesProps> {

  render() {
    const {salaries} = this.props;

    const salaries_rows = salaries.map((salary, index) =>{
        return <tr key={index}><td>{index + 1}</td><td>{salary.salary}</td><td>{salary.from_date}</td></tr> 
   
       });
   

    return <table className="table">
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
  </table>; 
}
}
export default Salaries;
// что-то с чилдрен This JSX tag's 'children' prop expects a single child of type 'ReactNode', but multiple children were provided.

// npm i -D react-router-dom отвечает за роутинг

// на дом сделать компонент селерис роу сейчас он конст.. разделить селери роу компонент ссделать к которой надо передавать компонент селери.. и это селери будет возвращать строку передавать селери и индекс получится та же самая таблица строка будет представлять з себя какой то компонент аналог онклика   