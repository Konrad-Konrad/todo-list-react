import React from "react";
import "./style.css"

const Container = ({children}) => (
    <main className="bodyContainer">
        {children}
    </main>
);
export default Container;