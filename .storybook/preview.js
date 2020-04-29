import React from 'react';
import { addDecorator } from '@storybook/react';
import "antd/dist/antd.css";

addDecorator(storyFn => <div style={{ padding: '16px' }}>{storyFn()}</div>);