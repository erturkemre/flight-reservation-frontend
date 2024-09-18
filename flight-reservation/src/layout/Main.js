import React from "react";
import Header from "./Header";
import PageContent from "./PageContent";

const Main = () => {
    return (
        <div className="bg-gray-300 h-full">
            <Header/>
            <PageContent/>
        </div>
    );
}

export default Main;