
var httpRequest = new XMLHttpRequest();

//connectie met json file

httpRequest.open('GET', 'https://api.fortnitetracker.com/v1/profile/pc/iMarkzy');
httpRequest.setRequestHeader('TRN-Api-Key', 'd38ab627-5de7-4ad3-b9ce-9fc92102b740');




httpRequest.send();
var json = httpRequest.responseText;
console.log(json);

