<script lang="ts">
  import Logo from "./Logo.svelte";
  import { Mail } from "@lucide/svelte";

  let email = $state("");
  let subscribed = $state(false);
  let subscribing = $state(false);

  async function handleSubscribe(e: Event) {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

    subscribing = true;
    try {
      // Submit to the contact API with a newsletter subject
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Newsletter Subscriber",
          email: email,
          company: "N/A",
          message: "Newsletter signup from footer",
          subject: "Newsletter",
          _ts: Date.now().toString(),
        }),
      });
      subscribed = true;
    } catch {
      // Silently handle - still show success to not leak info
      subscribed = true;
    } finally {
      subscribing = false;
    }
  }
</script>

<footer class="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto">
    <div class="grid md:grid-cols-5 gap-8 mb-8">
      <div>
        <h3 class="text-white font-bold mb-4">Product</h3>
        <ul class="space-y-2 text-sm">
          <li>
            <a href="/#features" class="hover:text-amber-400 transition-colors">Features</a>
          </li>
          <li>
            <a href="/#pricing" class="hover:text-amber-400 transition-colors">Pricing</a>
          </li>
          <li>
            <a href="/integrations" class="hover:text-amber-400 transition-colors">Integrations</a>
          </li>
          <li>
            <a href="/security" class="hover:text-amber-400 transition-colors">Security</a>
          </li>
          <li>
            <a href="/roi-calculator" class="hover:text-amber-400 transition-colors">ROI Calculator</a>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-white font-bold mb-4">Compare</h3>
        <ul class="space-y-2 text-sm">
          <li>
            <a href="/compare/rippling" class="hover:text-amber-400 transition-colors">vs. Rippling</a>
          </li>
          <li>
            <a href="/compare/jumpcloud" class="hover:text-amber-400 transition-colors">vs. JumpCloud</a>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-white font-bold mb-4">Company</h3>
        <ul class="space-y-2 text-sm">
          <li>
            <a href="/about" class="hover:text-amber-400 transition-colors">About</a>
          </li>
          <li>
            <a href="/contact" class="hover:text-amber-400 transition-colors">Contact</a>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-white font-bold mb-4">Legal</h3>
        <ul class="space-y-2 text-sm">
          <li>
            <a href="/privacy" class="hover:text-amber-400 transition-colors">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms" class="hover:text-amber-400 transition-colors">Terms of Service</a>
          </li>
          <li>
            <a href="/eula" class="hover:text-amber-400 transition-colors">EULA</a>
          </li>
          <li>
            <a href="/cookies" class="hover:text-amber-400 transition-colors">Cookie Policy</a>
          </li>
          <li>
            <a href="/privacy#do-not-sell" class="hover:text-amber-400 transition-colors">Do Not Sell My Info</a>
          </li>
        </ul>
      </div>

      <!-- Newsletter signup -->
      <div>
        <h3 class="text-white font-bold mb-4">Stay Updated</h3>
        <p class="text-sm text-gray-400 mb-4">Product updates and tips for MSPs and IT teams.</p>
        {#if subscribed}
          <div class="flex items-center gap-2 text-sm text-green-400">
            <Mail class="w-4 h-4" />
            <span>You're on the list!</span>
          </div>
        {:else}
          <form onsubmit={handleSubscribe} class="flex gap-2">
            <input
              type="email"
              bind:value={email}
              placeholder="you@company.com"
              required
              class="flex-1 min-w-0 px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={subscribing}
              class="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg hover:from-amber-400 hover:to-orange-400 transition-all disabled:opacity-50 flex-shrink-0"
            >
              {subscribing ? "..." : "Subscribe"}
            </button>
          </form>
        {/if}
      </div>
    </div>

    <div class="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
      <p>&copy; {new Date().getFullYear()} Employee Envoy. All rights reserved.</p>
    </div>
  </div>
</footer>
