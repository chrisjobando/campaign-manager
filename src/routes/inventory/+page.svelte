<script lang="ts">
	// Interfaces
	import type { PageData } from './$types';
	import type { Currency } from '$lib/types';
	import { updateCurrency } from '$lib/services/CurrencyService';

	// Props
	export let data: PageData;

	// Initial variables
	const initialPlayerCurrency: Partial<Currency> = {
		platinum: data.currency.platinum,
		gold: data.currency.gold,
		silver: data.currency.silver,
		copper: data.currency.copper
	};

	const initialPartyCurrency: Partial<Currency> = {
		platinum: data.partyCurrency.platinum,
		gold: data.partyCurrency.gold,
		silver: data.partyCurrency.silver,
		copper: data.partyCurrency.copper
	};

	// Data variables
	let playerCurrency: Partial<Currency> = {
		platinum: data.currency.platinum,
		gold: data.currency.gold,
		silver: data.currency.silver,
		copper: data.currency.copper
	};

	let partyCurrency: Partial<Currency> = {
		platinum: data.partyCurrency.platinum,
		gold: data.partyCurrency.gold,
		silver: data.partyCurrency.silver,
		copper: data.partyCurrency.copper
	};

	// Modal variables
	let isPlayerCurrencyModalOpen = false;
	let isPartyCurrencyModalOpen = false;
</script>

<svelte:head>
	<title>Inventory</title>
</svelte:head>

<div class="pageContainer">
	<h1 class="text-2xl">Inventory Page</h1>

	<h2 class="text-lg mt-2">Character currency:</h2>
	<div class="flex items-center">
		<div>
			{playerCurrency.platinum}pp - {playerCurrency.gold}gp - {playerCurrency.silver}sp - {playerCurrency.copper}cp
		</div>
		<button class="btn btn-primary btn-sm ml-4" on:click={() => (isPlayerCurrencyModalOpen = true)}
			>Edit</button
		>
	</div>

	<h2 class="text-lg mt-2">Party currency:</h2>
	<div class="flex items-center">
		<div>
			{partyCurrency.platinum}pp - {partyCurrency.gold}gp - {partyCurrency.silver}sp - {partyCurrency.copper}cp
		</div>
		<button class="btn btn-primary btn-sm ml-4" on:click={() => (isPartyCurrencyModalOpen = true)}
			>Edit</button
		>
	</div>

	<h2 class="text-lg mt-2">Character inventory:</h2>
</div>

<div class="modal" class:modal-open={isPlayerCurrencyModalOpen}>
	<div class="modal-box">
		<h3 class="font-bold text-lg">Player Currency</h3>
		<form method="POST" action="?/updateCurrency" class="flex flex-col w-full">
			<div class="flex items-center mt-4">
				<label for="platinum">
					<p class="mr-2">pp:</p>
				</label>
				<input
					type="number"
					name="platinum"
					placeholder="pp"
					bind:value={playerCurrency.platinum}
					class="input input-bordered w-full max-w-md"
				/>
			</div>
			<div class="flex items-center mt-4">
				<label for="gold">
					<p class="mr-2">gp:</p>
				</label>
				<input
					name="gold"
					type="number"
					placeholder="gp"
					bind:value={playerCurrency.gold}
					class="input input-bordered w-full max-w-md"
				/>
			</div>
			<div class="flex items-center mt-4">
				<label for="silver">
					<p class="mr-2">sp:</p>
				</label>
				<input
					name="silver"
					type="number"
					placeholder="sp"
					bind:value={playerCurrency.silver}
					class="input input-bordered w-full max-w-md"
				/>
			</div>
			<div class="flex items-center mt-4">
				<label for="copper">
					<p class="mr-2">cp:</p>
				</label>
				<input
					name="copper"
					type="number"
					placeholder="cp"
					bind:value={playerCurrency.copper}
					class="input input-bordered w-full max-w-md"
				/>
			</div>
			<div class="modal-action">
				<button type="submit" class="btn" on:click={() => (isPlayerCurrencyModalOpen = false)}
					>Save</button
				>
			</div>
		</form>
	</div>
</div>

<div class="modal" class:modal-open={isPartyCurrencyModalOpen}>
	<div class="modal-box">
		<h3 class="font-bold text-lg">Party Currency</h3>
		<form method="POST" action="?/updatePartyCurrency" class="flex flex-col w-full">
			<div class="flex items-center mt-4">
				<label for="platinum">
					<p class="mr-2">pp:</p>
				</label>
				<input
					type="number"
					name="platinum"
					placeholder="pp"
					bind:value={partyCurrency.platinum}
					class="input input-bordered w-full max-w-md"
				/>
			</div>
			<div class="flex items-center mt-4">
				<label for="gold">
					<p class="mr-2">gp:</p>
				</label>
				<input
					name="gold"
					type="number"
					placeholder="gp"
					bind:value={partyCurrency.gold}
					class="input input-bordered w-full max-w-md"
				/>
			</div>
			<div class="flex items-center mt-4">
				<label for="silver">
					<p class="mr-2">sp:</p>
				</label>
				<input
					name="silver"
					type="number"
					placeholder="sp"
					bind:value={partyCurrency.silver}
					class="input input-bordered w-full max-w-md"
				/>
			</div>
			<div class="flex items-center mt-4">
				<label for="copper">
					<p class="mr-2">cp:</p>
				</label>
				<input
					name="copper"
					type="number"
					placeholder="cp"
					bind:value={partyCurrency.copper}
					class="input input-bordered w-full max-w-md"
				/>
			</div>
			<div class="modal-action">
				<button type="submit" class="btn" on:click={() => (isPartyCurrencyModalOpen = false)}
					>Save</button
				>
			</div>
		</form>
	</div>
</div>
