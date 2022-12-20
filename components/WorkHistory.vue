<template>
    <div>
        <div class="text-base font-semibold mt-2 text-slate-600 dark:text-slate-400">ประวัติการทำงาน</div>
        <ol class="relative border-l border-gray-200 dark:border-gray-700 mt-2">
            <li class="mb-10 ml-4" v-for=" row in workData" :key="row.work">
                <div
                    class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                </div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {{ row.Year }}</time>
                <div class="rounded-lg p-2 bg-white  dark:bg-gray-900 my-2">
                    <p class="text-sm font-semibold text-slate-600 dark:text-slate-400">{{ row.work }}
                    </p>
                    <p class="text-xs font-semibold text-slate-600 dark:text-slate-400">{{ row.workType }}
                    </p>
                    <p class="block text-xs">
                        {{ row.workDetail }}
                    </p>

                </div>
            </li>
        </ol>
    </div>
</template>

<script setup >

const workData = [
    {
        Year: '2018 - ปัจจุบัน',
        work: 'BIG C SUPERCENTER PUBLIC CO.,LTD',
        workType: 'Section Chief',
        workDetail: 'พัฒนาระบบ และ ควบคุมดูแลบริหาร งานให้บรรลุตามเป้าหมาย และ ช่วยเหลือ สนับสนุนแผนกต่างๆในองค์กร ให้ทำงานได้ เร็วขึ้น และ สะดวกขึ้น',

    }, {
        Year: '2016 - 2018',
        work: 'TONG GARDEN COMPANY LIMITED',
        workType: 'Leader',
        workDetail: 'ดูแลและบริหารทีมงานให้บรรลุเป้าหมาย',

    }, {
        Year: '2015 - 2016',
        work: 'CP ALL',
        workType: 'ผู้ช่วยฝึกหัด',
        workDetail: 'กระตุ้นยอดขาย และ ควบคุมสมาชิกในทีมภายในกะเพื่อให้บรรลุเป้าหมาย',

    }
]
</script>