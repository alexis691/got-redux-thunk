import gotApi from "../api/gotApi";

export const fetchCharacters = () => async (dispatch) => {
    const response = await gotApi.get('Characters');

    dispatch({
        type: "FETCH_CHARACTER_LIST",
        payload: response.data
    })
}

export const fetchCharacterSelected = (id) => async (dispatch) => {
    const response = await gotApi.get(`Characters/${id}`);

    dispatch({
        type: "FETCH_CHARACTER",
        payload: response.data
    })
}

export const fetchContinents = () => async (dispatch) => {
    const response = await gotApi.get('Continents');

    dispatch({
        type: "FETCH_CONTINENTS",
        payload: response.data
    })
}