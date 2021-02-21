function classPhotos(redShirtHeights, blueShirtHeights) {

	let checker = redShirtHeights[0] > blueShirtHeights[0];
	let i = 0;
	let result = true;

	while(i < redShirtHeights.length) {

		let comparison = redShirtHeights[i] > blueShirtHeights[i];

		if(checker !== comparison || redShirtHeights[i] === blueShirtHeights[i]) {
			result = false;
			// console.log(i, 'checker', checker, 'comp', comparison, 'result', result)
			break;
		}
		i++
	}
	// console.log(result)
    return result;
}

console.log(classPhotos([3, 5, 6, 8, 2], [2, 4, 7, 5, 1]))
console.log(classPhotos([5, 6], [5, 4]))
console.log(classPhotos([125], [126]))
console.log(classPhotos([1, 1, 1, 1, 1, 1, 1, 1], [5, 6, 7, 2, 3, 1, 2, 3]))
console.log(classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]))