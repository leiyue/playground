import _ from "lodash";
import { inject, reactive } from "vue";
import posts from "./posts.json";

export class State {
  public data: typeof posts = [];
  constructor() {
    this.data = posts;
  }
  getAuthors(): Record<string, string>[] {
    return _.uniq(
      this.data.map(({ author, avatar }) => ({
        author,
        avatar,
      })),
    );
  }
  getAuthorCounts(): Record<string, number> {
    return _.countBy(this.data, "author");
  }
  getCategories(): Record<string, string>[] {
    return _.uniq(
      this.data.map(({ category }) => ({
        category,
      })),
    );
  }
  getRecent(): Record<string, string> | undefined {
    return _.head(this.data);
  }
}

export const Post = Symbol("Post");
export const usePostState = (): State => inject(Post) as State;
export const createPostState = (): State => reactive(new State());
