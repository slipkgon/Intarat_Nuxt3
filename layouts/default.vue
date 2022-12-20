<template>
    <div class=" transition-all">
        <nav
            class="fixed p-2  w-full text-gray-600 dark:text-gray-200 flex items-center  z-50  bg-white  dark:bg-gray-900  dark:border-gray-700 border-gray-300 ">
            <div class="w-full flex flex-wrap justify-between items-center mx-auto ">
                <div class="flex ml-3 items-center">
                    <div @click="(counter.hidebar ? counter.hidebar = false : counter.hidebar = true)"
                        class="hidden lg:block relative select-none h-10  z-10  m-auto   cursor-pointer  rounded-lg bg-gray-100/50 dark:bg-gray-800/50 ">
                        <svg width="40" height="40" viewBox="0 0 16 16" class="justify-center inline-block">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <path
                                    :d="counter.hidebar ? 'M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z'
                                    : 'M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z'"
                                    fill="currentColor"></path>
                            </g>
                        </svg>
                    </div>
                    <div @click="(counter.menu ? counter.menu = false : counter.menu = true)"
                        class="lg:hidden block relative select-none h-10  z-10  m-auto    cursor-pointer  rounded-lg bg-gray-100/50 dark:bg-gray-800/50 ">
                        <svg width="40" height="40" viewBox="0 0 16 16" class="justify-center inline-block">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <path
                                    :d="counter.menu ? 'M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'
                                    : 'M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'"
                                    fill="currentColor"></path>
                            </g>
                        </svg>
                    </div>

                    <div class="mx-1 cursor-pointer flex items-center rounded  p-1  font-extrabold text-black "
                        @click="router.push('/')">
                        <nuxt-img format="webp" sizes="sm:100vw lg:50vw lg:400px" src="/icon_64x64.9565c6.png"
                            alt="Logo"
                            class="relative select-none w-12 h-12 z-10 m-auto rounded-full  pointer-events-none cursor-pointer bg-gray-100 dark:bg-gray-800 " />
                    </div>


                </div>
                <div class="flex items-center font-bold text-base">Intarat Mekloy</div>
                <div class="flex items-end mr-3">
                    <div class="w-[80px] relative text-right">
                        <ColorScheme placeholder="" tag="div">
                            <div class="justify-center inline-block rounded-full  p-2  cursor-pointer  bg-gray-100 dark:bg-gray-800 absolute z-10 animate-fade-in"
                                @click="$colorMode.value == 'light' ? $colorMode.preference = 'dark' : $colorMode.value == 'dark' ? $colorMode.preference = 'light' : null">
                                <svg viewBox="0 0 16 16" class=" h-7 w-7">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <path
                                            :d="$colorMode.value == 'light' ? 'M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z'
                                        : ($colorMode.value == 'dark' ? 'M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z'
                                            : 'M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z')"
                                            fill="currentColor"></path>
                                    </g>
                                </svg>
                            </div>
                        </ColorScheme>
                        <div :class="$colorMode.unknown ? 'animate-pulse' : ''"
                            class="bg-gray-100 dark:bg-gray-800 w-11 h-11 rounded-full  inline-block z-0"></div>
                    </div>
                </div>

                <div :class="counter.menu ? 'hidden lg:block' : ''"
                    class=" rounded-md scrollbar-hide lg:scrollbar-default bg-white  dark:bg-gray-900  dark:border-gray-700 border-gray-300  lg:border-none  justify-between items-center w-full lg:hidden block lg:w-auto lg:order-1 bottom-0 lg:top-0 fixed lg:static lg:h-0 left-0  overflow-x-auto no-scrollbar lg:scrollbar"
                    id="mobile-menu-2">
                    <div class="lg:relative mx-auto lg:float-right lg:px-6">
                        <ul class="flex  flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium text-center">
                            <!--inline-flex-->
                            <li class="w-20 mr-3 flex-1 lg:flex-none min-w-[80px] p-1" style="margin: auto"
                                v-for="row in menudata" :key="row.name">
                                <NuxtLink :to="row.to"
                                    :class="route.path == row.to ? 'bg-gray-100 dark:bg-gray-800' : '   hover:bg-gray-100 dark:hover:bg-gray-800'"
                                    class="w-full  justify-center inline-block text-center pt-2 pb-1 rounded-md">
                                    <svg width="25" height="25" viewBox="0 0 16 16" class="inline-block mb-1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <path v-if="row.icon1" :d="row.icon1" fill="currentColor"></path>
                                            <path v-if="row.icon2" :d="row.icon2" fill="currentColor"></path>
                                        </g>
                                    </svg>

                                    <span class="tab tab-home block text-xs break-all truncate ">{{ row.name }}</span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
        <div style="z-index: 100" class="max-w-8xl mx-auto px-4">
            <div :class="!counter.hidebar ? '' : 'lg:hidden block'">
                <div :class="counter.menu ? '' : 'hidden lg:block'"
                    class="rounded w-full  dark:bg-gray-900 bg-white dark:text-gray-200 fixed z-20 inset-0 top-[4.5rem]  right-auto lg:w-[20rem] pb-[2rem] px-2 overflow-y-auto scrollbar-hide lg:scrollbar-default">
                    <nav id="nav" class=" select-none lg:text-sm lg:leading-6 relative " style="z-index: 80">

                        <div class="p-2  rounded-lg block text-center" style="text-align: -webkit-center;">
                            <div class=" relative m-auto my-2">
                                <nuxt-img format="webp" sizes="sm:100vw lg:50vw lg:400px" src="/IntaratM.png"
                                    alt="Intarat Poto"
                                    class="relative select-none h-48 w-[192px] z-10  m-auto  rounded-full pointer-events-none  bg-gray-100 dark:bg-gray-800" />
                            </div>
                            <div style="margin-bottom:0px;"
                                class="p-2 font-semibold text-xl dark:bg-gray-800 bg-gray-200  max-w-full w-max rounded-md mx-auto my-2 break-all truncate">
                                อินทรัตน์ เมฆลอย
                            </div>
                            <span>Web developer</span>
                        </div>
                        <ul class="my-2">
                            <li v-for="row in menudata" :key="row.name"
                                :class="route.path == row.to ? 'bg-gray-100 dark:bg-gray-800' : '   hover:bg-gray-100 dark:hover:bg-gray-800'"
                                class="flex items-center rounded-md px-2 py-2 cursor-pointer m-2"
                                @click="(router.push(row.to), menuclose())">

                                <svg width="30" height="30" viewBox="0 0 16 16" class="justify-center inline-block">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <path v-if="row.icon1" :d="row.icon1" fill="currentColor"></path>
                                        <path v-if="row.icon2" :d="row.icon2" fill="currentColor"></path>
                                    </g>
                                </svg>
                                <span class="ml-2  text-base  break-all truncate">{{ row.name }}</span>
                            </li>
                        </ul>
                        <ContentLink />
                        <div class="relative  w-max text-center m-auto">
                            <div class="text-center m-auto"> <a
                                    href="https://www.canva.com/design/DAE5zExFqvc/iWWoSZDdn5FbmbkIEVBBqQ/view?utm_content=DAE5zExFqvc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                                    target="_blank" class="underline text-xs cursor-pointer">
                                    Resume</a>
                            </div>

                        </div>


                    </nav>
                </div>
            </div>
            <div class="">
                <div class="pt-20 transition-all" :class="counter.hidebar ? '' : 'lg:pl-[20rem]'">
                    <div class="mb-24 lg:mb-10 lg:mt-0 mt-4 ">
                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore();
const { $colorMode } = useNuxtApp();
const router = useRouter();
const route = useRoute()


const menudata = [
    { name: 'เกี่ยวกับตัวฉัน', to: '/', icon1: 'M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z', icon2: 'm8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z' },
    { name: 'การศึกษา', to: '/Education', icon1: 'M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z', icon2: '' },
    { name: 'ประวัติการทำงาน', to: '/WorkHistoryExperience', icon1: 'M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z', icon2: '' },
    { name: 'ประสบการณ์การทำงาน', to: '/WorkExperience', icon1: 'M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z', icon2: 'M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z' },
    {
        name: 'ความสามารถและทักษะ', to: '/Skill',
        icon1: 'M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z',
        icon2: ''
    },
    {
        name: 'ระบบที่เคยพัฒนา', to: '/System',
        icon1: 'M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z',
        icon2: ''
    },
]
const menuclose = () => {
    counter.menu = false
}


</script>