class Checkout{
    static New (pricingRules)
    {
        return new Checkout(pricingRules)
    }

    constructor (pricingRules){
        this.Rules = pricingRules.Rules
        this.CartItems = []
    }

    add (item){
        this.CartItems.push(item)
    }

    total ()
    {
        var total = 0
        //TODO calculate total here
        return total
    }

}

module.exports = Checkout
