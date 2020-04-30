import React from "react";
import { text } from "@storybook/addon-knobs";
import Empty from "./index";

export default {
  component: Empty,
  title: 'Components / Atoms/NoData',
};

export const NoData = () => {
  return (
    <Empty
      text={text("Description", "")}/>
  )
}
