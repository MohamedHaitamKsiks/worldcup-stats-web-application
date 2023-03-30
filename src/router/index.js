import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import EliminationView from '../views/EliminationView.vue';
import ClassementView from '../views/ClassementView.vue';
import JoueursView from '../views/JoueursView.vue';
import MatchDetailView from '../views/MatchDetailView.vue';
import MatchGroupes from '../views/MatchGroupes.vue';

const router = createRouter({
 	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/groupe',
			name: 'groupe',
			component: MatchGroupes
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
			path: '/joueurs/:page',
			name: 'joueurs',
			component: JoueursView
		},
		{
			path: '/match/:matchId',
			name: "match-details",
			component: MatchDetailView
		}
	]
});

export default router;
