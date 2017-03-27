// import dependencies
import template from './flash.html'
import "vuestrap/core"
import "./flash.scss"

// export component object
export default {
    template: template,
    replace: true,
    computed: {
        alertState() {
            return !this.state || this.state === `default` ? `alert-success` : `alert-${this.state}`
        },
    },
    props: {
        show: {
            type: Boolean,
            default: false,
            required: true
        },
        state: {
            type: String,
            default: 'success'
        },
        dismissible: {
            type: Boolean,
            default: false
        },
    },
    watch: {
        show: function (val, oldVal) {
            var self = this;
            if (val) {
                setTimeout(function () {
                    self.dismiss();
                }, 3000);
            }
        }
    },
    methods: {
        dismiss: function dismiss() {
            // Dispatch an event from the current vm that propagates all the way up to its $root
            this.$vuestrap.$emit('dismissed::flash')
        },
    },

    mounted: function () {
        var self = this;
        setTimeout(function () {
            self.dismiss();
        }, 2000);
    }
}
