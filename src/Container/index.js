import React from "react";
import "./style.css"

const Container = ({children}) => (
    <div className="bodyContainer">
        {children}
    </div>
);
export default Container;