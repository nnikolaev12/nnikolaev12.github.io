import React from "react";
import "./Button.css";

interface ButtonProps {
  href: string;
  text: string;
  classes?: string;
}

export default class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <a href={this.props.href}>
        <button className={"btn " + this.props.classes}>
          {this.props.text}
        </button>
      </a>
    );
  }
}
