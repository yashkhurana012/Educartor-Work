import React, { useEffect, useState } from 'react'
import { UseEmployeeData } from '../Context/Context'

function Team() {
    let {employeData , setEmployeData , teamData ,setTeamData} = UseEmployeeData();
    let [averageAge , setAverageAge] = useState(0);

    let remove = (element) =>{
        
        let a = teamData.filter((e)=>{
            return element.id!=e.id;

        })
        a.sort((x,y)=>y.age - x.age)
        setTeamData(a);
        
        
    }
    useEffect(()=>{
        if(teamData.length > 0){
            let a = teamData.reduce((acc, elem ) =>{
                return acc=acc+elem.age;
            },0)
            console.log(a);
            setAverageAge(a/teamData.length)

        }else{
            setAverageAge(0)
        }
       

    },[teamData])
  return (
    <div className='employe-box teambox' >
    <div >
    <h2 className='heading'>Team</h2>
       <div>
         <h5 className='sortAge'>Sort by age</h5>
        {teamData.map((element)=>(
            <div className='employe-box1' style={{ display: 'flex', gap: '10px' }}>
            <p>{element.first_name}</p>
            <p>{element.age}</p>
            <button onClick={()=>remove(element)}>Remove</button>
            </div>
        ))

        }
        </div>
        
    </div>
    <div className='avgAge'>
        
         <h2 >Average age :</h2>
         <h2>{averageAge.toFixed(2)}</h2>
    </div>
    </div>
  )
}

export default Team