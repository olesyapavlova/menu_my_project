import React from 'react';

function Menu({menuItems}) {
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
                                <h5>{description}</h5>
                            </div>
                        </div>
                    )
            }))}
        </div>
    )
}

export default Menu;