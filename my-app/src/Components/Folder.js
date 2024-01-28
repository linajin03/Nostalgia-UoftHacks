import React from "react";

const Folder = ({ item }) => {
    return (
        <>
            <div className="row">
                {item.map((Val) => {
                    return (
                    <a href={Val.link}>
                        <div className="folder"></div>
                        <div 
                            className="col-md-4 col-sm-6 card my-3 mx-3 py-3 border-3 border border-dark rounded-3 card-container d-flex align-items-stretch"
                            key={Val.id}
                        >
                            <div className="card-body d-flex flex-column">
                            <div className="card-title fw-bold fs-4">
                                {Val.title}
                            </div>
                            </div>
                        </div>  
                    </a>
                    
                    );
                })}
            </div>
        </>
    );
}

export default Folder;