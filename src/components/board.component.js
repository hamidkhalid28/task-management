import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ".././App.css"

import Card from "./card.component"

import EditableLabel from 'react-editable-label';

export default class Board extends React.Component {

    render(){
        return (
            <div className = "col-3">
                <div className="p-3 mb-2 bg-light text-dark panel-relative">
                    {/* <h6 contenteditable="true"> {this.props.board.name} </h6> */}
                    <EditableLabel
                        initialValue={this.props.board.name}
                        save={value => console.log("Saved")}
                    />
                    <button type="button" 
                    className="btn btn-primary btn-right"
                    onClick = {() => this.props.onClick(this.props.board.id)}> + </button>
                </div>
                <div className = "board-height board-outline">
                    <div className = "board-bg">
                        {
                            this.props.board.tickets.map((item,index) => {
                                return ( <Card key = {index} desc = {item} num = {index}/>
                                    // <li key = {index}>
                                    //     <Card />
                                    // </li>
                                )
                            })
                        }             
                    </div>
                </div>
            </div>
        );
    }
}