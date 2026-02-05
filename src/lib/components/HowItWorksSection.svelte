<script lang="ts">
    import { Zap, Check, ChevronRight } from "@lucide/svelte";
</script>

<!-- How It Works Section -->
<section
    id="how-it-works"
    class="relative py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 overflow-hidden"
>
    <!-- Background decoration -->
    <div
        class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent"
    ></div>
    <div
        class="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-amber-100/30 to-transparent rounded-full blur-3xl"
    ></div>
    <div
        class="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-orange-100/30 to-transparent rounded-full blur-3xl"
    ></div>

    <div class="relative max-w-7xl mx-auto">
        <div class="text-center mb-16">
            <div
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-sm font-medium mb-4"
            >
                <Zap class="w-4 h-4" />
                <span>Simple Setup</span>
            </div>
            <h2
                class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-heading"
            >
                How It Works
            </h2>
            <p
                class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
                Three simple steps to automate your employee lifecycle
            </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
            <!-- Step 1 -->
            <div class="group relative">
                <div
                    class="relative bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                    <!-- Step number badge -->
                    <div
                        class="absolute -top-5 left-8 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform"
                    >
                        1
                    </div>
                    <div class="mt-6">
                        <h3
                            class="text-xl font-bold text-gray-900 dark:text-white mb-4"
                        >
                            Connect Your Apps
                        </h3>
                        <p
                            class="text-gray-600 dark:text-gray-300 leading-relaxed"
                        >
                            Link your identity providers, productivity suites,
                            and business apps with <span
                                class="font-semibold text-amber-600 dark:text-amber-400"
                                >guided setup wizards</span
                            >. No coding required.
                        </p>
                    </div>
                    <!-- Visual indicator -->
                    <div class="mt-6 flex gap-2">
                        <div
                            class="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 text-xs font-bold"
                        >
                            M
                        </div>
                        <div
                            class="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 text-xs font-bold"
                        >
                            S
                        </div>
                        <div
                            class="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 text-xs font-bold"
                        >
                            O
                        </div>
                        <div
                            class="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-400 text-xs"
                        >
                            +77
                        </div>
                    </div>
                </div>
                <!-- Connector line -->
                <div
                    class="hidden md:block absolute top-1/2 right-0 translate-x-1/2 w-8 lg:w-12 h-0.5 bg-gradient-to-r from-amber-400 to-amber-300"
                ></div>
                <div
                    class="hidden md:block absolute top-1/2 right-0 translate-x-full w-3 h-3 rounded-full bg-amber-400 -translate-y-1/2 ml-1"
                ></div>
            </div>

            <!-- Step 2 -->
            <div class="group relative">
                <div
                    class="relative bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                    <div
                        class="absolute -top-5 left-8 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform"
                    >
                        2
                    </div>
                    <div class="mt-6">
                        <h3
                            class="text-xl font-bold text-gray-900 dark:text-white mb-4"
                        >
                            Create Playbooks
                        </h3>
                        <p
                            class="text-gray-600 dark:text-gray-300 leading-relaxed"
                        >
                            Define onboarding and offboarding workflows by role,
                            department, or customer. <span
                                class="font-semibold text-amber-600 dark:text-amber-400"
                                >Use templates</span
                            > or customize your own.
                        </p>
                    </div>
                    <!-- Visual indicator -->
                    <div class="mt-6 space-y-2">
                        <div
                            class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
                        >
                            <Check class="w-4 h-4 text-green-500" />
                            <span>Onboarding template</span>
                        </div>
                        <div
                            class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
                        >
                            <Check class="w-4 h-4 text-green-500" />
                            <span>Offboarding template</span>
                        </div>
                    </div>
                </div>
                <!-- Connector line -->
                <div
                    class="hidden md:block absolute top-1/2 right-0 translate-x-1/2 w-8 lg:w-12 h-0.5 bg-gradient-to-r from-amber-400 to-amber-300"
                ></div>
                <div
                    class="hidden md:block absolute top-1/2 right-0 translate-x-full w-3 h-3 rounded-full bg-amber-400 -translate-y-1/2 ml-1"
                ></div>
            </div>

            <!-- Step 3 -->
            <div class="group relative">
                <div
                    class="relative bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                    <div
                        class="absolute -top-5 left-8 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform"
                    >
                        3
                    </div>
                    <div class="mt-6">
                        <h3
                            class="text-xl font-bold text-gray-900 dark:text-white mb-4"
                        >
                            Automate & Track
                        </h3>
                        <p
                            class="text-gray-600 dark:text-gray-300 leading-relaxed"
                        >
                            Submit requests and watch tasks execute
                            automatically. Track progress in real-time with <span
                                class="font-semibold text-amber-600 dark:text-amber-400"
                                >full audit trails</span
                            >.
                        </p>
                    </div>
                    <!-- Visual indicator -->
                    <div class="mt-6">
                        <div class="flex items-center gap-2 mb-2">
                            <div
                                class="flex-1 h-2 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden"
                            >
                                <div
                                    class="h-full w-3/4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
                                ></div>
                            </div>
                            <span
                                class="text-sm font-semibold text-green-600 dark:text-green-400"
                                >75%</span
                            >
                        </div>
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                            8 of 12 tasks completed
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-16 text-center">
            <a
                href="#features"
                class="group inline-flex items-center gap-2 px-6 py-3 text-amber-600 dark:text-amber-400 font-semibold bg-amber-50 dark:bg-amber-900/20 rounded-xl hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-all"
            >
                Explore all features
                <ChevronRight
                    class="w-5 h-5 group-hover:translate-x-1 transition-transform"
                />
            </a>
        </div>
    </div>
</section>
