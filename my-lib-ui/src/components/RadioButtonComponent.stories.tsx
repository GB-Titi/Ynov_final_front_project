
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RadioButtonComponent from "./RadioButtonComponent";

import "../styles/components/radio-button.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/RadioButtonComponent",
  component: RadioButtonComponent,
} as ComponentMeta<typeof RadioButtonComponent>;

export const RadioButtonComponentView: ComponentStory<
  typeof RadioButtonComponent
> = (args) => <RadioButtonComponent {...args} />;