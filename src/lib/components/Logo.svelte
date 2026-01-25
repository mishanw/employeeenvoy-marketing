<script lang="ts">
  import { onMount } from 'svelte';

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

  // Generate unique IDs for gradients (to avoid conflicts with multiple logos)
  let gradientId = $state('');
  let gradientId2 = $state('');

  onMount(() => {
    const uid = Math.random().toString(36).substr(2, 9);
    gradientId = `envoyGradient1-${uid}`;
    gradientId2 = `envoyGradient2-${uid}`;
  });

  const sizeClasses = {
    sm: { icon: 'w-6 h-6', text: 'text-lg', gap: 'gap-2' },
    md: { icon: 'w-8 h-8', text: 'text-xl', gap: 'gap-2.5' },
    lg: { icon: 'w-12 h-12', text: 'text-2xl', gap: 'gap-3' },
    xl: { icon: 'w-16 h-16', text: 'text-4xl', gap: 'gap-4' }
  };

  const variantClasses = {
    default: { text: 'text-gray-900 dark:text-white', icon: 'text-blue-500' },
    light: { text: 'text-white', icon: 'text-white' },
    dark: { text: 'text-gray-900', icon: 'text-blue-600' }
  };

  const currentSize = sizeClasses[size];
  const currentVariant = variantClasses[variant];
</script>

<div class="flex items-center {currentSize.gap} {className}">
  <!-- Abstract Geometric Logo -->
  <div class="{currentSize.icon} flex-shrink-0">
    {#if gradientId}
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
        <defs>
          <!-- Primary gradient: Blue to Cyan -->
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#3b82f6" />
            <stop offset="100%" stop-color="#06b6d4" />
          </linearGradient>

          <!-- Secondary gradient: Cyan to Blue (reverse) -->
          <linearGradient id={gradientId2} x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#06b6d4" />
            <stop offset="100%" stop-color="#3b82f6" />
          </linearGradient>
        </defs>

        <!-- Background rounded square -->
        <rect
          x="4" y="4"
          width="56" height="56"
          rx="14"
          fill="url(#{gradientId})"
        />

        <!-- First chevron/arrow shape (left) - suggests "Employee" -->
        <path
          d="M 18 20 L 30 32 L 18 44"
          stroke="white"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
          opacity="0.9"
        />

        <!-- Second chevron/arrow shape (right) - suggests "Envoy/movement" -->
        <path
          d="M 34 20 L 46 32 L 34 44"
          stroke="white"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
          opacity="0.9"
        />

        <!-- Amber accent dot - represents the employee/person -->
        <circle cx="52" cy="12" r="5" fill="#f59e0b" />
      </svg>
    {/if}
  </div>

  {#if showText}
    <span class="{currentSize.text} font-bold {currentVariant.text} tracking-tight">
      Employee<span class="text-amber-500 dark:text-amber-400">Envoy</span>
    </span>
  {/if}
</div>
