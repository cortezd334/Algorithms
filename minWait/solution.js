function minimumWaitingTime(queries) {
    //since prob allows sorting, sort in place
	queries.sort((a, b) => a - b);
	
	let minWaitTime = 0;
	const len = queries.length;
	
	for (let i = 0; i < len; i++) {
		minWaitTime += queries[i] * (queries.length - (i + 1));
        //adding the query * the length of array - the index in the array + 1
        //the + 1 adjusts the length vs indexes
        //multiplying add that value wait time for each of the remaining indexes
    }
	return minWaitTime;
}

console.log(minimumWaitingTime([3, 2, 1, 2, 6]))
console.log(minimumWaitingTime([2, 1, 1, 1]))
console.log(minimumWaitingTime([2]))
console.log(minimumWaitingTime([1, 1, 1, 4, 5, 6, 8, 1, 1, 2, 1]))
console.log(minimumWaitingTime([17, 4, 3]))