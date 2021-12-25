<script>
	export let action;
	export let text;
	export let shortcut = null;
</script>

<button class="btn" on:click|preventDefault={action} on:keydown={(event)=> event.key === { shortcut } && action()}
	>
	{text}
</button>

<style>
	.btn {
		@apply block w-full h-12 lowercase font-semibold px-2 py-2;
	}
</style>