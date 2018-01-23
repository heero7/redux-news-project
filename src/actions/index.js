// Network request to fetch all data

// URL for all the articles
const URL = "http://localhost:3004";

export function latestNews() {
    const request = 
    fetch(`${URL}/articles?_order=desc&_end=3`, {method: "GET"})
    .then(res => res.json())
    
    return {
        type: "GET_LATEST",
        payload: request
    }
}

export function otherNews() {

    const request =
    fetch(`${URL}/articles?_order=desc&_start=3&_end=10`, {method: "GET"})
    .then(res => res.json())

    return {
        type: "GET_OTHER",
        payload: request
    }
}

export function latestGallery() {
    const request = 
    fetch(`${URL}/galleries?_order=desc&_limit=2`, {method: "GET"})
    .then(res => res.json())

    return {
        type: "GET_LATEST_GALLERY",
        payload: request
    }
}

// Actions for News

export function selectedNews(id) {
    const request = 
    fetch(`${URL}/articles?id=${id}`, {method: "GET"})
    .then(res => res.json())

    return {
        type: "GET_SELECTED_NEWS",
        payload: request
    }
}

// clear the state
export function clearSelectedNews() {
    return {
        type: "CLEAR_SELECTED_NEWS",
        payload: []
    }
}