import React, {Component} from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';


export default class SearchField extends Component{
    render(){
        return(
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder={this.props.placeholder}/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">{this.props.buttonTitle}</button>
            </form>
        )
    }
}

SearchField.defaultProps = {
    placeholder: "Search",
    buttonTitle: "Search"
}

SearchField.propTypes = {
    placeholder: PropTypes.string,
    buttonTitle: PropTypes.string,
}
    