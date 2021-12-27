export function flatMenuFn(list) {
  const flatMenu = {};
  function loop(list, nameList, subMenuKey) {
    list.forEach(item => {
      const { children, menuPath, menuName, _FREEZA_SUBMENU_KEY_UUID_ } = item;
      if (children && children.length > 0) {
        loop(children, [...nameList, menuName], [...subMenuKey, _FREEZA_SUBMENU_KEY_UUID_]);
      } else {
        flatMenu[menuPath] = {
          ...item,
          _FREEZA_META_: {
            menuFullName: [...nameList, menuName],
            subMenuFullKey: subMenuKey
          }
        };
      }
    });
  }
  loop(list, [], []);
  return flatMenu;
}

export function transformMenuList(list) {
  function loop(list) {
    list.forEach(item => {
      const { children } = item;
      if (children && children.length > 0) {
        item._FREEZA_SUBMENU_KEY_UUID_ = uuid();
        loop(children);
      }
    });
  }
  loop(list);
}

export function uuid() {
  var temp_url = URL.createObjectURL(new Blob());
  var uuid = temp_url.toString();
  URL.revokeObjectURL(temp_url);
  return uuid.substr(uuid.lastIndexOf('/') + 1);
}
