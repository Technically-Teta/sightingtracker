
 
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






