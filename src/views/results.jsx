import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'redux/actions';

import Movie from 'components/movie';

import 'css/results.css';

class Results extends Component {
    constructor(props) {
        super(props);

        if(!this.props.searchInput) {
            this.props.history.push("/");
        }
        this.props.actions.getResults(this.props.searchInput);
    }

    generateResults = () => {
        const { searchResults } = this.props;

        if(searchResults) {
            return searchResults.map( (data, i) => {
                return <Movie key={i} movie={data} />;
            });
        } else {
            return (
                <div className="col-10 text-center">
                    <p>
                        Sorry, we could not find any results for '{this.props.searchInput}'
                    </p>
                    <a href="/">back to search</a>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    {this.generateResults()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchInput: state.searchInput,
        searchResults: state.searchResults
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getResults: input => {
                dispatch(actions.getResults(input))
            }
        }
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( Results );