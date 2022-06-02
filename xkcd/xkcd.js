async function getComic(URL) {
  let data = await fetch(URL);
  console.log(data);
  if (data.ok) {
    //let data = await response.json();
    //console.log(data);
  } else {
    console.log(ERROR.statusText);
  }
}

const xkcdURL = 'https://xkcd.com/info.0.json';
getComic(xkcdURL);
