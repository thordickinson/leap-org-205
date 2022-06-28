function mapToCore(graph) {
    const { data: { nodes }, metadata } = graph
    console.log(`Mapping graph with id ${metadata.id}`)
    const invoice = { leapfinId: metadata.id, data: anotherInternalFunction() }
    return [invoice]
}

function anotherInternalFunction() {
    return "Hello world 2";
}
