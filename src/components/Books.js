import React, { Component } from "react";
import SearchArea from '/components/SearchArea';


class Books extends Component {
    render() {
        return (
            <div>
                <SearchArea handleSearch={this.handleSearch} />
            </div>
        );
    }
}
export default Books;
