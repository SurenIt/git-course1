import React from "react";
export const Cards = ({item, id, handleClick }) =>{
    const itemClass = item.stat ? " active " + item.stat : " ";
    
    return (
        <div className={"card" + itemClass} onClick={() => handleClick(id)}>
            <img src={item.img} alt=""/>
        </div>
    )
}