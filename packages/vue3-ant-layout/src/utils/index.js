export function flatMenuFn(list) {
  const flatMenu = {};
  function loop(list, nameList) {
    list.forEach(item => {
      const { children, menuPath, menuName } = item;
      if (children && children.length > 0) {
        loop(children, [...nameList, menuName]);
      } else {
        flatMenu[menuPath] = {
          ...item,
          _FREEZA_META_: {
            menuFullName: [...nameList, menuName]
          }
        };
      }
    });
  }
  loop(list, []);
  return flatMenu;
}
