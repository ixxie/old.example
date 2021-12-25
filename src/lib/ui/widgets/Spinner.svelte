<script>
	export let action = () => {};

	import { onMount } from 'svelte';

	onMount(action);
</script>

<div class="wrapper">
	<div class="circle" />
</div>

<style>
	.wrapper {
		@apply relative w-8 h-8 mt-48;
	}

	.circle {
		@apply absolute w-8 h-8 rounded-full opacity-60 top-0 left-0 animate-ping bg-gray-700;
	}
</style>
