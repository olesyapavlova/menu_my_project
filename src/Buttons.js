import React from 'react';

function Buttons({filteredMenu}) {
    return(
        <div className="btnMenu">
            <button className="btn" onClick = {() => filteredMenu("coffee")}>Coffee</button>
            <button className="btn" onClick = {() => filteredMenu("tea")}>Tea</button>
            <button className="btn" onClick = {() => filteredMenu("dessert")}>Dessert</button>
        </div>
    )}

export default Buttons;