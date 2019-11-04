
let url = 'http://www.omdbapi.com/?apikey=2065d8a0&';
let titles = [];
let pages = [];
let allInfo = [];
let finalList = [];
let loadpage = 1;

document.getElementById("searchButton").addEventListener("click", searchingFormOnSubmit);

function searchingFormOnSubmit(e) {
  e.preventDefault();
  clearInfo();
  allInfo = [];
  let searchingText = document.getElementById('searchingTextInput').value;

  fetch(url + 's=' + searchingText)
    .then(resp => {
      return resp.json();
    })
    .then(resp => {
      let numberOfPages = Math.ceil(resp.totalResults / 10);
      return getAllTitles(numberOfPages, searchingText);
    })
    .then(() => {
      return getAllInfoAboutTitles();
    })
    .then(() => splitTitlesIntoPages())
    .then(() => {
      if (pages.length > 0) {
        createTable(0);
      }
      else {
        thereIsNoResults();
      };
    });
};

function clearInfo() {
  document.getElementById('list').innerHTML = "";
  document.getElementById('endOfListInfo'), innerHTML = '';
  titles = [];
  pages = [];
  finalList = [];
  loadpage = 1;
};

function getAllTitles(numberOfPages, searchingText) {
  let promiseArray = [];
  for (let i = 1; i <= numberOfPages; i++) {
    let dataUrlLoop = url + 's=' + searchingText + '&page=' + i;
    promiseArray
      .push(fetch(dataUrlLoop)
        .then(response => { return response.json() })
        .then(data => {
          data.Search.forEach(title => {
            titles.push(title.Title);
          })
        }
        ));
  };
  return Promise.all(promiseArray);
};

function getAllInfoAboutTitles() {
  let promiseArray = [];

  titles.forEach(title => {
    promiseArray
      .push(fetch(url + 't=' + title)
        .then(response => { return response.json() })
        .then(data => {
          allInfo.push(data);
        }
        ));
  });
  return Promise.all(promiseArray);
};

function splitTitlesIntoPages() {
  allInfo.forEach((value) => {
    if (!finalList.some(x => (x.Title === value.Title && x.Plot === value.Plot && x.Year === value.Year))) {
      finalList.push(value)
    };
  });

  let numberOfPages = Math.ceil(finalList.length / 12)
  for (let i = numberOfPages; i > 0; i--) {
    let page = []
    for (let j = 0; j < 12; j++) {
      page.push(finalList.shift())
    };
    pages.push(page)
  };
  return pages
};

function createTable(index) {
  const list = document.getElementById('list');
  const table = document.createElement('div');

  pages[index].map(function (result) {
    if (result) {
      const singleResult = document.createElement('div');
      singleResult.setAttribute('id', 'singleResult');

      const poster = document.createElement('img');
      if (result.Poster != "N/A")
        poster.setAttribute('src', result.Poster);
      else {
        poster.setAttribute('src', "http://www.maltreting.pl/wp-content/uploads/2015/07/antologia_tn-1024x640.jpg");
      }
      singleResult.appendChild(poster);

      const desc = document.createElement('div');
      desc.setAttribute('id', 'descripion');

      const title = document.createElement('h2');
      title.appendChild(document.createTextNode(result.Title));
      desc.appendChild(title);

      
      if (result.Year && result.Year != 'N/A') {
        title.appendChild(document.createTextNode('  ' + '(' + result.Year + ')' + ' '));
      }
      else {
        title.appendChild(document.createTextNode('(info about release date unavailable)'));
      }
     

      const runtime = document.createElement('h5');
      if (result.Runtime && result.Runtime != 'N/A') {
        runtime.appendChild(document.createTextNode('Runtime: ' + result.Runtime));
      }
      else {
        runtime.appendChild(document.createTextNode('info about runtime unavailable'))
      }

      desc.appendChild(runtime)

      const plot = document.createElement('div');
      let ellipsis = '...';
      let plotDescription;


      if (result.Plot && result.Plot.length > 100) {
        plotDescription = result.Plot.substring(0, 100) + ellipsis;
      }
      else if (result.Plot && result.Plot.length < 100) {
        plotDescription = result.Plot;
      }
      else {
        plotDescription = 'info about plot unavailable';
      }

      plot.appendChild(document.createTextNode(plotDescription));
      desc.appendChild(plot);

      const rating = document.createElement('span');
      if (result.Ratings && result.Ratings[0]) {
        rating.appendChild(document.createTextNode(result.Ratings[0].Value));
      }
      else {
        rating.appendChild(document.createTextNode('info about ratings unavailable'));
      }
      desc.appendChild(rating);
      singleResult.appendChild(desc);

      const star = document.createElement('i');
      star.setAttribute('class', 'fa fa-star');
      star.setAttribute('style', 'color:grey');
      title.appendChild(star);
      if (result.Awards && result.Awards != 'N/A') {
        star.setAttribute('style', 'color:yellow');
      }
      table.appendChild(singleResult);
    };
    list.appendChild(table);
  });
}

