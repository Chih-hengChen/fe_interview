const list = [
  { id: 1, name: '部门A', parentId: 0 },
  { id: 2, name: '部门B', parentId: 0 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 1 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
  { id: 7, name: '部门G', parentId: 5 },
];

// 将列表转为树形结构
function listToTree(data) {
  // TODO: 实现列表转树
}

console.log(JSON.stringify(listToTree(list), null, 2));

// 期望输出:
// [
//   { "id": 1, "name": "部门A", "parentId": 0, "children": [...] },
//   { "id": 2, "name": "部门B", "parentId": 0, "children": [...] }
// ]
