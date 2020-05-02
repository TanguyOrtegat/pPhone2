import React, { useState } from "react";
import "./Calculator.scss";
import AppContainer from "../../utils/AppContainer";

enum Operation {
    Addition,
    Substraction,
    Divison,
    Multiplication
}

interface CalculatorState {
    result: number,
    input?: number,
    lastInput?: number,
    lastOperation?: Operation,
    operation?: Operation
    decimal: boolean
}

const defaultState: CalculatorState = { result: 0, decimal: false };

const Calculator: React.FC = () => {

    let [state, setState] = useState<CalculatorState>(defaultState);

    const numberClicked = (n: number) => {
        //maximum 9 digits, decimal include
        if (state.input && digitsCount(state.input) > 8)
            return;

        let input = state.input ? state.input : 0;
        if (state.decimal) {
            input = Number(input % 1 != 0 ? (input.toString() + n) : (input.toString() + "." + n));
        } else {
            input = input * 10 + n;
        }
        setState({ ...state, input: input });
    }

    const digitsCount = (n: number) => n.toLocaleString().replace(".", "").length;

    const resetClicked = () => state.input
        ? setState({ ...state, input: undefined, operation: undefined, decimal: false })
        : setState(defaultState);

    const operationClicked = (operation: Operation) => {
        let newState = state.operation != undefined
            ? getResultState()
            : { ...state, result: state.input ? state.input : state.result, input: undefined, decimal: false };

        setState({ ...newState, operation: operation });
    }
    const oppositeClicked = () => state.input
        ? setState({ ...state, input: state.input * -1 })
        : setState({ ...state, result: state.result * -1 });

    const resultClicked = () => setState(getResultState());

    const decimalPressed = () => {
        setState({ ...state, decimal: true });
    }

    const percentageClicked = () => {
        state.input != undefined
            ? setState({ ...state, input: state.input / 100 })
            : setState({ ...state, result: state.result / 100 });
    }

    const getResultState = () => {
        let newState = { ...state };
        const value = newState.input != undefined ? newState.input : newState.lastInput;
        const operation = newState.operation != undefined ? newState.operation : newState.lastOperation;

        switch (operation) {
            case Operation.Divison:
                newState.result /= value ? value : 1;
                break;
            case Operation.Multiplication:
                newState.result *= value ? value : 0;
                break;
            case Operation.Substraction:
                newState.result -= value ? value : 0;
                break;
            case Operation.Addition:
                newState.result += value ? value : 0;
                break;
            default:
                break;
        }

        newState.lastInput = value;
        newState.input = undefined;
        newState.lastOperation = operation;
        newState.operation = undefined;
        newState.decimal = false;

        return newState;
    }

    const getCalculatorInput = (number: number) => {
        const formated = digitsCount(number) > 9
            ? number.toPrecision(9)
            : number.toLocaleString(undefined, { maximumSignificantDigits: 9 });

        const fontSize = formated.length < 7 ? 55 : (55 - formated.length * 2);

        return (
            <h1 className="calculator-result" style={{ fontSize: fontSize + 'px' }}>{formated}</h1>
        );
    }

    return (
        <AppContainer backgroundColor="#000000">
            <div id="calculator">
                {getCalculatorInput(state.input ? state.input : state.result)}
                <div className="btn-container">
                    <div className="btn-circle btn-light" onClick={resetClicked}>
                        {state.input ? "C" : "AC"}
                    </div>
                    <div className="btn-circle btn-light" onClick={oppositeClicked}>
                        +/-
                    </div>
                    <div className="btn-circle btn-light" onClick={percentageClicked}>
                        %
                    </div>
                    <div className={`btn-circle ${state.operation == Operation.Divison && state.input == undefined ? "btn-white" : "btn-orange"}`}
                        onClick={() => operationClicked(Operation.Divison)}>
                        &#247;
                    </div>
                    <div className="btn-circle" onClick={() => numberClicked(7)}>
                        7
                    </div>
                    <div className="btn-circle" onClick={() => numberClicked(8)}>
                        8
                    </div>
                    <div className="btn-circle" onClick={() => numberClicked(9)}>
                        9
                    </div>
                    <div className={`btn-circle ${state.operation == Operation.Multiplication && state.input == undefined ? "btn-white" : "btn-orange"}`}
                        onClick={() => operationClicked(Operation.Multiplication)}>
                        &times;
                    </div>
                    <div className="btn-circle" onClick={() => numberClicked(4)}>
                        4
                    </div>
                    <div className="btn-circle" onClick={() => numberClicked(5)}>
                        5
                    </div>
                    <div className="btn-circle" onClick={() => numberClicked(6)}>
                        6
                    </div>
                    <div className={`btn-circle ${state.operation == Operation.Substraction && state.input == undefined ? "btn-white" : "btn-orange"}`}
                        onClick={() => operationClicked(Operation.Substraction)}>
                        -
                    </div>
                    <div className="btn-circle" onClick={() => numberClicked(1)}>
                        1
                    </div>
                    <div className="btn-circle" onClick={() => numberClicked(2)}>
                        2
                    </div>
                    <div className="btn-circle" onClick={() => numberClicked(3)}>
                        3
                    </div>
                    <div className={`btn-circle ${state.operation == Operation.Addition && state.input == undefined ? "btn-white" : "btn-orange"}`}
                        onClick={() => operationClicked(Operation.Addition)}>
                        +
                    </div>
                    <div className="btn-circle btn-lg" onClick={() => numberClicked(0)}>
                        0
                    </div>
                    <div className="btn-circle" onClick={decimalPressed}>
                        ,
                    </div>
                    <div className="btn-circle btn-orange" onClick={resultClicked}>
                        =
                    </div>
                </div>
            </div>
        </AppContainer >
    );
}

export default Calculator;