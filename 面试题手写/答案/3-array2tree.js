const list = [
  { id: 1, name: '部门A', parentId: 0 },
  { id: 2, name: '部门B', parentId: 0 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 1 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
  { id: 7, name: '部门G', parentId: 5 },
];

function listToTree(data) {
  const map = {};
  const tree =[];

  // 先把数据映射进 map
  data.forEach(item => {
    map[item.id] = { ...item, children:[] };
  });

  // 再遍历一遍，寻找父节点
  data.forEach(item => {
    if (item.parentId === 0) {
      // 根节点
      tree.push(map[item.id]);
    } else {
      // 找到父节点，塞进 children
      if (map[item.parentId]) {
        map[item.parentId].children.push(map[item.id]);
      }
    }
  });

  return tree;
}

console.log(JSON.stringify(listToTree(list), null, 2));
