import React from 'react';
import CustomButton from '../components/button/CustomButton';

export default {
    title: 'CustomButton',
    component: CustomButton,
};

const Template = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    color: 'primary',
    children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    color: 'secondary',
    children: 'Secondary Button',
};

export const Text = Template.bind({});
Text.args = {
    variant: 'text',
    children: 'Text Button',
};

export const Outlined = Template.bind({});
Outlined.args = {
    variant: 'outlined',
    children: 'Outlined Button',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
    variant: 'contained',
    children: 'Full Width',
    width: '100%'
};
