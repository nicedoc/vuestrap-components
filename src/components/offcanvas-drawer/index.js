// import styling
import './offcanvas-drawer.scss'

// import template
import template from './offcanvas-drawer.html'

export const offcanvasWrapper = {
    template: template,
    replace: true,
    data() {
        return {
            show: false,
        }
    },
    props: {
        id: {
            type: String,
            required: true,
            default: ''
        },
        animation: {
            type: String,
            default: 'ease',
        },
        align: {
            type: String,
            default: 'left',
        },
    },

    methods: {
        toggle() {
            this.show = !this.show
            if ("$vuestrap" in this) {
                if (this.show) {
                    this.$vuestrap.$emit('shown::offcanvas-drawer', this.id)
                } else {
                    this.$vuestrap.$emit('hiden::offcanvas-drawer', this.id)
                }
            }
        },
    },

    created: function () {
        let self = this;

        this.$vuestrap.$on('toggle::offcanvas-drawer', function (id) {
            if (id === self.id) {
                self.toggle()
            }
        })
    }
};

export const offcanvasDrawer = {
    template: '<div class="offcanvas-drawer"><slot></slot></div>',
    replace: true,
};
