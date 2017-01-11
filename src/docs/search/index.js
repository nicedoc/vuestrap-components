import snippet from './snippet.html'
import template from './search.html'
import meta from './search.json'
import './search.scss'
import demo from 'src/components/demo'
import search from 'src/components/search'

export default {
	route: {
        path: '/search',
		name: 'search',
		title: 'Search'
	},
	template: template,
	data() {
		return {
			meta: meta,
		  snippet: snippet,
		  list: [
              {id: 'component-a', name: 'component-a', path: '.', title: 'Component A'},
              {id: 'component-b', name: 'component-a', path: '.', title: 'Component B'},
              {id: 'other', name: 'component-a', path: '.', title: 'Other'}],
		}
	},
	components: {
		search: search,
		demo: demo,
	},
}
