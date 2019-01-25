import React from "react";
import { storiesOf } from "@storybook/react";
import { DEFAULTS, DEFAULT_SUBS } from "../../../constants";

import Header from "../Header";
const stories = storiesOf("Header", module);

stories.add("Header", () => (
  <Header subreddit={DEFAULTS.subreddit} subList={DEFAULT_SUBS} />
));
