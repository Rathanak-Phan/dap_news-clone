import { createRouter, createWebHistory } from 'vue-router';
import Page1 from '../page/Page1.vue';
import Page2 from '../page/Page2.vue';
import Page3 from '../page/Page3.vue';
import Page4 from '../page/Page4.vue';
import Page5 from '../page/Page5.vue';
import Page6 from '../page/Page6.vue';
import Page7 from '../page/Page7.vue';
import Page8 from '../page/Page8.vue';
import Page9 from '../page/Page9.vue';
import Page10 from '../page/Page10.vue';
import Page11 from '../page/Page11.vue';
import Page12 from '../page/Page12.vue';
import Page13 from '../page/Page13.vue';
import Page14 from '../page/Page14.vue';
import Page15 from '../page/Page15.vue';
import Page16 from '../page/Page16.vue';
import Page17 from '../page/Page17.vue';
import Page18 from '../page/Page18.vue';
import Page19 from '../page/Page19.vue';
import Page20 from '../page/Page20.vue';
import Page21 from '../page/Page21.vue';

const routes = [
  {
    path: '/',
    name: 'Page1',
    component: Page1,
  },
  
  { path: '/page2', name: 'Page2', component: Page2 },
  { path: '/page3', name: 'Page3', component: Page3 },
  { path: '/page4', name: 'Page4', component: Page4 },
  { path: '/page5', name: 'Page5', component: Page5 },
  { path: '/page6', name: 'Page6', component: Page6 },
  { path: '/page7', name: 'Page7', component: Page7 },
  { path: '/page8', name: 'Page8', component: Page8 },
  { path: '/page9', name: 'Page9', component: Page9 },
  { path: '/page10', name: 'Page10', component: Page10 },
  { path: '/page11', name: 'Page11', component: Page11 },
  { path: '/page12', name: 'Page12', component: Page12 },
  { path: '/page13', name: 'Page13', component: Page13 },
  { path: '/page14', name: 'Page14', component: Page14 },
  { path: '/page15', name: 'Page15', component: Page15 },
  { path: '/page16', name: 'Page16', component: Page16 },
  { path: '/page17', name: 'Page17', component: Page17 },
  { path: '/page18', name: 'Page18', component: Page18 },
  { path: '/page19', name: 'Page19', component: Page19 },
  { path: '/page20', name: 'Page20', component: Page20 },
  { path: '/page21', name: 'Page21', component: Page21 },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
