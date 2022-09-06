import React from 'react';

function Buttons({filteredMenu}) {
    return(
        <div className="btnMenu">
            <button class="btn" onClick = {() => filteredMenu("coffee")}>Coffee</button>
            <button class="btn" onClick = {() => filteredMenu("tea")}>Tea</button>
            <button class="btn" onClick = {() => filteredMenu("dessert")}>Dessert</button>
        </div>
    )}

export default Buttons;