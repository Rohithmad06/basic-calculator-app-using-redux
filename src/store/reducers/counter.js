import * as actionTypes from '../actions';
const inititalState = 
{
    firstNumber:0,
    secondNumber:0,
    counter: 0
}
const counter = (state=inititalState, action) =>
{
    switch(action.type)
    {
        case actionTypes.CHANGE:
            if(action.id==='firstNumber')
            {
                return{
                    ...state,
                    firstNumber: action.event.target.value
                }
            }
            return{
                ...state,
                secondNumber: action.event.target.value
            }
        case actionTypes.ADD:
            console.log(state)
            return{
                ...state,
                counter: Number(state.firstNumber) + Number(state.secondNumber)
            }
        case actionTypes.SUBTRACT:
            return{
                ...state,
                counter: Number(state.firstNumber)-Number(state.secondNumber)
            }
        case actionTypes.MULTIPLY:
            return{
                ...state,
                counter: Number(state.firstNumber)*Number(state.secondNumber)
            }
        case actionTypes.DIVIDE:
            return{
                ...state,
                counter: Number(state.firstNumber)/Number(state.secondNumber)
            }
        default:
            return state;
    }
}
export default counter;