import React, { useEffect, useState } from "react";
import img1 from "./sojib.jpg"



const Tempapp=()=>
{
    const [city,setcity]=useState(null);
    const [search,setsearch]=useState("pabna");
    useEffect(()=>
    { 
        const fetchApi=async()=>
        {
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=356b52068f782fa5a9cb6c2b37218a96`
            const res= await fetch(url);
            const resJson=await res.json();
            setcity(resJson.main)
            console.log(resJson);

        }
        fetchApi()
    },[search])
    const inputevent=(hevent)=>
    {
        setsearch(hevent.target.value)
    }
    return (
        <React.Fragment>
        <div className="box">
        <div className="inputField">
        <input type="search" placeholder="Search Area" className="Search-field" onChange={inputevent}/>
        </div>
        <div className="img1">
        <img src={img1} alt=""/>
        
        </div>
        {
            !city?(
                <p>Data Not Found</p>
            ):(
                <React.Fragment>
                <div className="info">
        <h1  className="icon"><i className="fas fa-street-view"></i>  {search}</h1>
        </div>
        <div className="temp">
        <h1 className="Present">{city.temp}°C</h1>
        <h3>Min  {city.temp_min}°C || Max  {city.temp_max}°C</h3>
        </div>
        </React.Fragment>
            )
        }
        </div>
        <h5>Build By Md Sojib Hosen</h5>
        </React.Fragment>
    )
}
export default Tempapp;