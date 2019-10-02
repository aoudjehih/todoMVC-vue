import SelectFilter from '../../atoms/select/select-filter'
import IconLabelBtn from '../../atoms/button/icon-label-btn'
import SearchInput from '../../atoms/input/search-input'

export default {
    name: 'filter-top',
    components: {
        SelectFilter,
        IconLabelBtn,
        SearchInput,
    },
    props: {
      label: String
    }
}