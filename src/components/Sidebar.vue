<template>
  <div
    class="fixed flex justify-between w-[400px] top-0 left-0 h-screen bg-gray-50 text-white shadow-lg transition-transform duration-300"
    :class="{ '-translate-x-full': !isOpen, 'translate-x-0': isOpen }"
  >
    <!-- Sidebar Header -->
    <div class="w-10 top-[-100px] h-screen  bg-gray-500 p-2">
      <i class="fa-brands fa-square-facebook text-2xl"></i>
      <i class="fa-brands fa-square-youtube text-2xl"></i>
      <i class="fa-brands fa-square-twitter text-2xl"></i>
    </div>
    <!-- Sidebar Content -->
    <div class="flex justify-start">
      <div class="p-3">
        <ul class="p-0 m-0">
          <li class="flex justify-start w-full">
            <router-link class="w-full text-left" to="/">ព្រឹត្តិការណ៍សំខាន់ប្រចាំឆ្នាំ</router-link>
          </li>
          <li class="flex justify-start w-full">
            <router-link class="w-full text-left" to="/page2">ព្រឹត្តិការណ៍សំខាន់ប្រចាំឆ្នាំ</router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- Close Button -->
    <div class="">
      <button
        class="text-2xl text-gray-300 focus:outline-none"
        @click="$emit('close')"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
/* No additional styling needed unless you want to enhance the visuals */
</style>
