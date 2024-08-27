import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			padding: {
				"content-padding-sm": "24px",
				"content-padding-lg": "100px",
				"content-padding-2xl": "140px",
			},
			colors: {
				background: "#F4F4F4",
				primary: "#E04C1C",
				secondary: "#DA6916",
				auxiliary: "#E2A324",
				arsenic: "#494949",
				charcoal: "#2D2C2C",
			},
			backgroundImage: {
				"primary-gradient":
					"linear-gradient(to right, #F0872E, #E25E1A)",
				"green-gradient": "linear-gradient(to right, #A3CF44, #6ABF31)",
				"blue-gradient": "linear-gradient(to right, #2B55B2, #7D7FB8)",
				"yellow-gradient":
					"linear-gradient(to right, #E3B524, #E6D624)",
			},
		},
	},
	plugins: [],
};
export default config;
