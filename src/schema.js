//const joi = require("@hapi/joi")
/**
 * stripe-payout
 * stripe-customer
 * stripe-transfer
 * stripe-line-item *
 * stripe-invoice *
 * stripe-dispute
 * stripe-balance-transaction
 * stripe-transfer-reversal
 * stripe-charge ?
 * stripe-refund
 */

const QultraBill = {
    integrationId: 928,
    rawDataType: 'qultra-bill',
    root: (data) => data['has_been_refunded'] == false,
    links: [
        {
            integrationId: 909,
            rawDataType: 'stripe-charge',
            propertyPath: 'payment_processor_id'
        }
    ]
}

const StripePayout = {
    integrationId: 909,
    rawDataType: 'stripe-payout',
    mainLink: {
        integrationId: 909,
        rawDataType: 'stripe-balance-transaction',
        propertyPath: 'balance_transaction'
    }
}

const StripeCharge = {
    integrationId: 909,
    rawDataType: 'stripe-charge',
    mainLink: {
        integrationId: 909,
        rawDataType: 'stripe-balance-transaction',
        propertyPath: 'balance_transaction'
    }
}

const StripeBalanceTransaction = {
    integrationId: 909,
    rawDataType: 'stripe-balance-transaction',
    mainLink: {
        integrationId: 909,
        rawDataType: 'stripe-balance-transaction',
        propertyPath: 'balance_transaction'
    }
}

const StripeCustomer = {
    integrationId: 909,
    rawDataType: 'stripe-customer'
}

const StripeDispute = {
    integrationId: 909,
    rawDataType: "stripe-dispute",
    mainLink: {
        integrationId: 909,
        rawDataType: 'stripe-line-item',
        propertyPath: 'line_item_id'
    }
}

const StripeInvoice = {
    integrationId: 909,
    rawDataType: 'stripe-invoice',
    root: true,
    links: [
        {
            integrationId: 909,
            rawDataType: 'stripe-customer',
            propertyPath: 'customer',
            softLink: true
        }
    ]
}

const StripeLineItem = {
    integrationId: 909,
    rawDataType: 'stripe-line-item',
    mainLink: {
        integrationId: 909,
        rawDataType: 'stripe-invoice',
        propertyPath: 'invoice_id'
    }
}

const QualiaSchema = {
    organizationId: 205,
    nodes: [
        QultraBill
    ]
}

module.exports = QualiaSchema
