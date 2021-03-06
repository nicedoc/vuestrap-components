// import dependencies
import template from './nav.html'
import templateItem from './nav-item.html'
import "./_nav.scss"
import {changeLocation} from '../../utils/helpers.js'

// export component object
export const nav = {
    template: template,
    replace: true,
    props: {
        vertical: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: '',
        },
    },
};

// export slide object
export const navItem = {
    template: templateItem,
    replace: true,
    props: {
        link: {
            type: String,
            default: '',
        },
        active: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        go: function(link) {
            this.$router.push(link);
            this.$vuestrap.$emit('push::link', link);
        }
    },
};
