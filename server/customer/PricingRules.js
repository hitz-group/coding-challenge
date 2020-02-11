const adTypes = require('./productTypes')

class PricingRules {
  constructor() {

    this.Rules = [
      {
        adType: adTypes.classic,
        retailPrice: 269.99
      },
      {
        adType: adTypes.standout,
        retailPrice: 322.99
      },
      {
        adType: adTypes.premium,
        retailPrice: 394.99
      }
    ]

  }
}
module.exports = PricingRules;
