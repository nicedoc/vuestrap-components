// import dependencies
import {csstransitions} from '../../utils/helpers.js'
import template from './modal.html'

// this is directly linked to the bootstrap animation timing in _modal.scss
// // for browsers that do not support transitions like IE9 just change slide immediately
const TRANSITION_DURATION = csstransitions() ? 300 : 0

// export component object
export default {
    template: template,
    replace: true,
    data: function() {
        return {
            animateBackdrop: false,
            animateModal: false,
        }
    },
    props: {
        id: {
            type: String,
            default: 'default'
        },
        size: {
            type: String,
            default: 'md'
        },
        fade: {
            type: Boolean,
            default: true
        },
        closeOnBackdrop: {
            type: Boolean,
            default: true,
        }
    },
    methods: {
        show() {
            this.$el.style.display = 'block'
            this._body = document.querySelector('body')
            const _this = this
            // wait for the display block, and then add class "in" class on the modal
            this._modalAnimation = setTimeout(() => {
                _this.animateBackdrop = true
                this._modalAnimation = setTimeout(() => {
                    _this._body.classList.add('modal-open')
                    _this.animateModal = true
                    _this.$vuestrap.$emit('shown::modal')
                }, (_this.fade) ? TRANSITION_DURATION : 0)
            }, 0)
        },
        hide() {
            const _this = this
            // first animate modal out
            this.animateModal = false
            this._body = document.querySelector('body')
            this._modalAnimation = setTimeout(() => {
                // wait for animation to complete and then hide the backdrop
                _this.animateBackdrop = false
                this._modalAnimation = setTimeout(() => {
                    _this._body.classList.remove('modal-open')
                    // no hide the modal wrapper
                    _this.$el.style.display = 'none'
                    _this.$vuestrap.$emit('hidden::modal')
                }, (_this.fade) ? TRANSITION_DURATION : 0)
            }, (_this.fade) ? TRANSITION_DURATION : 0)
        },
        onClickOut(e) {
            // if backdrop clicked, hide modal
            if (this.closeOnBackdrop && e.target.id && e.target.id === this.id) {
                this.hide()
            }
        },
    },

    created() {
        // support for esc key press
        document.addEventListener('keydown', (e) => {
            const key = e.which || e.keyCode
            if (key === 27) { // 27 is esc
                this.hide()
            }
        })

        let self = this;

        // control modal from outside via events
        this.$vuestrap.$on('show::modal', function(id) {
            if (id === self.id) {
                self.show()
            }
        })

        this.$vuestrap.$on('hide::modal', function(id) {
            if (id === self.id) {
                self.hide()
            }
        })
    },
    destroyed() {
        clearTimeout(this._modalAnimation)
    },
}
