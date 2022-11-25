import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LoginButtonComponent from "../components/LoginButtonComponent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/LoginButtonComponent",
  component: LoginButtonComponent,
} as ComponentMeta<typeof LoginButtonComponent>;

export const CheckboxComponentView: ComponentStory<typeof LoginButtonComponent> = (
  args
) => <LoginButtonComponent {...args}>Button</LoginButtonComponent>;