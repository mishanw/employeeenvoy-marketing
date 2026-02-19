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
    sm: { icon: 'w-9 h-9', text: 'text-xl', gap: 'gap-2.5' },
    md: { icon: 'w-11 h-11', text: 'text-2xl', gap: 'gap-3' },
    lg: { icon: 'w-14 h-14', text: 'text-3xl', gap: 'gap-3.5' },
    xl: { icon: 'w-20 h-20', text: 'text-5xl', gap: 'gap-5' }
  };

  const variantClasses = {
    default: { employee: 'text-[#4F4F51] dark:text-white' },
    light: { employee: 'text-white' },
    dark: { employee: 'text-[#4F4F51]' }
  };

  const currentSize = sizeClasses[size];
  const currentVariant = variantClasses[variant];
</script>

<div class="flex items-center {currentSize.gap} {className}">
  <!-- Brand Icon: Orange circle with diagonal motion strokes -->
  <div class="{currentSize.icon} flex-shrink-0">
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <g transform="translate(-52.0733, 2) scale(0.678887)">
        <circle cx="123.84" cy="44.19" r="44.19" fill="#EB9336"/>
        <path d="M123.45,15.92l-1.23-1.23c-2.4-2.4-6.33-2.4-8.73,0l-33.64,33.64c.5,5.34,1.98,10.6,4.42,15.5l39.19-39.19c2.4-2.4,2.4-6.33,0-8.73Z" fill="white"/>
        <path d="M124,46.65l-2.62-2.62c-2.02-2.02-5.32-2.02-7.34,0l-26.03,26.03c1.36,1.88,2.88,3.68,4.58,5.38s3.5,3.22,5.38,4.58l26.03-26.03c2.02-2.02,2.02-5.32,0-7.34Z" fill="white"/>
        <path d="M153.33,45.8l-1.23-1.23c-2.4-2.4-6.33-2.4-8.73,0l-39.19,39.19c4.91,2.44,10.16,3.92,15.5,4.42l33.64-33.64c2.4-2.4,2.4-6.33,0-8.73Z" fill="white"/>
      </g>
    </svg>
  </div>

  {#if showText}
    <span class="{currentSize.text} font-bold tracking-tight" style="font-family: 'Plus Jakarta Sans', sans-serif;">
      <span class="{currentVariant.employee}">Employee</span><span style="color: #EB9336">Envoy</span>
    </span>
  {/if}
</div>
