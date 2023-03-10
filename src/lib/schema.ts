import { z } from 'zod';

export const registerUserSchema = z
	.object({
		name: z
			.string({ required_error: 'Name is required.' })
			.regex(/^[a-zA-Z\s]*$/, { message: 'Name can only contain letters and spaces.' })
			.min(2, { message: 'Name must be at least 2 characters' })
			.max(64, { message: 'Name must be less than 64 characters' })
			.trim(),
		email: z
			.string({ required_error: 'Email is required' })
			.email({ message: 'Email must be a valid email.' }),
		password: z
			.string({ required_error: 'Password is required' })
			.min(6, { message: 'Password must be at least 6 characters' })
			.max(64, { message: 'Password must be less than 64 characters' }),
		passwordConfirm: z
			.string({ required_error: 'Password is required' })
			.min(6, { message: 'Password must be at least 6 characters' })
			.max(64, { message: 'Password must be less than 64 characters' })
	})
	.superRefine(({ passwordConfirm, password }, ctx) => {
		if (passwordConfirm !== password) {
			ctx.addIssue({
				code: 'custom',
				message: 'Password and Confirm Password must match',
				path: ['password']
			});
			ctx.addIssue({
				code: 'custom',
				message: 'Password and Confirm Password must match',
				path: ['passwordConfirm']
			});
		}
	});

export const loginUserSchema = z.object({
	email: z
		.string({ required_error: 'Email is required' })
		.email({ message: 'Email must be a valid email.' }),
	password: z.string({ required_error: 'Password is required' })
});

export const updateCurrencyData = z.object({
	platinum: z
		.preprocess((a) => parseInt(z.string().parse(a as string), 10), z.number().min(0).max(9999))
		.default(0),
	gold: z
		.preprocess((a) => parseInt(z.string().parse(a as string), 10), z.number().min(0).max(9999))
		.default(0),
	silver: z
		.preprocess((a) => parseInt(z.string().parse(a as string), 10), z.number().min(0).max(9999))
		.default(0),
	copper: z
		.preprocess((a) => parseInt(z.string().parse(a as string), 10), z.number().min(0).max(9999))
		.default(0)
});
