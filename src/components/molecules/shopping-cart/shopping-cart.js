export default {
  name: 'shopping-cart',
  components: {},
  props: {
      basketItems: {
          type: Array,
          required: true
      }
  },
    filters: {
        toCurrency : (value) => {
            if (typeof value !== "number") {
                return value;
            }

            return new Intl.NumberFormat('fr-FR', {
                style: 'currency',
                currency: 'EUR',
                minimumFractionDigits: 2
            }).format(value);
        }
    }
}
