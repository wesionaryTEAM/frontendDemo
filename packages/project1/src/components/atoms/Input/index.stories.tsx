import React from "react";
import { select, boolean, text } from "@storybook/addon-knobs";
import { UserOutlined } from '@ant-design/icons'
import Input from "./index";

export default {
  component: Input,
  title: 'Components/Atoms/Input',
};

export const TextInput = () => {
  return (
    <Input
      placeholder={text("Placeholder", "Enter your name")}
      size={select(
        "Size",
        { large: "large", middle: "middle", small: "small" },
        "middle"
      )}
      disabled={boolean("Disabled", false)}
      clearIcon={boolean("Clear Icon", true)}
    />
  )
}

export const PasswordInput = () => {
  return (
    <Input
      type="password"
      placeholder={text("Placeholder", "Enter your password")}
      size={select(
        "Size",
        { large: "large", middle: "middle", small: "small" },
        "middle"
      )}
      disabled={boolean("Disabled", false)}
      clearIcon={boolean("Clear Icon", true)}
    />
  )
}

export const TextArea = () => {
  return (
    <Input
      type="textarea"
      placeholder={text("Placeholder", "Write Message")}
      size={select(
        "Size",
        { large: "large", middle: "middle", small: "small" },
        "middle"
      )}
      disabled={boolean("Disabled", false)}
      clearIcon={boolean("Clear Icon", true)}
    />
  )
}

export const InputWithIcon = () => {
  return (
    <Input
      icon={<UserOutlined />}
      placeholder={text("Placeholder", "Username")}
      size={select(
        "Size",
        { large: "large", middle: "middle", small: "small" },
        "middle"
      )}
      disabled={boolean("Disabled", false)}
      clearIcon={boolean("Clear Icon", true)}
    />
  )
}
