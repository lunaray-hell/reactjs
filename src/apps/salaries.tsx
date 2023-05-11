import React from "react";

interface SalariesProps {
  salaries: {
      salary: string,
      from_date: string,
    }
  }

class Salaries extends React.Component<SalariesProps> {
  salary = '';
  from_date = '';
  render() {
    const {salaries} = this.props;

    return <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Salary</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {/*{salaries} по идее*/} 
    </tbody>
  </table>; 
}
}
export default Salaries;
// что-то с чилдрен This JSX tag's 'children' prop expects a single child of type 'ReactNode', but multiple children were provided.