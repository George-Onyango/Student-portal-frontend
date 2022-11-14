import './App.css';
import {Navigate, Route,Routes} from 'react-router-dom'
import Dashboard from './components/dashboard';
import Login from './components/login';
import ForgotPassword from './components/forgotPassword';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [inCorrectDetails, setIncorrectDetails] = useState(false)
  const [units, setUnits] = useState([])
  const [s,setS] = useState('')
  const [formdata,setFormData] = useState({})
  const [doneUnits,setDoneUnits] = useState([])
  const [unitData,setUnitData] = useState({})
  const [isDropped,setIsDropped] = useState(false)


  function handleSub(e,user,password){
    e.preventDefault()
    let student =users?.filter(student=>student.name===user&&password===student.password)
    if (student.length > 0){
      setLoggedIn(true)
      setIncorrectDetails(false)
      setS(student[0])
    }
    else {
      setIncorrectDetails(true)
    }
  }
 
  useEffect(()=>{
    let studentsurl = "http://localhost:9292/students"
    let unitsurl = "http://localhost:9292/units"
    let adduniturl = `http://localhost:9292/student/${s?.id}`
    fetch(studentsurl)
    .then(resp=>resp.json())
    .then(data=>{
      setUsers(data)
    }); 
    fetch(unitsurl)
    .then(resp=>resp.json())
    .then(data=>setUnits(data));

    let params = {
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(formdata)
    }
    if(formdata){
      fetch(adduniturl,params)
      .then(resp=>resp.json())
      .then(data=>setDoneUnits({...doneUnits,data}))
    }
  
  }

  ,[formdata])

  return (
    <>
    <Routes>
    <Route path="/" element={<Login
      inCorrectDetails={inCorrectDetails}
      login={loggedIn}
      handleSub={handleSub}
      user={users}
      setUsers={setUsers}/>} />
      <Route path="/ForgotPassword" element={<ForgotPassword/>} />
      <Route path="/dashboard/*" element={<Dashboard setFormData={setFormData} formdata={formdata}
      login={loggedIn} setLogin={setLoggedIn} student={s} units={units}
      doneUnits = {doneUnits}
      unitData={unitData}
      setDoneUnits={setDoneUnits}
      setUnitData={setUnitData}
      isDropped = {isDropped}
      setIsDropped={setIsDropped}
      />}/>
      </Routes>
    </>
  );
}

export default App;
