// Function to render your items
function renderItems(collection) {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection')
	console.log(collection);

	// Loop through each item in the collection array
	collection.forEach(function(item) {
		const itemDetails =
			`
			<li>
				<img height=400px src="${item.img}" />
				<p>Released in <time>${item.year}</time></p>
				<p><em>${item.runTime}</em></p>
				<a href="${item.imdbLink}">
					<p>${item.imdbRating} / 10 →</p>
				</a>
			</li>
			`
			;
		collectionList.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert
	});
}



// Fetch gets your JSON file.
fetch('collection.json')
	.then(function(response) {
		return response.json();	
	})
	.then(function(collection){
		renderItems(collection)
	})
