import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ".././App.css"
import EditableLabel from 'react-editable-label';



export default class Card extends React.Component {
    render(){
        return (
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">
                            <EditableLabel
                            initialValue={this.props.desc + ' ' + (this.props.num + 1)}
                            save={value => console.log("Saved")}
                            />
                        </p>
                    </div>
                </div>
        );
    }
}