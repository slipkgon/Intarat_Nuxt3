<!-- Please remove this file from your project -->
<template>
    <div>
        <div class="text-base font-semibold mt-2 text-slate-600 dark:text-slate-400">การศึกษา</div>
        <ol class="relative border-l border-gray-200 dark:border-gray-700 mt-2">
            <li class="mb-10 ml-4" v-for=" row in schoolData" :key="row.School">
                <div
                    class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                </div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {{ row.Year }}</time>
                <div class="rounded-lg p-2 bg-white  dark:bg-gray-900 my-2">
                    <p class="text-sm font-semibold text-slate-600 dark:text-slate-400">{{ row.School }}
                    </p>
                    <p class="text-xs font-semibold text-slate-600 dark:text-slate-400">{{ row.SchoolType }}
                    </p>
                    <p class="block text-xs">
                        {{ row.SchoolDetail }}
                    </p>
                    <p class="text-sm font-semibold text-slate-600 dark:text-slate-400">GPA {{ row.GPA }}
                    </p>
                </div>
            </li>
        </ol>
    </div>
</template>

<script setup>
const schoolData = [
    {
        Year: '2021 - ปัจจุบัน',
        School: 'Siam Business Administration Technological College',
        SchoolType: 'คอมพิวเตอร์ธุรกิจ',
        SchoolDetail: 'ระดับประกาศนียบัตรวิชาชีพ (ปวช.)',
        GPA: '4.00'
    }, {
        Year: '2012 - 2014',
        School: 'Thanyarat School',
        SchoolType: '',
        SchoolDetail: 'มัธยมศึกษาตอนต้น',
        GPA: '2.46'
    },
]
</script>