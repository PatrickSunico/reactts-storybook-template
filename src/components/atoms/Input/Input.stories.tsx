import type { Meta, StoryObj } from "@storybook/react";
import "./Input.css";
import { Input } from "./Input";

// Master Component with default values
const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const DefaultInput: Story = {
  args: {
    className: "default-input",
    label: "Default",
  },
};

// // Input Default
// export const Input: Story = {
//   args: {
//     className: "default-input",
//     label: "Default",
//   },
// };
