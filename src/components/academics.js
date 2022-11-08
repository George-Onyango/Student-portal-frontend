import { Route, Routes, Link } from 'react-router-dom'
import DoneUnits from './doneUnits'
import RegisterCourse from './registerCourse'
import Searchbar from './searchbar'
export default function Academics(){
    return(
    <section id="academics">
        <nav>
            {/* <Link to="/dashboard/academics" className='academics-tabs'>Attempted Units</Link> */}
            <Link to="/dashboard/academics/doneUnits" className='academics-tabs'>Attempted Units</Link>
            <Link to="/dashboard/academics/register" className='academics-tabs'>Register New Units</Link>
            {/* <Link to="/academics/search" className='academics-tabs'>Searchbar</Link> */}
        </nav>
        <main>
            <Routes>
                <Route path='/' element={<DoneUnits/>}/>
                <Route path='/doneUnits' element={<DoneUnits/>}/>
                <Route path='/register' element={<RegisterCourse/>}/>
            </Routes>
        </main>
        
    </section>
        
    )
}