const fetchData = (name) => {
  var i = {};
  i = fetch(
    `https://imdb8.p.rapidapi.com/auto-complete?q=${name}`, {
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-key": "4573afb52amsh7e36d630c1420fbp1b62a6jsn90e72f7f75f7",
  		"x-rapidapi-host": "imdb8.p.rapidapi.com"
  	}
  })
  .then(response => {
    return response.json();
  })
    .then(data => {
      console.log(data);
      const html = data.d.map(single => {
        return `
        <div style="display:flex;flex-direction:column">
          <div>
            <img src="${single.i.imageUrl}" height="300px" width:"500px" style="object-fit:cover"/>
          </div>
          <div>
            <h2 class="name">${single.l}</h2>
            <h3 class="type">${single.q}</h3>
            <p class="desc">Rank : ${single.rank}</p>
            <p class="desc">Actor : ${single.s}</p>
            <p class="desc">Years : ${single.yr || single.y}</p>
          </div>

        </div>
        `
      }).join('');
      document.querySelector('#body').insertAdjacentHTML('beforeend', html);
    }
    
  )
  .catch(err => {
  	console.error(err);
  });
}

const submitButton = () => {
  // console.log('hello');
  document.getElementById('body').innerHTML = '';
  var x = document.getElementById('search').value;
  console.log(x);
  fetchData(x.split(" ").join('%20'));
}
