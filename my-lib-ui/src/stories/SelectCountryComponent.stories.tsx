import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SelectCountryComponent from "../components/SelectCountryComponent";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/SelectCountryComponent",
  component: SelectCountryComponent,
} as ComponentMeta<typeof SelectCountryComponent>;

export const CheckboxComponentView: ComponentStory<typeof SelectCountryComponent> = () => <SelectCountryComponent/>;