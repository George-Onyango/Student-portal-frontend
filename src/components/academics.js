import { Route, Routes, Link } from 'react-router-dom'
import DoneUnits from './doneUnits'
import RegisterCourse from './registerCourse'

export default function Academics({units,doneUnits,setFormData ,formdata, setDoneUnits,student}){
    console.log("inside academics ",doneUnits)
    return(
    <section id="academics">
        <nav>
            <Link to="/dashboard/academics/doneUnits" className='academics-tabs'>Attempted Units</Link>
            <Link to="/dashboard/academics/register" className='academics-tabs'>Register New Units</Link>
        </nav>
        <main>
            <Routes>
                <Route path='/' element={<DoneUnits doneUnits={doneUnits}setDoneUnits={setDoneUnits} student={student}/>}/>
                <Route path='/doneUnits' element={<DoneUnits student={student} doneUnits={doneUnits}setDoneUnits={setDoneUnits}/>}/>
                <Route path='/register' element={<RegisterCourse student={student} units={units}setFormData={setFormData} formdata={formdata}/>}/>
            </Routes>
        </main>
        
    </section>
        
    )
}