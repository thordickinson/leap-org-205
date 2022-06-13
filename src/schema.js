const joi = require("@hapi/joi")
/**
 * stripe-payout
 * stripe-customer
 * stripe-transfer
 * stripe-line-item
 * stripe-invoice
 * stripe-dispute
 * stripe-balance-transaction
 * stripe-transfer-reversal
 * stripe-charge
 * stripe-refund
 */

const StripeInvoice = {
    integrationId: 909,
    rawDataType: 'stripe-invoice',
    root: true,
    schema: joi.object({

    })
}

const StripeLineItem = {
    integrationId: 909,
    rawDataType: 'stripe-line-item',
    linkExtractors: [
        {
            integrationId: 909,
            rawDataType: 'stripe-invoice',
            propertyPath: 'invoice_id'
        }/*,
        {
            integrationId: 909,
            rawDataType: 'stripe-invoice',
            extractor: data => {

            }
        }*/
    ]
}

const QualiaSchema = {
    organizationId: 205,
    root: {
        integrationId: 909,
        rawDataType: 'stripe-invoice'
    },
    nodes: [
        StripeInvoice,
        StripeLineItem
    ]
}

module.exports = QualiaSchema