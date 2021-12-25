<script>
	import { registration } from './stores.js';

	import { Form, TextField, PasswordField } from '$lib/ui/forms';
	import { BigButton } from '$lib/ui/buttons';
	import { Spinner } from '$lib/ui/widgets';

	import { callOnKeystroke } from '$lib/utils';

	let email = '';
	let password = '';

	let signup = () => {
		registration.signup(email, password);
	};
	let signupOnEnter = callOnKeystroke(signup);
</script>

{#if $registration.state === 'idle'}
	<Form title="sign up to coflow">
		<TextField name="email:" placeholder="enter your email" bind:data={email} required="true" />
		<PasswordField
			name="password:"
			placeholder="enter your password"
			bind:data={password}
			required="true"
			on:keyup={signupOnEnter}
		/>
		<BigButton action={signup} text="sign up" />
	</Form>
{:else if $registration.state === 'success'}
	<p>
		Almost there! Check {$registration.data.email} and click the confirmation link we sent you...
	</p>
{:else if $registration.state === 'pending'}
	<Spinner />
{:else if $registration.state === 'error'}
	<p>{$registration.data.message}</p>
{:else}
	<p>Registration in a bad state: {$registration.state}</p>
{/if}
