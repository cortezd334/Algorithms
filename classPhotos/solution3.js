function classPhotos(redShirtHeights, blueShirtHeights) {
	redShirtHeights.sort((a,b) => b - a);
	blueShirtHeights.sort((a,b) => b - a);
	
	const frontRow = redShirtHeights[0] < blueShirtHeights[0] ? 'Red' : 'Blue';
	//determine the front row
    //similar to setting T or F in prev solution
	for (let i = 0; i < redShirtHeights.length; i++) {
		if(frontRow === 'Red'){
            //using the front row to choose >= || <=
			if(redShirtHeights[i] >= blueShirtHeights[i]) return false;
            //if red is front row, red can't be greater or equal to blue
		} else if(redShirtHeights[i] <= blueShirtHeights[i]) return false;
        //if blue is front row, blue can't be greater or equal to red
	}
  return true;
}