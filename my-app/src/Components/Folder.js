import React from "react";

const Folder = ({ item }) => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                {item.map((Val) => {
                    return (
                    <div className="folder-container">
                        <a href={Val.link}>
                            <div className="folder"></div>
                            <div 
                                className=""
                                key={Val.id}
                            >
                                <div className="">
                                <div className="">
                                    {Val.title}
                                </div>
                                </div>
                            </div>  
                        </a>
                    </div>
                    
                    );
                })}
            </div>
        </div>
    );
}

export default Folder;