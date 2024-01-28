import React from 'react';
import File from '../Components/File.js';
import Folder from '../Components/Folder.js';
// import Buttons from '../Components/Buttons.js';
import { useState } from 'react';
import FolderData from '../Data/FolderData.js';

const Homepage = () => {
    const [item, setItem] = useState(FolderData);
    // const projectItems = [...new Set(FolderData.map((Val) => Val.category))];
    // const filterItem = (curcat) => {
    //     const newItem = ProjectData.filter((newVal) => {
    //       return newVal.category === curcat; 
    //             // comparing category for displaying data
    //     });
    //     setItem(newItem);
    //   };
    return (
        <div>
            <div className="welcome">
                <h1 className="text-left">welcome back, user.</h1>
                <img src={process.env.PUBLIC_URL + '/Images/logo.png'} alt="logo" className="logo" />
            </div>
            
            <div className="container-fluid">
                <div className="col-12 mb-10 text-center">
                    <h1 className="fw-bold">recently accessed files</h1>
                </div>
                <div className="row">
                    <div className="col-12 mb-10 text-center d-flex justify-content-center align-items-center">
                        <File item={item} className="file" />
                    </div>
                </div>
                <div className="col-12 mb-10 text-left">
                    <h1 className="fw-bold">my folders</h1>
                </div>
                <div className="row pt-5">
                    <div className="col-12 mb-10 text-center">
                        <Folder item={item} className="folder" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;