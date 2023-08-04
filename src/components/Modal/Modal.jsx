import { Component } from 'react';
import style from './Modal.module.css';

class Modal extends Component {

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
      }
    
      componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
      }

      handleKeyDown = (event) => {
        if (event.code === "Escape") {
          this.props.onModalClose();
        }
      };

  render() {

    const {image} = this.props;
    return (
        <div className={style.overlay} onClick={this.props.onModalClose}>
          <div className={style.modal}>
            <img src={image} alt="" />
          </div>
        </div>
      );
}};

export default Modal;