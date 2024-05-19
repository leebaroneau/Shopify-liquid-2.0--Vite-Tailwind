/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	corePlugins: {
		preflight: false,
	},
	content: ["./**/*.{json,liquid}", "./frontend/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
};
