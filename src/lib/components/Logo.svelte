<script lang="ts">
  interface LogoProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    showText?: boolean;
    variant?: 'default' | 'light' | 'dark';
    class?: string;
  }

  let {
    size = 'md',
    showText = true,
    variant = 'default',
    class: className = ''
  }: LogoProps = $props();

  // Generate unique ID for gradient (using random to avoid SSR conflicts)
  const gradientId = `brandGradient-${Math.random().toString(36).substr(2, 9)}`;

  const sizeClasses = {
    sm: { icon: 'w-7 h-7', text: 'text-lg', gap: 'gap-2' },
    md: { icon: 'w-9 h-9', text: 'text-xl', gap: 'gap-2.5' },
    lg: { icon: 'w-12 h-12', text: 'text-2xl', gap: 'gap-3' },
    xl: { icon: 'w-16 h-16', text: 'text-4xl', gap: 'gap-4' }
  };

  const variantClasses = {
    default: { text: 'text-slate-900 dark:text-white', accent: 'text-slate-600 dark:text-slate-300' },
    light: { text: 'text-white', accent: 'text-slate-200' },
    dark: { text: 'text-slate-900', accent: 'text-slate-600' }
  };

  const currentSize = sizeClasses[size];
  const currentVariant = variantClasses[variant];
</script>

<div class="flex items-center {currentSize.gap} {className}">
  <!-- Brand Icon: Shield with checkmark representing protection & completion -->
  <div class="{currentSize.icon} flex-shrink-0">
    {#if gradientId}
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F59E0B" />
            <stop offset="1" stop-color="#EA580C" />
          </linearGradient>
        </defs>

        <!-- Rounded square background with brand gradient -->
        <rect width="40" height="40" rx="8" fill="url(#{gradientId})" />

        <!-- Checkmark representing completed transitions -->
        <path
          d="M10 20l7 7 13-13"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />

        <!-- Partial arc representing lifecycle/journey -->
        <path
          d="M20 8c-6.627 0-12 5.373-12 12s5.373 12 12 12"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
          stroke-opacity="0.5"
        />
      </svg>
    {/if}
  </div>

  {#if showText}
    <span class="{currentSize.text} font-bold tracking-tight" style="font-family: 'Plus Jakarta Sans', sans-serif;">
      <span class="{currentVariant.text}">Employee</span><span class="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Envoy</span>
    </span>
  {/if}
</div>
