export function flatMenuFn(list) {
  const flatMenu = {};
  const keepAliveList = [];
  function loop(list, nameList, subMenuKey) {
    list.forEach(item => {
      const { children, menuPath, menuName, menuMicroPath, _FREEZA_SUBMENU_KEY_UUID_, RouteRecordRaw = {} } = item;
      const { meta = {} } = RouteRecordRaw;
      const { keepAliveName } = meta;
      if (children && children.length > 0) {
        loop(children, [...nameList, menuName], [...subMenuKey, _FREEZA_SUBMENU_KEY_UUID_]);
      } else {
        if (!window.__POWERED_BY_QIANKUN__ && keepAliveName && !menuMicroPath) {
          keepAliveList.push(keepAliveName);
        }
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
  return { keepAliveList, flatMenu };
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
