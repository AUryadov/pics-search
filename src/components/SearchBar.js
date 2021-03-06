import React from "react";

class SearchBar extends React.Component {
    state = { term: "" };

    handleFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.handleFormSubmit}>
                    <input
                        value={this.state.term}
                        onChange={(e) =>
                            this.setState({
                                term: e.target.value,
                            })
                        }
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar;
