import React from "react";
import "./menu-combo.style.css"
import Layout from "../../../../components/shared/theme/layout"

const MenuComboView = (props) => {
    const { data } = props;

    return (
        
        <>
        <Layout />
            <div className="Combos">
                <div className="combos-tittle">
                    <h1>Lista de Combos</h1>
                </div>
                {data.map((data) => (
                    <div className = "combos-card">
                        <div className = "image">
                            <img src={data.img} />
                        </div> 
                        <div className= "info">
                            <div className = "combos-name">
                                    <h2 className = "name"> {data.name}</h2>
                                </div>
                                <div className = "button-more">
                                    <button className = "BMore" >More</button>
                            </div> 
                        </div>
                    </div>
                ))
                }
            </div>
        </>
    )

}
export default MenuComboView;



