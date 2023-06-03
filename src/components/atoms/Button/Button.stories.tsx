import type {Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

const meta: Meta = {
    title: 'Button',
    component: Button
}

export default meta;


// Stories
export const Default = () => <Button variant="primary" className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm"> Click </Button>

export const Secondary = () => <Button variant="secondary" className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm"> Click </Button>
