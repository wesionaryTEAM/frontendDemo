import React from 'react';
import { Button } from 'antd';

interface Props {
    loading?: boolean;
    type?: "primary" | "default" | "dashed" | "link";
    disabled?: boolean;
    shape?: "circle" | "circle-outline" | "round";
    transparent?: boolean;
    size?: "large" | "middle" | "small";
    children?: string | null;
    block?: boolean;
    onClick?: (event?: any) => void;
    icon?: any;
    submit ?: "submit" | "button";
    
}

const button = (props: Props) => {
    return (
        <Button
            htmlType={props.submit}
            shape={props.shape}
            type={props.type}
            onClick={props.onClick}
            size={props.size}
            loading={props.loading}
            block={props.block}
            ghost={props.transparent}
            icon={props.icon}
            disabled={props.disabled}
            {...props}
        >

            {props.children}
        </Button>
    )
}

export default button;