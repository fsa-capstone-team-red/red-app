import { GOOGLE_API_KEY } from 'react-native-dotenv';

// TRANSLATE TEXT
export const translateText = async (text, lang) => {
	try {
		const uri = `https://translation.googleapis.com/language/translate/v2?q=${text}&target=${lang}&key=${GOOGLE_API_KEY}`;
		const response = await fetch(uri);
		const { data } = await response.json();
		return data;
	} catch (err) {
		console.error('Error translating text: ', err);
	}
};
