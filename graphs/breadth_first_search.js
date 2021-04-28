let graph = {};
graph["you"] = ["alice", "claire"];
graph["bob"] = ["anuj"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = ["marat"];
graph["peggy"] = ["bob"];
graph["thom"] = ["marat"];
graph["jonny"] = [];
graph["marat"] = [];

function pathBuilder(checked, end) {
  let path = [end];
  let temp = checked.get(end);
  while (temp) {
    path.unshift(temp);
    temp = checked.get(temp);
  }
  return `Shortes way is ${path.length - 1} steps:, \n ${path.join(" -> ")}`;
}

function breadth(graph, start, end) {
  let queue = [start];
  let checked = new Map(); //Store checked nodes, and their previous nodes
  while (queue.length > 0) {
    let temp = queue.shift();
    if (temp === end) {
      return pathBuilder(checked, temp);
    }
    if (graph[temp].length > 0) {
      graph[temp].forEach((i) => {
        if (!checked.has(i)) {
          queue.push(i);
          checked.set(i, temp);
        }
      });
    }
  }
  return "there is no such item";
}

console.log(breadth(graph, "you", "marat"));
