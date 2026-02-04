<script lang="ts">
    interface Props {
        children?: import("svelte").Snippet;
        class?: string;
        spotlightColor?: string;
    }

    let {
        children,
        class: className = "",
        spotlightColor = "rgba(245, 158, 11, 0.15)",
    }: Props = $props();

    let div = $state<HTMLDivElement>();
    let x = $state(0);
    let y = $state(0);
    let opacity = $state(0);

    function handleMouseMove(e: MouseEvent) {
        if (!div) return;
        const rect = div.getBoundingClientRect();
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
        opacity = 1;
    }

    function handleMouseLeave() {
        opacity = 0;
    }
</script>

<!-- 
  Spotlight Card
  Uses a radial gradient that follows the mouse cursor to create a lighting effect.
-->
<div
    bind:this={div}
    onmousemove={handleMouseMove}
    onmouseleave={handleMouseLeave}
    class="group relative overflow-hidden rounded-2xl border border-gray-100 dark:border-slate-700 bg-white dark:bg-slate-800 transition-colors hover:border-amber-200/50 dark:hover:border-amber-700/50 {className}"
>
    <!-- Mouse Following Spotlight -->
    <div
        class="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style="
			opacity: {opacity};
			background: radial-gradient(800px circle at {x}px {y}px, {spotlightColor}, transparent 40%);
		"
    ></div>

    <!-- Content -->
    <div class="relative h-full z-10">
        {@render children?.()}
    </div>
</div>
