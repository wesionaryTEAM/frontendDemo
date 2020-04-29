import React from "react";
import { select, boolean, text } from "@storybook/addon-knobs";
import { UserOutlined } from '@ant-design/icons'
import Input from "./index";
import { Form } from "antd";

export default {
  component: Input,
  title: 'Components/Atoms/Input',
};

export const InputWithoutLabel = () => {
  return (
    <Input
      placeholder={text("Placeholder", "Enter your name")}

    />
  )
}
export const InputWithLabel = () => {
  return (
    <Form>
      <Input
        label={text("Label", "Username")}
        required={boolean("Required", false)}

      />
    </Form>
  )
}

export const PasswordField = () => {
  return (
    <Form>
      <Input
        password
        label={text("Label", "Password")}
        validation="Please enter password!"
        required={boolean("Required", true)}
        placeholder={text("Placeholder", "Enter your password")}

      />
    </Form>
  )
}
export const InputWithIcon = () => {
  return (
    <Form>
      <Input
        icon={<UserOutlined />}
        required={boolean("Required", true)}
        placeholder={text("Placeholder", "Username")}

      />
    </Form>
  )
}