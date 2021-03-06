import { createApp } from 'vue'
import { GraphQLClient } from 'graphql-request'

import App from './App.vue'
import router from './router/index'

import './assets/scss/base/_reset.scss'
import './assets/scss/index.scss'

const app = createApp(App)

const graphcmsClient = new GraphQLClient(
	'https://api-eu-central-1.graphcms.com/v2/ckyucc6wq0ru801yy9zvbgg2n/master',
	{
		headers: {
      Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDMxMzI4MDYsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NreXVjYzZ3cTBydTgwMXl5OXp2YmdnMm4vbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYWExYTVkZWMtOGUxNi00MGU4LWIzYjgtNTBjOTU4MDcyMTA3IiwianRpIjoiY2t5dWV1am54MHdtZjAxeXlodjVsMTlzbCJ9.QbykkcTNMcm8Bw6a2W3l7QHpjaoizxUXeIC0dsko4BhxSWXHJj4_ys2onWYgCYbUEl9fB1LIgsi0YgnKC4LwUHOo3b9ljDqfxwstDRmPvfl4ji8i4TkASYqOQrIvp0GUJICCBgdOdkbfbbycr0GjM09C3kBujVfoKrCF9-9xUqOH_b4RLCnAB7PNys79lHfMuervfG1E_KAgVhzmDbWHmKoSTfIIAEyKHBnZEo_nIF1JfD4LGF63XIQlSkIl3IvS4RsVkqzaD306RkHylXQy02Dz6SiC6mVXBmx06wpJydRQtYD8Ek2Ygx0g21WgIDyRo-1lRanR7jldzVImZce0qF9ROxYqC0k8zMgvZnSS2Rcu_-9Si6mkC-lb0Vm9hMsvFvq2GA0FOpDQFbH1jdOh3LFVzhQ7SSZaPJ7mBA_AfZ1dX7SQdSG5f2OzOmpoMFZZqWNzK8rB9ZbbGEcU56_mwHLmZB3Cu_Xa5PwP8uCB27DWt09mZaeNRRZF2dZ5h_Ce3Dua8lB9KwOJN_NV3YzKzsemtN217rNvIJaGM_LGjsdYM3pEs_K-zjZcCTztBGYvESPfnPJRdVPn_6T7gs8Bl318R1T2r1RdzG2eMEY9UxFDhHn8ltJxZxgKeTRATbFdAoXBfzFkzIFhRrxKrCYWz32o4ghzrOZX4X5YVwNVzS4'
  	}
	}
)

app.mixin({
	beforeCreate() {
		this.$graphcms = graphcmsClient
	}
})


app
	.use(router)
	.mount('#app')