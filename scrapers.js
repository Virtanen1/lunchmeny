// Replace ./data.json with your JSON feed
fetch('./data.json').then(response => {
    return response.json();
  }).then(data => {
    // Work with JSON data here

    // for(let i = 0; i < data.length; i++) {
    // }

    data.forEach(() => {
        document.querySelector('#mandag').innerHTML = data[0]
        document.querySelector('#tisdag').innerHTML = data[1]
        document.querySelector('#onsdag').innerHTML = data[2]
        document.querySelector('#torsdag').innerHTML = data[3]
    });

  }).catch(err => {
    // Do something for an error here
    console.log(err);
  });