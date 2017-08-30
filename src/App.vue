<template>
	<div id="app">
		<img src="./assets/logo.png">
		<!-- <MyCheckbox :title="checkbox.title" :value="checkbox.value"  v-model="checkbox.checked" /> -->
		<!-- <button @click="sumUp">Count {{ count.acum }}</button> -->
		<Users />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Watch, Provide } from 'vue-property-decorator'
import { createDecorator } from 'vue-class-component'
import Hello from './components/Hello.vue'
import Users from './components/Users.vue'
import MyCheckbox from './components/MyCheckbox.vue'
import axios from 'axios'
// export default {
// 	name: 'app',
// 	components: {
// 	  Hello
// 	}
// }
// @Component({
// 	components: {
// 		MyCheckbox
// 	}
// })
// export default class App extends Vue {
// 	checkbox = {
// 		title: 'Fancy Checkbox',
// 		value: 'checkbox-id',
// 		checked: true
// 	}
// }

// @Component
// export default class App extends Vue {
// 	count: any = {
// 		acum: 0
// 	}

// 	@Watch('count', { deep: true })
// 	watchCount(newVal, oldVal) {
// 		console.log('New: ', newVal, ', Old: ', oldVal)
// 	}

// 	sumUp() {
// 		this.count.acum++;
// 		this.count = { acum: this.count.acum++ }
// 	}
// }

// @Component({
// 	components: {
// 		Users
// 	}
// })
// export default class App extends Vue {
// 	@Provide('myHttpModule') http = axios
// }


const Log = createDecorator((component, key) => {
	console.log("component: ", component);
	console.log("key: ", key);
})

@Component
export default class App extends Vue {
	@Log
	name = 'Paco'

	@Log
	get message() {
		return 'hi!'
	}
}

</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
