import { addDecorator, configure } from "@storybook/react";
import { withOptions } from "@storybook/addon-options";
import { themes } from "@storybook/components";
import "semantic-ui-css/semantic.min.css";

addDecorator(
  withOptions({
    name: "Reddit-Lite",
    theme: themes.dark
  })
);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context("..", true, /\.story\.js?$/));
}

configure(loadStories, module);
