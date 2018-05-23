import {FETCH_EVENTS, SEARCH_EVENTS , DISPLAY_EVENTS} from './types';
import API_KEY from '../SECRET_KEY_DO_NOT_PUSH.json';

export const fetchEvents = () => dispatch => {
  fetch("https://api-endpoint.igdb.com/games/?fields=name,cover,category,genres,rating,summary,platforms,publishers,popularity&order=popularity:desc", {
    method: "GET",
    headers: {
    "user-key": API_KEY.token,
    "Accept": "application/json"
  }
})
  .then(response => response.json())
  .then(games => dispatch({
      type: FETCH_EVENTS,
      payload: games
    })
  )
}

export const searchEvents = (searchEntry) => dispatch => {
  fetch("https://api-endpoint.igdb.com/games/?search=" + searchEntry + "&fields=*", {
    method: "GET",
    headers: {
    "user-key": API_KEY.token,
    "Accept": "application/json"
  }
})
  .then(response => response.json())
  .then(searchResults => dispatch({
      type: SEARCH_EVENTS,
      payload: searchResults
    })
  )
}
