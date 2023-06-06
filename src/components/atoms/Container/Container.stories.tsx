import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";

import "./Container.css";
import { Button } from "../Button/Button";

// Meta Data for displaying a component inside storybook
const meta: Meta<typeof Container> = {
  title: "Atoms/Container/Container",
  component: Container,
};

export default meta;

// Stories
type Story = StoryObj<typeof Container>;

// Component
export const FullWidth: Story = {
  args: {
    className: "dark",
    color: "white",
    children: (
      <>
        <Button variant="btn-primary"> Click </Button>
      </>
    ),
  },
};

export const MinWidth: Story = {
  args: {
    ...FullWidth.args,
    color: "white",
  },
};
