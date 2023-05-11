import React from "react";

interface EmployeesProps {
    employees: [
        {
         emp_no: string,
         first_name: string,
         last_name: string,
         birth_date: string,
        }
      ]
    }

class Employees extends React.Component<EmployeesProps> {

  render() {
    const {employees} = this.props;

    const epmloyees_row = employees.map((emp_no, index) =>{
        return <tr key={index}><td>{index + 1}</td>
        <td>{emp_no.emp_no}</td>
        <td>{emp_no.first_name}</td>
        <td>{emp_no.last_name}</td>
        <td>{emp_no.birth_date}</td></tr> 
       });
   

    return <table>
    <thead>
      <tr>
        <th>#</th>
        <th>№</th>
        <th>Name</th>
        <th>Last name</th>
        <th>Birthday</th>
      </tr>
    </thead>
    <tbody>
      {epmloyees_row} 
    </tbody>
  </table>; 
}
}
export default Employees;