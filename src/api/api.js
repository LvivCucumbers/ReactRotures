const topics = [
    {
        name: "My Course",
        id: "reactjs",
        description: "React Routes Task",
        resources: [
            {
                name: "React Marathon 2022",
                id: "marathon",
                description:
                    "More that you can afford"
            },
            {
                name: "Teladoc and news",
                id: "teladoc",
                description:
                    "Why Teladoc"
            },
            {
                name: "Where's my certificate",
                id: "useref",
                description:
                    "^_______________^"
            }
        ]
    }
];

export function getResource({ resourceId, topicId }) {
    return topics
        .find(({ id }) => id === topicId)
        .resources.find(({ id }) => id === resourceId);
}

export function getTopic(topicId) {
    return topics.find(({ id }) => id === topicId);
}

export function getTopics() {
    return topics;
}
