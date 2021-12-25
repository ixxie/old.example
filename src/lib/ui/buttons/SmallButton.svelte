<script>
	export let action = () => { };
	export let text;
	export let url = 'javascript:;';
</script>

<a href={url}>
	<button class="effect" on:click={action}>
		{text}
	</button>
</a>

<style>
	button {
		@apply block lowercase font-semibold mx-2 px-1 py-1;
	}

	.effect {
		@apply transition duration-500 ease-in-out transform scale-110;
	}
</style>