import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions } from 'redux/actions';

import 'css/home.css';

class Home extends Component {
    handleSubmit = () => {
        if(this.props.searchInput.trim() === "") {
            alert("Please enter a movie.");
        } else {
            this.props.history.push("/results");
        }
    }

    handleTextChange = event => {
        this.props.actions.setInput(event.target.value);
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center align-items-center text-center">
                    <div className="col-8">
                        <div className="movie-input-form">
                            <form onSubmit={this.handleSubmit}>
                                <div className="search-input-container">
                                    <input className="search-input" type="text" placeholder="Enter Movie Title" onChange={this.handleTextChange} autoComplete="on" />
                                    <button className="search-input-submit" type="submit">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchInput: state.searchInput
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            setInput: input => {
                dispatch(actions.setInput(input));
            },
            getResults: input => {
                dispatch(actions.getResults(input));
            }
        }
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( Home );