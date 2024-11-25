/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
	  extend: {
		colors: {
		  adfad: "#81B29A",
		  mutedGreen: '#2D6A4F',  
		  darkGreen: '#1B4332',
		  brightGreen: '#95D5B2',
		  lightGray: "#E5E5E5",
		  n: "#0E0C15",
		  n2: "#FFFFFF",
		},
		perspective: {
		  DEFAULT: '1000px',
		},
		rotate: {
		  'y-180': '180deg',
		},
		transformStyle: {
		  '3d': 'preserve-3d',
		},
		backfaceVisibility: {
		  hidden: 'hidden',
		},
	  },
	},
	plugins: [
	  function ({ addUtilities }) {
		addUtilities({
		  '.transform-style-3d': {
			transformStyle: 'preserve-3d',
		  },
		  '.backface-hidden': {
			backfaceVisibility: 'hidden',
		  },
		  '.rotate-y-180': {
			transform: 'rotateY(180deg)',
		  },
		  '.perspective': {
			perspective: '1000px',
		  },
		});
	  },
	],
  };
  