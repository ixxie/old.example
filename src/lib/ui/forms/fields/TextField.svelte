<script>
	export let name;
	export let placeholder;
	export let data;
	export let required = false;

	import { uuid } from '$lib/utils';
	let id = uuid();
</script>

<div>
	<label for="text-{id}"
		>{name}
		{#if required}
			<span>*</span>
		{/if}
	</label>

	<input id="text-{id}" class="border-gray-300" bind:value={data} {placeholder} />
</div>

<style>
	div {
		@apply block w-full mb-4;
	}

	p {
		@apply block font-bold;
	}

	input {
		@apply block w-full h-12 box-border border-2 px-4 rounded-xl shadow-lg;
	}
</style>
