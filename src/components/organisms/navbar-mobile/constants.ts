interface RouteCommon {
  name: string;
  path: string;
}
interface child extends RouteCommon {}
interface NavRoute extends RouteCommon {
  child?: child[];
}

export const NAV_ROUTES: NavRoute[] = [
  {
    name: "_hello",
    path: "/",
  },
  {
    name: "_about-me",
    path: "/about/work-experience",
    child: [
      {
        name: "childsito",
        path: "/about/work-experience",
      }
    ]
  },
];
