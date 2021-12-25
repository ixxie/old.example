<script>
	export let name;
	export let placeholder;
	export let data;
	export let required = false;

	import { uuid } from '$lib/utils';
	let id = uuid();
</script>

<div>
	<label for="password-{id}"
		>{name}
		{#if required}
			<span>*</span>
		{/if}
	</label>

	<input
		id="password-{id}"
		class="border-gray-300"
		bind:value={data}
		{placeholder}
		type="password"
		on:keyup
	/>
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