function thereIsNoResults() {
  alert('no results found!');
}

window.addEventListener('scroll', scrollControl);
function scrollControl() {
  var d = document.documentElement;
  var offset = d.scrollTop + window.innerHeight;
  var height = d.offsetHeight;
  if (offset >= (height) && allInfo.length > 0) {
    createTable(loadpage)
    if ((loadpage + 1) < pages.length) {
      loadpage += 1
    }
    else {
      removeScrollListener()
      noMoreResultsAlert()
    }
  }
};

function removeScrollListener() {
  window.removeEventListener('scroll', scrollControl);
};

function noMoreResultsAlert() {
  document.getElementById('endOfListInfo').innerHTML = 'WoW, you watched them all';
};

let sortBySelectButton = document.getElementById('SortBySelectButton');
sortBySelectButton.addEventListener('click', sort);

function sort(e) {
  e.preventDefault()
  let selectedValue = document.getElementById('sortBySelect').value;
  if (selectedValue === 'Title') {
    allInfo.sort((a, b) => a.Title.localeCompare(b.Title));
    regen();
  }
  else if (selectedValue === 'Release') {
    let titlesWithRelease = allInfo.filter((element) => {
      return (element.Year)
    });
    let titlesWithoutRelease = allInfo.filter((element) => {
      return (!element.Year)
    });
    titlesWithRelease.sort((a, b) => parseFloat(b.Year.slice(0, 4)) - parseFloat(a.Year.slice(0, 4)));
    allInfo = [];

    titlesWithRelease.forEach(element => {
      allInfo.push(element);
    });
    titlesWithoutRelease.forEach(element => {
      allInfo.push(element);
    })
    regen();
  }
  else if (selectedValue === 'Rating') {
    let titlesWithRatings = allInfo.filter((element) => {
      return (element.Ratings && element.Ratings[0] && element.Ratings[0].Value)
    });
    let titlesWithoutRating = allInfo.filter((element) => {
      return (!element.Ratings || !element.Ratings[0] || !element.Ratings[0].Value)
    });
    titlesWithRatings.sort((a, b) => parseFloat(b.Ratings[0].Value.slice(0, 3)) - parseFloat(a.Ratings[0].Value.slice(0, 3)));
    allInfo = [];
    titlesWithRatings.forEach(element => {
      allInfo.push(element);
    });
    titlesWithoutRating.forEach(element => {
      allInfo.push(element);
    });
    regen();
  };
};

let filterButtonRelease = document.getElementById('filterByReleaseButton');
filterButtonRelease.addEventListener('click', filterByRelease);
let filterInput1 = document.getElementById('filterInput1');
let filterInput2 = document.getElementById('filterInput2');

function regen() {
  clearInfo();
  splitTitlesIntoPages();
  createTable(0);
  window.addEventListener('scroll', scrollControl);
}

function filterByRelease(e) {
  e.preventDefault();
  if (allInfo[0] && (filterInput1.value || filterInput2.value)) {
    const storage = allInfo;
    let filtered = allInfo.filter((el) => {
      return (parseFloat(el.Year) >= parseFloat(filterInput1.value) && parseFloat(el.Year) <= parseFloat(filterInput2.value))
    })
    allInfo = filtered;
    regen();
    allInfo = storage;
  }
}

let filterButtonRating = document.getElementById('filterByRatingButton');
filterButtonRating.addEventListener('click', filterByRating);

function filterByRating(e) {
  e.preventDefault();
  if (allInfo[0] && (filterInput1.value || filterInput2.value)) {
    const storage = allInfo;

    let titlesWithRatings = allInfo.filter((element) => {
      return (element.Ratings && element.Ratings[0] && element.Ratings[0].Value)
    })

    allInfo = [];
    titlesWithRatings.forEach(element => {
      allInfo.push(element);
    })
    let filtered = allInfo.filter((el) => {
      return (parseFloat(el.Ratings[0].Value) >= parseFloat(filterInput1.value) && parseFloat(el.Ratings[0].Value) <= parseFloat(filterInput2.value))
    })
    allInfo = filtered;
    regen();
    allInfo = storage;
  }
}