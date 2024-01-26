import './Calc.css'
function Expensecalc(){
    
    return(
        <>
        <div className='div1'>
        <div className='divouter'>
        <div className='divin'>
        <tabel>
            {/* Salary */}
            <tr>
                <th><h3>salary</h3></th>
            <td><input type="text" id="salary" placeholder="Eg.45,000" name="Salary"></input></td>
            </tr>

            {/* Expense or Income*/}
            <tr>
                <th><h3>Type</h3></th>
                <td><select id="typ" name="type">
                        <option value="income">income</option>
                        <option value="Expences">Expences</option>
                    </select>
                 </td>
            </tr>

            {/* Description */}
            <tr>
                <th><h3>Descption</h3></th>
                <td><input type="textarea" id="des"></input></td>
            </tr>
            </tabel>
            <button type="button" onClick={function(){
                const a=document.getElementById("salary").value
                const b=document.getElementById("typ").value
                const c=document.getElementById("des").value
                console.log(a)
                console.log(b)
                console.log(c)
           var table=document.getElementById("tbl");
           var data=`<tr><td>${a}</td><td>${b}</td><td>${c}</td></tr>`
           table.innerHTML+=data;
    }} id="btn">Submit</button> 
        
        </div>
        <div className='divin'><tabel id="tbl">
            <tr>
                <th>salary</th>
                <th>Type</th>
                <th>Description</th>
            </tr>

            </tabel>
        </div>
        </div>
        </div>
        </>
    )
}

export default Expensecalc