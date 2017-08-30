<template>
	<div id="app">
		<img src="./assets/logo.png">
		<!-- <MyCheckbox :title="checkbox.title" :value="checkbox.value"  v-model="checkbox.checked" /> -->
		<!-- <button @click="sumUp">Count {{ count.acum }}</button> -->
		<!-- <Users /> -->
		<!-- <button @click="handler">Click</button> -->
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


const Log = (msg?: string) => {
	return createDecorator((component, key) => {
		console.log("component: ", component);
		console.log("key: ", key);
		console.log("msg: ", msg);
	})
}

const NoCache = createDecorator((comp: any , key) => {
	comp.computed[key].cache = false
})

// @Component
// export default class App extends Vue {
// 	@Log('yooo')
// 	name = 'Paco'

// 	@Log()
// 	@NoCache
// 	get message() {
// 		return 'hi!'
// 	}
// }

// import {
// 	AdvicePool,
// 	adviceParam,
// 	onException,
// 	beforeMethod,
// 	afterMethod,
// 	adviceMetadata,
// 	IMetadata
// } from 'kaop-ts'

// class Advices extends AdvicePool {
// 	static getCached(@adviceMetadata metadata: IMetadata, @adviceParam(0) prop) {
// 		console.log('before executed');
// 		const key = `${metadata.scope.$options.name}_${metadata.propertyKey}`;
// 		const cached = localStorage.getItem(key)

// 		if (cached) {
// 			metadata.scope[prop] = cached
// 			this.stop();
// 		}
// 	}

// 	static setCache(@adviceMetadata metadata: IMetadata, @adviceParam(0) prop) {
// 		console.log('after executed');
// 		const key = `${metadata.scope.$options.name}_${metadata.propertyKey}`;
// 		if (metadata.result) {
// 			metadata.result.then(() => {
// 				localStorage.setItem(key, metadata.scope[prop])
// 			})
// 		}
// 	}

// 	static notify(@adviceParam(0) toServer){
// 		if (toServer) {
// 			console.log('http call to server...')
// 		} else {
// 			console.log('Notifying to client')

// 		}
// 	}

// 	static report(@adviceMetadata metadata: IMetadata) {
// 		console.error('Reporting... ', metadata.exception);
// 	}
// }

// @Component
// export default class App extends Vue {
// 	userName = ''

// 	@beforeMethod(Advices.getCached, 'userName')
// 	@onException(Advices.report)
// 	@afterMethod(Advices.setCache, 'userName')
// 	@afterMethod(Advices.notify, false)
// 	handler() {
// 		console.log('method executed');
// 		throw Error('Terrible error');
// 		// return fetch('https://jsonplacehol der.typicode.com/users/1')
// 		// 	.then(res => res.json())
// 		// 	.then(user => {
// 		// 		this.userName = user.name

// 		// 	});
// 	}
// }

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
