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
}

const button = (props: Props) => {
    return (
        <Button
            shape={props.shape}
            type={props.type}
            onClick={props.onClick}
            size={props.size}
            loading={props.loading}
            block={props.block}
            ghost={props.transparent}
            icon={props.icon}
            disabled={props.disabled}>

            {props.children}
        </Button>
    )
}

export default button;