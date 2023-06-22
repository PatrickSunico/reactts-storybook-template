import type { Meta, StoryObj } from "@storybook/react";
import "./Button.css";
import { Button } from "./Button";

// Master Component with default values
const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
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
    size: "xs",
  },
};

export const Secondary: Story = {
  args: {
    variant: "btn-secondary",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "btn-tertiary",
  },
};

export const SearchFilterButton: Story = {
  args: {
    variant: "btn-search-filter",
  },
};

export const GroupedButtons: Story = {
  // render() - to Render as JSX
  render: () => (
    <div className="flex flex-col px-2 py-2">
      <Button variant="btn-primary" size="lg" className="my-2 me-2">
        Primary
      </Button>
      <Button variant="btn-secondary" size="lg" className="my-2 me-2">
        Secondary
      </Button>
      <Button variant="btn-tertiary" size="lg" className="my-2 me-2">
        Tertiary
      </Button>

      <Button variant="btn-search-filter" size="xs" className="my-2 me-2">
        Search Filter
      </Button>
    </div>
  ),
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
