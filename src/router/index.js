import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import EliminationView from '../views/EliminationView.vue';
import ClassementView from '../views/ClassementView.vue';
import JoueursView from '../views/JoueursView.vue';

const router = createRouter({
 	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/elimination',
			name: 'elimination',
			component: EliminationView
		},
		{
			path: '/classement',
			name: 'classement',
			component: ClassementView
		},
		{
			path: '/joueurs',
			name: 'joueurs',
			component: JoueursView
		}
	]
});

export default router;
