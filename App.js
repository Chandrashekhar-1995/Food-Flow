import React from "react";
import ReactDOM from 'react-dom/client';


const AppLayout = ()=>{
    return(
        <div className="app">
            Hello
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);