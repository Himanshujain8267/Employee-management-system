import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import {AuthContext} from './context/AuthProvider' ;
import { useContext } from 'react'


const App = () => {
const [user,setUser] = useState(null)
const [loggedInUser,setLoggedInUser] = useState(null) ;
const authData = useContext(AuthContext) ;



useEffect(()=>{
 
    const loggedInUser = localStorage.getItem("loggedInUser") ;
if(loggedInUser){
 console.log(loggedInUser) ;
} 
},[]) ;


const handleLogin = (email,password) => {

if(email == 'admin@me.com' && password == '123') {
  setUser('admin') ;
  setLoggedInUser(authData.admin[0]) ;
  localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'})) ;
}
else if(authData ){
  const employee = authData.employees.find((e)=>email == e.email && password == e.password)
  if(employee){
    setUser('employee') ;
    setLoggedInUser(employee) ;
    localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'})) ;
  }
}
else{
  alert("Invalid credentials") ;
}
}
const data = useContext(AuthContext) ;
  return (
   <>
   
  {!user ? <Login handleLogin={handleLogin}/>:''}
{user === 'admin' ? <AdminDashboard data={loggedInUser}/> : user === 'employee' ? <EmployeeDashboard data={loggedInUser}/> : null}
   
   </>
  )
}

export default App