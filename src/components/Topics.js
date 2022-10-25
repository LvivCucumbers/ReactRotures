import React from "react";
import {
    Routes,
    Route,
    Link,
    useLocation
} from "react-router-dom";

import Topic from "./Topic"
import { getTopics } from "../api/api";

const Topics = () => {
    const location = useLocation();
    const topics = getTopics();
    console.log(topics)
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                {topics.map(({ name, id }) => (
                    <li key={id}>
                        <Link to={id}>{name}</Link>
                    </li>
                ))}
            </ul>

            <Routes>
                <Route path=":topicId/*" element={<Topic />} />
            </Routes>
        </div>
    );
}

export default Topics;
