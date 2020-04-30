import React from "react";
import { select, boolean, number, text } from "@storybook/addon-knobs";
import Typography from "./index";

export default {
  component: Typography,
  title: 'Components / Atoms/Typography',
};

export const Text = () => {
  return (
    <Typography 
    level={select(
      "Level",
      {
        1: 1,
        2: 2,
        3: 3,
        4: 4
      },
      4
    )}>
      This is Title
      </Typography>
  )
}

export const Paragraph = () => {
  return (
    <Typography paragraph
    copyable={boolean("Enable Copy", false)}
    fontSize = {text("Font Size", "15px")}
    expandable={boolean("Expand ellipse", false)}
    ellipseRow={number("Display Ellipse After Row", 0)}
    >
      Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
      Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
      a design language for background applications, is refined by Ant UED Team. Ant Design, a
      design language for background applications, is refined by Ant UED Team. Ant Design, a design
      language for background applications, is refined by Ant UED Team. Ant Design, a design
      language for background applications, is refined by Ant UED Team.
      </Typography>
  )
}