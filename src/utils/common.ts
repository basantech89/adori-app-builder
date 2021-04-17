export const startWithUpperCase = (sentence: string) => {
	const convertToLowerCase = (word: string) => word.toLowerCase()
	const sentences = sentence.split(' ')
	const words = sentences.slice(1).map(convertToLowerCase)
	const firstWord = `${sentences[0][0]}${sentences[0]
		.toLowerCase()
		.substring(1)}`
	return `${firstWord} ${words.join(' ')}`
}
