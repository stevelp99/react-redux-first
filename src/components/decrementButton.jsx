import React from "react";
import {connect} from "react-redux";
import {decrement as decrementAction} from "../redux/actions";

function DecrementButton({decrement}){
    return (<button type="button" onClick={decrement}>Decrement</button>
    );
};

const mapDispatchToProps={
    decrement:decrementAction
};

export default connect(null, mapDispatchToProps)(DecrementButton);