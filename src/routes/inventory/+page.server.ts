import { CAMPAIGN_CURRENCY_ID } from '$env/static/private';
import { getCurrency, getUsersCurrency } from '$lib/services/CurrencyService';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw error(401, 'Unauthorized');
	}

	return {
		currency: await getUsersCurrency(locals),
		campaignCurrency: await getCurrency(locals, CAMPAIGN_CURRENCY_ID)
	};
}) satisfies PageServerLoad;
