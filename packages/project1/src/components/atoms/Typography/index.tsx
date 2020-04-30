import React from 'react';
import { Typography } from 'antd';
import { createUseStyles } from 'react-jss';

interface Props {
    children: string;
    level?: 1 | 2 | 3 | 4;
    paragraph?: boolean;
    copyable?: boolean;
    ellipseRow?: number;
    expandable?: boolean;
    fontSize ?: string;
    color ?: string;
    className ?: any;

}

const useStyles = createUseStyles({
    myClass : (props:Props) => ({
        color : props.color,
        fontSize: props.fontSize
    })
})
const TextComponent = (props: Props) => {

    const classes = useStyles(props);
    const { Title, Paragraph } = Typography;
    const ellipse = (props.ellipseRow) ?
        (props.ellipseRow != 0 ? { rows: props.ellipseRow, expandable: props.expandable } : { rows: 3, expandable: props.expandable })
        : undefined
    return (
        props.paragraph ?
            <Paragraph className={`${classes.myClass} ${props.className}`} copyable={props.copyable} ellipsis={ellipse}>{props.children}</Paragraph> :
            <Title level={props.level}>{props.children}</Title>
    )
}

export default TextComponent;