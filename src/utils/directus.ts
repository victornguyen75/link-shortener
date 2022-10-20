import { Directus } from '@directus/sdk';
import 'dotenv/config';

const directusToken = process.env.DIRECTUS_API_TOKEN;
const directusUrl = process.env.DIRECTUS_URL;

if (!directusToken) {
	throw new Error(
		'A Directus API token is missing. Please create an account with Directus Cloud to get this token. A free account is available.'
	);
}

if (!directusUrl) {
	throw new Error(
		'A Directus URL is missing. Please create an account with Directus Cloud to get this URL. A free account is available.'
	);
}

export const directus = new Directus(directusUrl, {
	auth: {
		staticToken: directusToken
	}
});
