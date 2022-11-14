export default function Finances(){
    return (
        <>
        <article id="finance-table" >
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th colSpan={2}>
                            Fincancial Information
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Student</td>
                        </tr>
                        <tr>
                            <td>Admission No.</td>
                            <td>Admission details</td>
                        </tr>
                        <tr>
                            <td>Total Paid overall</td>
                            <td>153300</td>
                        </tr>
                        <tr>
                            <td>Semester</td>
                            <td>year3 sem2</td>
                        </tr>
                        <tr>
                            <td>Semester Balance</td>
                            <td>0.00</td>
                        </tr>
                        
                        </tbody>
                        <tfoot>
                        
                        </tfoot>
                        
                    </table>
                </article>
        </>
    )
}
