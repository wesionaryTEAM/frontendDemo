import React from 'react';
import { Empty } from 'antd';

interface Props {
    text?: string;
    children?: any;
}

const EmptyComponent = (props: Props) => {
    const component = props.text
        ?
        <Empty description={props.text} >{props.children}</Empty>
        :
        <Empty>{props.children}</Empty>
    return (
        component
    )
}

export default EmptyComponent;