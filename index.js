const { mapToCoreEntities } = require("./mapping")
const { applyRules } = require("./rules")

async function processGraph(graph, context) {
    //context.logger.warning()
    //context.org.config
    //context.output.push()
    await mapToCoreEntities(graph, context)
    await applyRules(graph, context)
    console.log("Hello from rule!!")
}

module.exports = processGraph