import { App } from "vue";
import { createPostState, Post } from "./post";
export { usePostState } from "./post";

const plugin = {
  install: (app: App<Element>): void => {
    app.provide(Post, createPostState());
  },
};

export default plugin;
