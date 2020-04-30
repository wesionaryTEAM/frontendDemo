import React from "react";
import { select } from "@storybook/addon-knobs";
import Spinner from "./index";

export default {
  component: Spinner,
  title: 'Components / Atoms/Spinner',
};

export const Spin = () => {
  return (
    <Spinner
      size={select(
        "Size",
        { large: "large", default: "default", small: "small" },
        "default"
      )}
    />
  )
}
