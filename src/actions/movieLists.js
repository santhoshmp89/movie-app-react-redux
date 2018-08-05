import {ADD_MOVIE_TO_LIST, CREATE_LIST, GET_LOCALSTORAGE_VALUE, REMOVE_MOVIE_FROM_LIST } from '../constants';


const addMovieToList = (movie, list='Favorites', index) => {    
    return {
        type: ADD_MOVIE_TO_LIST,
        movie: movie,
        list: list,
        index: index
    }
}

const createList = (listName) => {
    return {
        type: CREATE_LIST,
        listName
    }
}

const getLocalStorageValue = (movieLists) => {
    return {
        type: GET_LOCALSTORAGE_VALUE,
        movieLists
    }
}

const removeMovieFromLists = (index, movieId) => {
    return {
        type: REMOVE_MOVIE_FROM_LIST,
        index,
        movieId
    }
}

export {addMovieToList, createList, getLocalStorageValue, removeMovieFromLists}

