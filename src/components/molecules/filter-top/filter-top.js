import SelectFilter from '../../atoms/select/select-filter'
import IconLabelBtn from '../../atoms/button/icon-label-btn'
import SearchInput from '../../atoms/input/search-input'
import { mapGetters, mapMutations } from 'vuex'
import {
    SET_FILTER_CATEGORY_USER,
    SET_FILTER_COLOR_USER,
    SET_FILTER_SIZE_USER,
    SET_FILTER_SEARCH_USER,
    SET_FILTER_RESET_USER
} from '../../../store/modules/ecommerce/mutation-types'

export default {
    name: 'filter-top',
    components: {
        SelectFilter,
        IconLabelBtn,
        SearchInput,
    },
    props: {
      label: String
    },
    computed: {
        ...mapGetters('ecommerce', [
            'getCategories',
            'getColors',
            'getSizes',
        ]),
    },
    methods: {
        ...mapMutations({
            setCategory:    `ecommerce/${SET_FILTER_CATEGORY_USER}`,
            setColor:       `ecommerce/${SET_FILTER_COLOR_USER}`,
            setSize:        `ecommerce/${SET_FILTER_SIZE_USER}`,
            setSearchText:  `ecommerce/${SET_FILTER_SEARCH_USER}`,
            resets:         `ecommerce/${SET_FILTER_RESET_USER}`
        }),
        categorySelected(event) {
            var category = event.target.options[event.target.options.selectedIndex].value === 'Categories'
                ? null
                : event.target.options[event.target.options.selectedIndex].value
            this.setCategory(category)
        },
        colorSelected(event) {
            var color = event.target.options[event.target.options.selectedIndex].value === 'Color'
                ? null
                : event.target.options[event.target.options.selectedIndex].value
            this.setColor(color)
        },
        sizeSelected(event) {
            var size = event.target.options[event.target.options.selectedIndex].value === 'Size'
                ? null
                : event.target.options[event.target.options.selectedIndex].value

            this.setSize(size)
        },
        search(val) {
            this.setSearchText(val)
        },
        reset()
        {
            this.resets()
        }
    }
}