import React from "react";
import "antd/dist/antd.css";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Button from "./index";
import { SearchOutlined } from '@ant-design/icons'

export default {
  component: Button,
  title: 'Components / Atoms/Button',
};

export const button = () => {
  return (
    <Button
      onClick={action("onClickAction")}
      type={select(
        "Type",
        {
          primary: "primary",
          dashed: "dashed",
          default: "default",
          link: "link"
        },
        "primary"
      )}
      size={select(
        "Size",
        { large: "large", middle: "middle", small: "small" },
        "middle"
      )}
      block={boolean("Show in full Size", false)}
      disabled={boolean("Disabled", false)}
      loading={boolean("Loading", false)}
      transparent={boolean("Transparent", false)}>
      Button
  </Button>
  )
}

export const IconButton = () => {
  return (
    <Button
      onClick={action("onClickAction")}
      icon={<SearchOutlined />}
      shape={select(
        "Shape",
        {
          circle: "circle",
          circleoutline: "circle-outline",
          round: "round"
        },
        "circle"
      )}
      type={select(
        "Type",
        {
          primary: "primary",
          dashed: "dashed",
          default: "default",
          link: "link"
        },
        "primary"
      )}
      size={select(
        "Size",
        { large: "large", middle: "middle", small: "small" },
        "middle"
      )}
      disabled={boolean("Disabled", false)}
      loading={boolean("Loading", false)}
      transparent={boolean("Transparent", false)}/>

  )
}