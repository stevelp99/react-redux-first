import React from "react";
import {connect} from "react-redux";
import {zero as zeroAction} from "../redux/actions";

function ZeroButton({zero}){
    return (<button type="button" onClick={zero}>Zero</button>
    );
};

const mapDispatchToProps={
    zero:zeroAction
};

export default connect(null, mapDispatchToProps)(ZeroButton);