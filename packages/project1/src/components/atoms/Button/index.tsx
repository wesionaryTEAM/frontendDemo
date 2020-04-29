import React from 'react';
import { Button } from 'antd';

interface Props {
    loading?: boolean;
    type?: "primary" | "default" | "dashed" | "link";
    disabled?: boolean;
    transparent?: boolean;
    size?: "large" | "middle" | "small";
    children: string | any;
    block?: boolean;
    onClick?: (event?: any) => void;
}

const button = (props: Props) => {
    return (
        <Button
            type={props.type}
            onClick={props.onClick}
            size={props.size}
            loading={props.loading}
            block={props.block}
            ghost={props.transparent}
            disabled={props.disabled}>

            {props.children}
        </Button>
    )
}

export default button;