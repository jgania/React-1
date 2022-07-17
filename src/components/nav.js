import React from "react"
import "../App.css";

export default class NavBar extends React.Component {
    render() {
        return (
            <div class="container">
                <div><a class="active" href="Home">Home</a></div>
                <div><a href="Page1">Page1</a></div>
                <div><a href="Page2">Page2</a></div>
            </div>
        )
    }
};

