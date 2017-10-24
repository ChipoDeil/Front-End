import React, {Component} from 'react';
import styled from "styled-components";

import InputField from "../InputField";


export default function LogForm ({data, text}){
    return(
       <form>
        {data.map((dataField, index) =>
                    <InputField {...dataField}></InputField>
        )}
        <div class="checkbox">
            <label><input type="checkbox"/>Remember me</label>
        </div>
        <button type="submit" class="btn btn-primary">{text}</button>
       </form>
    )
}
