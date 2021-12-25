<script>
	import '../app.css';

	import { TopNav } from '$lib/feat/nav';
</script>

<TopNav />

<main>
	<slot />
</main>

<style>
	main {
		@apply w-full h-auto;
	}
</style>
