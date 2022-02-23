export function isValidEmail(email) {
	const emailRegex =
		/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
	return emailRegex.test(email);
}

export function isValidPassword(password) {
	const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
	return passwordRegex.test(password);
}

export function isObject(obj) {
	return typeof obj === 'object' && Object.prototype.toString.call(obj) === '[object Object]';
}

export function isEmptyObject(obj) {
	return obj && isObject(obj) && Object.keys(obj).length === 0 && obj.constructor === Object;
}

export function isValidDate(value) {
	let res = true;
	let [year, month, day] = value.split('-');
	let [intYear, intMonth, intDay] = [year, month, day].map(Number);
	if (
		year === undefined ||
		year === '' ||
		month === undefined ||
		month === '' ||
		day === undefined ||
		day === ''
	) {
		res = false;
	}
	if (intYear < 0 || intMonth > 12 || intMonth < 0 || intDay > 31 || intDay < 0) {
		res = false;
	}

	return res;
}
