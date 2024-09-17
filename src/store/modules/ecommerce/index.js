import * as types from './mutation-types'
import _ from 'lodash'

export default {
  namespaced: true,
  state: {
      productCollection: [
          {
              ean: "123456",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
          {
              ean: "223456",
              img: "http://laslapourlesnuls.com/media/2018/11/la-sla-pour-les-nuls-logo-t-shirt-1-1.jpg",
              name:"Black Ninja T-shirt Hoodie",
              price:250,
              categories:[
                  "Clothing",
                  "Women",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["XS", "M", "XL"],
              color: "red"
          },
          {
              ean: "323456",
              img: "https://i2.cdscdn.com/pdt2/2/0/3/1/400x400/mp22228203/rw/call-of-duty-t-shirt-homme-de-marque-decontracte.jpg",
              name:"Grey Ninja",
              price:350,
              categories:[
                  "Clothing",
                  "Men",
                  "Poster"
              ],
              quantity: 1,
              sizes: ["S", "M", "XXL"],
              color: "red"
          },
          {
              ean: "423456",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
          {
              ean: "523456",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
          {
              ean: "623456",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
          {
              ean: "723456",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
          {
              ean: "823456",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
          {
              ean: "923456",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
          {
              ean: "103456",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
          {
              ean: "113456",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
          {
              ean: "13356",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
          {
              ean: "124456",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
          {
              ean: "123556",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
          {
              ean: "123656",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
          {
              ean: "123756",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
          {
              ean: "123856",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
          {
              ean: "123956",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
          {
              ean: "123406",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
          {
              ean: "123416",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
          {
              ean: "123426",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
          {
              ean: "123436",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
          {
              ean: "123446",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
          {
              ean: "123456",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
          {
              ean: "123466",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
          {
              ean: "123476",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
          {
              ean: "123486",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
          {
              ean: "123496",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
          {
              ean: "123450",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
          {
              ean: "123451",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
          {
              ean: "123451",
              img: "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              name:"Black Skull T-shirt",
              price: 135,
              categories:[
                  "Clothing",
                  "Men",
                  "T-shirts"
              ],
              quantity: 1,
              sizes: ["S", "M", "L"],
              color: "black"
          },
      ],
      categoryFilter: null,
      colorFilter: null,
      sizeFilter: null,
      searchTextFilter: null,
      basket: []
  },
  getters: {
      getFilteredProducts: state => {
          let filtredProducts = JSON.parse(JSON.stringify(state.productCollection));

          if (state.colorFilter !== null) {
              filtredProducts = filtredProducts.filter(product => product.color === state.colorFilter)
          }
          if (state.sizeFilter !== null) {
              filtredProducts = filtredProducts.filter(product => product.sizes.includes(state.sizeFilter))
          }
          if (state.categoryFilter !== null) {
              filtredProducts = filtredProducts.filter(product => product.categories.includes(state.categoryFilter))
          }
          if (state.searchTextFilter !== null) {
              filtredProducts = filtredProducts.filter(function(product) {
                if (product.name.toLowerCase().includes(state.searchTextFilter.toLowerCase())) {
                    var regex = new RegExp(state.searchTextFilter, 'gi')
                    product.name = product.name.replace(regex, "<span class='highlightedSearchText'><strong>"+product.name.match(regex)+"</strong></span>")

                    return true
                }
              })
          }

          return filtredProducts
      },
      getCategories: state => {
          let categories = [];
          _.forEach(state.productCollection, product => {
              _.forEach(product.categories, category => {
                  categories.push(category)
              })
          });

          return [...new Set(categories)]
      },
      getColors: state => {
          let colors = [];

          _.forEach(state.productCollection, product => {
              colors.push(product.color)
          });

          return colors.reduce((acc, val) => {
              acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
              return acc;
          }, {});
      },
      getSizes: state => {
          let sizes = [];
          _.forEach(state.productCollection, product => {
              _.forEach(product.sizes, size => {
                  sizes.push(size)
              })
          });

          return [...new Set(sizes)]
      },
      getBasketItemsNumber: state => state.basket.filter(x => x).length,
      getBasket: state => state.basket

  },
  mutations: {
      [types.SET_FILTER_CATEGORY_USER](state, payload) {
          state.categoryFilter = payload
      },
      [types.SET_FILTER_COLOR_USER](state, payload) {
          state.colorFilter = payload
      },
      [types.SET_FILTER_SIZE_USER](state, payload) {
          state.sizeFilter = payload
      },
      [types.SET_FILTER_SEARCH_USER](state, payload) {
          state.searchTextFilter = payload
      },
      [types.SET_FILTER_RESET_USER](state) {
          state.categoryFilter      = null;
          state.colorFilter         = null;
          state.sizeFilter          = null;
          state.searchTextFilter    = null;
      },
      [types.ADD_TO_BASKET](state, payload) {
          state.basket.push(Object.assign({}, payload))
      },
  },
  actions: {
   async addToBasketAsync ({ commit }, payload) {
          setTimeout(() => {
              commit(types.ADD_TO_BASKET, payload)
          }, 1000)
      }
  },
}