import { DirectiveOptions } from 'vue'

const directive: DirectiveOptions = {
	inserted(el, node) {
		el.style.backgroundColor = node.value.backgroundColor
		el.style.color = node.value.color
	}
}

export default directive