import React, { Component } from 'react';
import data from "./data"; 
import yearAndValue from "./yearValue";

// get dynamic key, parse to int, and sort descendingly
const yearsList = Object.keys(yearAndValue);
const yearsInt = yearsList.map((aYearStr) => {
    var aYearInt = Number(aYearStr);
    return aYearInt;
});
const sortYears = yearsInt.sort((a,b) => {return b - a;});

// fixed 12 months
const monthsList = ["01","02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

// render table header
function H (){
    return(
        <tr>
            <td>Average</td>
        {monthsList.map(function(m){
            return <td>{m}</td>
        })}
        </tr>
    );
}
// rendre a cell
function Cell (aYearObj){
    return (
        <td>
        {monthsList.map(function(m){
            return aYearObj[m]? aYearObj[m]:'ooo';
        })}
        </td>

    );
}
// render 12 month's value
function ListValue (){
    // console.log(oneYearValu);
    var aa = sortYears.map(s => {
        var aYearObj = yearAndValue[s.toString()];
        var cc = monthsList.map(function(m){
            var monthV =  aYearObj[m]? aYearObj[m]:'';
            console.log({monthV});
            return <td>{monthV}</td>
        })
        return  <tr><td>{s}</td>{cc}</tr> 
    })

    return(
         aa
    );     
};

const socialMediaList = data.SocialMedias;
class Example1 extends Component {  
	render() {
		return (
            <table className="toCenter">
            <h3 className="toCenter">Sample Table</h3>
            <H/>
           <ListValue/>
           </table>
        );
    }
} 
export default Example1;