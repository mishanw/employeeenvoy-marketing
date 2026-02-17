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

  const sizeClasses = {
    sm: { icon: 'w-7 h-7', text: 'text-lg', gap: 'gap-2' },
    md: { icon: 'w-9 h-9', text: 'text-xl', gap: 'gap-2.5' },
    lg: { icon: 'w-12 h-12', text: 'text-2xl', gap: 'gap-3' },
    xl: { icon: 'w-16 h-16', text: 'text-4xl', gap: 'gap-4' }
  };

  const variantClasses = {
    default: { text: 'text-slate-900 dark:text-white', accent: 'text-amber-500' },
    light: { text: 'text-white', accent: 'text-amber-400' },
    dark: { text: 'text-slate-900', accent: 'text-amber-500' }
  };

  const currentSize = sizeClasses[size];
  const currentVariant = variantClasses[variant];
</script>

<div class="flex items-center {currentSize.gap} {className}">
  <!-- Brand Icon: Orange circle with diagonal motion lines -->
  <div class="{currentSize.icon} flex-shrink-0">
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="32" cy="32" r="30" fill="#F59E0B"/>
      <g transform="rotate(-35, 32, 32)">
        <rect x="19" y="18" width="20" height="5.5" rx="2.75" fill="white"/>
        <rect x="15" y="29.25" width="28" height="5.5" rx="2.75" fill="white"/>
        <rect x="19" y="40.5" width="20" height="5.5" rx="2.75" fill="white"/>
      </g>
    </svg>
  </div>

  {#if showText}
    <span class="{currentSize.text} font-bold tracking-tight" style="font-family: 'Plus Jakarta Sans', sans-serif;">
      <span class="{currentVariant.text}">Employee</span><span class="{currentVariant.accent}">Envoy</span>
    </span>
  {/if}
</div>
