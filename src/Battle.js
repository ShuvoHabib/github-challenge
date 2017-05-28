import React, {Component} from 'react';
import PlayerInput from './PlayerInput';

class Battle extends Component {
    state = {
        playerOneName: '',
        playerTwoName: '',
        playerOneImage: null,
        playerTwoImage: null,
    };

    handleSubmit = (id, username) => {
        this.setState(function () {
            const newState = {};
            newState[id + 'Name'] = username;
            newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
            return newState;
        })
    };

    render() {
        const playerOneName = this.state.playerOneName;
        const playerTwoName = this.state.playerTwoName;
        return (
            <div>
                <h2>Battle!</h2>
                <br />
                <div className='row'>
                    <div className="col-sm-5 text-center">
                        {this.state.playerOneImage !== 'null'  && <img src={this.state.playerOneImage } />}
                        <h2 className="">
                            {this.state.playerOneName !== '' && playerOneName}
                        </h2>
                        {!playerOneName &&
                        <PlayerInput
                            id='playerOne'
                            label='Player One'
                            onSubmit={this.handleSubmit}
                        />}
                    </div>
                    <div className="col-sm-2">
                        VS
                    </div>
                    <div className="col-sm-5">
                        {this.state.playerTwoImage !== 'null'  && <img src={this.state.playerTwoImage } />}
                        <h2 className="">
                            {this.state.playerTwoName !== '' && playerTwoName}
                        </h2>
                        {!playerTwoName &&
                        <PlayerInput
                            id='playerTwo'
                            label='Player Two'
                            onSubmit={this.handleSubmit}
                        />}
                    </div>
                </div>
            </div>
        )
    }
}
export default Battle;