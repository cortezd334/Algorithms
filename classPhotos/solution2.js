function classPhotos(redShirtHeights, blueShirtHeights) {

    redShirtHeights.sort((a, b) => b - a);
    blueShirtHeights.sort((a, b) => b - a);
    //are sorting in place, allowing for the movement of students within the row
    //descending order since the tallest students are hardest to place

	let checker = redShirtHeights[0] > blueShirtHeights[0];
    // checker is set to T or F, which will later be compared
	let i = 0;
	let result = true;

	while(i < redShirtHeights.length) {

		let comparison = redShirtHeights[i] > blueShirtHeights[i];
        //comparison is continuously being replaced by either T or F
        //ideally comparison will always be set to what checker is set to

		if(checker !== comparison || redShirtHeights[i] === blueShirtHeights[i]) {
            //if checker and comparison do not match then can't take pic
            //if red and blue are same do not match then can't take pic
			result = false;
            //since pic can't be taken result is changed to false and we break out of loop
			break;
		}
		i++
	}
    return result;
}
//this solution allows the movement of students within their row
//by moving students, you can determine more accurately if the photo is possible (real life)
//compares the possibility, not choosing which one is front or back row

console.log(classPhotos([3, 5, 6, 8, 2], [2, 4, 7, 5, 1]))
console.log(classPhotos([5, 6], [5, 4]))
console.log(classPhotos([125], [126]))
console.log(classPhotos([1, 1, 1, 1, 1, 1, 1, 1], [5, 6, 7, 2, 3, 1, 2, 3]))
console.log(classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]))