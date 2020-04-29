import React from 'react';
import { Input, Form } from 'antd';

interface Props {
    label?: string;
    required?: boolean;
    validation?: string;
    password?: boolean;
    name?: string;

    placeholder?: string;
    icon?: any;
}

const input = (props: Props) => {

    const message = props.validation ? props.validation : "This field is required!";

    const rule = props.required ? [{
        required: true,
        message: message
    }] : [];
    console.log(rule)
    return (
        <Form.Item
            label={props.label}
            rules={rule}>

            {props.password ?
                <Input.Password prefix={props.icon} placeholder={props.placeholder} allowClear/> :
                <Input prefix={props.icon} placeholder={props.placeholder} allowClear />
            }


        </Form.Item>
    )
}

export default input;