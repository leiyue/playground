import lookup from "@/.generated/lookup";
import records from "@/.generated/records.json";
import { replace, split } from "lodash";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

type contextDefinition = Record<string, unknown>;

const routes = [
  {
    path: "/",
    name: "root",
    component: () => import("@/Root"),
  },
];

const buildComponentsRoutes = (records: string[]): RouteRecordRaw[] => {
  const routes = records.map((record) => {
    const path = replace(record, ".tsx", "");
    const name = split(path, "/").join("");
    const component = () => Promise.resolve((lookup as contextDefinition)[name]);

    return { path, name, component };
  });
  return routes;
};

export default createRouter({
  history: createWebHistory(),
  routes: [...routes, ...buildComponentsRoutes(records)],
});
