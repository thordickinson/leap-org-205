async function applyRules(coreGraph, ruleContext) {
    const invoice = coreGraph.findNodeByLeapfinDataType("leapfinInvoice")
    ruleContext.logI("Processing invoice")
    const account = ruleContext.getOrgConfiguration("AR_ACCOUNT_NAME")
    invoice.withAccountEntry({
        date: "2022-05-04",
        "entries": {
            "amount": 222,
            "account": account
        }
    })
}

module.exports = applyRules