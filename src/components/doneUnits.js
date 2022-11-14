import Searchbar from "./searchbar"
import { useState, useEffect } from "react";
export default function DoneUnits({doneUnits,student, setDoneUnits}){
    const [search, setSearch] = useState('')
    const [todrop, setdrop] = useState('')
    useEffect(()=>{
        let doneUnitsUrl = `http://localhost:9292/student/${student.id}`
        fetch(doneUnitsUrl)
        .then(resp=>resp.json())
        .then(data=>setDoneUnits(data))

        if(todrop!==""){
            fetch(`http://localhost:9292/student/${student?.id}/${todrop}`,{
            method: 'DELETE'
        })
        .then(resp=>resp.json())
        .then(data=>setDoneUnits(data))
    }
    },[todrop])
   
    function dropUnit(e){
        e.preventDefault();
        setdrop(e.target.code.value)
       
    }
    return(
    <div>
    
    <Searchbar search={search} setSearch={setSearch}/>
    <section className="units-arranged">
        <div>
            <header>Unit Code</header>
        </div>

        <div>
            <header>Unit Name</header>

        </div>

        <div>
            <header>Unit Description</header>
        </div>

        <div>
        </div>
        {/* <div>
            <header>Unit Grade</header>
        </div> */}
    </section>
    {doneUnits?.filter(unit=>unit.name?.toLowerCase()?.includes(search?.toLowerCase())).map((unit,index)=>{
        return <form key={index} className="units-arranged arranged" onSubmit={e=>dropUnit(e)}>
            <input name="code"type="number"value={unit.code} disabled/>
            <input name="name"type="text"value={unit.name} disabled/>
            <input name="description"type="text"value={unit.description} disabled/>
            <div><button>Drop</button></div>
        </form>
                   })}
    </div>
    )
}