import { addDecorator, configure } from "@storybook/react";
import { withOptions } from "@storybook/addon-options";
import { themes } from "@storybook/components";

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
