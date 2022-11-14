import { useState } from "react"
import Searchbar from "./searchbar"
export default function RegisterCourse({units,formdata,setFormData,student}){
    const [search, setSearch] = useState('')
   
    function addUnit(e){
        e.preventDefault();
        console.log(e.target)
        setFormData({
            code:e.target.code.value,
            name: e.target.name.value,
            description: e.target.description.value
        })
    }
    console.log(formdata)
    return(
        <>
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
                </section>
                {units.filter(unit=>unit.name?.toLowerCase()?.includes(search?.toLowerCase())).map((unit,index)=>{
                    return <form key={index} className="units-arranged arranged" onSubmit={e=>addUnit(e)}>
                        <input name="code"type="number"value={unit.code} disabled/>
                        <input name="name"type="text"value={unit.name} disabled/>
                        <input name="description"type="text"value={unit.description} disabled/>
                        <div><button>Add</button></div>
                    </form>
                    })}
        </>
        
    )
}