import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {

    render () {
        return (
            <div>
                <hr/>
                <div style={{display:'flex', justifyContent:'space-between', width:"100%"}}>
                    <div style={{display:'flex', justifyContent:'center', width:"50%"}}>
                        <label htmlFor='firstNumber'>Enter First Value: &nbsp; </label>
                        <input type='number' id='firstNumber' onChange={(event) => this.props.onChange(event, 'firstNumber')}/>
                    </div>
                    <div style={{display:'flex', justifyContent:'center', width:"50%"}}>
                        <label htmlFor='secondNumber'>Enter Second Value:&nbsp; </label>
                        <input type='number' id='secondNumber' onChange={(event) => this.props.onChange(event, 'secondNumber')}/>
                    </div>
                    
                </div>
                  <hr/>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Add" clicked={this.props.onAdd} />
                <CounterControl label="Subtract" clicked={this.props.onSubtract} />
                <CounterControl label="Multiply" clicked={this.props.onMultiply} />
                <CounterControl label="Divide" clicked={this.props.onDivide} />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Save Result</button>
                <ul>
                    {this.props.results.map(result => 
                        (<li style={{listStyleType:"none"}} key={result.id} >
                                        {result.val}
                                </li>)
                        )}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => 
{
    return {
        ctr: state.counter.counter,
        results: state.results.results
    };
}; 
const mapDispatchToProps = dispatch =>
{
    return {
        onChange: (event, id) => dispatch({type: actionTypes.CHANGE, event: event, id: id}),
        onAdd: () => dispatch({type: actionTypes.ADD}),
        onSubtract: () => dispatch({type: actionTypes.SUBTRACT}),
        onMultiply: () => dispatch({type: actionTypes.MULTIPLY, difference: 5}),
        onDivide: () => dispatch({type:actionTypes.DIVIDE, difference: 5}),
        onStoreResult: (result) => dispatch({type:actionTypes.STORE_RESULT, result: result})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);