import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item";

import SECTIONS_DATA from "./sections.data";
import "./directory.scss";

class Directory extends Component {
  state = {
    sections: SECTIONS_DATA,
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
