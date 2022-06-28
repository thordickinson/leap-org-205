function mapToCore(graph) {
    console.log("Hello from  mapping 2")
    const { data: { nodes }, metadata } = graph
    const invoice = { leapfinId: metadata.id, data: anotherInternalFunction() }
    return [invoice]
}

function anotherInternalFunction() {
    return "Hello world 2";
}
