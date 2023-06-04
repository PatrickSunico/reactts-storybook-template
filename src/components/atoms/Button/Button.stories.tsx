import type { Meta, StoryObj } from "@storybook/react";
import "./Button.css";
import { Button } from "./Button";

// Master Component with default values
const meta: Meta<typeof Button> = {
  title: "Atomsf/Button",
  args: {
    children: "Click",
  },
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

// Component Builder
export const Primary: Story = {
  args: {
    variant: "btn-primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "btn-secondary",
  },
};

// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// Meta Data for displaying a component inside storybook
// const meta: Meta = {
//   title: "Components/Button",
//   component: Button,
// };

// export default meta;

// Stories

// export const Default = () => <Button variant="btn-primary">Click</Button>;

// export const Secondary = () => <Button variant="btn-secondary">Click</Button>;
