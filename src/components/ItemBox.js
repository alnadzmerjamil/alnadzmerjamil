import React from 'react';

class ItemBox extends React.Component {
  clickBtn = () => {
    alert(this.props.name);
  };
  render() {
    return (
      <div className="mini-div">
        <div className="img-div">
          <img src={this.props.image} alt={this.props.name} />
        </div>
        <div className="content-div">
          <strong>{this.props.name}</strong>
          <p>
            <small>Php {this.props.price}</small>
          </p>
          <strong>
            <button value="submit" onClick={this.clickBtn}>
              ORDER
            </button>
          </strong>
        </div>
      </div>
    );
  }
}
export default ItemBox;
