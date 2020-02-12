import Checkout from './Checkout'
import PricingRules from '../customer/PricingRules'

describe('Checkout', () => {
  describe('calculateTotal', () => {
    it('should calculate total for standard customer', () => {
      const cartItems = ['small', 'medium', 'large']

      let pricingRules = new PricingRules()

      let checkout = Checkout.New(pricingRules)
      cartItems.map(item => {
        checkout.add(item)
      })

      const total = checkout.total();

      expect(total).toEqual(987.97)
    })
  })
})
