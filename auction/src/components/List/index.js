import React, {Component} from 'react';
import styled from "styled-components";

import ListItems from "../ListItems";



export default function List ({data}){
    return(
        <ul className="list-group">
            {data.map((dataField, index) =>
                <ListItems {...dataField}></ListItems>
            )}
        </ul>
    )
}