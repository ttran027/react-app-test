import { AboutTabs } from "../site-data";
import { useState } from "react";
export default function About(){
    const [title, setTitle] = useState("");

    return(
        <div class="d-flex flex-column align-items-center">
            <h3>About Page</h3>
            <ul class="nav nav-pills">
            {
                AboutTabs.map(tab => (
                    <li className="nav-item" onClick={() => setTitle(tab.title)}>
                        <a className={"nav-link" + (tab.title === title ? " active" : "")} aria-current="page">{tab.title}</a>
                    </li>
                ))
            }
            </ul>
            {
                AboutTabs.map(tab => (
                    <div class={title === tab.title ? "" : "d-none"}>{tab.description}</div>
                ))
            }
        </div>
    );
}