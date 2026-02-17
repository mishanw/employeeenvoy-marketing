<script lang="ts">
    import { Sparkles, ArrowRight, Play, CheckCircle2, Building2 } from "@lucide/svelte";
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

    <!-- Animated gradient blobs (reduced from 3 to 2 for cleaner hero) -->
    <div
        class="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-orange-300/20 rounded-full blur-3xl animate-blob"
    ></div>
    <div
        class="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-br from-orange-200/20 to-amber-200/15 rounded-full blur-3xl animate-blob-delay"
    ></div>

    <!-- Subtle grid pattern overlay -->
    <div class="absolute inset-0 bg-grid-pattern opacity-40"></div>

    <div class="relative max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <!-- Left: Text Content -->
            <div class="text-center lg:text-left">
                {#if mounted}
                    <!-- MSP-first badge -->
                    <div
                        class="animate-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 text-amber-700 dark:text-amber-400 text-sm font-medium mb-6 shadow-sm border border-amber-200/50 dark:border-amber-700/50"
                    >
                        <Building2 class="w-4 h-4" />
                        <span>Built for MSPs & IT Teams</span>
                    </div>

                    <h1
                        class="animate-fade-in-delay-1 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-[1.1] font-heading tracking-tight"
                    >
                        Onboard in
                        <span class="relative">
                            <span
                                class="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent"
                                >Minutes</span
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
                        </span>, Not Hours
                    </h1>

                    <p
                        class="animate-fade-in-delay-2 text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                    >
                        Automate employee onboarding, offboarding, and app provisioning across <span
                            class="font-semibold text-gray-900 dark:text-white"
                            >189 integrations</span
                        >. One workflow replaces hours of manual IT work.
                    </p>

                    <div
                        class="animate-fade-in-delay-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
                    >
                        <a
                            href="/contact"
                            class="group w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl hover:from-amber-400 hover:to-orange-400 transition-all shadow-xl shadow-amber-500/25 hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105 flex items-center justify-center gap-2"
                        >
                            Book a Demo
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
                        class="animate-fade-in-delay-3 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3 text-sm text-gray-600 dark:text-gray-400"
                    >
                        <div class="flex items-center gap-2">
                            <div
                                class="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center"
                            >
                                <CheckCircle2
                                    class="w-3.5 h-3.5 text-green-600 dark:text-green-400"
                                />
                            </div>
                            <span>14-day free trial</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <div
                                class="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center"
                            >
                                <CheckCircle2
                                    class="w-3.5 h-3.5 text-green-600 dark:text-green-400"
                                />
                            </div>
                            <span>No per-user fees</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <div
                                class="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center"
                            >
                                <CheckCircle2
                                    class="w-3.5 h-3.5 text-green-600 dark:text-green-400"
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
