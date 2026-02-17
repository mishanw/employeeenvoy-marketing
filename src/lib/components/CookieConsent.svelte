<script lang="ts">
  import { onMount } from "svelte";
  import { Cookie, X } from "@lucide/svelte";

  let visible = $state(false);
  let showSettings = $state(false);
  let analyticsEnabled = $state(false);
  let functionalEnabled = $state(true);

  onMount(() => {
    const consent = localStorage.getItem("ee_cookie_consent");
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => (visible = true), 1000);
    } else {
      try {
        const prefs = JSON.parse(consent);
        analyticsEnabled = prefs.analytics ?? false;
        functionalEnabled = prefs.functional ?? true;
      } catch {
        // Invalid stored consent, show banner again
        setTimeout(() => (visible = true), 1000);
      }
    }
  });

  function acceptAll() {
    analyticsEnabled = true;
    functionalEnabled = true;
    saveAndClose();
  }

  function acceptEssential() {
    analyticsEnabled = false;
    functionalEnabled = false;
    saveAndClose();
  }

  function saveSettings() {
    saveAndClose();
  }

  function saveAndClose() {
    const prefs = {
      essential: true, // Always on
      functional: functionalEnabled,
      analytics: analyticsEnabled,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("ee_cookie_consent", JSON.stringify(prefs));
    visible = false;
    showSettings = false;
  }

  export function openSettings() {
    visible = true;
    showSettings = true;
  }
</script>

{#if visible}
  <div
    class="fixed bottom-0 left-0 right-0 z-[200] p-4 sm:p-6"
    role="dialog"
    aria-label="Cookie consent"
  >
    <div
      class="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-2xl shadow-black/20 border border-gray-200 dark:border-slate-700 overflow-hidden"
    >
      {#if !showSettings}
        <!-- Main Banner -->
        <div class="p-5 sm:p-6">
          <div class="flex items-start gap-3">
            <div
              class="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0"
            >
              <Cookie
                class="w-5 h-5 text-amber-600 dark:text-amber-400"
              />
            </div>
            <div class="flex-1 min-w-0">
              <h3
                class="text-base font-semibold text-gray-900 dark:text-white mb-1"
              >
                Cookie Preferences
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                We use essential cookies to make our site work. With your consent,
                we may also use non-essential cookies to improve your experience.
                Read our <a
                  href="/cookies"
                  class="text-amber-600 dark:text-amber-400 underline hover:text-amber-500"
                  >Cookie Policy</a
                > for details.
              </p>
            </div>
            <button
              onclick={() => acceptEssential()}
              class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 flex-shrink-0"
              aria-label="Dismiss"
            >
              <X class="w-5 h-5" />
            </button>
          </div>
          <div
            class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mt-4"
          >
            <button
              onclick={acceptAll}
              class="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg hover:from-amber-400 hover:to-orange-400 transition-all"
            >
              Accept All
            </button>
            <button
              onclick={acceptEssential}
              class="px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-700 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-600 transition-all"
            >
              Essential Only
            </button>
            <button
              onclick={() => (showSettings = true)}
              class="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      {:else}
        <!-- Settings Panel -->
        <div class="p-5 sm:p-6">
          <div class="flex items-center justify-between mb-4">
            <h3
              class="text-base font-semibold text-gray-900 dark:text-white"
            >
              Cookie Settings
            </h3>
            <button
              onclick={() => (showSettings = false)}
              class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              aria-label="Back"
            >
              <X class="w-5 h-5" />
            </button>
          </div>

          <div class="space-y-4">
            <!-- Essential -->
            <div
              class="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg"
            >
              <div>
                <p
                  class="text-sm font-medium text-gray-900 dark:text-white"
                >
                  Essential
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  Required for the site to function. Cannot be disabled.
                </p>
              </div>
              <div
                class="w-10 h-6 bg-amber-500 rounded-full flex items-center justify-end px-0.5 opacity-60 cursor-not-allowed"
              >
                <div class="w-5 h-5 bg-white rounded-full shadow-sm"></div>
              </div>
            </div>

            <!-- Functional -->
            <label
              class="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg cursor-pointer"
            >
              <div>
                <p
                  class="text-sm font-medium text-gray-900 dark:text-white"
                >
                  Functional
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  Remember preferences and enhance your experience.
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={functionalEnabled}
                onclick={() => (functionalEnabled = !functionalEnabled)}
                class="w-10 h-6 rounded-full flex items-center px-0.5 transition-colors {functionalEnabled
                  ? 'bg-amber-500 justify-end'
                  : 'bg-gray-300 dark:bg-slate-600 justify-start'}"
              >
                <div class="w-5 h-5 bg-white rounded-full shadow-sm"></div>
              </button>
            </label>

            <!-- Analytics -->
            <label
              class="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg cursor-pointer"
            >
              <div>
                <p
                  class="text-sm font-medium text-gray-900 dark:text-white"
                >
                  Analytics
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  Help us improve by collecting anonymous usage data.
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={analyticsEnabled}
                onclick={() => (analyticsEnabled = !analyticsEnabled)}
                class="w-10 h-6 rounded-full flex items-center px-0.5 transition-colors {analyticsEnabled
                  ? 'bg-amber-500 justify-end'
                  : 'bg-gray-300 dark:bg-slate-600 justify-start'}"
              >
                <div class="w-5 h-5 bg-white rounded-full shadow-sm"></div>
              </button>
            </label>
          </div>

          <div class="flex gap-2 mt-4">
            <button
              onclick={saveSettings}
              class="flex-1 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg hover:from-amber-400 hover:to-orange-400 transition-all"
            >
              Save Preferences
            </button>
            <button
              onclick={acceptAll}
              class="flex-1 px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-700 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-600 transition-all"
            >
              Accept All
            </button>
          </div>
        </div>
      {/if}
    </div>
  </div>
{/if}
