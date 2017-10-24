import React, {Component} from 'react';
import styled from "styled-components";


export default function InputField ({field, type}){
    return(
        <div class="form-group">
            <label for="inputEmail">{field}</label>
            <input type={type} class="form-control" id="inputEmail" placeholder={field}/>
        </div>
    )
}
