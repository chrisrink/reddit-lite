import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { DEFAULTS, DEFAULT_SUBS } from "../../../constants";

import Header from "../Header";

const stories = storiesOf("Header", module);
stories.addDecorator(withKnobs);

stories.add("Header", () => (
  <Header
    subreddit={DEFAULTS.subreddit}
    subList={DEFAULT_SUBS}
    showNew={boolean("Show Message")}
    onShowNew={action("show new")}
    onSubredditChange={action("subreddit changed")}
    onSubredditSearch={action("subreddit search change")}
  />
));
