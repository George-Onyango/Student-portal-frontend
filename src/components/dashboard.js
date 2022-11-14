import {Routes, Route, Link} from 'react-router-dom'
import Academics from './academics'
import StudentInfo from './studentInfo'
import Finances from './finances';
import RequestQuoteRoundedIcon from '@mui/icons-material/RequestQuoteRounded';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import logo from '../assets/logo.jpg';
import { useEffect, useState } from 'react';

export default function Dashboard ({unitData,setUnitData,isDropped,setIsDropped,doneUnits,login, student, units,setFormData,formdata, setDoneUnits}){
    return (
        <main id="container">
            <Panel login={login} student={student}/>
            <MainBoard student={student} units={units}
             setFormData={setFormData} formdata={formdata} doneUnits={doneUnits}setDoneUnits={setDoneUnits}/>
        </main>
    )
}
function Panel({setLogin}){
    function handleLogOut() {
        setLogin(false);
    }
    return (
        <section id="panel">
            <section id='panel-links'>
            <article className='logo-panel-background'>
            <img class="logo" src={logo} alt="logo"/>
            </article>
            <Link className="nav-link" to ="/dashboard"><div><GridViewOutlinedIcon/> <span>Dashboard</span></div></Link>
            <Link className="nav-link" to ="/dashboard/academics/"><div><ImportContactsIcon/> <span>Academics</span></div></Link>
            <Link className="nav-link" to ="/dashboard/finances"><div><RequestQuoteRoundedIcon/> <span>Fincancials</span></div></Link>
            <Link onClick={handleLogOut} className="nav-link" to ="/"><div><ExitToAppRoundedIcon/> <span>Log out</span></div></Link>
            </section>    
        </section>
    )
}

function MainBoard({unitData,setUnitData,isDropped,setIsDropped,student, units,setFormData, formdata,doneUnits, setDoneUnits}){
    return(
        <section id="mainboard">
            <article className="logo-background">
                Hokage<img class="logo" src={logo} alt="logo"/>University
            </article>
            <Routes>
                <Route path="/" element={<StudentInfo student={student}/>}/>
                <Route path="/dashboard" element={<StudentInfo student={student}/>}/>
                <Route path="/academics/*" element={<Academics 
                doneUnits = {doneUnits}
                unitData={unitData}
                setUnitData={setUnitData}
                isDropped = {isDropped}
                setIsDropped={setIsDropped}
                student={student} units={units}setFormData={setFormData} formdata={formdata}setDoneUnits={setDoneUnits}/>}/>
                <Route path="/finances" element={<Finances student={student}/>} />   
                <Route path="/logout" element={<StudentInfo/>}/>
            </Routes>
        </section>
    )
}