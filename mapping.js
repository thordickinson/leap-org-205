async function mapToCoreEntities(graph, context) {
    console.log("Hello from  mapping")
    const stripeInvoice = graph.findNodeByType("stripe-invoice")
    const invoice = context.createInvoice(stripeInvoice).withData({
        "customFields": {
        }
    })
    return [invoice]
}

module.exports = mapToCoreEntities