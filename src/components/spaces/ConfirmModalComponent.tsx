import React, { Component } from 'react'
import './ConfirmModalComponent.css'

interface ModalProps {
  show: boolean,
  content: string,
  close: () => void
}

export default class ConfirmModalComponent extends Component<ModalProps> {  

  render() {
    if (!this.props.show) {
      return null
    } else {
      return (
        <div className="modal">
            <div>
              <h2>You tried to reserve and ...</h2>
              <h3 className="modalText">{this.props.content}</h3>
              <button onClick={()=> this.props.close}></button>
            </div>
        </div>
      )
    }
  }
}
