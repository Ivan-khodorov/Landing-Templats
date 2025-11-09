export const dom = {
  qs: <T extends Element = Element>(sel: string, scope: ParentNode = document) => scope.querySelector<T>(sel),
  qsa: (sel: string, scope: ParentNode = document) => Array.from(scope.querySelectorAll(sel))
};
