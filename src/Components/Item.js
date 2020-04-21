import React, { Component } from "react";
import "./Item.css";
import { useParams } from "react-router-dom";

class Item extends Component {
  render() {
      let { type } = useParams();
    return <div>
        hgfxgchvjbhkn
        {type}
    </div>;
  }
}

export default Item;
