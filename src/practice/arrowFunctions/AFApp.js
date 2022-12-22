import React from "react";

const Header=() => "Header";

const Footer= ()=>{
    return <div>Footer</div>
}

const Content=()=>{
    return <div>Content</div>
}

export const AFApp=()=>{
    return(
        <div>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}

