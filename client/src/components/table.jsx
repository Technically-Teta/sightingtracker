

const sampledata = [
{ Id: 6, Date: '3/5/15,', Individual: 'Bangled Cobra' , Healthy: true, Email: 'Dr.Parl@gmail.com'},
{ Id: 7, Date: '1/5/20,', Individual: 'Striped RoadRunner' , Healthy: true, Email: 'Tracy8l@gmail.com'},
{ Id: 8, Date: '6/9/18,', Individual: 'Bangled Cobra' , Healthy: true, Email: 'Dr.Parl@gmail.com'},
{ Id: 9, Date: '5/30/15,', Individual: 'Bangled Cobra' , Healthy: false, Email: 'Dr.Xerxes@gmail.com'},
{ Id: 10, Date: '4/28/22,', Individual: 'Bangled Cobra' , Healthy: true, Email: 'Dr.Johnson@gmail.com'}

]
 
function Tablebox(){
    return (
        <div className="Table-Class">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.age}</td>
                            <td>{val.gender}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}
 
export default Tablebox;






}