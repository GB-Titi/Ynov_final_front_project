
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LinkButtonComponent from "./LinkButtonComponent";

import "../styles/components/link-button.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/LinkButtonComponent",
  component: LinkButtonComponent,
} as ComponentMeta<typeof LinkButtonComponent>;

export const LinkButtonComponentView: ComponentStory<
  typeof LinkButtonComponent
> = (args) => <LinkButtonComponent {...args} />;