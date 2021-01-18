import records from "@/.generated/records.json";
import _ from "lodash";
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

type MenuItemDefinition = {
  to: string;
  name: string;
};

type MenuItemsDefinition = MenuItemDefinition[];

type NestedMenuDefinition = {
  [key: string]: NestedMenuDefinition | MenuItemsDefinition;
};

export default defineComponent({
  setup() {
    const menu: NestedMenuDefinition = {};
    records
      .map((record) => ({
        keys: _.remove(_.split(record, "/").slice(0, -1)),
        to: _.replace(record, ".tsx", ""),
        name: record,
      }))
      .forEach(({ keys, to, name }) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        keys.reduce((parent: any, child: string, idx: number, arr: string[]) => {
          if (typeof parent[child] === "undefined") {
            parent[child] = {};
          }
          if (idx === arr.length - 1) {
            if (
              typeof parent[child] === "object" &&
              "children" in parent[child] &&
              Array.isArray(parent[child].children)
            )
              parent[child].children.push({ to, name });
            else Object.assign(parent[child], { children: [{ to, name }] });
          }
          return parent[child];
        }, menu);
      });

    const renderMenuItems = (items: MenuItemsDefinition) =>
      items.map(({ to, name }: { to: string; name: string }) => (
        <li>
          <RouterLink to={to}>{{ default: () => name }}</RouterLink>
        </li>
      ));

    const renderMenu = (parent: NestedMenuDefinition) => {
      return Object.keys(parent).map((child) => (
        <>
          {child === "children" ? (
            renderMenuItems(parent[child] as MenuItemsDefinition)
          ) : (
            <li>
              <h3>{child}</h3>
              <ul>{renderMenu(parent[child] as NestedMenuDefinition)}</ul>
            </li>
          )}
        </>
      ));
    };

    return () => (
      <div class="container my-24">
        <div class="prose">
          <h1>Components:</h1>
          <ul>{renderMenu(menu)}</ul>
        </div>
      </div>
    );
  },
});
