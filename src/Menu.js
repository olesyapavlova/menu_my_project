import React from 'react';
import { useState } from "react";

function Menu({menuItems}) {
    const [showMore, setShowMore] = useState(false);

    return(
        <div className="allCards">
            {menuItems.map((thing => {
                const {id, name, searchTerm, price, image, description} = thing;
                return( <div className="card" key={id}>
                            <div> 
                                <h3>{name}</h3>
                                <h4>$ {price}</h4>
                            </div>
                            <div>
                                <img src={image} width="200px" height="150px" alt="try it!" />
                            </div>
                            <div>                           
                                <p>{showMore ? description : description.substring(0, 170) + "..."} 
                                    <button onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
                                </p>
                            </div>
                        </div>
                    )
            }))}
        </div>
    )
}

export default Menu;