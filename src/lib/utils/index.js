import { customAlphabet } from 'nanoid';

export const callOnKeystroke = (func, keyCode = 13) => {
	return (event) => {
		if (event.keyCode === keyCode) {
			event.preventDefault();
			func();
		}
	};
};

export const uuid = (length = 8) => {
	let generateId = customAlphabet(
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890',
		8
	);
	let id = generateId(length);
	return id;
};
