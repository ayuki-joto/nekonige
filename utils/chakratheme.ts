import { extendTheme } from '@chakra-ui/react'

export const chakraTheme = extendTheme({
	fonts: {
		heading: 'Noto Sans JP, sans-serif',
		body: 'Noto Sans JP, sans-serif'
	},
	sizes: {
		container: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px'
		}
	}
})
