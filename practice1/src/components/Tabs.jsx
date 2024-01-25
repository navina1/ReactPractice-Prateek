import React from 'react'
import { useState } from 'react';
import "./tabs.css"
function Tabs() {
    const tab = [{ label: "Tab1", content: "Tab1 Content" },
    { label: "Tab2", content: "Tab2 Content" },
    { label: "Tab3", content: "Tab3 Content" },
    { label: "Tab4", content: "Tab4 Content" },];
    const [activeTab,setActiveTab]=useState(0);
    return (
        <div>
            <h1>Tab Example</h1>
            <div className='tabcontainer'>
                <div className='tablist'>
                    {tab.map((item,index)=>(
                        <div key={index} className={`tab ${index == activeTab ? "active" : " "}`}
                        onClick={()=>{setActiveTab(index)}}>{item.label}</div>
                    ))}
                </div>
                <div className='tabcontent'>
                    {tab[activeTab].content}
                </div>
            </div>
        </div>
    )
}


export default Tabs