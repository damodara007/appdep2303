import React, { useState } from 'react'

function EmployeesForm() {

  let [employees,setEmployees]= useState([]);

  let getEmployeesData = async()=>{
let reqOptions ={
  method:"GET"
}

    let JSONData = await fetch
     ("/getEmployees",reqOptions);

     let JSOData = await JSONData.json();
setEmployees(JSOData);
     console.log(JSOData);
  };

  let updateCountries = async()=>{
    let reqOptions ={
      method:"PUT"
    }
    
        let JSONData = await fetch
         ("/updateCountry",reqOptions);
    
         let JSOData = await JSONData.json();
    
         console.log(JSOData);
      };

       let deleteCountries = async()=>{
    let reqOptions ={
      method:"DELETE"
    }
    
        let JSONData = await fetch
         ("/deleteCountry",reqOptions);
    
         let JSOData = await JSONData.json();
    
         console.log(JSOData);
      };

      
  return (
    <div>
      <form>
        <button type="button" onClick={()=>{
           getEmployeesData()
        }}>Get Employees</button>

<button type="button" onClick={()=>{
           updateCountries()
        }}>Update</button>

<button type="button" onClick={()=>{
          deleteCountries()
        }}>Delete</button>


      </form>
      <table>
        <thead>
          <tr>
          <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Department</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee)=>{
            return  <tr key ={employee.id}>
            <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.gender}</td>
              <td>{employee.age}</td>
              <td>{employee.department}</td>
              <td>{employee.country}</td>
            </tr>
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  )
}

export default EmployeesForm