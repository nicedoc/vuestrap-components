// import dependencies
import './docs-pages.scss'
import template from './docs-pages.html'

// import external dependencies
import docsSearch from '../search'

// export component object
export default {
    template: template,
    replace: true,
    data() {
        return {
            currentView: '',
        }
    },
    props: {
        routes: {
            type: Array,
            required: true
        },
        pageTitle: {
            type: String,
            required: true
        },
        pkg: {
            type: Object,
            required: true
        },
    },
    components: {
        docsSearch,
    },
    created() {
        this.$router.afterEach(route => {
            document.title = route.meta.title;
            window.scrollTo(0, 0);
        })
    }
}
