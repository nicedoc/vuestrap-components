// import dependencies
import './search.scss'
import template from './search.html'

// export component object
export default {
    template: template,
    replace: true,
    data() {
        return {
            search: ''
        }
    },
    filters: {
        skipIntro(elements) {
            const filtered = []
            elements.forEach((element) => {
                if (element.name !== 'introduction') {
                    filtered.push(element)
                }
            })
            return filtered
        }
    },
    computed: {
        filteredList: function () {
            var self = this;
            return self.list.filter(function (item) {
                return item.meta.title.indexOf(self.search) !== -1 && item.name !== 'introduction'
            })
        }
    },
    props: {
        showSearch: {
            type: Number,
            default: 5
        },
        list: {
            type: Array,
            default: []
        },
        currentView: {
            type: String,
            default: null
        },
    },
}
