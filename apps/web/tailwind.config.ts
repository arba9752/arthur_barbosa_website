// Import the existing Tailwind config from your shared repository
const sharedConfig = require("@repo/tailwind-config/tailwind.config");

module.exports = {
	presets: [sharedConfig],
	theme: {
		extend: {
			colors: {
				scrollbar: {
					// thumb: "#d1d5db",
					// thumbHover: "#1D4ED8",
					thumb: "#303c4c",
					thumbHover: "#2E3A48",
					track: "#1F2937",
				},
			},
            animation: {
                'logo-cloud': 'logo-cloud 30s linear infinite',
              },
              keyframes: {
                'logo-cloud': {
                  '0%': { transform: 'translateX(0)' },
                  '100%': { transform: 'translateX(-100%)' },
                },
              },
		},

	},

	plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};