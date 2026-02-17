<script lang="ts">
  import Logo from "./Logo.svelte";
</script>

<footer class="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto">
    <div class="grid md:grid-cols-4 gap-8 mb-8">
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
    </div>

    <div class="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
      <p>&copy; {new Date().getFullYear()} Employee Envoy. All rights reserved.</p>
    </div>
  </div>
</footer>
