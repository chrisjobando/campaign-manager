import type { Record } from 'pocketbase';

interface User extends Record {
	id: string;
	name: string;
	avatar?: string;
	username: string;
	currencyId: string;
}

interface Currency extends Record {
	id: string;
	platinum: number;
	gold: number;
	silver: number;
	copper: number;
}
