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
   

    return <table>
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