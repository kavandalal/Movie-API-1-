const fetchData = (name) => {
	var i = {};
	var api_key = '743d091913d773e39a79b71be11164b2',
		i = fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${name}`,
			{
				method: 'GET',
			}
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data.results);
				const html = data.results
					.map((single) => {
						return `
        <div class='ctr'>
          <div class='image'>
            <img src= 'https://image.tmdb.org/t/p/w500${single.poster_path}'/>
          </div>
          <div class="ctr2">
            <div class='heading'>
              <h2 class="name">${single.title}</h2>
            </div>
            <div class='info'>
              <p class="rate">Rating : ${single.vote_average}</p>
              <p class="rel">Release Date : ${single.release_date}
              </p>
              <p class="desc">Overview : ${single.overview}</p>
            </div>
          </div>
        </div>
        `;
					})
					.join('');
				document.querySelector('#body').insertAdjacentHTML('beforeend', html);
			})
			.catch((err) => {
				console.error(err);
			});
};

const submitButton = () => {
	// console.log('hello');
	document.getElementById('body').innerHTML = '';
	var x = document.getElementById('search').value;
	console.log(x);
	fetchData(x.split(' ').join('%20'));
};

document.getElementById('search').addEventListener('keyup', (key) => {
	if (key.keyCode === 13) {
		//13 == ENTER key
		document.getElementById('sub-btn').click();
	}
});
