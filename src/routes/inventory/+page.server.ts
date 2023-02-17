import { PARTY_CURRENCY_ID } from '$env/static/private';
import { getCurrency, getUsersCurrency, updateCurrency } from '$lib/services/CurrencyService';
import { error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw error(401, 'Unauthorized');
	}

	return {
		currency: await getUsersCurrency(locals),
		partyCurrency: await getCurrency(locals, PARTY_CURRENCY_ID)
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	updateCurrency: async ({ locals, request }) => {
		if (!locals.user) {
			throw error(401, 'You must be logged in to access this resource');
		}

		return await updateCurrency(locals, request, locals.user.currencyId);
	},
	updatePartyCurrency: async ({ locals, request }) => {
		return await updateCurrency(locals, request, PARTY_CURRENCY_ID);
	}
};
