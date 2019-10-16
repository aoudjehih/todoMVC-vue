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
          }
      ],
      categoryFilter: null,
      colorFilter: null,
      sizeFilter: null,
      searchTextFilter: null,
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
  },
  actions: {},
}