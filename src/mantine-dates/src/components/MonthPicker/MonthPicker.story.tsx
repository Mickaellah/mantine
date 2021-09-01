import React from 'react';
import { storiesOf } from '@storybook/react';
import {MonthPicker} from './MonthPicker';

storiesOf('@mantine/dates/MonthPicker', module)
    .add('Month picker', () => (
        <MonthPicker text="Hello world" />
    ))