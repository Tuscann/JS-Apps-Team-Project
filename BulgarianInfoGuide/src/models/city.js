import {get, post, update} from './requester';

function loadCities(callback) {
    // Request cities from db
    get('appdata', 'cities', 'kinvey')
        .then(callback);
}

function loadCityDetails(cityId, onCitySuccess) {
    get('appdata', 'cities/' + cityId, 'kinvey')
        .then(onCitySuccess);
}

function loadCityWonders(cityName, callback) {
    get('appdata', cityName, 'kinvey')
        .then(callback);
}

function loadWonderDetails(cityName, wonderId, onLoadSuccess) {
    get('appdata', cityName+ "/" + wonderId, 'kinvey')
        .then(onLoadSuccess);
}


function edit(cityName, cityId, name, description, imageUrl, callback) {
    let cityWonderData = {
        name: name,
        description: description,
        image: imageUrl

    };
    update('appdata', cityName + cityId, cityWonderData, 'kinvey')
        .then(callback(true));
}

function create(cityName, name, description, imageUrl, onSuccess) {
    let cityWondersData = {
        name: name,
        description: description,
        image: imageUrl
    };
    post('appdata', cityName, cityWondersData, 'kinvey')
        .then(onSuccess);
}

export {loadCities, loadCityDetails, loadCityWonders, edit, create, loadWonderDetails}

