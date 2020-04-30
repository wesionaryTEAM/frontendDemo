import React from 'react';
import Card from '../../atoms/Card';
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'
import { Form } from 'antd';
interface Props {
    size?: "large" | "small" | "middle";
    clearIcon?: boolean;
    onChange?: (event?: any) => void;
    placeholder?: string;
    icon?: any;
    type?: "password" | "textarea";
    disabled?: boolean;
}

const LoginComponent = (props: Props) => {
    const tailLayout = {
        wrapperCol: { offset: 2 },
    };

    const handleClick = (e: any) => {
        e.persist();
    }
    const [form] = Form.useForm();
    const resetForm = () => {
        form.resetFields();
    };
    return (
        <Card>
            <Form form={form}>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input clearIcon />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input type="password" clearIcon />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" submit="submit" onClick={() => handleClick}>Submit</Button> &nbsp;
                    <Button submit="button" onClick={resetForm}>Reset</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default LoginComponent;