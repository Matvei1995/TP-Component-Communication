import { createApp } from 'vue';
import App from './App.vue';
import userData from './components/userData';
import activeUser from './components/activeUser';
// createApp(App).mount('#app')
//On peut aussi stocker l'appli dans une variable
const app = createApp(App);
app.component('user-data',userData);
app.component('active-user',activeUser);
app.mount('#app');

