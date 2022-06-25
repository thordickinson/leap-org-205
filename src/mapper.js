function mapToCore(graph) {
    console.log("Hello from  mapping")
    const { data, metadata } = graph
    const invoice = { id: metadata.id, anotherProperty: "hello world" }
    return [invoice]
}
