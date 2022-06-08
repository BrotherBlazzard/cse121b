async function getComic(URL) {
  let res = await fetch(URL, {
    headers: {
      'Accept': 'application.json'
    },
    mode: 'no-cors'
  });
  if (res.ok) {
    let data = await res.json();
    console.log(data);
  } else {
    console.log("issues");
  }
}

const xkcdURL = 'https://xkcd.com/info.0.json';
getComic(xkcdURL);
