import type { Currency } from '$lib/types';
import { serializeNonPOJOs } from '$lib/utils';
import { error } from '@sveltejs/kit';
import { ClientResponseError } from 'pocketbase';

export const getCurrency = async (locals: App.Locals, id: string) => {
	try {
		const currency = serializeNonPOJOs<Currency>(await locals.pb.collection('currency').getOne(id));

		return currency;
	} catch (err) {
		if (err instanceof ClientResponseError) {
			throw error(err.status, err.data.message);
		} else {
			throw error(500, 'Something went wrong getting the currency object');
		}
	}
};

export const getUsersCurrency = async (locals: App.Locals) => {
	if (!locals.user) {
		throw error(401, 'You must be logged in to access this resource');
	}

	try {
		const currency = serializeNonPOJOs<Currency>(
			await locals.pb.collection('currency').getOne(locals.user.currencyId)
		);

		return currency;
	} catch (err) {
		if (err instanceof ClientResponseError) {
			throw error(err.status, err.data.message);
		} else {
			throw error(500, 'Something went wrong getting the currency object');
		}
	}
};
