import React from "react";
import { text, select } from "@storybook/addon-knobs";
import CardComponent from "./index";

export default {
  component: CardComponent,
  title: 'Components / Atoms/Card',
};

export const Card = () => {
  return (
    <CardComponent
      title={text("Title", "This is title")}
      size={select(
        "Size",
        { default: "default", small: "small" },
        "default"
      )}
      >
      <p>I am body</p>
      </CardComponent>
  )
}
