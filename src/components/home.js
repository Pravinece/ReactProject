import { useState } from "react";
import ProductCard from "./productcard";
export default function Choice(){
    const List=[
    {name:"chennai",place:["koyambedu","tambaram"]},
    {name:"Thanjavur",place:["Mannai","Needamangalam"]},
    {name:"Trichy",place:["Ariyalur","Perambalur"]}
    ];
    const [display,Setdisplay]=useState([])
    const Handleit=(event)=>{
        const i=event.target.selectedIndex;
        const selPlace=List[i].place;
        Setdisplay(selPlace);
    }
    return(
        <div className="bg-home">
         <h6>Choose Location...</h6>
        <select className="choose" onChange={Handleit}>{
            List.map((item,index)=>(
              <option key={index}>{item.name}</option>
            ))
            }
        </select>
        {display &&
    display.map((place, index) => (
        <ProductCard key={index} place={place} />
    ))}
</div>
    );
}

