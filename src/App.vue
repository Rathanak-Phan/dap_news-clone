<script setup>
  import { RouterView } from 'vue-router'
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Sidebar from './components/Sidebar.vue';
  
  
</script>

<template>
  <div>
    <Header />
    <div>
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
