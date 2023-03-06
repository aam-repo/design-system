import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "@acme/core";

export default {
  title: "Navigation/Feature",
  className: "nav-feature",
  component: Button,
  argTypes: {
    tcName: { control: "text" },
    imgUrl: { control: "color" },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => {
  return (
    <>
      <Button>test</Button>
    </>
  );
};
export const FeatureTemplate = Template.bind({});
FeatureTemplate.args = {
  tcName: "Da_Damenwelten",
  imgUrl:
    "//images.ernstings-family.com/teaser/flyout-damen_aktuelles_maritim/welten",
  title: "Maritime Looks",
  copyText: "Hier entdecken",
  imgAlt: "Maritime Modemomente",
  href: "https://www.ernstings-family.de/unsere-online-werbebroschuere",
  imgUrl2x:
    "//images.ernstings-family.com/teaser/flyout-damen_aktuelles_maritim/welten_2x",
};
