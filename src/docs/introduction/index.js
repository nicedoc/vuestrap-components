import template from './introduction.html'
import pkg from 'package.json'

export default {
  route: {
      	path: '/',
		name: 'introduction',
		title: 'Intoduction',
	},
  template: template,
	data() {
		return {
			pkg: pkg,
		}
	},
}
