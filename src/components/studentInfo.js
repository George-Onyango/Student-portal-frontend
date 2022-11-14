import person from '../assets/person-logo.png';
export default function StudentInfo({student}){
    console.log("studentinfo",student)
    return(
        <section id="student-info">

            <h2>Welcome {student?.name} {student?.surname}</h2>
            <article id="basic-info">
                <figure id="student-image">
                    <img src={person} alt="person logo" className='person-logo'/>
                    <figcaption>
                    Student Image
                    </figcaption>
                </figure>

                <article >
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th colSpan={2}>
                            Student Information
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Admission No.</td>
                            <td>{student?.admission_number}</td>
                        </tr>
                        <tr>
                            <td>Names</td>
                            <td>{student?.name} {student?.surname}</td>
                        </tr>
                        <tr>
                            <td>ID/Passport</td>
                            <td>{student?.national_id}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{student?.gender}</td>
                        </tr>
                        </tbody>
                        <tfoot>
                        
                        </tfoot>
                        
                    </table>
                </article>

            </article>
        </section>
        )
}