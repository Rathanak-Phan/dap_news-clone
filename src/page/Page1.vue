<template>
  <div class="sm:w-full lg:w-10/12 xl:w-10/12 2xl:w-9/12 mx-auto">
    <!--  -->
    <div class="flex flex-col items-center gap-2 mt-3">
      <img src="https://dap-news.com/wp-content/uploads/2019/10/IMG_4403.png" alt="">
      <img src="https://dap-news.com/wp-content/uploads/2019/11/CW-_-Web-Banner-_1340-x-70px.png" alt="">
      <img class="w-full" src="https://dap-news.com/wp-content/uploads/2019/10/DapNews_1340x70px-9.gif" alt="">
    </div>
    <!-- crad -->
    <div class="grid md:grid-cols-4 items-center gap-[2px] mt-1">
      <div class="bg-[url('https://dap-news.com/wp-content/uploads/2024/10/146.jpg')] md:h-[300px] lg:h-[450px] h-36 w-full bg-cover bg-center">
        <div class="flex flex-col justify-end items-start h-full w-full bg-gradient-to-b from-white/10 to-gray-950/80 hover:bg-none p-5">
          <p class="bg-red-600 block text-gray-50">អត្ថបទស្រាវជ្រាវ (scholar)</p>
          <p class="text-gray-50 leading-6">បញ្ហាវិបត្តិទឹក! ទឹកសាបក្នុងសតវត្សន៍ទី២១</p>
        </div>
      </div>
      <div class="bg-[url('https://dap-news.com/wp-content/uploads/2024/10/146.jpg')] md:h-[300px] lg:h-[450px] h-36 w-full bg-cover bg-center">
        <div class="flex flex-col justify-end items-start h-full w-full bg-gradient-to-b from-white/10 to-gray-950/80 hover:bg-none p-5">
          <p class="bg-red-600 block text-gray-50">ព័ត៌មានអន្តរជាតិ</p>
          <p class="text-gray-50 leading-6">ព័ត៌មានអន្តរជាតិអាមេរិកបង្កើតបញ្ហា, Ukraine ជាសាច់ដុំមហារីក មិនងាយព្យាបាលសម្រាប់រុស្ស៊ី!</p>
        </div>
      </div>
      <div class="bg-[url('https://dap-news.com/wp-content/uploads/2024/10/146.jpg')] md:h-[300px] lg:h-[450px] h-36 w-full bg-cover bg-center">
        <div class="flex flex-col justify-end items-start h-full w-full bg-gradient-to-b from-white/10 to-gray-950/80 hover:bg-none p-5">
          <p class="bg-red-600 block text-gray-50">អត្ថបទស្រាវជ្រាវ (scholar)</p>
          <p class="text-gray-50 leading-6">ព្រែកជីក “ ហ្វូនណនតេជោ “ ជាកំពែងដ៏រឹងមាំ ក្នុងការធ្វើឲ្យ ភូមិសាស្រ្តនយោបាយ និង បណ្តាសារភូមិសាស្ត្រ លែងជាសុបិន្តអាក្រក់ និងមានប្រសិទ្ធិភាព ក្នុងការមកលង អស់រយៈកាល រាប់សិបទស្សវត្សន៍ លើខ្មែរ</p>
        </div>
      </div>
      <div class="bg-[url('https://dap-news.com/wp-content/uploads/2024/10/146.jpg')] md:h-[300px] lg:h-[450px] h-36 w-full bg-cover bg-center">
        <div class="flex flex-col justify-end items-start h-full w-full bg-gradient-to-b from-white/10 to-gray-950/80 hover:bg-none p-5">
          <p class="bg-red-600 block text-gray-50">អត្ថបទស្រាវជ្រាវ (scholar)</p>
          <p class="text-gray-50 leading-6">(ផ្សាយឡើងវិញ) ចិន ជាកត្តាឧបសគ្គចម្បង ក្នុងនយោបាយវាតទី អនុត្តរភាព មកលើឡាវនិងកម្ពុជា ក្នុងបរិបទភូមិសាស្រ្ត យុទ្ធសាស្រ្តរបស់ វៀតណាម!</p>
        </div>
      </div>
    </div>
    <!-- selection -->
    <div class="flex grid-cols-1 gap-4 mt-1">
      <!--  -->
      <div class="hidden sm:hidden xl:block xl:w-1/4 md:w-3/5 p-3 bg-white">
        <div class="flex flex-col gap-3">
          <!-- calendar -->
          <div class="bg-white shadow-lg flex flex-col gap-3">

            <div class="border-2 border-gray-300">
              <div class="border-2 border-red-800 w-1/5 "></div>
            </div>
            <p>ប្រតិទិន</p>

            <div class="w-full bg-white">
              <!-- Calendar Header -->
              <div class="flex justify-end items-center px-4 py-2 bg-gray-200">
                <h2 class="text-sm font-bold text-gray-800">January 2025</h2>
              </div>

              <!-- Weekdays -->
              <div class="grid grid-cols-7 gap-1 text-center py-2">
                <div class="text-gray-600 font-medium">Sun</div>
                <div class="text-gray-600 font-medium">Mon</div>
                <div class="text-gray-600 font-medium">Tue</div>
                <div class="text-gray-600 font-medium">Wed</div>
                <div class="text-gray-600 font-medium">Thu</div>
                <div class="text-gray-600 font-medium">Fri</div>
                <div class="text-gray-600 font-medium">Sat</div>
              </div>

              <!-- Calendar Days -->
              <div class="grid grid-cols-7 gap-1 text-center px-2 pb-4">
                <!-- Blank spaces for previous month's days -->
                <div class="text-gray-400">28</div>
                <div class="text-gray-400">29</div>
                <div class="text-gray-400">30</div>
                <div class="text-gray-400">31</div>

                <!-- Current month's days -->
                <div class="rounded-lg px-2 py-1">1</div>
                <div class="rounded-lg px-2 py-1">2</div>
                <div class="rounded-lg px-2 py-1">3</div>
                <div class="rounded-lg px-2 py-1">4</div>
                <div class="rounded-lg px-2 py-1">5</div>
                <div class="rounded-lg px-2 py-1">6</div>
                <div class="rounded-lg px-2 py-1">7</div>
                <div class="rounded-lg px-2 py-1">8</div>
                <div class="rounded-lg px-2 py-1">9</div>
                <div class="rounded-lg px-2 py-1">10</div>
                <div class="rounded-lg px-2 py-1">11</div>
                <div class="rounded-lg px-2 py-1">12</div>
                <div class="rounded-lg px-2 py-1">13</div>
                <div class="rounded-lg px-2 py-1">14</div>
                <div class="rounded-lg px-2 py-1">15</div>
                <div class="rounded-lg px-2 py-1">16</div>
                <div class="rounded-lg px-2 py-1">17</div>
                <div class="rounded-lg px-2 py-1">18</div>
                <div class="rounded-lg px-2 py-1">19</div>
                <div class="rounded-lg px-2 py-1">20</div>
                <div class="rounded-lg px-2 py-1">21</div>
                <div class="rounded-lg px-2 py-1">22</div>
                <div class="rounded-lg px-2 py-1">23</div>
                <div class="rounded-lg px-2 py-1">24</div>
                <div class="rounded-lg px-2 py-1">25</div>
                <div class="rounded-lg px-2 py-1">26</div>
                <div class="rounded-lg px-2 py-1">27</div>
                <div class="rounded-lg px-2 py-1">28</div>
                <div class="rounded-lg px-2 py-1 bg-black text-white">29</div>
                <div class="rounded-lg px-2 py-1">30</div>
                <div class="rounded-lg px-2 py-1">31</div>

                <!-- Blank spaces for next month's days -->
                <div class="text-gray-400">1</div>
                <div class="text-gray-400">2</div>
                <div class="text-gray-400">3</div>
              </div>
              <p class="ml-5 text-red-700 font-extrabold"><i class="fa-solid fa-angles-left"></i> Dec</p>
              <br>
            </div>
          </div>
          <!--  -->
          <div class="bg-white shadow-lg flex flex-col gap-3 p-3">
            <div class="border-2 border-gray-300">
              <div class="border-2 border-red-800 w-2/5 "></div>
            </div>
            <p class="text-sm">ព័ត៌មានសេដ្ឋកិច្ច</p>
            <!-- card -->
            <div class="flex flex-col gap-3">
              <img src="https://dap-news.com/wp-content/uploads/2024/12/IMG_3838-300x180.jpeg" alt="">
              <p class="text-xs opacity-70">សេដ្ឋកិច្ច</p>
              <p class="text-sm text-blue-500 hover:text-red-500">Emirates ឈ្នះពានរង្វាន់ជាច្រើននៅក្នុងកម្មវិធី World Travel Awards និង World Travel Tech Awards ប្រចាំឆ្នាំ ២០២៤​​ នេះ</p>
            </div>
            <!-- card -->
            <div class="flex flex-col gap-3">
              <img src="https://dap-news.com/wp-content/uploads/2024/12/IMG_3748-300x180.jpeg" alt="">
              <p class="text-xs opacity-70">សេដ្ឋកិច្ច</p>
              <p class="text-sm text-blue-500 hover:text-red-500">Emirates ឈ្នះពានរង្វាន់ជាច្រើននៅក្នុងកម្មវិធី World Travel Awards និង World Travel Tech Awards ប្រចាំឆ្នាំ ២០២៤​​ នេះ</p>
            </div>
            <!-- card -->
            <div class="flex flex-col gap-3">
              <img src="https://dap-news.com/wp-content/uploads/2024/12/23-3-300x180.jpg" alt="">
              <p class="text-xs opacity-70">សេដ្ឋកិច្ច</p>
              <p class="text-sm text-blue-500 hover:text-red-500">Emirates ឈ្នះពានរង្វាន់ជាច្រើននៅក្នុងកម្មវិធី World Travel Awards និង World Travel Tech Awards ប្រចាំឆ្នាំ ២០២៤​​ នេះ</p>
            </div>
            <div class="flex flex-col gap-3">
              <div class="w-full flex justify-center">
                <img src="https://dap-news.com/wp-content/uploads/2020/05/DABnews1.jpg" alt="">
              </div>
              <div class="w-full flex justify-center">
                <img src="https://dap-news.com/wp-content/uploads/2019/10/Vital.gif" alt="">
              </div>
              <div class="w-full flex justify-center">
                <img src="https://dap-news.com/wp-content/uploads/2019/10/beltie.gif" alt="">
              </div>
              <div class="w-full flex justify-center">
                <img src="https://dap-news.com/wp-content/uploads/2020/12/Ads-Stage-I-DAP-2024.jpg" alt="">
              </div>
              <div class="w-full flex justify-center">
                <img src="https://dap-news.com/wp-content/uploads/2020/12/45819838_2007008596264229_5718198129363255296_n.jpg" alt="">
              </div>
              <div class="w-full flex justify-center">
                <img src="https://dap-news.com/wp-content/uploads/2019/10/300px-W-x-25px-H-01-1.png" alt="">
              </div>
            </div>
            

          </div>
        </div>

        
        
      </div>
      <!--  -->
      <div class="xl:w-1/2 md:w-3/5 w-full block">
        <div class="p-3 text-xl">
          <p class="text-xl font-bold">News</p>
        </div>
        <div class="flex flex-col gap-5 bg-gray-100 p-5">
          <p>ផ្សាយផ្ទាល់៖ កម្មវិធី សន្ទនាថ្ងៃចន្ទ Monday Talk (ថ្ងៃទី០៦ មករា ២០២៥)</p>
          <iframe 
            class="h-[200px] sm:h-[315px] w-10/12 mx-auto" 
            src="https://www.youtube-nocookie.com/embed/XSnqjdchCo4?si=3sl6uYpuQZTn6uSO" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
          <hr class="border border-gray-300">
          <!--  -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img src="https://dap-news.com/wp-content/uploads/2025/01/464-300x180.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-xl text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!--  -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img src="https://dap-news.com/wp-content/uploads/2025/01/464-300x180.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-xl text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!--  -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img src="https://dap-news.com/wp-content/uploads/2025/01/464-300x180.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-xl text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!--  -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img src="https://dap-news.com/wp-content/uploads/2025/01/464-300x180.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-xl text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!--  -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img src="https://dap-news.com/wp-content/uploads/2025/01/464-300x180.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-xl text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!--  -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img src="https://dap-news.com/wp-content/uploads/2025/01/464-300x180.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-xl text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!--  -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img src="https://dap-news.com/wp-content/uploads/2025/01/464-300x180.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-xl text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!--  -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img src="https://dap-news.com/wp-content/uploads/2025/01/464-300x180.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-xl text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!--  -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img src="https://dap-news.com/wp-content/uploads/2025/01/464-300x180.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-xl text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!--  -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img src="https://dap-news.com/wp-content/uploads/2025/01/464-300x180.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-xl text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!--  -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img src="https://dap-news.com/wp-content/uploads/2025/01/464-300x180.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-xl text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!--  -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img src="https://dap-news.com/wp-content/uploads/2025/01/464-300x180.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-xl text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!--  -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img src="https://dap-news.com/wp-content/uploads/2025/01/464-300x180.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-xl text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!--  -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img src="https://dap-news.com/wp-content/uploads/2025/01/464-300x180.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-xl text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!--  -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img src="https://dap-news.com/wp-content/uploads/2025/01/464-300x180.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-xl text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!--  -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img src="https://dap-news.com/wp-content/uploads/2025/01/464-300x180.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-xl text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!--  -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img src="https://dap-news.com/wp-content/uploads/2025/01/464-300x180.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-xl text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!--  -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img src="https://dap-news.com/wp-content/uploads/2025/01/464-300x180.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-xl text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!--  -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img src="https://dap-news.com/wp-content/uploads/2025/01/464-300x180.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-xl text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!--  -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img src="https://dap-news.com/wp-content/uploads/2025/01/464-300x180.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-xl text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!--  -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img src="https://dap-news.com/wp-content/uploads/2025/01/464-300x180.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-xl text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!--  -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img src="https://dap-news.com/wp-content/uploads/2025/01/464-300x180.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-xl text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!--  -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img src="https://dap-news.com/wp-content/uploads/2025/01/464-300x180.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-xl text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!--  -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img src="https://dap-news.com/wp-content/uploads/2025/01/464-300x180.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-xl text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!--  -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img src="https://dap-news.com/wp-content/uploads/2025/01/464-300x180.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-xl text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!--  -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img src="https://dap-news.com/wp-content/uploads/2025/01/464-300x180.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-xl text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!--  -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img src="https://dap-news.com/wp-content/uploads/2025/01/464-300x180.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-xl text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!--  -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img src="https://dap-news.com/wp-content/uploads/2025/01/464-300x180.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-xl text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <div class="w-full flex justify-center">

            <div
              class="col-span-12 mx-auto mt-12 grid grid-cols-4 grid-rows-2 items-center gap-3 px-4 py-4 pb-8 sm:flex sm:justify-center"
            >
              <!-- First and Back Buttons -->
              <div class="order-2 col-span-2 flex justify-end gap-2">
                <button
                  class="rounded-lg flex items-center gap-2 border border-gray-200 px-3 py-1 transition duration-150 ease-in-out hover:border-black disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled
                >
                  First
                </button>
                <button
                  class="rounded-lg flex items-center gap-2 border border-gray-200 px-3 py-1 transition duration-150 ease-in-out hover:border-black disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="rotate-180 transform"
                    height="16px"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    ></path>
                  </svg>
                  Back
                </button>
              </div>

              <!-- Page Numbers -->
              <div class="order-1 col-span-4 flex justify-center gap-3 sm:order-2">
                <button
                  class="rounded-lg flex items-center gap-2 border border-gray-200 px-3 py-1 transition duration-150 ease-in-out hover:border-black"
                >
                  1
                </button>
                <button
                  class="rounded-lg flex items-center gap-2 border border-gray-200 px-3 py-1 transition duration-150 ease-in-out hover:border-black"
                >
                  2
                </button>
                <button
                  class="rounded-lg flex items-center gap-2 border border-gray-200 bg-black text-white px-3 py-1 transition duration-150 ease-in-out"
                >
                  3
                </button>
                <button
                  class="rounded-lg flex items-center gap-2 border border-gray-200 px-3 py-1 transition duration-150 ease-in-out hover:border-black"
                >
                  4
                </button>
                <button
                  class="rounded-lg flex items-center gap-2 border border-gray-200 px-3 py-1 transition duration-150 ease-in-out hover:border-black"
                >
                  5
                </button>
                <button
                  class="rounded-lg flex items-center gap-2 border border-gray-200 px-3 py-1 transition duration-150 ease-in-out hover:border-black"
                >
                  6
                </button>
              </div>

              <!-- Next and Last Buttons -->
              <div class="order-2 col-span-2 flex items-center gap-2">
                <button
                  class="rounded-lg flex items-center gap-2 border border-gray-200 px-3 py-1 transition duration-150 ease-in-out hover:border-black"
                >
                  Next
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    height="16px"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    ></path>
                  </svg>
                </button>
                <button
                  class="rounded-lg flex items-center gap-2 border border-gray-200 px-3 py-1 transition duration-150 ease-in-out hover:border-black"
                >
                  Last
                </button>
              </div>
            </div>


          </div>
        </div>
      </div>
      <!--  -->
      <div class="md:w-2/5 md:block hidden xl:w-1/4">
        <div class="flex flex-col gap-4 w-full p-3 bg-gray-100">
          <!-- add border like line  -->
          <div class="border-2 border-gray-300">
            <div class="border-2 border-red-800 w-3/5 "></div>
          </div>
          <p class="text-sm font-bold">ព័ត៌មានពេញនិយមក្នុងសប្តាហ៍នេះ</p>
          <!-- small card -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img class="w-full h-auto" src="https://dap-news.com/wp-content/uploads/2024/12/683-80x80.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-sm text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!-- small card -->
          <div class="flex gap-3">
            <div class="w-1/3 ">
              <img class="w-full h-auto" src="https://dap-news.com/wp-content/uploads/2024/12/683-80x80.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-sm text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!-- small card -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img class="w-full h-auto" src="https://dap-news.com/wp-content/uploads/2024/12/683-80x80.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-sm text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!-- small card -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img class="w-full h-auto" src="https://dap-news.com/wp-content/uploads/2024/12/683-80x80.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-sm text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!-- small card -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img class="w-full h-auto" src="https://dap-news.com/wp-content/uploads/2024/12/683-80x80.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-sm text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!-- small card -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img class="w-full h-auto" src="https://dap-news.com/wp-content/uploads/2024/12/683-80x80.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-sm text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <!-- small card -->
          <div class="flex gap-3">
            <div class="w-1/3">
              <img class="w-full h-auto" src="https://dap-news.com/wp-content/uploads/2024/12/683-80x80.jpg" alt="">
            </div>
            <div class="w-2/3">
                <p class="text-xs opacity-70">ព័ត៌មានជាតិ</p>
              <p class="text-sm text-blue-500 hover:text-red-500">ព័ត៌មានជាតិលោក សុខ ពេញវុធ ត្រូវបានប្រកាសតែងតាំងជាប្រធានក្រុមការងារ យុវជនគណបក្សប្រជាជនកម្ពុជា រាជធានីភ្នំពេញ</p>
            </div>
          </div><hr class="border border-gray-300">
          <p class="text-sm font-bold">អត្ថបទស្រាវជ្រាវ</p>
          <!-- create a carrousel -->
          <div>

            <div class="max-w-2xl mx-auto">

              <div id="default-carousel" class="relative rounded-lg overflow-hidden shadow-lg" data-carousel="static">
                  <!-- Carousel wrapper -->
                  <div class="relative h-80 md:h-96" data-carousel-inner>
                      <!-- Item 1 -->
                      <div class="hidden duration-700 ease-in-out" data-carousel-item>
                          <img src="https://dap-news.com/wp-content/uploads/2021/03/Cover-1.jpg"
                              class="object-cover w-full h-full" alt="Slide 1">
                          <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white md:text-2xl dark:text-gray-800">First Slide</span>
                      </div>
                      <!-- Item 2 -->
                      <div class="hidden duration-700 ease-in-out" data-carousel-item>
                          <img src="https://dap-news.com/wp-content/uploads/2021/02/16.jpg"
                              class="object-cover w-full h-full" alt="Slide 2">
                      </div>
                      <!-- Item 3 -->
                      <div class="hidden duration-700 ease-in-out" data-carousel-item>
                          <img src="https://dap-news.com/wp-content/uploads/2021/01/285-2-1000x600.jpg"
                              class="object-cover w-full h-full" alt="Slide 3">
                      </div>
                  </div>
                  <!-- Slider indicators -->
                  <div class="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2" data-carousel-indicators>
                      <button type="button" class="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
                      <button type="button" class="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
                      <button type="button" class="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
                  </div>
                  <!-- Slider controls -->
                  <button type="button"
                      class="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
                      data-carousel-prev>
                      <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                      </svg>
                  </button>
                  <button type="button"
                      class="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
                      data-carousel-next>
                      <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                  </button>
              </div>

              <p class="mt-5 text-center text-gray-700 dark:text-gray-300">
                  This carousel slider component is part of a larger, open-source library of Tailwind CSS components. Learn more
                  by going to the official
                  <a class="text-blue-600 hover:underline" href="https://flowbite.com/docs/getting-started/introduction/"
                      target="_blank">
                      Flowbite Documentation
                  </a>.
              </p>


            </div>

          </div>
          <div class="w-full flex justify-center">
            <img src="https://dap-news.com/wp-content/uploads/2020/05/DABnews1.jpg" alt="">
          </div>
          <div class="w-full flex justify-center">
            <img src="https://dap-news.com/wp-content/uploads/2019/10/Vital.gif" alt="">
          </div>
          <div class="w-full flex justify-center">
            <img src="https://dap-news.com/wp-content/uploads/2019/10/beltie.gif" alt="">
          </div>
          <div class="w-full flex justify-center">
            <img src="https://dap-news.com/wp-content/uploads/2020/12/Ads-Stage-I-DAP-2024.jpg" alt="">
          </div>
          <div class="w-full flex justify-center">
            <img src="https://dap-news.com/wp-content/uploads/2020/12/45819838_2007008596264229_5718198129363255296_n.jpg" alt="">
          </div>
          <div class="w-full flex justify-center">
            <img src="https://dap-news.com/wp-content/uploads/2019/10/300px-W-x-25px-H-01-1.png" alt="">
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      name: 'Page1'
    }
</script>