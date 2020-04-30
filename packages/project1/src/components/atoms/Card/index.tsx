import React from 'react';
import { Card } from 'antd';

interface Props {
    title: string;
    size?: "default" | "small";
    children : any;
    className ?: any;
}

const CardComponent = (props: Props) => {

    return (
        <Card className = {props.className} title={props.title} size={props.size} {...props}>
            {props.children}
        </Card>
    )
}

export default CardComponent;