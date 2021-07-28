import { Component } from "react";
import image from "../../assets/generic-image.jpg";

interface SpaceComponentProps {
  spaceId: string,
  name: string,
  location: string,
  photoUrl?: string,
  reserveSpace: (spaceId: string) => void
}

export class SpaceComponent extends Component<SpaceComponentProps> {

  private renderImage(){
    if (this.props.photoUrl) {
      return <img src={this.props.photoUrl} alt="" />
    } else {
      return <img src={image} alt="" />
    }
  }

  render(){
    return <div>
      {this.renderImage()}
      <label htmlFor="">{this.props.name}</label>
      <label htmlFor="">{this.props.spaceId}</label>
      <label htmlFor="">{this.props.location}</label>
      <button onClick={()=> this.props.reserveSpace(this.props.spaceId)}>Reserve</button>
    </div>
  }

}