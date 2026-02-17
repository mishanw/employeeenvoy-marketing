<script lang="ts">
    import { Sparkles, ArrowRight, Play, CheckCircle2 } from "@lucide/svelte";
    import DashboardMockup from "./DashboardMockup.svelte";

    interface Props {
        mounted?: boolean;
    }

    let { mounted = false }: Props = $props();
</script>

<!-- Hero Section with Dashboard Mockup -->
<section
    class="relative pt-24 sm:pt-32 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
>
    <!-- Background with gradient and patterns -->
    <div
        class="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-orange-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    ></div>

    <!-- Animated gradient blobs -->
    <div
        class="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-200/40 to-orange-300/30 rounded-full blur-3xl animate-blob"
    ></div>
    <div
        class="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-amber-200/20 rounded-full blur-3xl animate-blob-delay"
    ></div>
    <div
        class="absolute top-1/2 right-10 w-64 h-64 bg-gradient-to-br from-amber-100/40 to-yellow-200/30 rounded-full blur-3xl animate-blob-delay-2"
    ></div>

    <!-- Subtle grid pattern overlay -->
    <div class="absolute inset-0 bg-grid-pattern opacity-50"></div>

    <!-- Decorative elements -->
    <div
        class="absolute top-32 left-10 w-20 h-20 border border-amber-200/50 rounded-2xl rotate-12 hidden lg:block"
    ></div>
    <div
        class="absolute bottom-40 right-20 w-16 h-16 border border-orange-200/50 rounded-xl -rotate-12 hidden lg:block"
    ></div>
    <div
        class="absolute top-1/2 left-20 w-3 h-3 bg-amber-400/60 rounded-full hidden lg:block"
    ></div>
    <div
        class="absolute top-40 right-1/3 w-2 h-2 bg-orange-400/60 rounded-full hidden lg:block"
    ></div>

    <div class="relative max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <!-- Left: Text Content -->
            <div class="text-center lg:text-left">
                {#if mounted}
                    <div
                        class="animate-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 text-amber-700 dark:text-amber-400 text-sm font-medium mb-6 shadow-sm border border-amber-200/50 dark:border-amber-700/50"
                    >
                        <Sparkles class="w-4 h-4" />
                        <span
                            >Your Trusted Partner for Employee Transitions</span
                        >
                    </div>

                    <h1
                        class="animate-fade-in-delay-1 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-[1.1] font-heading tracking-tight"
                    >
                        Employee Lifecycle
                        <span class="relative">
                            <span
                                class="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent"
                                >Management</span
                            >
                            <svg
                                class="absolute -bottom-2 left-0 w-full h-3 text-amber-400/30"
                                viewBox="0 0 200 12"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M0,8 Q50,0 100,8 T200,8"
                                    stroke="currentColor"
                                    stroke-width="4"
                                    fill="none"
                                    stroke-linecap="round"
                                />
                            </svg>
                        </span>
                        <br />Made Simple
                    </h1>

                    <p
                        class="animate-fade-in-delay-2 text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                    >
                        Automate onboarding, offboarding, and status changes
                        across <span
                            class="font-semibold text-amber-600 dark:text-amber-400"
                            >189 business applications</span
                        >. Built for MSPs and enterprises.
                    </p>

                    <div
                        class="animate-fade-in-delay-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
                    >
                        <a
                            href="/contact"
                            class="group w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl hover:from-amber-400 hover:to-orange-400 transition-all shadow-xl shadow-amber-500/25 hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105 flex items-center justify-center gap-2 animate-pulse-glow"
                        >
                            Get Started
                            <ArrowRight
                                class="w-5 h-5 group-hover:translate-x-1 transition-transform"
                            />
                        </a>
                        <a
                            href="#how-it-works"
                            class="group w-full sm:w-auto px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-gray-200 dark:border-slate-700 rounded-2xl hover:border-amber-400 hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg"
                        >
                            <Play class="w-5 h-5 text-amber-500" />
                            See How It Works
                        </a>
                    </div>

                    <!-- Trust indicators -->
                    <div
                        class="animate-fade-in-delay-3 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3 text-sm text-gray-500 dark:text-gray-400"
                    >
                        <div class="flex items-center gap-2">
                            <div
                                class="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center"
                            >
                                <CheckCircle2
                                    class="w-3.5 h-3.5 text-green-500"
                                />
                            </div>
                            <span>Free to get started</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <div
                                class="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center"
                            >
                                <CheckCircle2
                                    class="w-3.5 h-3.5 text-green-500"
                                />
                            </div>
                            <span>No credit card required</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <div
                                class="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center"
                            >
                                <CheckCircle2
                                    class="w-3.5 h-3.5 text-green-500"
                                />
                            </div>
                            <span>189 integrations</span>
                        </div>
                    </div>
                {/if}
            </div>

            <!-- Right: Dashboard Mockup -->
            <DashboardMockup {mounted} />
        </div>
    </div>
</section>
