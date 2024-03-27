import React, { useEffect } from 'react'
import { UseEmployeeData } from '../Context/Context'

function Employee() {
  let {employeData , setEmployeData , teamData ,setTeamData} =UseEmployeeData();

//   console.log(employeData);
  let Add = (element) =>{
    setTeamData([...teamData,element])

  }
//   useEffect(()=>{
//     let filterData = ((e)=>{

//     })

//   },[teamData])
  console.log(teamData);
  return (
    <div className='employe-box'>
    <h2 className='heading'>Employees</h2>
  {employeData.map((element) => (
    
     <>
      {teamData.some((e) => e.id === element.id) ? (
        
        <div className='employe-box1' style={{ display: 'flex', gap: '10px' ,color:'gray'}}>
          <p>{element.first_name}</p>
          <p>{element.age}</p>
          
        </div>
      ) : (
       
        <div className='employe-box1' style={{ display: 'flex', gap: '10px' }}>
          <p>{element.first_name}</p>
          <p>{element.age}</p>
          <button onClick={() => Add(element)}>Add</button>
        </div>
      )}
    </>
  ))}
</div>

  )
}

export default Employee