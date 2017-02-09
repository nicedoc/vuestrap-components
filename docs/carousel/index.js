import meta from './carousel.json'
import template from './carousel.html'
import snippet from './snippet.html'
import {carousel as vsCarousel, slide as vsSlide} from '../../components/carousel'
import docsDemo from '../../components/vuestrap/demo'
import {variants} from '../../utils'

export default {
    route: {
        path: '/carousel',
        name: 'carousel',
        meta: {
            title: 'Carousel',
        }
    },
    template: template,
    data() {
        return {
            meta: meta,
            snippet: snippet,
            controls: true,
            indicators: true,
        }
    },
    components: {
        vsSlide,
        vsCarousel,
        docsDemo,
    },
}
