<template>
    <div class=" transition-all">
        <nav :class="scrollPosition > 0 ? 'shadow' : ''"
            class="fixed p-2  w-full text-gray-600 dark:text-gray-200 flex items-center  z-50    bg-white  dark:bg-gray-900 border-b dark:border-gray-700 border-gray-300">
            <div class="container flex flex-wrap justify-between items-center mx-auto ">
                <div class="flex ml-3 items-center">
                    <div class="mx-1 cursor-pointer flex items-center rounded  p-1  font-extrabold text-black"
                        @click="">
                        <nuxt-img format="webp" sizes="sm:100vw md:50vw lg:400px" src="/icon_64x64.9565c6.png"
                            alt="Logo"
                            class="relative select-none w-12 h-12 z-10 m-auto rounded-full  pointer-events-none cursor-pointer bg-gray-100 dark:bg-gray-800" />
                    </div>

                    <div class="mx-1 block lg:hidden p-1">
                        <div @click="(counter.menu ? counter.menu = false : counter.menu = true)"
                            class="relative select-none h-10  z-10  m-auto    cursor-pointer  rounded-lg">
                            <svg width="40" height="40" viewBox="0 0 16 16" class="justify-center inline-block">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <path
                                        :d="counter.menu ? 'M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'
                                        : 'M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'"
                                        fill="currentColor"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="flex items-center font-bold text-base">Intarat Mekloy</div>
                <div class="flex items-end mr-3">
                    <div class="w-[80px] relative text-right">
                        <ColorScheme placeholder="" tag="div">
                            <div class="justify-center inline-block rounded-full  p-2  cursor-pointer"
                                @click="$colorMode.preference == 'system' ? $colorMode.preference = 'light' : $colorMode.preference != 'dark' ? $colorMode.preference = 'dark' : $colorMode.preference = 'system'">
                                <svg viewBox="0 0 16 16" class=" h-6 w-6">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <path
                                            :d="$colorMode.preference == 'dark' ? 'M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z'
                                        : ($colorMode.preference == 'light' ? 'M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z'
                                            : 'M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z')"
                                            fill="currentColor"></path>
                                    </g>
                                </svg>
                            </div>
                        </ColorScheme>
                        <div v-if="$colorMode.unknown"
                            class="relative select-none h-9 w-9 z-10  m-auto  rounded-full pointer-events-none bg-gray-200 dark:bg-gray-800 animate-pulse justify-center inline-block ">
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div style="z-index: 100" class="max-w-8xl mx-auto px-4 ">
            <div :class="counter.menu == true ? '' : 'hidden lg:block'"
                class="  border-r-0 lg:border-r dark:border-gray-700 border-gray-300 rounded w-full no-scrollbar pt-1 dark:bg-gray-900 bg-white dark:text-gray-200 fixed z-20 inset-0 top-[3.0rem] left-[max(0px,calc(50%-45rem))] right-auto lg:w-[20rem] pb-20 px-2 overflow-y-auto">
                <nav id="nav" class=" select-none lg:text-sm lg:leading-6 relative mt-6 " style="z-index: 80">
                    <ul class="my-2">
                        <li>

                        </li>
                    </ul>
                </nav>
            </div>
            <div class="">
                <div class="pt-20  lg:pl-[20rem] ">
                    <div class="mb-16 md:mb-2 md:mt-0 mt-4 ">
                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
const scrollPosition = ref();
const counter = useCounterStore();

const updateScroll = () => {
    scrollPosition.value = window.scrollY;
}
const menuclose = () => {
    setTimeout(() => {
        counter.menu = false
    }, 300);
}
onMounted(() => {
    scrollPosition.value = window.scrollY;
    window.addEventListener("scroll", updateScroll);
})
onBeforeUnmount(() => {
    window.removeEventListener("scroll", updateScroll);
})
</script>