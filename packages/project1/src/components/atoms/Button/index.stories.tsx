import React from "react";
import "antd/dist/antd.css";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Button from "./index";

const components = storiesOf("Components / Atoms", module);
components.addDecorator(withKnobs).add("Button", () => {

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
        transparent={boolean("Transparent", false)}

      >
        Button
      </Button>
  )
},{notes: "aiska"});