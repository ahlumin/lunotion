import Vue from 'vue';
import app from './components/app';

new Vue({
  el:'#app',
  render(h){
    return h(app);
  }
})
