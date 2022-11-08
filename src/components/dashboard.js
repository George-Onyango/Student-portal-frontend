import {Routes, Route, Link} from 'react-router-dom'
import Academics from './academics'
import StudentInfo from './studentInfo'
import Finances from './finances';
import RequestQuoteRoundedIcon from '@mui/icons-material/RequestQuoteRounded';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';


import logo from '../assets/logo.jpg';
export default function Dashboard (){
    return (
        <main id="container">
            <Panel />
            <MainBoard />
        </main>
    )
}
function Panel(){
    return (
        <section id="panel">
            <section id='panel-links'>
            <article className='logo-panel-background'>
            <img class="logo" src={logo} alt="logo"/>
            </article>
            <Link className="nav-link" to ="/dashboard"><div><GridViewOutlinedIcon/> Dashboard</div></Link>
            <Link className="nav-link" to ="/dashboard/academics/"><div><ImportContactsIcon/> Academics</div></Link>
            <Link className="nav-link" to ="/dashboard/finances"><div><RequestQuoteRoundedIcon/> Financials</div></Link>
            {/* <Link to ="/announce">Announcements</Link> */}
            <Link className="nav-link" to ="/"><div><ExitToAppRoundedIcon/> Log Out</div></Link>
            </section>    
        </section>
    )
}

function MainBoard(){
    return(
        <section id="mainboard">
            <article className="logo-background">
                Hokage<img class="logo" src={logo} alt="logo"/>University
            </article>
            <Routes>
                <Route path="/" element={<StudentInfo />}/>
                <Route path="/academics/*" element={<Academics/>}/>
                <Route path="/finances" element={<Finances />} />
                {/* <Route path="/announce" element={<h1>Announcements</h1>}/> */}
                <Route path="/logout" element={<StudentInfo/>}/>
                {/* <Route exact path='/academics/doneUnits' element={<DoneUnits/>}/>
                <Route exact path='/academics/register' element={<RegisterCourse/>}/>
                <Route exact path='/academics/search' element={<Searchbar/>}/> */}
            </Routes>
        </section>
    )
}