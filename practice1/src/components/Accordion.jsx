import React from 'react';
import { useState } from 'react';

function Accordion() {
    const [activeIndex,setActiveIndex]=useState(null);
    const accordionItems = [
        { title: 'Section 1', content: 'Content for Section 1' },
        { title: 'Section 2', content: 'Content for Section 2' },
        { title: 'Section 3', content: 'Content for Section 3' },
      ];
  return (
    <div>
        <h2>Accordions</h2>
        <div role='tablist'>
            {accordionItems.map((item,index)=>(
                <div key={index}>
                    <button 
                        role='tab'
                        aria-expanded={activeIndex==index}
                        aria-controls={`section${index+1}`}
                        onClick={()=> setActiveIndex( activeIndex === index ? null : index)}
                    >
                        {item.title}
                    </button>
                    {activeIndex==index && (
                        <div>
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Accordion
