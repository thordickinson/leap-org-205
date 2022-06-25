function mapToCore(graph) {
    console.log("Hello from  mapping")
    const { data: { nodes }, metadata } = graph
    const qultraBill = nodes.find(n => n.metadata.rawDataType == "qultra-bill");
    const invoice = mapQultraBill(qultraBill)
    return [invoice]
}

function mapQultraBill(qultraBill) {
    const { metadata, data } = qultraBill
    return {
        leapfin_id: `${metadata.integrationId}:${metadata.rawDataType}:${metadata.id}:LeapfinInvoice`,
        data: {
            createdAt: data.date
        }
    }
}
