<script lang="ts">
    import { AlertCircle, Clock, ShieldAlert, Eye } from "@lucide/svelte";
</script>

<!-- Problem Section - Speak directly to the visitor -->
<section
    id="problem"
    class="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900 overflow-hidden"
>
    <!-- Subtle background decoration -->
    <div class="absolute inset-0 bg-dot-pattern opacity-30"></div>

    <div class="relative max-w-7xl mx-auto">
        <div class="text-center mb-16">
            <div
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm font-medium mb-4"
            >
                <AlertCircle class="w-4 h-4" />
                <span>Sound Familiar?</span>
            </div>
            <h2
                class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-heading"
            >
                Your IT Team Shouldn't Be Doing This
            </h2>
            <p
                class="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
                Every new hire means hours of repetitive setup. Every departure means chasing down accounts you might have missed.
            </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div
                class="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 border border-red-200/80 dark:border-red-900/50 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 transition-all duration-300"
            >
                <div
                    class="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center mb-5 shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform"
                >
                    <Clock class="w-7 h-7 text-white" />
                </div>
                <h3
                    class="text-xl font-bold text-gray-900 dark:text-white mb-3"
                >
                    4-6 Hours per New Hire
                </h3>
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Creating accounts in Microsoft 365, Slack, Okta, your CRM, project tools, and more &mdash; <span
                        class="font-semibold text-red-600 dark:text-red-400"
                        >one app at a time, every single time</span
                    >
                </p>
            </div>

            <div
                class="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200/80 dark:border-amber-900/50 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300"
            >
                <div
                    class="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-5 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform"
                >
                    <ShieldAlert class="w-7 h-7 text-white" />
                </div>
                <h3
                    class="text-xl font-bold text-gray-900 dark:text-white mb-3"
                >
                    Offboarding That Leaks
                </h3>
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                    That contractor who left 3 months ago? They <span
                        class="font-semibold text-amber-600 dark:text-amber-400"
                        >still have access</span
                    > to Slack, GitHub, and your cloud console
                </p>
            </div>

            <div
                class="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200/80 dark:border-blue-900/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300"
            >
                <div
                    class="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-5 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform"
                >
                    <Eye class="w-7 h-7 text-white" />
                </div>
                <h3
                    class="text-xl font-bold text-gray-900 dark:text-white mb-3"
                >
                    No Single Source of Truth
                </h3>
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Spreadsheets, sticky notes, tribal knowledge &mdash; <span
                        class="font-semibold text-blue-600 dark:text-blue-400"
                        >who has access to what?</span
                    > Nobody actually knows
                </p>
            </div>
        </div>
    </div>
</section>
