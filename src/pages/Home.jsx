import React from "react";

import Filter from "../components/home/Filter";

import '../styles/pages/home.css'

function Home() {
    return (
        <div className="home">
            <div className="container-home">
                <div className="container-filter">
                    <Filter />
                </div>
            </div>
        </div>
    );
};

export default Home;
