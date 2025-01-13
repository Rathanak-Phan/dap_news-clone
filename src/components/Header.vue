<template>
    <header class="container-fluid mx-auto">
      <!-- Logo Section -->
      <div class="hidden lg:flex w-full justify-center mt-4">
        <router-link to="/" class="text-2xl font-bold text-gray-800">
          <img src="https://dap-news.com/wp-content/uploads/2020/08/1-1.png" alt="logo" />
        </router-link>
      </div>
  
      <!-- Navigation and Sidebar Toggle -->
      <div class="sticky top-0 bg-white shadow-lg flex justify-between items-center">
        <div class="w-full flex justify-start items-center">
          <!-- Sidebar Toggle Button -->
          <div
            @click="toggleSidebar"
            class="bg-red-800 w-16 h-12 flex justify-center items-center mr-3 cursor-pointer"
          >
            <i class="fa-solid fa-bars text-3xl text-gray-50"></i>
          </div>
          <!-- logo -->
          <div class="lg:hidden w-1/4">
            <img src="https://dap-news.com/wp-content/uploads/2020/08/1-1.png" alt="">
          </div>
          <!-- Navigation Menu -->
          <nav class="hidden lg:flex w-full justify-start items-center">
            <ul class="inline-flex justify-center text-sm gap-5 group">
              <li class="hover:text-black group-hover:text-red-500 group-hover:hover:text-black">
                <router-link to="/">ព្រឹត្តិការណ៍សំខាន់ប្រចាំឆ្នាំ</router-link>
              </li>
              <li class="hover:text-black group-hover:text-red-500 group-hover:hover:text-black">
                <router-link to="/page2">ព័ត៌មានចុងក្រោយ</router-link>
              </li>
              <li class="hover:text-black group-hover:text-red-500 group-hover:hover:text-black">
                <router-link to="/page3">ព័ត៌មានជាតិ</router-link>
              </li>
              <li class="hover:text-black group-hover:text-red-500 group-hover:hover:text-black">
                <router-link to="/page4">សេដ្ឋកិច្ច</router-link></li>
              <li class="hover:text-black group-hover:text-red-500 group-hover:hover:text-black">
                <router-link to="/page5">ព័ត៌មានអន្តរជាតិ</router-link>
              </li>
              <li class="hover:text-black group-hover:text-red-500 group-hover:hover:text-black">
                <router-link to="/page6">នយោបាយ</router-link>
              </li>
              <li class="hover:text-black group-hover:text-red-500 group-hover:hover:text-black">
                <router-link to="/page7">ENGLISH</router-link>
              </li>
              <li class="hover:text-black group-hover:text-red-500 group-hover:hover:text-black">
                <router-link to="/page8">អត្ថបទស្រាវជ្រាវ (SCHOLAR)</router-link>
              </li>
              <li class="hover:text-black group-hover:text-red-500 group-hover:hover:text-black">
                <router-link to="/page9">PORMOTE CONTENT</router-link>
              </li>
              <li class="hover:text-black group-hover:text-red-500 group-hover:hover:text-black">
                <router-link to="/page10">កីឡា</router-link>
              </li>
              <li class="hover:text-black group-hover:text-red-500 group-hover:hover:text-black">
                <router-link to="/page11">SPECIAL EDITION</router-link>
              </li>
  
              <!-- Dropdown Menu -->
              <li class="relative cursor-pointer hover:text-black group-hover:text-red-500 group-hover:hover:text-black">
                ផ្សេងៗ <i class="fa-solid fa-caret-down"></i>
                <ul
                  class="absolute hidden group-hover:block top-full left-0 bg-white w-48 text-sm text-gray-800 shadow-lg"
                >
                  <li class="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    <router-link to="/page13">ស្ថានភាពទឹកភ្លៀង</router-link>
                  </li>
                  <li class="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    <router-link to="/page14">Covid 19</router-link>
                  </li>
                  <li class="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    <router-link to="/page15">វប្បធម៍កាត់ស៊ុ</router-link>
                  </li>
                  <li class="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    <router-link to="/page16">All posts tagged ដីព្រៃលិចទឹក</router-link>
                  </li>
                  <li class="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    <router-link to="/page17">កម្សាន្ត</router-link>
                  </li>
                  <li class="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    <router-link to="/page18">បច្ចេកវិទ្យា</router-link>
                  </li>
                  <li class="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    <router-link to="/page19">សហគ្រិន</router-link>
                  </li>
                  <li class="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    <router-link to="/page20">សុខភាព</router-link>
                  </li>
                  <li class="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    <router-link to="/page21">Sea Game</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Search Bar (Toggled Visibility) -->
        <transition name="fade">
          <div v-if="isSearchOpen" class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search..."
              class="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            <button
          @click="search"
          class="absolute right-2 top-2 text-gray-500"
            >
            </button>
          </div>
        </transition>
        
        <!-- Search and Social Icons -->
        <div class="flex gap-5 mr-10 items-center">
            <!-- Search Icon -->
            <i
              class="ml-3 fa-solid fa-magnifying-glass text-gray-800 text-xl cursor-pointer"
              @click="toggleSearch"
            >
            </i>

            <!-- Facebook Icon -->
            <a href="https://web.facebook.com/dapnewsfb?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-facebook-f text-blue-600 text-xl"></i>
            </a>
        </div>
      </div>

        
  
      <!-- Sidebar Component -->
      <Sidebar :isOpen="isOpen" @close="closeSidebar" />
    </header>
  </template>
  
<script>
  import { RouterLink } from "vue-router";
  import Sidebar from "./Sidebar.vue";
  
  export default {
    name: "Header",
    components: {
      Sidebar,
    },
    data() {
      return {
        isOpen: false, // State to control the sidebar visibility
        isSearchOpen: false, // State to control the search bar visibility
        searchQuery: "", // State to hold the search query
      };
    },
    methods: {
      toggleSidebar() {
        this.isOpen = true; // Open sidebar
      },
      closeSidebar() {
        this.isOpen = false; // Close sidebar
      },
      toggleSearch() {
      this.isSearchOpen = !this.isSearchOpen;
    },
        search() {
        console.log("Searching for:", this.searchQuery);
        // Implement your search logic here
        },
    },
  };
</script>
  
<style scoped>
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    width: 250px;
    height: 100%;
    background-color: #333;
    color: #fff;
    padding: 15px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out;
  }
  
  .sidebar-enter-active, .sidebar-leave-active {
    transition: opacity 0.3s ease-in-out;
  }
  
  .sidebar-enter, .sidebar-leave-to /* .sidebar-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  
  @media (max-width: 768px) {
    .sidebar {
      width: 200px;
    }
  }
</style>
  