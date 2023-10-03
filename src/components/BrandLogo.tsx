import React from "react";
import "./BrandLogo.css";

interface BrandLogoProps {
  name: string;
  src: string;
}

export default class BrandLogo extends React.Component<BrandLogoProps> {
  get_image_src(): string {
    const img_path = "/assets/img/brands/";
    return img_path + this.props.src;
  }

  render() {
    return (
      <li>
        <img src={this.get_image_src()} alt={this.props.name} />
      </li>
    );
  }
}
