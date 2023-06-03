import type {Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

import "./Button.css";

// Meta Data for displaying a component inside storybook
const meta: Meta = {
    title: 'Button',
    component: Button
}

export default meta;


// Stories 
export const Default = () => <Button variant="primary" className="btn-primary"> Click </Button>

export const Secondary = () => <Button variant="secondary" className="btn-secondary"> Click </Button>
