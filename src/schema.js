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
            rawDataType: (data) => {
                const processor = data.payment_processor_id
                if (!processor) return
                if (processor.indexOf("py_") == 0) return "stripe-payout"
                if (processor.indexOf("ch_") == 0) return "stripe-charge"
                return undefined
            },
            propertyPath: 'payment_processor_id'
        },
        {
            integrationId: 928,
            rawDataType: 'qultra-bill',
            propertyPath: 'charge_id',
            mainLink: true
        },
        {
            integrationId: 928,
            rawDataType: 'qultra-bill',
            propertyPath: 'order_id'

        }
    ]
}


const QultraRefundCredit = {
    integrationId: 928,
    rawDataType: 'qultra-refund-credit',
    links: [
        {
            integrationId: 928,
            rawDataType: 'qultra-bill',
            propertyPath: 'parent_charge_id',
            mainLink: true
        },
        {
            integrationId: 928,
            rawDataType: 'qultra-refund-credit',
            propertyPath: 'refund_id'
        }
    ]
}

const StripeCharge = {
    integrationId: 909,
    rawDataType: 'stripe-charge',
    links: [
        {
            integrationId: 909,
            rawDataType: 'stripe-balance-transaction',
            propertyPath: 'balance_transaction'
        },
        {
            integrationId: 909,
            rawDataType: 'stripe-customer',
            propertyPath: 'customer'
        }
    ]
}

const StripeBalanceTransaction = {
    integrationId: 909,
    rawDataType: 'stripe-balance-transaction',
}
const StripeCustomer = {
    integrationId: 909,
    rawDataType: 'stripe-customer',
}


const QualiaSchema = {
    organizationId: 205,
    nodes: [
        QultraBill,
        QultraRefundCredit,
        StripeCharge,
        StripeBalanceTransaction,
        StripeCustomer
    ]
}

module.exports = QualiaSchema
