import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class Parent extends Vue {
	created() {
		console.log("parent created")
	}

	parentClicked() {
		console.log('parent clicked');
	}
}