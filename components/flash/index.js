// import dependencies
import template from './flash.html'
import "vuestrap/core"
import "./flash.scss"

var tid = 0;

// export component object
export default {
    template: template,
    replace: true,
    computed: {
        alertState() {
            return !this.state || this.state === `default` ? `alert-success` : `alert-${this.state}`
        },
    },
    data: function () {
        return {
            show: false,
            state: `default`,
            message: '',
            timeout: 5000,
        }
    },
    // watch: {
    //     show: function (val, oldVal) {
    //         var self = this;
    //         if (val) {
    //             setTimeout(function () {
    //                 self.dismiss();
    //             }, 3000);
    //         }
    //     }
    // },
    methods: {

        dismiss: function () {
            this.show = false;
            clearTimeout(tid);
            tid = 0;

            // Dispatch an event from the current vm that propagates all the way up to its $root
            this.$vuestrap.$emit('dismissed::flash');
        },
    },

    mounted: function () {
        let self = this;

        this.$vuestrap.$on('message::flash', function (state, msg, timeout) {
            self.state = state
            self.message = msg
            self.timeout = timeout
            self.show = true;

            clearTimeout(tid);

            tid = setTimeout(function () {
                self.dismiss();
            }, timeout);

            console.log('============', state, msg, timeout, tid);
        })
    }
}
