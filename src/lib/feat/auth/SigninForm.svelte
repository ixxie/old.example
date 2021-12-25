<script>
	import { session } from './stores.js';

	import { supabase } from '$lib/base/client.js';

	import { Form, TextField, PasswordField } from '$lib/ui/forms';
	import { BigButton } from '$lib/ui/buttons';
	import { Spinner } from '$lib/ui/widgets';

	import { callOnKeystroke } from '$lib/utils';

	let email = '';
	let password = '';

	let signin = () => {
		session.signin(email, password);
	};
	let signinOnEnter = callOnKeystroke(signin);
</script>

{#if $session.state === 'signed-out'}
<Form title="sign in to coflow">
	<TextField name="email:" placeholder="enter your email" bind:data={email} required="true" />
	<PasswordField name="password:" placeholder="enter your password" bind:data={password} required="true"
		on:keyup={signinOnEnter} />
	<BigButton action={signin} text="sign in" />
</Form>
{:else if $session.state === 'signed-in'}
<p>{$session.data.user.email} signed in succesfully!</p>
{:else if $session.state === 'pending'}
<Spinner />
{:else if $session.state === 'error'}
<p>{$session.data.message}</p>
{:else}
<p>Session in a bad state: {$session.state}</p>
{/if}