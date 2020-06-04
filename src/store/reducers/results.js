import * as actionTypes from '../actions';
const inititalState = 
{
    results: []
}
const results = (state=inititalState, action) =>
{
    switch(action.type)
    {
        case actionTypes.STORE_RESULT:
            return{
                ...state,
                results: state.results.concat({id: new Date(), val:action.result})
            }
        case actionTypes.DELETE_RESULT:
            const updatedArray =  state.results.filter(result => {return result.id!== action.storedResId});
            return{
                ...state,
                results: updatedArray
            }
        default:
            return state;
    }
}
export default results;