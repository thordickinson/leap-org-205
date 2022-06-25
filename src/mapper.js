function mapToCore(graph) {
    console.log("Hello from  mapping")
    const { data, metadata } = graph
    const invoice = { id: metadata.id, internalCall: anotherInternalFunction() }
    return [invoice]
}

function anotherInternalFunction() {
    return "Hello world";
}
