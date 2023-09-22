

const sampledata = [
{ Id: 6, Date: '3/5/15,', Individual: 'Bangled Cobra' ,     Healthy: 'true',     Email: 'Dr.Parl@gmail.com'},
{ Id: 7, Date: '1/5/20,', Individual: 'Striped RoadRunner',  Healthy: 'true',    Email: 'Tracy8l@gmail.com'},
{ Id: 8, Date: '6/9/18,', Individual: 'Bangled Cobra' ,     Healthy: 'true',     Email: 'Dr.Parl@gmail.com'},
{ Id: 9, Date: '5/30/15,', Individual: 'Howler Monkey' ,    Healthy: 'false',    Email: 'Dr.Xerxes@gmail.com'},
{ Id: 10, Date: '4/28/22,', Individual: 'Bangled Cobra' ,   Healthy: 'true',     Email: 'Dr.Johnson@gmail.com'}

]
 
function Tablebox(){
    return (
        <div className="Table-Class">
            <table>
                <tr className="tr">
                    <th>Id</th>
                    <th>Date</th>
                    <th>Individual</th>
                    <th>Healthy?</th>
                    <th>Email Address</th>
                    

                </tr>
                {sampledata.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.Id}</td>
                            <td>{val.Date}</td>
                            <td>{val.Individual}</td>
                            <td>{val.Healthy}</td>
                            <td>{val.Email}</td>
                      
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}
 
export default Tablebox;






