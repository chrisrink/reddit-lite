import React from "react";
import { storiesOf } from "@storybook/react";

import RedditLogo from "../RedditLogo";

const stories = storiesOf("Header", module);

stories.add("RedditLogo", () => <RedditLogo />);
