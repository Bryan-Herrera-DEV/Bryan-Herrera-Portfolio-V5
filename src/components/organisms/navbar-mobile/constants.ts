interface child {
    name: string;
    path: string;
}
interface NavRoute {
    name: string;
    path: string;
    child?: child[];
}

export const NAV_ROUTES: NavRoute[] = [
  {
    name: "_hello",
    path: "/",
  },
  {
    name: "_about-me",
    path: "/about",
  },
];
