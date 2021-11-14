import React from 'react'
import { useState, useEffect , useMemo} from 'react';
import './style.css';
import Totalcase from './Totalcase';
import Footer from './Footer';
function StatewiseData() {


    const [stateData, setstateData] = useState([]);
    const [sortorder, setsortOrder] = useState("asc");
    const [sValue, setsValue] = useState("");
    
    useEffect(() => {

        loadData();

    }, []);

    const loadData = async () => {

        const response = await fetch('https://www.mohfw.gov.in/data/datanew.json');
        const actualData = await response.json();
        console.log(actualData);
        setstateData(actualData)
    }
    const sorting = (col) => {
       

        if (sortorder === "asc") {
            const sorted = [...stateData].sort((a, b) => {
                if(col!=keys.state_name)
                {
                    return parseInt(a[col])-parseInt(b[col]);
                }
                return b[col] < a[col] ? 1 : -1;
            });
            setstateData([...sorted]);
            setsortOrder("dsc");
        }
        if (sortorder === "dsc") {
            const sorted = [...stateData].sort((a, b) => {

                if(col!=keys.state_name)
                {
                    return parseInt(b[col])-parseInt(a[col]);
                }
                return a[col] > b[col] ? 1 : -1;
            });
            setstateData([...sorted]);
            setsortOrder("asc");
        }
    }
    const removeAll=()=>{

        setsValue("");
    }

    const keys = useMemo(()=>{
        if(stateData.length)
        {
            let temp = Object.keys(stateData[0]).reduce((acc,next)=>{
                acc[next]=next;
                return acc;
                
            },{});
            return temp;

        }
        return {};

    },[stateData])
    console.log(keys);
    return (
        <>

            <Totalcase data={stateData}/>
            <div className="container-fluid mt-5">

                <div>
                    <input type="text" placeholder="Search...🔍"style={{ marginTop: 50, marginBottom: 20, width: "30%", padding: 8 }} value={sValue} onChange={(e) => setsValue(e.target.value)} />

                    <button type="button" onClick={removeAll} style={{marginLeft:10}} className="btn btn-danger">Clear</button>
                </div>
               
                <div className="table-responsive">
                    <table className="table table-hover table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">State  &nbsp;<i onClick={() => sorting(keys.state_name)} className="fas fa-sort"></i></th>
                                <th scope="col">Positive &nbsp;<i onClick={() => sorting(keys.positive)} className="fas fa-sort"></i></th>
                                <th scope="col">Death&nbsp;<i onClick={() => sorting(keys.death)} className="fas fa-sort"></i></th>
                                <th scope="col">Active&nbsp;<i onClick={() => sorting(keys.active)} className="fas fa-sort"></i></th>
                                <th scope="col">New Positive&nbsp;<i onClick={() => sorting(keys.new_positive)} className="fas fa-sort"></i></th>
                                <th scope="col">New Death&nbsp;<i onClick={() => sorting(keys.new_death)} className="fas fa-sort"></i></th>
                            </tr>
                        </thead>
                        <tbody>
                            {stateData.filter((val)=>{

                                if(sValue==="")
                                {
                                    return  val;
                                }
                                else if(val.state_name.toLowerCase().includes(sValue.toLowerCase()))
                                {
                                    return val;
  
                                }

                            }).map((ele, ind) => {
                                return (
                                    <>
                                        <tr key={ele.state_name}>
                                            <th scope="row">{ind}</th>
                                            <td>{ele.state_name ? ele.state_name : "TotalCase"}</td>
                                            <td>{ele.positive}</td>
                                            <td>{ele.death}</td>
                                            <td>{ele.active}</td>
                                            <td>{ele.new_positive}</td>
                                            <td>{ele.new_death}</td>
                                        </tr>


                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            
           <Footer/>
        </>
    )
}

export default StatewiseData