<script lang="ts">
	// Interfaces
	import type { PageData } from './$types';
	import type { Currency } from '$lib/types';

	// Props
	export let data: PageData;

	// Functions
	const formatCurrencyString = (currencyObj: Currency) => {
		const { copper, silver, gold, platinum } = currencyObj;
		return `${platinum}pp - ${gold}gp - ${silver}sp - ${copper}cp`;
	};
</script>

<svelte:head>
	<title>Inventory</title>
</svelte:head>

<div class="pageContainer">
	<h1 class="text-xl">Inventory Page</h1>

	{#if data.currency}
		<h2>{formatCurrencyString(data.currency)}</h2>
		<h2>{formatCurrencyString(data.campaignCurrency)}</h2>
	{/if}
</div>
