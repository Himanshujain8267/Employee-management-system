import React from 'react'
import Header from '../Others/Header';
import TaskListNumbers from '../TaskList/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = () => {



    let [name,setName] = React.useState("Himanshu Jain") ;
    let [task,setTask] = React.useState(5) ;
    let [completed,setCompleted] = React.useState(3) ;
    let [accepted,setAccepted] = React.useState(2) ;
    let [failed,setFailed] = React.useState(1) ;
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
<Header/>
<TaskListNumbers/>
<TaskList/>
</div>








  )
}

export default EmployeeDashboard