<script lang="ts">
    import { Users, UserPlus, UserMinus, CheckCircle2 } from "@lucide/svelte";

    interface Props {
        mounted?: boolean;
    }

    let { mounted = false }: Props = $props();
</script>

<div class="relative lg:block">
    {#if mounted}
        <div class="animate-fade-in-delay-2">
            <!-- Glow effect behind dashboard -->
            <div
                class="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-3xl blur-2xl scale-105"
            ></div>

            <!-- Main Dashboard Card -->
            <div
                class="relative animate-float bg-white dark:bg-slate-800 rounded-2xl shadow-2xl shadow-gray-900/10 dark:shadow-black/30 border border-gray-200/80 dark:border-slate-700 overflow-hidden"
            >
                <!-- Header -->
                <div
                    class="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 px-6 py-4"
                >
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div
                                class="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                            >
                                <Users class="w-5 h-5 text-white" />
                            </div>
                            <span class="text-white font-semibold"
                                >Employee Envoy Dashboard</span
                            >
                        </div>
                        <div class="flex gap-1.5">
                            <div
                                class="w-3 h-3 rounded-full bg-white/30 hover:bg-white/50 transition-colors cursor-pointer"
                            ></div>
                            <div
                                class="w-3 h-3 rounded-full bg-white/30 hover:bg-white/50 transition-colors cursor-pointer"
                            ></div>
                            <div
                                class="w-3 h-3 rounded-full bg-white/30 hover:bg-white/50 transition-colors cursor-pointer"
                            ></div>
                        </div>
                    </div>
                </div>

                <!-- Content -->
                <div class="p-6 space-y-5">
                    <!-- Stats Row -->
                    <div class="grid grid-cols-3 gap-3">
                        <div
                            class="animate-fade-in-delay-1 opacity-0 bg-gradient-to-br from-green-50 to-emerald-50/50 dark:from-green-900/30 dark:to-emerald-900/20 rounded-xl p-4 text-center border border-green-100 dark:border-green-800/30"
                        >
                            <p
                                class="text-2xl font-bold text-green-600 dark:text-green-400"
                            >
                                24
                            </p>
                            <p
                                class="text-xs text-gray-600 dark:text-gray-400 font-medium"
                            >
                                Active
                            </p>
                        </div>
                        <div
                            class="animate-fade-in-delay-2 opacity-0 bg-gradient-to-br from-amber-50 to-orange-50/50 dark:from-amber-900/30 dark:to-orange-900/20 rounded-xl p-4 text-center border border-amber-100 dark:border-amber-800/30"
                        >
                            <p
                                class="text-2xl font-bold text-amber-600 dark:text-amber-400"
                            >
                                8
                            </p>
                            <p
                                class="text-xs text-gray-600 dark:text-gray-400 font-medium"
                            >
                                Pending
                            </p>
                        </div>
                        <div
                            class="animate-fade-in-delay-3 opacity-0 bg-gradient-to-br from-blue-50 to-indigo-50/50 dark:from-blue-900/30 dark:to-indigo-900/20 rounded-xl p-4 text-center border border-blue-100 dark:border-blue-800/30"
                        >
                            <p
                                class="text-2xl font-bold text-blue-600 dark:text-blue-400"
                            >
                                156
                            </p>
                            <p
                                class="text-xs text-gray-600 dark:text-gray-400 font-medium"
                            >
                                Completed
                            </p>
                        </div>
                    </div>

                    <!-- Recent Activity -->
                    <div class="space-y-3">
                        <p
                            class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                        >
                            Recent Activity
                        </p>

                        <div
                            class="animate-fade-in-delay-1 opacity-0 flex items-center gap-3 p-3.5 bg-gradient-to-r from-gray-50 to-white dark:from-slate-700/50 dark:to-slate-700/30 rounded-xl border border-gray-100 dark:border-slate-600/50 hover:shadow-md transition-shadow"
                        >
                            <div
                                class="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/30 rounded-xl flex items-center justify-center"
                            >
                                <UserPlus
                                    class="w-5 h-5 text-green-600 dark:text-green-400"
                                />
                            </div>
                            <div class="flex-1 min-w-0">
                                <p
                                    class="text-sm font-semibold text-gray-900 dark:text-white truncate"
                                >
                                    Sarah Chen - Onboarding
                                </p>
                                <p
                                    class="text-xs text-gray-500 dark:text-gray-400"
                                >
                                    Microsoft 365, Slack, Okta
                                </p>
                            </div>
                            <span
                                class="px-2.5 py-1 text-xs font-semibold bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 rounded-lg"
                                >Completed</span
                            >
                        </div>

                        <div
                            class="animate-fade-in-delay-2 opacity-0 flex items-center gap-3 p-3.5 bg-gradient-to-r from-gray-50 to-white dark:from-slate-700/50 dark:to-slate-700/30 rounded-xl border border-gray-100 dark:border-slate-600/50 hover:shadow-md transition-shadow"
                        >
                            <div
                                class="w-10 h-10 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/50 dark:to-orange-900/30 rounded-xl flex items-center justify-center"
                            >
                                <UserMinus
                                    class="w-5 h-5 text-amber-600 dark:text-amber-400"
                                />
                            </div>
                            <div class="flex-1 min-w-0">
                                <p
                                    class="text-sm font-semibold text-gray-900 dark:text-white truncate"
                                >
                                    John Miller - Offboarding
                                </p>
                                <p
                                    class="text-xs text-gray-500 dark:text-gray-400"
                                >
                                    8 of 12 tasks completed
                                </p>
                            </div>
                            <span
                                class="px-2.5 py-1 text-xs font-semibold bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 rounded-lg"
                                >In Progress</span
                            >
                        </div>

                        <div
                            class="animate-fade-in-delay-3 opacity-0 flex items-center gap-3 p-3.5 bg-gradient-to-r from-gray-50 to-white dark:from-slate-700/50 dark:to-slate-700/30 rounded-xl border border-gray-100 dark:border-slate-600/50 hover:shadow-md transition-shadow"
                        >
                            <div
                                class="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/30 rounded-xl flex items-center justify-center"
                            >
                                <UserPlus
                                    class="w-5 h-5 text-blue-600 dark:text-blue-400"
                                />
                            </div>
                            <div class="flex-1 min-w-0">
                                <p
                                    class="text-sm font-semibold text-gray-900 dark:text-white truncate"
                                >
                                    Alex Rivera - Onboarding
                                </p>
                                <p
                                    class="text-xs text-gray-500 dark:text-gray-400"
                                >
                                    Starting Monday
                                </p>
                            </div>
                            <span
                                class="px-2.5 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 rounded-lg"
                                >Scheduled</span
                            >
                        </div>
                    </div>
                </div>
            </div>

            <!-- Floating Integration Badges -->
            <div
                class="absolute right-0 sm:-right-6 top-12 sm:top-16 bg-white dark:bg-slate-800 rounded-lg sm:rounded-xl shadow-xl shadow-gray-900/10 p-2 sm:p-3 border border-gray-200 dark:border-slate-700 animate-float z-10"
                style="animation-delay: 0.5s;"
            >
                <div class="flex items-center gap-1.5 sm:gap-2">
                    <div
                        class="w-7 h-7 sm:w-9 sm:h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-md sm:rounded-lg flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-500/30"
                    >
                        M
                    </div>
                    <span
                        class="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:inline"
                        >Microsoft 365</span
                    >
                    <CheckCircle2
                        class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500"
                    />
                </div>
            </div>

            <div
                class="absolute left-0 sm:-left-6 bottom-20 sm:bottom-24 bg-white dark:bg-slate-800 rounded-lg sm:rounded-xl shadow-xl shadow-gray-900/10 p-2 sm:p-3 border border-gray-200 dark:border-slate-700 animate-float z-10"
                style="animation-delay: 1s;"
            >
                <div class="flex items-center gap-1.5 sm:gap-2">
                    <div
                        class="w-7 h-7 sm:w-9 sm:h-9 bg-gradient-to-br from-purple-500 to-purple-600 rounded-md sm:rounded-lg flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg shadow-purple-500/30"
                    >
                        S
                    </div>
                    <span
                        class="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:inline"
                        >Slack</span
                    >
                    <CheckCircle2
                        class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500"
                    />
                </div>
            </div>

            <div
                class="absolute right-4 sm:right-10 -bottom-2 sm:-bottom-4 bg-white dark:bg-slate-800 rounded-lg sm:rounded-xl shadow-xl shadow-gray-900/10 p-2 sm:p-3 border border-gray-200 dark:border-slate-700 animate-float hidden sm:flex z-10"
                style="animation-delay: 1.5s;"
            >
                <div class="flex items-center gap-1.5 sm:gap-2">
                    <div
                        class="w-7 h-7 sm:w-9 sm:h-9 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-md sm:rounded-lg flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg shadow-cyan-500/30"
                    >
                        O
                    </div>
                    <span
                        class="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300"
                        >Okta</span
                    >
                    <CheckCircle2
                        class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500"
                    />
                </div>
            </div>
        </div>
    {/if}
</div>
