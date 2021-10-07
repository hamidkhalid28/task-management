import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import './App.css'

import Board from "./components/board.component"


export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      boards: [],
      current_baord: 0
    }
  }

  onBoardBtnClick(){

    this.setState({
      current_baord: this.state.current_baord + 1,
      boards : this.state.boards.concat({
        name: "Board " + (this.state.current_baord + 1),
        id: this.state.current_baord,
        tickets: [],
      }),
    })
  }

  handleClick(id) {
    const boards = this.state.boards.slice();
    const tickets = this.state.boards[id].tickets.slice();

    tickets.push("Task #");
    boards[id].tickets = tickets;

    this.setState({
      boards: boards,
    })
  }

  render() {
    return (
        <div className="container overflow-hidden">
          <button type="button" 
            className="btn btn-success" 
            onClick = {() => this.onBoardBtnClick()}>
              New Board
          </button>
          <br/>
          <br/>

          <div className="row gx-1">
            {
              this.state.boards.map(board => {
                return <Board key={board.id} board = {board} onClick = {(baordId) => this.handleClick(baordId)} />
                })
            }

          </div>
        </div>
    );
  }
}
