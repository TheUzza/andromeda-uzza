import React from "react";

function Header(){
    return (
        <div>
            Header
        </div>
    );
}

function Content() {
    return (
        <div>
            Content
            <br />
            <Welcome message="Welcome to my React App" />
        </div>
    );
}

function Welcome(props){
    return(
        <div>
            {props.message}
        </div>

    );
}

function Footer(){
    return(
        <div>
            Footer
        </div>
    );
}
function FApp (){
    return(
         <React.Fragment>
        <Header/>
        <Content/>
        <Footer/>
        </React.Fragment>
    );
}
export default FApp;