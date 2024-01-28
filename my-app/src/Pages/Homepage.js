import React from 'react';
// import File from '../Components/File.js';
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
            <div className="container-fluid">
                <div className="row pt-5">
                    <h1 className="col-12 mb-10 text-center my-3 fw-bold">projects</h1>
                        {/* <Buttons setItem={setItem} projectItems={projectItems} filterItem={filterItem}/> */}
                        <Folder item={item} className="folder"/>
                </div>
            </div>
        </div>
    );
}

export default Homepage;