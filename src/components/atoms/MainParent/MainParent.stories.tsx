import type { Meta, StoryObj } from "@storybook/react";
import "./MainParent.css";
import { MainParent } from "./MainParent";

const meta: Meta<typeof MainParent> = {
  title: "Atoms/Container/ParentContainer",
  component: MainParent,
};

export default meta;

type Story = StoryObj<typeof MainParent>;

export const ParentContainer: Story = {
  args: {
    className: "max-h-screen",
    children: <>Full Width</>,
  },
};
