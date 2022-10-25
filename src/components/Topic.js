import React from "react";
import {
    useParams,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { getTopic } from "../api/api"
import Resource from "./recourse";

function Topic() {
    const { topicId } = useParams();
    const topic = getTopic(topicId);
    return (
        <div>
            <h2>{topic.name}</h2>
            <p>{topic.description}</p>

            <ul>
                {topic.resources.map((sub) => (
                    <li key={sub.id}>
                        <Link to={sub.id}>{sub.name}</Link>
                    </li>
                ))}
            </ul>

            <hr />

            <Routes>
                <Route path=":resourceId" element={<Resource />} />
            </Routes>
        </div>
    );
}

export default Topic;
