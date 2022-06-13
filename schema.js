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

const QualiaSchema = {
    organizationId: 205,
    root: {
        integrationId: 909,
        rawDataType: 'stripe-invoice'
    },
    nodes: [
        { integrationId: 909, rawDataType: 'stripe-invoice', root: true },
        {
            integrationId: 909, rawDataType: 'stripe-line-item',
            linkExtractors: [
                { integrationId: 909, rawDataType: 'stripe-invoice', type: 'path', propertyPath: 'invoice_id' }
            ]
        }
    ]
}

module.exports = QualiaSchema
