import React from 'react';
import { Input } from 'antd';

interface Props {
    size?: "large" | "small" | "middle";
    clearIcon ?: boolean;
    type?: "password" | "textarea";
    onChange ?: (event?: any) => void;
    placeholder?: string;
    icon?: any;
    disabled ?: boolean;
}

const InputComponent = (props: Props) => {
    var component;
    switch (props.type) {
        case "password":
            component = <Input.Password disabled = {props.disabled} size={props.size} prefix={props.icon} onChange={props.onChange} placeholder={props.placeholder} allowClear = {props.clearIcon} />
            break;
        case "textarea":
            const { TextArea } = Input;
            component = <TextArea prefix={props.icon} autoSize= {{ minRows: 3, maxRows: 6 }} disabled = {props.disabled} onChange={props.onChange} placeholder={props.placeholder} allowClear = {props.clearIcon} />
            break;
        default:
            component = <Input size={props.size} disabled = {props.disabled} prefix={props.icon} onChange={props.onChange} placeholder={props.placeholder} allowClear = {props.clearIcon} />
    }
    return (
        component
    )
}

export default InputComponent;