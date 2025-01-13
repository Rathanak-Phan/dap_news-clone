<template>
    <!-- easy footer for this page -->
    <footer class="sm:w-full 2xl:w-10/12 mx-auto bg-gray-700">
        <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
            <!-- Logo and Social Links -->
            <div class="flex flex-col items-start gap-5">
                <img src="https://dap-news.com/wp-content/uploads/2020/12/banner.jpg" alt="DAP News Logo">
                <p class="text-gray-50">DAP News</p>
                <div class="flex items-center gap-3">
                    <i class="fa-brands fa-facebook text-gray-300 text-lg"></i>
                    <i class="fa-brands fa-youtube text-gray-300 text-lg"></i>
                    <i class="fa-brands fa-twitter text-gray-300 text-lg"></i>
                </div>
            </div>

            <!-- Video Embed -->
            <div>
                <p class="text-lg text-gray-50 mb-4">ភូមិសាស្រ្តនយោបាយ ក្នុងតំបន់និងកម្ពុជា</p>
                <div class="w-full">
                    <iframe 
                        class="w-full h-[200px] sm:h-[315px]" 
                        src="https://www.youtube-nocookie.com/embed/XSnqjdchCo4?si=3sl6uYpuQZTn6uSO" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>

            <!-- News and Tags -->
            <div>
                <div>
                    <p class="text-lg text-gray-50">ព័ត៌មានពេញនិយមក្នុងសប្តាហ៍នេះ</p><br>
                    <div class="flex flex-col gap-3 text-gray-400 text-xs">
                        <a href="#">ក្មេងទំនើង៦៤នាក់...</a><hr>
                        <a href="#">ក្មេងទំនើង៦៤នាក់...</a><hr>
                        <a href="#">ក្មេងទំនើង៦៤នាក់...</a><hr>
                        <a href="#">ក្មេងទំនើង៦៤នាក់...</a><hr>
                        <a href="#">ក្មេងទំនើង៦៤នាក់...</a>
                    </div>
                </div>
                <div class="mt-6">
                    <p class="text-lg text-gray-50">Popular Tags</p>
                    <div class="flex flex-wrap gap-2 mt-3">
                        <!-- Full Tag List -->
                        <a href="#" class="bg-gray-500 text-gray-300 px-2 py-1 text-xs">អ៊ុយក្រែន</a>
                        <a href="#" class="bg-gray-500 text-gray-300 px-2 py-1 text-xs">រុស្ស៊ី</a>
                        <a href="#" class="bg-gray-500 text-gray-300 px-2 py-1 text-xs">អាមេរិក</a>
                        <a href="#" class="bg-gray-500 text-gray-300 px-2 py-1 text-xs">បាតាន</a>
                        <a href="#" class="bg-gray-500 text-gray-300 px-2 py-1 text-xs">អ៊ីរ៉ង</a>
                        <a href="#" class="bg-gray-500 text-gray-300 px-2 py-1 text-xs">ខេត្តកំពង់ចាម</a>
                        <a href="#" class="bg-gray-500 text-gray-300 px-2 py-1 text-xs">វ៉ាក់សាំងប្រឆាំងកូវីត</a>
                        <!-- Repeat popular tags to include all -->
                        <a href="#" class="bg-gray-500 text-gray-300 px-2 py-1 text-xs">អ៊ុយក្រែន</a>
                        <a href="#" class="bg-gray-500 text-gray-300 px-2 py-1 text-xs">រុស្ស៊ី</a>
                        <a href="#" class="bg-gray-500 text-gray-300 px-2 py-1 text-xs">អាមេរិក</a>
                        <a href="#" class="bg-gray-500 text-gray-300 px-2 py-1 text-xs">បាតាន</a>
                        <a href="#" class="bg-gray-500 text-gray-300 px-2 py-1 text-xs">អ៊ីរ៉ង</a>
                        <a href="#" class="bg-gray-500 text-gray-300 px-2 py-1 text-xs">អាមេរិក</a>
                        <a href="#" class="bg-gray-500 text-gray-300 px-2 py-1 text-xs">បាតាន</a>
                        <a href="#" class="bg-gray-500 text-gray-300 px-2 py-1 text-xs">អ៊ីរ៉ង</a>
                        <a href="#" class="bg-gray-500 text-gray-300 px-2 py-1 text-xs">អាមេរិក</a>
                        <a href="#" class="bg-gray-500 text-gray-300 px-2 py-1 text-xs">បាតាន</a>
                        <a href="#" class="bg-gray-500 text-gray-300 px-2 py-1 text-xs">អ៊ីរ៉ង</a>
                        <a href="#" class="bg-gray-500 text-gray-300 px-2 py-1 text-xs">អាមេរិក</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer Bottom Section -->
        <div class="w-full mx-auto grid lg:grid-cols-2 lg:flex-row items-center justify-between bg-gray-800 p-10 gap-5">
            <p class="text-gray-400 text-center">Copyright © 2008-2024 DAP Advertising Co.,Ltd</p>
            <div class="flex flex-wrap gap-2 text-xs">
                <a href="#" class="text-gray-400">ព្រឹត្តិការណ៍សំខាន់ប្រចាំឆ្នាំ</a>
                <a href="#" class="text-gray-400">ព័ត៌មានចុងក្រោយ</a>
                <a href="#" class="text-gray-400">ព័ត៌មានជាតិ</a>
                <a href="#" class="text-gray-400">សេដ្ឋកិច្ច</a>
                <a href="#" class="text-gray-400">ប្រវត្តិសិក្សា</a>
                <a href="#" class="text-gray-400">អាជីវកម្ម</a>
                <a href="#" class="text-gray-400">ព័ត៌មានអន្តរជាតិ</a>
                <a href="#" class="text-gray-400">ព័ត៌មានបច្ចេកវិទ្យា</a>
                <a href="#" class="text-gray-400">នយោបាយ</a>
                <a href="#" class="text-gray-400">កម្សាន្ត</a>
                <a href="#" class="text-gray-400">កីឡា</a>
                <a href="#" class="text-gray-400">ព័ត៌មានចុងក្រោយ</a>
                <a href="#" class="text-gray-400">ព័ត៌មានជាតិ</a>
                <a href="#" class="text-gray-400">សេដ្ឋកិច្ច</a>
                <a href="#" class="text-gray-400">ប្រវត្តិសិក្សា</a>
                <a href="#" class="text-gray-400">អាជីវកម្ម</a>
                <a href="#" class="text-gray-400">ព័ត៌មានអន្តរជាតិ</a>
                <a href="#" class="text-gray-400">ព័ត៌មានបច្ចេកវិទ្យា</a>
                <a href="#" class="text-gray-400">នយោបាយ</a>
                <a href="#" class="text-gray-400">កម្សាន្ត</a>
                <a href="#" class="text-gray-400">កីឡា</a>
            </div>
        </div>
    </footer>

</template>

<script>
    export default {
        name: 'Footer'
    }
</script>