import React from "react";
import {
    useParams
} from "react-router-dom";
import { getResource } from "../api/api"

function Resource() {
    const { topicId, resourceId } = useParams();

    const { name, description, id } = getResource({ topicId, resourceId });

    return (
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Resource;
