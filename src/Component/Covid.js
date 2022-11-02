import React from 'react'
import { useEffect,useState } from 'react'
import axios from "axios"
import moment from 'moment'

const Covid = () => {

    const[dataCovid,setDataCovid] = useState([]);
    
    //Component dimount
    useEffect(() =>{
        async function fetchData(){
            let res = await axios.get("https://api.covid19api.com/country/Germany?from=2022-03-01T00:00:00Z&to=2020-04-01T00:00:00Z")
            console.log("fetch finished")
            let data = res && res.data ? res.data :[]
            data= data.reverse();
            
            {data && data.length > 0 && 
                data.map(item => {
                    item.Date = moment(item.Date).format("YYYY/MM/DD")
                    return item
                })
                
            }
            setDataCovid(data)
            console.log(">>>check response",res)
        }
        fetchData().finally()
        console.log("fetchdata fertig aufgerufen")
        
    },[]);
  return (
    <table id="customers">
        {console.log(">>>check data",dataCovid)}
        <thead>
        <tr>
            <th>Date</th>
            <th>Active</th>
            <th>Confirmed</th>
            <th>Deaths</th>
        </tr>
        </thead>
  <tbody>

      {dataCovid && dataCovid.length > 0  &&
          dataCovid.map(item => {
              return(
                <tr key={item.ID}>
                     <td>{item.Date}</td>
                     <td>{item.Active}</td>
                     <td>{item.Confirmed}</td>
                     <td>{item.Deaths}</td>
                </tr>
                    )
           })
      }
  
  </tbody>
  
 
</table>
  )
}

export default Covid