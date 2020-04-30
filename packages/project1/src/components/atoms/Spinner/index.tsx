import React from 'react';
import { Spin } from 'antd';

interface Props {
    size?: "small" | "default" | "large";
}

const Spinner = (props: Props) => {
    return (
        <Spin size={props.size} />
    )
}

export default Spinner;