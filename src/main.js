import { createApp } from 'vue';
import './style.css'; // Optional: Ensure this is your global CSS
import App from './App.vue';
import router from './router';
import 'flowbite';
import 'flowbite-vue';


const app = createApp(App);

app.use(router); // Register the router
app.mount('#app'); // Mount the app to the #app element in your HTML
