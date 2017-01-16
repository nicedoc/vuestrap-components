import Vue from 'vue'
import VueRouter from 'vue-router'

import {offcanvasWrapper as vsOffcanvasWrapper, offcanvasDrawer as vsOffcanvasDrawer} from './components/vuestrap/offcanvas-drawer'
import vsDocsDrawer from './components/vuestrap/docs-drawer'
import vsDocsPages from './components/vuestrap/docs-pages'

// import package.json meta data
import pkg from '../package.json'

import 'vuestrap/core'
// import demo pages compatibile with docs component
import docsRoutes from './docs'

// import utils
import {getRoutes} from './utils'

// get list of the route objects
const routes = getRoutes(docsRoutes)

Vue.use(VueRouter)

const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
});

router.afterEach(route => {
    document.title = route.meta.title;
})

Vue.prototype.$vuestrap = new Vue();

import 'vuestrap/components';

new Vue({
    el: '#app',
    router,
    data: {
        routes: routes,
        pageTitle: 'Vuestrap Docs',
        pkg: pkg,
    },
    components : {
        vsOffcanvasWrapper,
        vsOffcanvasDrawer,
        vsDocsDrawer,
        vsDocsPages
    },
    mounted: function () {
        // this.$vuestrap.$emit('toggle::offcanvas-drawer', 'main')
    }
})
