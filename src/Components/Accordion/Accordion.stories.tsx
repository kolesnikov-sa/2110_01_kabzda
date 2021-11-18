import React, {ComponentProps} from "react";

import {Story, Meta} from '@storybook/react';

import {Accordion} from "./Accordion";

export default {
    title: "Kabzda/Accordion",
    component: Accordion,
} as Meta;

const Template: Story<ComponentProps<typeof Accordion>> = (args) => <Accordion {...args} />;

export const FirstStory = Template.bind({});
FirstStory.args = {
    title: 'Accordion Story',
    collapsed: false,
    onClick: () => {}
}