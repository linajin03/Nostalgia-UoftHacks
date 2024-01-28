import React from "react";

const File = ({ item }) => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                {item.map((Val) => {
                    return (
                    <div className="file-container">
                        <a href={Val.link}>
                            <div className="file"></div>
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

export default File;