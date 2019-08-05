/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/d3-selection/src/namespaces.js
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ var namespaces = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/namespace.js


/* harmony default export */ var namespace = (function(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/creator.js



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === xhtml && document.documentElement.namespaceURI === xhtml
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ var creator = (function(name) {
  var fullname = namespace(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selector.js
function none() {}

/* harmony default export */ var src_selector = (function(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/select.js



/* harmony default export */ var selection_select = (function(select) {
  if (typeof select !== "function") select = src_selector(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new Selection(subgroups, this._parents);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selectorAll.js
function empty() {
  return [];
}

/* harmony default export */ var selectorAll = (function(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/selectAll.js



/* harmony default export */ var selectAll = (function(select) {
  if (typeof select !== "function") select = selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new Selection(subgroups, parents);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/matcher.js
/* harmony default export */ var matcher = (function(selector) {
  return function() {
    return this.matches(selector);
  };
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/filter.js



/* harmony default export */ var filter = (function(match) {
  if (typeof match !== "function") match = matcher(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Selection(subgroups, this._parents);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/sparse.js
/* harmony default export */ var sparse = (function(update) {
  return new Array(update.length);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/enter.js



/* harmony default export */ var selection_enter = (function() {
  return new Selection(this._enter || this._groups.map(sparse), this._parents);
});

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};

// CONCATENATED MODULE: ./node_modules/d3-selection/src/constant.js
/* harmony default export */ var constant = (function(x) {
  return function() {
    return x;
  };
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/data.js




var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
      exit[i] = node;
    }
  }
}

/* harmony default export */ var selection_data = (function(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) { data[++j] = d; });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = constant(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/exit.js



/* harmony default export */ var selection_exit = (function() {
  return new Selection(this._exit || this._groups.map(sparse), this._parents);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/join.js
/* harmony default export */ var join = (function(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
  if (onupdate != null) update = onupdate(update);
  if (onexit == null) exit.remove(); else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/merge.js


/* harmony default export */ var selection_merge = (function(selection) {

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Selection(merges, this._parents);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/order.js
/* harmony default export */ var order = (function() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/sort.js


/* harmony default export */ var sort = (function(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new Selection(sortgroups, this._parents).order();
});

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/call.js
/* harmony default export */ var call = (function() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/nodes.js
/* harmony default export */ var nodes = (function() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/node.js
/* harmony default export */ var selection_node = (function() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/size.js
/* harmony default export */ var size = (function() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/empty.js
/* harmony default export */ var selection_empty = (function() {
  return !this.node();
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/each.js
/* harmony default export */ var each = (function(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/attr.js


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ var attr = (function(name, value) {
  var fullname = namespace(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/window.js
/* harmony default export */ var src_window = (function(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/style.js


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ var style = (function(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
});

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || src_window(node).getComputedStyle(node, null).getPropertyValue(name);
}

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/property.js
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ var property = (function(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/classed.js
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ var classed = (function(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/text.js
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ var selection_text = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/html.js
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ var html = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/raise.js
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ var selection_raise = (function() {
  return this.each(raise);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/lower.js
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ var selection_lower = (function() {
  return this.each(lower);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/append.js


/* harmony default export */ var append = (function(name) {
  var create = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/insert.js



function constantNull() {
  return null;
}

/* harmony default export */ var insert = (function(name, before) {
  var create = typeof name === "function" ? name : creator(name),
      select = before == null ? constantNull : typeof before === "function" ? before : src_selector(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/remove.js
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ var selection_remove = (function() {
  return this.each(remove);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/clone.js
function selection_cloneShallow() {
  return this.parentNode.insertBefore(this.cloneNode(false), this.nextSibling);
}

function selection_cloneDeep() {
  return this.parentNode.insertBefore(this.cloneNode(true), this.nextSibling);
}

/* harmony default export */ var clone = (function(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/datum.js
/* harmony default export */ var datum = (function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/on.js
var filterEvents = {};

var on_event = null;

if (typeof document !== "undefined") {
  var on_element = document.documentElement;
  if (!("onmouseenter" in on_element)) {
    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function(event) {
    var related = event.relatedTarget;
    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function(event1) {
    var event0 = on_event; // Events can be reentrant (e.g., focus).
    on_event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      on_event = event0;
    }
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var on = this.__on, o, listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ var on = (function(typename, value, capture) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
  return this;
});

function customEvent(event1, listener, that, args) {
  var event0 = on_event;
  event1.sourceEvent = on_event;
  on_event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    on_event = event0;
  }
}

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/dispatch.js


function dispatchEvent(node, type, params) {
  var window = src_window(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ var dispatch = (function(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/index.js
































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection_selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection_selection.prototype = {
  constructor: Selection,
  select: selection_select,
  selectAll: selectAll,
  filter: filter,
  data: selection_data,
  enter: selection_enter,
  exit: selection_exit,
  join: join,
  merge: selection_merge,
  order: order,
  sort: sort,
  call: call,
  nodes: nodes,
  node: selection_node,
  size: size,
  empty: selection_empty,
  each: each,
  attr: attr,
  style: style,
  property: property,
  classed: classed,
  text: selection_text,
  html: html,
  raise: selection_raise,
  lower: selection_lower,
  append: append,
  insert: insert,
  remove: selection_remove,
  clone: clone,
  datum: datum,
  on: on,
  dispatch: dispatch
};

/* harmony default export */ var src_selection = (selection_selection);

// CONCATENATED MODULE: ./node_modules/d3-selection/src/select.js


/* harmony default export */ var src_select = (function(selector) {
  return typeof selector === "string"
      ? new Selection([[document.querySelector(selector)]], [document.documentElement])
      : new Selection([[selector]], root);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/create.js



/* harmony default export */ var src_create = (function(name) {
  return src_select(creator(name).call(document.documentElement));
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/local.js
var nextId = 0;

function local() {
  return new Local;
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id = this._;
    while (!(id in node)) if (!(node = node.parentNode)) return;
    return node[id];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};

// CONCATENATED MODULE: ./node_modules/d3-selection/src/sourceEvent.js


/* harmony default export */ var sourceEvent = (function() {
  var current = on_event, source;
  while (source = current.sourceEvent) current = source;
  return current;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/point.js
/* harmony default export */ var point = (function(node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/mouse.js



/* harmony default export */ var mouse = (function(node) {
  var event = sourceEvent();
  if (event.changedTouches) event = event.changedTouches[0];
  return point(node, event);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selectAll.js


/* harmony default export */ var src_selectAll = (function(selector) {
  return typeof selector === "string"
      ? new Selection([document.querySelectorAll(selector)], [document.documentElement])
      : new Selection([selector == null ? [] : selector], root);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/touch.js



/* harmony default export */ var src_touch = (function(node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = sourceEvent().changedTouches;

  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return point(node, touch);
    }
  }

  return null;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/touches.js



/* harmony default export */ var src_touches = (function(node, touches) {
  if (touches == null) touches = sourceEvent().touches;

  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = point(node, touches[i]);
  }

  return points;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/index.js
/* concated harmony reexport create */__webpack_require__.d(__webpack_exports__, "create", function() { return src_create; });
/* concated harmony reexport creator */__webpack_require__.d(__webpack_exports__, "creator", function() { return creator; });
/* concated harmony reexport local */__webpack_require__.d(__webpack_exports__, "local", function() { return local; });
/* concated harmony reexport matcher */__webpack_require__.d(__webpack_exports__, "matcher", function() { return matcher; });
/* concated harmony reexport mouse */__webpack_require__.d(__webpack_exports__, "mouse", function() { return mouse; });
/* concated harmony reexport namespace */__webpack_require__.d(__webpack_exports__, "namespace", function() { return namespace; });
/* concated harmony reexport namespaces */__webpack_require__.d(__webpack_exports__, "namespaces", function() { return namespaces; });
/* concated harmony reexport clientPoint */__webpack_require__.d(__webpack_exports__, "clientPoint", function() { return point; });
/* concated harmony reexport select */__webpack_require__.d(__webpack_exports__, "select", function() { return src_select; });
/* concated harmony reexport selectAll */__webpack_require__.d(__webpack_exports__, "selectAll", function() { return src_selectAll; });
/* concated harmony reexport selection */__webpack_require__.d(__webpack_exports__, "selection", function() { return src_selection; });
/* concated harmony reexport selector */__webpack_require__.d(__webpack_exports__, "selector", function() { return src_selector; });
/* concated harmony reexport selectorAll */__webpack_require__.d(__webpack_exports__, "selectorAll", function() { return selectorAll; });
/* concated harmony reexport style */__webpack_require__.d(__webpack_exports__, "style", function() { return styleValue; });
/* concated harmony reexport touch */__webpack_require__.d(__webpack_exports__, "touch", function() { return src_touch; });
/* concated harmony reexport touches */__webpack_require__.d(__webpack_exports__, "touches", function() { return src_touches; });
/* concated harmony reexport window */__webpack_require__.d(__webpack_exports__, "window", function() { return src_window; });
/* concated harmony reexport event */__webpack_require__.d(__webpack_exports__, "event", function() { return on_event; });
/* concated harmony reexport customEvent */__webpack_require__.d(__webpack_exports__, "customEvent", function() { return customEvent; });




















/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/d3-time/src/interval.js
var t0 = new Date,
    t1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = new Date(+date)), date;
  }

  interval.floor = interval;

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}

// CONCATENATED MODULE: ./node_modules/d3-time/src/millisecond.js


var millisecond = newInterval(function() {
  // noop
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return newInterval(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};

/* harmony default export */ var src_millisecond = (millisecond);
var milliseconds = millisecond.range;

// CONCATENATED MODULE: ./node_modules/d3-time/src/duration.js
var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;

// CONCATENATED MODULE: ./node_modules/d3-time/src/second.js



var second = newInterval(function(date) {
  date.setTime(date - date.getMilliseconds());
}, function(date, step) {
  date.setTime(+date + step * durationSecond);
}, function(start, end) {
  return (end - start) / durationSecond;
}, function(date) {
  return date.getUTCSeconds();
});

/* harmony default export */ var src_second = (second);
var seconds = second.range;

// CONCATENATED MODULE: ./node_modules/d3-time/src/minute.js



var minute = newInterval(function(date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond);
}, function(date, step) {
  date.setTime(+date + step * durationMinute);
}, function(start, end) {
  return (end - start) / durationMinute;
}, function(date) {
  return date.getMinutes();
});

/* harmony default export */ var src_minute = (minute);
var minutes = minute.range;

// CONCATENATED MODULE: ./node_modules/d3-time/src/hour.js



var hour = newInterval(function(date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond - date.getMinutes() * durationMinute);
}, function(date, step) {
  date.setTime(+date + step * durationHour);
}, function(start, end) {
  return (end - start) / durationHour;
}, function(date) {
  return date.getHours();
});

/* harmony default export */ var src_hour = (hour);
var hours = hour.range;

// CONCATENATED MODULE: ./node_modules/d3-time/src/day.js



var day = newInterval(function(date) {
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setDate(date.getDate() + step);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay;
}, function(date) {
  return date.getDate() - 1;
});

/* harmony default export */ var src_day = (day);
var days = day.range;

// CONCATENATED MODULE: ./node_modules/d3-time/src/week.js



function weekday(i) {
  return newInterval(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;

// CONCATENATED MODULE: ./node_modules/d3-time/src/month.js


var month = newInterval(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});

/* harmony default export */ var src_month = (month);
var months = month.range;

// CONCATENATED MODULE: ./node_modules/d3-time/src/year.js


var year = newInterval(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

/* harmony default export */ var src_year = (year);
var years = year.range;

// CONCATENATED MODULE: ./node_modules/d3-time/src/utcMinute.js



var utcMinute = newInterval(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * durationMinute);
}, function(start, end) {
  return (end - start) / durationMinute;
}, function(date) {
  return date.getUTCMinutes();
});

/* harmony default export */ var src_utcMinute = (utcMinute);
var utcMinutes = utcMinute.range;

// CONCATENATED MODULE: ./node_modules/d3-time/src/utcHour.js



var utcHour = newInterval(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * durationHour);
}, function(start, end) {
  return (end - start) / durationHour;
}, function(date) {
  return date.getUTCHours();
});

/* harmony default export */ var src_utcHour = (utcHour);
var utcHours = utcHour.range;

// CONCATENATED MODULE: ./node_modules/d3-time/src/utcDay.js



var utcDay = newInterval(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / durationDay;
}, function(date) {
  return date.getUTCDate() - 1;
});

/* harmony default export */ var src_utcDay = (utcDay);
var utcDays = utcDay.range;

// CONCATENATED MODULE: ./node_modules/d3-time/src/utcWeek.js



function utcWeekday(i) {
  return newInterval(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / durationWeek;
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;

// CONCATENATED MODULE: ./node_modules/d3-time/src/utcMonth.js


var utcMonth = newInterval(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});

/* harmony default export */ var src_utcMonth = (utcMonth);
var utcMonths = utcMonth.range;

// CONCATENATED MODULE: ./node_modules/d3-time/src/utcYear.js


var utcYear = newInterval(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

/* harmony default export */ var src_utcYear = (utcYear);
var utcYears = utcYear.range;

// CONCATENATED MODULE: ./node_modules/d3-time/src/index.js
/* concated harmony reexport timeInterval */__webpack_require__.d(__webpack_exports__, "timeInterval", function() { return newInterval; });
/* concated harmony reexport timeMillisecond */__webpack_require__.d(__webpack_exports__, "timeMillisecond", function() { return src_millisecond; });
/* concated harmony reexport timeMilliseconds */__webpack_require__.d(__webpack_exports__, "timeMilliseconds", function() { return milliseconds; });
/* concated harmony reexport utcMillisecond */__webpack_require__.d(__webpack_exports__, "utcMillisecond", function() { return src_millisecond; });
/* concated harmony reexport utcMilliseconds */__webpack_require__.d(__webpack_exports__, "utcMilliseconds", function() { return milliseconds; });
/* concated harmony reexport timeSecond */__webpack_require__.d(__webpack_exports__, "timeSecond", function() { return src_second; });
/* concated harmony reexport timeSeconds */__webpack_require__.d(__webpack_exports__, "timeSeconds", function() { return seconds; });
/* concated harmony reexport utcSecond */__webpack_require__.d(__webpack_exports__, "utcSecond", function() { return src_second; });
/* concated harmony reexport utcSeconds */__webpack_require__.d(__webpack_exports__, "utcSeconds", function() { return seconds; });
/* concated harmony reexport timeMinute */__webpack_require__.d(__webpack_exports__, "timeMinute", function() { return src_minute; });
/* concated harmony reexport timeMinutes */__webpack_require__.d(__webpack_exports__, "timeMinutes", function() { return minutes; });
/* concated harmony reexport timeHour */__webpack_require__.d(__webpack_exports__, "timeHour", function() { return src_hour; });
/* concated harmony reexport timeHours */__webpack_require__.d(__webpack_exports__, "timeHours", function() { return hours; });
/* concated harmony reexport timeDay */__webpack_require__.d(__webpack_exports__, "timeDay", function() { return src_day; });
/* concated harmony reexport timeDays */__webpack_require__.d(__webpack_exports__, "timeDays", function() { return days; });
/* concated harmony reexport timeWeek */__webpack_require__.d(__webpack_exports__, "timeWeek", function() { return sunday; });
/* concated harmony reexport timeWeeks */__webpack_require__.d(__webpack_exports__, "timeWeeks", function() { return sundays; });
/* concated harmony reexport timeSunday */__webpack_require__.d(__webpack_exports__, "timeSunday", function() { return sunday; });
/* concated harmony reexport timeSundays */__webpack_require__.d(__webpack_exports__, "timeSundays", function() { return sundays; });
/* concated harmony reexport timeMonday */__webpack_require__.d(__webpack_exports__, "timeMonday", function() { return monday; });
/* concated harmony reexport timeMondays */__webpack_require__.d(__webpack_exports__, "timeMondays", function() { return mondays; });
/* concated harmony reexport timeTuesday */__webpack_require__.d(__webpack_exports__, "timeTuesday", function() { return tuesday; });
/* concated harmony reexport timeTuesdays */__webpack_require__.d(__webpack_exports__, "timeTuesdays", function() { return tuesdays; });
/* concated harmony reexport timeWednesday */__webpack_require__.d(__webpack_exports__, "timeWednesday", function() { return wednesday; });
/* concated harmony reexport timeWednesdays */__webpack_require__.d(__webpack_exports__, "timeWednesdays", function() { return wednesdays; });
/* concated harmony reexport timeThursday */__webpack_require__.d(__webpack_exports__, "timeThursday", function() { return thursday; });
/* concated harmony reexport timeThursdays */__webpack_require__.d(__webpack_exports__, "timeThursdays", function() { return thursdays; });
/* concated harmony reexport timeFriday */__webpack_require__.d(__webpack_exports__, "timeFriday", function() { return friday; });
/* concated harmony reexport timeFridays */__webpack_require__.d(__webpack_exports__, "timeFridays", function() { return fridays; });
/* concated harmony reexport timeSaturday */__webpack_require__.d(__webpack_exports__, "timeSaturday", function() { return saturday; });
/* concated harmony reexport timeSaturdays */__webpack_require__.d(__webpack_exports__, "timeSaturdays", function() { return saturdays; });
/* concated harmony reexport timeMonth */__webpack_require__.d(__webpack_exports__, "timeMonth", function() { return src_month; });
/* concated harmony reexport timeMonths */__webpack_require__.d(__webpack_exports__, "timeMonths", function() { return months; });
/* concated harmony reexport timeYear */__webpack_require__.d(__webpack_exports__, "timeYear", function() { return src_year; });
/* concated harmony reexport timeYears */__webpack_require__.d(__webpack_exports__, "timeYears", function() { return years; });
/* concated harmony reexport utcMinute */__webpack_require__.d(__webpack_exports__, "utcMinute", function() { return src_utcMinute; });
/* concated harmony reexport utcMinutes */__webpack_require__.d(__webpack_exports__, "utcMinutes", function() { return utcMinutes; });
/* concated harmony reexport utcHour */__webpack_require__.d(__webpack_exports__, "utcHour", function() { return src_utcHour; });
/* concated harmony reexport utcHours */__webpack_require__.d(__webpack_exports__, "utcHours", function() { return utcHours; });
/* concated harmony reexport utcDay */__webpack_require__.d(__webpack_exports__, "utcDay", function() { return src_utcDay; });
/* concated harmony reexport utcDays */__webpack_require__.d(__webpack_exports__, "utcDays", function() { return utcDays; });
/* concated harmony reexport utcWeek */__webpack_require__.d(__webpack_exports__, "utcWeek", function() { return utcSunday; });
/* concated harmony reexport utcWeeks */__webpack_require__.d(__webpack_exports__, "utcWeeks", function() { return utcSundays; });
/* concated harmony reexport utcSunday */__webpack_require__.d(__webpack_exports__, "utcSunday", function() { return utcSunday; });
/* concated harmony reexport utcSundays */__webpack_require__.d(__webpack_exports__, "utcSundays", function() { return utcSundays; });
/* concated harmony reexport utcMonday */__webpack_require__.d(__webpack_exports__, "utcMonday", function() { return utcMonday; });
/* concated harmony reexport utcMondays */__webpack_require__.d(__webpack_exports__, "utcMondays", function() { return utcMondays; });
/* concated harmony reexport utcTuesday */__webpack_require__.d(__webpack_exports__, "utcTuesday", function() { return utcTuesday; });
/* concated harmony reexport utcTuesdays */__webpack_require__.d(__webpack_exports__, "utcTuesdays", function() { return utcTuesdays; });
/* concated harmony reexport utcWednesday */__webpack_require__.d(__webpack_exports__, "utcWednesday", function() { return utcWednesday; });
/* concated harmony reexport utcWednesdays */__webpack_require__.d(__webpack_exports__, "utcWednesdays", function() { return utcWednesdays; });
/* concated harmony reexport utcThursday */__webpack_require__.d(__webpack_exports__, "utcThursday", function() { return utcThursday; });
/* concated harmony reexport utcThursdays */__webpack_require__.d(__webpack_exports__, "utcThursdays", function() { return utcThursdays; });
/* concated harmony reexport utcFriday */__webpack_require__.d(__webpack_exports__, "utcFriday", function() { return utcFriday; });
/* concated harmony reexport utcFridays */__webpack_require__.d(__webpack_exports__, "utcFridays", function() { return utcFridays; });
/* concated harmony reexport utcSaturday */__webpack_require__.d(__webpack_exports__, "utcSaturday", function() { return utcSaturday; });
/* concated harmony reexport utcSaturdays */__webpack_require__.d(__webpack_exports__, "utcSaturdays", function() { return utcSaturdays; });
/* concated harmony reexport utcMonth */__webpack_require__.d(__webpack_exports__, "utcMonth", function() { return src_utcMonth; });
/* concated harmony reexport utcMonths */__webpack_require__.d(__webpack_exports__, "utcMonths", function() { return utcMonths; });
/* concated harmony reexport utcYear */__webpack_require__.d(__webpack_exports__, "utcYear", function() { return src_utcYear; });
/* concated harmony reexport utcYears */__webpack_require__.d(__webpack_exports__, "utcYears", function() { return utcYears; });































/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/d3-color/src/define.js
/* harmony default export */ var define = (function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

// CONCATENATED MODULE: ./node_modules/d3-color/src/color.js


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex3 = /^#([0-9a-f]{3})$/,
    reHex6 = /^#([0-9a-f]{6})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

define(Color, color, {
  copy: function(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

define(Rgb, rgb, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}

function rgb_formatRgb() {
  var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(")
      + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.b) || 0))
      + (a === 1 ? ")" : ", " + a + ")");
}

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hsl, hsl, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(")
        + (this.h || 0) + ", "
        + (this.s || 0) * 100 + "%, "
        + (this.l || 0) * 100 + "%"
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}

// CONCATENATED MODULE: ./node_modules/d3-color/src/math.js
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;

// CONCATENATED MODULE: ./node_modules/d3-color/src/lab.js




// https://observablehq.com/@mbostock/lab-and-rgb
var K = 18,
    Xn = 0.96422,
    Yn = 1,
    Zn = 0.82521,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) return hcl2lab(o);
  if (!(o instanceof Rgb)) o = rgbConvert(o);
  var r = rgb2lrgb(o.r),
      g = rgb2lrgb(o.g),
      b = rgb2lrgb(o.b),
      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
  if (r === g && g === b) x = z = y; else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function gray(l, opacity) {
  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

define(Lab, lab, extend(Color, {
  brighter: function(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new Rgb(
      lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),
      lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),
      lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * rad2deg;
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function lch(l, c, h, opacity) {
  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

function hcl2lab(o) {
  if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
  var h = o.h * deg2rad;
  return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
}

define(Hcl, hcl, extend(Color, {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return hcl2lab(this).rgb();
  }
}));

// CONCATENATED MODULE: ./node_modules/d3-color/src/cubehelix.js




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Rgb)) o = rgbConvert(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * rad2deg - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Cubehelix, cubehelix, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * deg2rad,
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new Rgb(
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));

// CONCATENATED MODULE: ./node_modules/d3-color/src/index.js
/* concated harmony reexport color */__webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* concated harmony reexport rgb */__webpack_require__.d(__webpack_exports__, "rgb", function() { return rgb; });
/* concated harmony reexport hsl */__webpack_require__.d(__webpack_exports__, "hsl", function() { return hsl; });
/* concated harmony reexport lab */__webpack_require__.d(__webpack_exports__, "lab", function() { return lab; });
/* concated harmony reexport hcl */__webpack_require__.d(__webpack_exports__, "hcl", function() { return hcl; });
/* concated harmony reexport lch */__webpack_require__.d(__webpack_exports__, "lch", function() { return lch; });
/* concated harmony reexport gray */__webpack_require__.d(__webpack_exports__, "gray", function() { return gray; });
/* concated harmony reexport cubehelix */__webpack_require__.d(__webpack_exports__, "cubehelix", function() { return cubehelix; });





/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/d3-color/src/index.js + 5 modules
var src = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/basis.js
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ var src_basis = (function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/basisClosed.js


/* harmony default export */ var basisClosed = (function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/constant.js
/* harmony default export */ var constant = (function(x) {
  return function() {
    return x;
  };
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/color.js


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function color_hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant(isNaN(a) ? b : a);
}

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/rgb.js





/* harmony default export */ var src_rgb = ((function rgbGamma(y) {
  var color = gamma(y);

  function rgb(start, end) {
    var r = color((start = Object(src["rgb"])(start)).r, (end = Object(src["rgb"])(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = Object(src["rgb"])(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(src_basis);
var rgbBasisClosed = rgbSpline(basisClosed);

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/array.js


/* harmony default export */ var array = (function(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = src_value(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/date.js
/* harmony default export */ var date = (function(a, b) {
  var d = new Date;
  return a = +a, b -= a, function(t) {
    return d.setTime(a + b * t), d;
  };
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/number.js
/* harmony default export */ var number = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/object.js


/* harmony default export */ var object = (function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = src_value(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/string.js


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ var string = (function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: number(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/value.js









/* harmony default export */ var src_value = (function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant(b)
      : (t === "number" ? number
      : t === "string" ? ((c = Object(src["color"])(b)) ? (b = c, src_rgb) : string)
      : b instanceof src["color"] ? src_rgb
      : b instanceof Date ? date
      : Array.isArray(b) ? array
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
      : number)(a, b);
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/discrete.js
/* harmony default export */ var discrete = (function(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/hue.js


/* harmony default export */ var src_hue = (function(a, b) {
  var i = color_hue(+a, +b);
  return function(t) {
    var x = i(t);
    return x - 360 * Math.floor(x / 360);
  };
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/round.js
/* harmony default export */ var round = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return Math.round(a + b * t);
  };
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/transform/decompose.js
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ var decompose = (function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/transform/parse.js


var cssNode,
    cssRoot,
    cssView,
    svgNode;

function parseCss(value) {
  if (value === "none") return identity;
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return decompose(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
  value = value.matrix;
  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
}

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/transform/index.js



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: number(xa, xb)}, {i: i - 2, x: number(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: number(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: number(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: number(xa, xb)}, {i: i - 2, x: number(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/zoom.js
var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]
/* harmony default export */ var zoom = (function(p0, p1) {
  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [
        ux0 + t * dx,
        uy0 + t * dy,
        w0 * Math.exp(rho * t * S)
      ];
    }
  }

  // General case.
  else {
    var d1 = Math.sqrt(d2),
        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S,
          coshr0 = cosh(r0),
          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [
        ux0 + u * dx,
        uy0 + u * dy,
        w0 * coshr0 / cosh(rho * s + r0)
      ];
    }
  }

  i.duration = S * 1000;

  return i;
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/hsl.js



function hsl(hue) {
  return function(start, end) {
    var h = hue((start = Object(src["hsl"])(start)).h, (end = Object(src["hsl"])(end)).h),
        s = nogamma(start.s, end.s),
        l = nogamma(start.l, end.l),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ var src_hsl = (hsl(color_hue));
var hslLong = hsl(nogamma);

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/lab.js



function lab(start, end) {
  var l = nogamma((start = Object(src["lab"])(start)).l, (end = Object(src["lab"])(end)).l),
      a = nogamma(start.a, end.a),
      b = nogamma(start.b, end.b),
      opacity = nogamma(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/hcl.js



function hcl(hue) {
  return function(start, end) {
    var h = hue((start = Object(src["hcl"])(start)).h, (end = Object(src["hcl"])(end)).h),
        c = nogamma(start.c, end.c),
        l = nogamma(start.l, end.l),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ var src_hcl = (hcl(color_hue));
var hclLong = hcl(nogamma);

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/cubehelix.js



function cubehelix_cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = Object(src["cubehelix"])(start)).h, (end = Object(src["cubehelix"])(end)).h),
          s = nogamma(start.s, end.s),
          l = nogamma(start.l, end.l),
          opacity = nogamma(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

/* harmony default export */ var src_cubehelix = (cubehelix_cubehelix(color_hue));
var cubehelixLong = cubehelix_cubehelix(nogamma);

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/piecewise.js
function piecewise(interpolate, values) {
  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate(v, v = values[++i]);
  return function(t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/quantize.js
/* harmony default export */ var quantize = (function(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/index.js
/* concated harmony reexport interpolate */__webpack_require__.d(__webpack_exports__, "interpolate", function() { return src_value; });
/* concated harmony reexport interpolateArray */__webpack_require__.d(__webpack_exports__, "interpolateArray", function() { return array; });
/* concated harmony reexport interpolateBasis */__webpack_require__.d(__webpack_exports__, "interpolateBasis", function() { return src_basis; });
/* concated harmony reexport interpolateBasisClosed */__webpack_require__.d(__webpack_exports__, "interpolateBasisClosed", function() { return basisClosed; });
/* concated harmony reexport interpolateDate */__webpack_require__.d(__webpack_exports__, "interpolateDate", function() { return date; });
/* concated harmony reexport interpolateDiscrete */__webpack_require__.d(__webpack_exports__, "interpolateDiscrete", function() { return discrete; });
/* concated harmony reexport interpolateHue */__webpack_require__.d(__webpack_exports__, "interpolateHue", function() { return src_hue; });
/* concated harmony reexport interpolateNumber */__webpack_require__.d(__webpack_exports__, "interpolateNumber", function() { return number; });
/* concated harmony reexport interpolateObject */__webpack_require__.d(__webpack_exports__, "interpolateObject", function() { return object; });
/* concated harmony reexport interpolateRound */__webpack_require__.d(__webpack_exports__, "interpolateRound", function() { return round; });
/* concated harmony reexport interpolateString */__webpack_require__.d(__webpack_exports__, "interpolateString", function() { return string; });
/* concated harmony reexport interpolateTransformCss */__webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return interpolateTransformCss; });
/* concated harmony reexport interpolateTransformSvg */__webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return interpolateTransformSvg; });
/* concated harmony reexport interpolateZoom */__webpack_require__.d(__webpack_exports__, "interpolateZoom", function() { return zoom; });
/* concated harmony reexport interpolateRgb */__webpack_require__.d(__webpack_exports__, "interpolateRgb", function() { return src_rgb; });
/* concated harmony reexport interpolateRgbBasis */__webpack_require__.d(__webpack_exports__, "interpolateRgbBasis", function() { return rgbBasis; });
/* concated harmony reexport interpolateRgbBasisClosed */__webpack_require__.d(__webpack_exports__, "interpolateRgbBasisClosed", function() { return rgbBasisClosed; });
/* concated harmony reexport interpolateHsl */__webpack_require__.d(__webpack_exports__, "interpolateHsl", function() { return src_hsl; });
/* concated harmony reexport interpolateHslLong */__webpack_require__.d(__webpack_exports__, "interpolateHslLong", function() { return hslLong; });
/* concated harmony reexport interpolateLab */__webpack_require__.d(__webpack_exports__, "interpolateLab", function() { return lab; });
/* concated harmony reexport interpolateHcl */__webpack_require__.d(__webpack_exports__, "interpolateHcl", function() { return src_hcl; });
/* concated harmony reexport interpolateHclLong */__webpack_require__.d(__webpack_exports__, "interpolateHclLong", function() { return hclLong; });
/* concated harmony reexport interpolateCubehelix */__webpack_require__.d(__webpack_exports__, "interpolateCubehelix", function() { return src_cubehelix; });
/* concated harmony reexport interpolateCubehelixLong */__webpack_require__.d(__webpack_exports__, "interpolateCubehelixLong", function() { return cubehelixLong; });
/* concated harmony reexport piecewise */__webpack_require__.d(__webpack_exports__, "piecewise", function() { return piecewise; });
/* concated harmony reexport quantize */__webpack_require__.d(__webpack_exports__, "quantize", function() { return quantize; });






















/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/d3-timer/src/timer.js
var timer_frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++timer_frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --timer_frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  timer_frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    timer_frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (timer_frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    timer_frame = 1, setFrame(wake);
  }
}

// CONCATENATED MODULE: ./node_modules/d3-timer/src/timeout.js


/* harmony default export */ var src_timeout = (function(callback, delay, time) {
  var t = new Timer;
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
});

// CONCATENATED MODULE: ./node_modules/d3-timer/src/interval.js


/* harmony default export */ var src_interval = (function(callback, delay, time) {
  var t = new Timer, total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? now() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
});

// CONCATENATED MODULE: ./node_modules/d3-timer/src/index.js
/* concated harmony reexport now */__webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* concated harmony reexport timer */__webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
/* concated harmony reexport timerFlush */__webpack_require__.d(__webpack_exports__, "timerFlush", function() { return timerFlush; });
/* concated harmony reexport timeout */__webpack_require__.d(__webpack_exports__, "timeout", function() { return src_timeout; });
/* concated harmony reexport interval */__webpack_require__.d(__webpack_exports__, "interval", function() { return src_interval; });







/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/d3-dispatch/src/dispatch.js
var noop = {value: function() {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ var src_dispatch = (dispatch);

// CONCATENATED MODULE: ./node_modules/d3-dispatch/src/index.js
/* concated harmony reexport dispatch */__webpack_require__.d(__webpack_exports__, "dispatch", function() { return src_dispatch; });



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/d3-ease/src/linear.js
function linear(t) {
  return +t;
}

// CONCATENATED MODULE: ./node_modules/d3-ease/src/quad.js
function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}

// CONCATENATED MODULE: ./node_modules/d3-ease/src/cubic.js
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

// CONCATENATED MODULE: ./node_modules/d3-ease/src/poly.js
var exponent = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);

// CONCATENATED MODULE: ./node_modules/d3-ease/src/sin.js
var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}

// CONCATENATED MODULE: ./node_modules/d3-ease/src/exp.js
function expIn(t) {
  return Math.pow(2, 10 * t - 10);
}

function expOut(t) {
  return 1 - Math.pow(2, -10 * t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}

// CONCATENATED MODULE: ./node_modules/d3-ease/src/circle.js
function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}

// CONCATENATED MODULE: ./node_modules/d3-ease/src/bounce.js
var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}

// CONCATENATED MODULE: ./node_modules/d3-ease/src/back.js
var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return t * t * ((s + 1) * t - s);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);

// CONCATENATED MODULE: ./node_modules/d3-ease/src/elastic.js
var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
        : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);

// CONCATENATED MODULE: ./node_modules/d3-ease/src/index.js
/* concated harmony reexport easeLinear */__webpack_require__.d(__webpack_exports__, "easeLinear", function() { return linear; });
/* concated harmony reexport easeQuad */__webpack_require__.d(__webpack_exports__, "easeQuad", function() { return quadInOut; });
/* concated harmony reexport easeQuadIn */__webpack_require__.d(__webpack_exports__, "easeQuadIn", function() { return quadIn; });
/* concated harmony reexport easeQuadOut */__webpack_require__.d(__webpack_exports__, "easeQuadOut", function() { return quadOut; });
/* concated harmony reexport easeQuadInOut */__webpack_require__.d(__webpack_exports__, "easeQuadInOut", function() { return quadInOut; });
/* concated harmony reexport easeCubic */__webpack_require__.d(__webpack_exports__, "easeCubic", function() { return cubicInOut; });
/* concated harmony reexport easeCubicIn */__webpack_require__.d(__webpack_exports__, "easeCubicIn", function() { return cubicIn; });
/* concated harmony reexport easeCubicOut */__webpack_require__.d(__webpack_exports__, "easeCubicOut", function() { return cubicOut; });
/* concated harmony reexport easeCubicInOut */__webpack_require__.d(__webpack_exports__, "easeCubicInOut", function() { return cubicInOut; });
/* concated harmony reexport easePoly */__webpack_require__.d(__webpack_exports__, "easePoly", function() { return polyInOut; });
/* concated harmony reexport easePolyIn */__webpack_require__.d(__webpack_exports__, "easePolyIn", function() { return polyIn; });
/* concated harmony reexport easePolyOut */__webpack_require__.d(__webpack_exports__, "easePolyOut", function() { return polyOut; });
/* concated harmony reexport easePolyInOut */__webpack_require__.d(__webpack_exports__, "easePolyInOut", function() { return polyInOut; });
/* concated harmony reexport easeSin */__webpack_require__.d(__webpack_exports__, "easeSin", function() { return sinInOut; });
/* concated harmony reexport easeSinIn */__webpack_require__.d(__webpack_exports__, "easeSinIn", function() { return sinIn; });
/* concated harmony reexport easeSinOut */__webpack_require__.d(__webpack_exports__, "easeSinOut", function() { return sinOut; });
/* concated harmony reexport easeSinInOut */__webpack_require__.d(__webpack_exports__, "easeSinInOut", function() { return sinInOut; });
/* concated harmony reexport easeExp */__webpack_require__.d(__webpack_exports__, "easeExp", function() { return expInOut; });
/* concated harmony reexport easeExpIn */__webpack_require__.d(__webpack_exports__, "easeExpIn", function() { return expIn; });
/* concated harmony reexport easeExpOut */__webpack_require__.d(__webpack_exports__, "easeExpOut", function() { return expOut; });
/* concated harmony reexport easeExpInOut */__webpack_require__.d(__webpack_exports__, "easeExpInOut", function() { return expInOut; });
/* concated harmony reexport easeCircle */__webpack_require__.d(__webpack_exports__, "easeCircle", function() { return circleInOut; });
/* concated harmony reexport easeCircleIn */__webpack_require__.d(__webpack_exports__, "easeCircleIn", function() { return circleIn; });
/* concated harmony reexport easeCircleOut */__webpack_require__.d(__webpack_exports__, "easeCircleOut", function() { return circleOut; });
/* concated harmony reexport easeCircleInOut */__webpack_require__.d(__webpack_exports__, "easeCircleInOut", function() { return circleInOut; });
/* concated harmony reexport easeBounce */__webpack_require__.d(__webpack_exports__, "easeBounce", function() { return bounceOut; });
/* concated harmony reexport easeBounceIn */__webpack_require__.d(__webpack_exports__, "easeBounceIn", function() { return bounceIn; });
/* concated harmony reexport easeBounceOut */__webpack_require__.d(__webpack_exports__, "easeBounceOut", function() { return bounceOut; });
/* concated harmony reexport easeBounceInOut */__webpack_require__.d(__webpack_exports__, "easeBounceInOut", function() { return bounceInOut; });
/* concated harmony reexport easeBack */__webpack_require__.d(__webpack_exports__, "easeBack", function() { return backInOut; });
/* concated harmony reexport easeBackIn */__webpack_require__.d(__webpack_exports__, "easeBackIn", function() { return backIn; });
/* concated harmony reexport easeBackOut */__webpack_require__.d(__webpack_exports__, "easeBackOut", function() { return backOut; });
/* concated harmony reexport easeBackInOut */__webpack_require__.d(__webpack_exports__, "easeBackInOut", function() { return backInOut; });
/* concated harmony reexport easeElastic */__webpack_require__.d(__webpack_exports__, "easeElastic", function() { return elasticOut; });
/* concated harmony reexport easeElasticIn */__webpack_require__.d(__webpack_exports__, "easeElasticIn", function() { return elasticIn; });
/* concated harmony reexport easeElasticOut */__webpack_require__.d(__webpack_exports__, "easeElasticOut", function() { return elasticOut; });
/* concated harmony reexport easeElasticInOut */__webpack_require__.d(__webpack_exports__, "easeElasticInOut", function() { return elasticInOut; });





















/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return require(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
"use strict";var objectAssign=require("object-assign");function compare(t,e){if(t===e)return 0;for(var r=t.length,i=e.length,n=0,a=Math.min(r,i);n<a;++n)if(t[n]!==e[n]){r=t[n],i=e[n];break}return r<i?-1:i<r?1:0}function isBuffer(t){return global.Buffer&&"function"==typeof global.Buffer.isBuffer?global.Buffer.isBuffer(t):!(null==t||!t._isBuffer)}var util=require("util/"),hasOwn=Object.prototype.hasOwnProperty,pSlice=Array.prototype.slice,functionsHaveNames="foo"===function(){}.name;function pToString(t){return Object.prototype.toString.call(t)}function isView(t){return!isBuffer(t)&&("function"==typeof global.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):!!t&&(t instanceof DataView||!!(t.buffer&&t.buffer instanceof ArrayBuffer))))}var assert=module.exports=ok,regex=/\s*function\s+([^\(\s]*)\s*/;function getName(t){if(util.isFunction(t)){if(functionsHaveNames)return t.name;var e=t.toString().match(regex);return e&&e[1]}}function truncate(t,e){return"string"==typeof t?t.length<e?t:t.slice(0,e):t}function inspect(t){if(functionsHaveNames||!util.isFunction(t))return util.inspect(t);var e=getName(t);return"[Function"+(e?": "+e:"")+"]"}function getMessage(t){return truncate(inspect(t.actual),128)+" "+t.operator+" "+truncate(inspect(t.expected),128)}function fail(t,e,r,i,n){throw new assert.AssertionError({message:r,actual:t,expected:e,operator:i,stackStartFunction:n})}function ok(t,e){t||fail(t,!0,e,"==",assert.ok)}function _deepEqual(t,e,r,i){if(t===e)return!0;if(isBuffer(t)&&isBuffer(e))return 0===compare(t,e);if(util.isDate(t)&&util.isDate(e))return t.getTime()===e.getTime();if(util.isRegExp(t)&&util.isRegExp(e))return t.source===e.source&&t.global===e.global&&t.multiline===e.multiline&&t.lastIndex===e.lastIndex&&t.ignoreCase===e.ignoreCase;if(null!==t&&"object"==typeof t||null!==e&&"object"==typeof e){if(isView(t)&&isView(e)&&pToString(t)===pToString(e)&&!(t instanceof Float32Array||t instanceof Float64Array))return 0===compare(new Uint8Array(t.buffer),new Uint8Array(e.buffer));if(isBuffer(t)!==isBuffer(e))return!1;var n=(i=i||{actual:[],expected:[]}).actual.indexOf(t);return-1!==n&&n===i.expected.indexOf(e)||(i.actual.push(t),i.expected.push(e),objEquiv(t,e,r,i))}return r?t===e:t==e}function isArguments(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function objEquiv(t,e,r,i){if(null==t||null==e)return!1;if(util.isPrimitive(t)||util.isPrimitive(e))return t===e;if(r&&Object.getPrototypeOf(t)!==Object.getPrototypeOf(e))return!1;var n=isArguments(t),a=isArguments(e);if(n&&!a||!n&&a)return!1;if(n)return _deepEqual(t=pSlice.call(t),e=pSlice.call(e),r);var s,u,o=objectKeys(t),c=objectKeys(e);if(o.length!==c.length)return!1;for(o.sort(),c.sort(),u=o.length-1;u>=0;u--)if(o[u]!==c[u])return!1;for(u=o.length-1;u>=0;u--)if(!_deepEqual(t[s=o[u]],e[s],r,i))return!1;return!0}function notDeepStrictEqual(t,e,r){_deepEqual(t,e,!0)&&fail(t,e,r,"notDeepStrictEqual",notDeepStrictEqual)}function expectedException(t,e){if(!t||!e)return!1;if("[object RegExp]"==Object.prototype.toString.call(e))return e.test(t);try{if(t instanceof e)return!0}catch(t){}return!Error.isPrototypeOf(e)&&!0===e.call({},t)}function _tryBlock(t){var e;try{t()}catch(t){e=t}return e}function _throws(t,e,r,i){var n;if("function"!=typeof e)throw new TypeError('"block" argument must be a function');"string"==typeof r&&(i=r,r=null),n=_tryBlock(e),i=(r&&r.name?" ("+r.name+").":".")+(i?" "+i:"."),t&&!n&&fail(n,r,"Missing expected exception"+i);var a="string"==typeof i,s=!t&&n&&!r;if((!t&&util.isError(n)&&a&&expectedException(n,r)||s)&&fail(n,r,"Got unwanted exception"+i),t&&n&&r&&!expectedException(n,r)||!t&&n)throw n}function strict(t,e){t||fail(t,!0,e,"==",strict)}assert.AssertionError=function(t){this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=getMessage(this),this.generatedMessage=!0);var e=t.stackStartFunction||fail;if(Error.captureStackTrace)Error.captureStackTrace(this,e);else{var r=new Error;if(r.stack){var i=r.stack,n=getName(e),a=i.indexOf("\n"+n);if(a>=0){var s=i.indexOf("\n",a+1);i=i.substring(s+1)}this.stack=i}}},util.inherits(assert.AssertionError,Error),assert.fail=fail,assert.ok=ok,assert.equal=function(t,e,r){t!=e&&fail(t,e,r,"==",assert.equal)},assert.notEqual=function(t,e,r){t==e&&fail(t,e,r,"!=",assert.notEqual)},assert.deepEqual=function(t,e,r){_deepEqual(t,e,!1)||fail(t,e,r,"deepEqual",assert.deepEqual)},assert.deepStrictEqual=function(t,e,r){_deepEqual(t,e,!0)||fail(t,e,r,"deepStrictEqual",assert.deepStrictEqual)},assert.notDeepEqual=function(t,e,r){_deepEqual(t,e,!1)&&fail(t,e,r,"notDeepEqual",assert.notDeepEqual)},assert.notDeepStrictEqual=notDeepStrictEqual,assert.strictEqual=function(t,e,r){t!==e&&fail(t,e,r,"===",assert.strictEqual)},assert.notStrictEqual=function(t,e,r){t===e&&fail(t,e,r,"!==",assert.notStrictEqual)},assert.throws=function(t,e,r){_throws(!0,t,e,r)},assert.doesNotThrow=function(t,e,r){_throws(!1,t,e,r)},assert.ifError=function(t){if(t)throw t},assert.strict=objectAssign(strict,assert,{equal:assert.strictEqual,deepEqual:assert.deepStrictEqual,notEqual:assert.notStrictEqual,notDeepEqual:assert.notDeepStrictEqual}),assert.strict.strict=assert.strict;var objectKeys=Object.keys||function(t){var e=[];for(var r in t)hasOwn.call(t,r)&&e.push(r);return e};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"object-assign":23,"util/":4}],2:[function(require,module,exports){
"function"==typeof Object.create?module.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:module.exports=function(t,e){t.super_=e;var o=function(){};o.prototype=e.prototype,t.prototype=new o,t.prototype.constructor=t};

},{}],3:[function(require,module,exports){
module.exports=function(o){return o&&"object"==typeof o&&"function"==typeof o.copy&&"function"==typeof o.fill&&"function"==typeof o.readUInt8};

},{}],4:[function(require,module,exports){
(function (process,global){
var formatRegExp=/%[sdj%]/g;exports.format=function(e){if(!isString(e)){for(var r=[],t=0;t<arguments.length;t++)r.push(inspect(arguments[t]));return r.join(" ")}t=1;for(var n=arguments,i=n.length,o=String(e).replace(formatRegExp,function(e){if("%%"===e)return"%";if(t>=i)return e;switch(e){case"%s":return String(n[t++]);case"%d":return Number(n[t++]);case"%j":try{return JSON.stringify(n[t++])}catch(e){return"[Circular]"}default:return e}}),s=n[t];t<i;s=n[++t])isNull(s)||!isObject(s)?o+=" "+s:o+=" "+inspect(s);return o},exports.deprecate=function(e,r){if(isUndefined(global.process))return function(){return exports.deprecate(e,r).apply(this,arguments)};if(!0===process.noDeprecation)return e;var t=!1;return function(){if(!t){if(process.throwDeprecation)throw new Error(r);process.traceDeprecation?console.trace(r):console.error(r),t=!0}return e.apply(this,arguments)}};var debugEnviron,debugs={};function inspect(e,r){var t={seen:[],stylize:stylizeNoColor};return arguments.length>=3&&(t.depth=arguments[2]),arguments.length>=4&&(t.colors=arguments[3]),isBoolean(r)?t.showHidden=r:r&&exports._extend(t,r),isUndefined(t.showHidden)&&(t.showHidden=!1),isUndefined(t.depth)&&(t.depth=2),isUndefined(t.colors)&&(t.colors=!1),isUndefined(t.customInspect)&&(t.customInspect=!0),t.colors&&(t.stylize=stylizeWithColor),formatValue(t,e,t.depth)}function stylizeWithColor(e,r){var t=inspect.styles[r];return t?"["+inspect.colors[t][0]+"m"+e+"["+inspect.colors[t][1]+"m":e}function stylizeNoColor(e,r){return e}function arrayToHash(e){var r={};return e.forEach(function(e,t){r[e]=!0}),r}function formatValue(e,r,t){if(e.customInspect&&r&&isFunction(r.inspect)&&r.inspect!==exports.inspect&&(!r.constructor||r.constructor.prototype!==r)){var n=r.inspect(t,e);return isString(n)||(n=formatValue(e,n,t)),n}var i=formatPrimitive(e,r);if(i)return i;var o=Object.keys(r),s=arrayToHash(o);if(e.showHidden&&(o=Object.getOwnPropertyNames(r)),isError(r)&&(o.indexOf("message")>=0||o.indexOf("description")>=0))return formatError(r);if(0===o.length){if(isFunction(r)){var u=r.name?": "+r.name:"";return e.stylize("[Function"+u+"]","special")}if(isRegExp(r))return e.stylize(RegExp.prototype.toString.call(r),"regexp");if(isDate(r))return e.stylize(Date.prototype.toString.call(r),"date");if(isError(r))return formatError(r)}var c,a="",l=!1,p=["{","}"];(isArray(r)&&(l=!0,p=["[","]"]),isFunction(r))&&(a=" [Function"+(r.name?": "+r.name:"")+"]");return isRegExp(r)&&(a=" "+RegExp.prototype.toString.call(r)),isDate(r)&&(a=" "+Date.prototype.toUTCString.call(r)),isError(r)&&(a=" "+formatError(r)),0!==o.length||l&&0!=r.length?t<0?isRegExp(r)?e.stylize(RegExp.prototype.toString.call(r),"regexp"):e.stylize("[Object]","special"):(e.seen.push(r),c=l?formatArray(e,r,t,s,o):o.map(function(n){return formatProperty(e,r,t,s,n,l)}),e.seen.pop(),reduceToSingleString(c,a,p)):p[0]+a+p[1]}function formatPrimitive(e,r){if(isUndefined(r))return e.stylize("undefined","undefined");if(isString(r)){var t="'"+JSON.stringify(r).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(t,"string")}return isNumber(r)?e.stylize(""+r,"number"):isBoolean(r)?e.stylize(""+r,"boolean"):isNull(r)?e.stylize("null","null"):void 0}function formatError(e){return"["+Error.prototype.toString.call(e)+"]"}function formatArray(e,r,t,n,i){for(var o=[],s=0,u=r.length;s<u;++s)hasOwnProperty(r,String(s))?o.push(formatProperty(e,r,t,n,String(s),!0)):o.push("");return i.forEach(function(i){i.match(/^\d+$/)||o.push(formatProperty(e,r,t,n,i,!0))}),o}function formatProperty(e,r,t,n,i,o){var s,u,c;if((c=Object.getOwnPropertyDescriptor(r,i)||{value:r[i]}).get?u=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(u=e.stylize("[Setter]","special")),hasOwnProperty(n,i)||(s="["+i+"]"),u||(e.seen.indexOf(c.value)<0?(u=isNull(t)?formatValue(e,c.value,null):formatValue(e,c.value,t-1)).indexOf("\n")>-1&&(u=o?u.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+u.split("\n").map(function(e){return"   "+e}).join("\n")):u=e.stylize("[Circular]","special")),isUndefined(s)){if(o&&i.match(/^\d+$/))return u;(s=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"))}return s+": "+u}function reduceToSingleString(e,r,t){return e.reduce(function(e,r){return 0,r.indexOf("\n")>=0&&0,e+r.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?t[0]+(""===r?"":r+"\n ")+" "+e.join(",\n  ")+" "+t[1]:t[0]+r+" "+e.join(", ")+" "+t[1]}function isArray(e){return Array.isArray(e)}function isBoolean(e){return"boolean"==typeof e}function isNull(e){return null===e}function isNullOrUndefined(e){return null==e}function isNumber(e){return"number"==typeof e}function isString(e){return"string"==typeof e}function isSymbol(e){return"symbol"==typeof e}function isUndefined(e){return void 0===e}function isRegExp(e){return isObject(e)&&"[object RegExp]"===objectToString(e)}function isObject(e){return"object"==typeof e&&null!==e}function isDate(e){return isObject(e)&&"[object Date]"===objectToString(e)}function isError(e){return isObject(e)&&("[object Error]"===objectToString(e)||e instanceof Error)}function isFunction(e){return"function"==typeof e}function isPrimitive(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e}function objectToString(e){return Object.prototype.toString.call(e)}function pad(e){return e<10?"0"+e.toString(10):e.toString(10)}exports.debuglog=function(e){if(isUndefined(debugEnviron)&&(debugEnviron=process.env.NODE_DEBUG||""),e=e.toUpperCase(),!debugs[e])if(new RegExp("\\b"+e+"\\b","i").test(debugEnviron)){var r=process.pid;debugs[e]=function(){var t=exports.format.apply(exports,arguments);console.error("%s %d: %s",e,r,t)}}else debugs[e]=function(){};return debugs[e]},exports.inspect=inspect,inspect.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},inspect.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},exports.isArray=isArray,exports.isBoolean=isBoolean,exports.isNull=isNull,exports.isNullOrUndefined=isNullOrUndefined,exports.isNumber=isNumber,exports.isString=isString,exports.isSymbol=isSymbol,exports.isUndefined=isUndefined,exports.isRegExp=isRegExp,exports.isObject=isObject,exports.isDate=isDate,exports.isError=isError,exports.isFunction=isFunction,exports.isPrimitive=isPrimitive,exports.isBuffer=require("./support/isBuffer");var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function timestamp(){var e=new Date,r=[pad(e.getHours()),pad(e.getMinutes()),pad(e.getSeconds())].join(":");return[e.getDate(),months[e.getMonth()],r].join(" ")}function hasOwnProperty(e,r){return Object.prototype.hasOwnProperty.call(e,r)}exports.log=function(){console.log("%s - %s",timestamp(),exports.format.apply(exports,arguments))},exports.inherits=require("inherits"),exports._extend=function(e,r){if(!r||!isObject(r))return e;for(var t=Object.keys(r),n=t.length;n--;)e[t[n]]=r[t[n]];return e};

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":3,"_process":24,"inherits":2}],5:[function(require,module,exports){
!function(){"use strict";var t,e,r,i,n;function s(t,e){var r,i=Object.keys(e);for(r=0;r<i.length;r++)t=t.replace(new RegExp("\\{"+i[r]+"\\}","gi"),e[i[r]]);return t}function a(t){var e,r,i;if(!t)throw new Error("cannot create a random attribute name for an undefined object");e="ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",r="";do{for(r="",i=0;i<12;i++)r+=e[Math.floor(Math.random()*e.length)]}while(t[r]);return r}function o(t){var e={alphabetic:"alphabetic",hanging:"hanging",top:"text-before-edge",bottom:"text-after-edge",middle:"central"};return e[t]||e.alphabetic}n=function(t,e){var r,i,n,s={};for(t=t.split(","),e=e||10,r=0;r<t.length;r+=2)i="&"+t[r+1]+";",n=parseInt(t[r],e),s[i]="&#"+n+";";return s["\\xa0"]="&#160;",s}("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",32),t={strokeStyle:{svgAttr:"stroke",canvas:"#000000",svg:"none",apply:"stroke"},fillStyle:{svgAttr:"fill",canvas:"#000000",svg:null,apply:"fill"},lineCap:{svgAttr:"stroke-linecap",canvas:"butt",svg:"butt",apply:"stroke"},lineJoin:{svgAttr:"stroke-linejoin",canvas:"miter",svg:"miter",apply:"stroke"},miterLimit:{svgAttr:"stroke-miterlimit",canvas:10,svg:4,apply:"stroke"},lineWidth:{svgAttr:"stroke-width",canvas:1,svg:1,apply:"stroke"},globalAlpha:{svgAttr:"opacity",canvas:1,svg:1,apply:"fill stroke"},font:{canvas:"10px sans-serif"},shadowColor:{canvas:"#000000"},shadowOffsetX:{canvas:0},shadowOffsetY:{canvas:0},shadowBlur:{canvas:0},textAlign:{canvas:"start"},textBaseline:{canvas:"alphabetic"}},(r=function(t,e){this.__root=t,this.__ctx=e}).prototype.addColorStop=function(t,e){var r,i=this.__ctx.__createElement("stop");i.setAttribute("offset",t),-1!==e.indexOf("rgba")?(r=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?\.?\d*)\s*\)/gi.exec(e),i.setAttribute("stop-color",s("rgb({r},{g},{b})",{r:r[1],g:r[2],b:r[3]})),i.setAttribute("stop-opacity",r[4])):i.setAttribute("stop-color",e),this.__root.appendChild(i)},i=function(t,e){this.__root=t,this.__ctx=e},(e=function(t){var r,i={width:500,height:500,enableMirroring:!1};if(arguments.length>1?((r=i).width=arguments[0],r.height=arguments[1]):r=t||i,!(this instanceof e))return new e(r);this.width=r.width||i.width,this.height=r.height||i.height,this.enableMirroring=void 0!==r.enableMirroring?r.enableMirroring:i.enableMirroring,this.canvas=this,this.__document=r.document||document,this.__canvas=this.__document.createElement("canvas"),this.__ctx=this.__canvas.getContext("2d"),this.__setDefaultStyles(),this.__stack=[this.__getStyleState()],this.__groupStack=[],this.__root=this.__document.createElementNS("http://www.w3.org/2000/svg","svg"),this.__root.setAttribute("version",1.1),this.__root.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.__root.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),this.__root.setAttribute("width",this.width),this.__root.setAttribute("height",this.height),this.__ids={},this.__defs=this.__document.createElementNS("http://www.w3.org/2000/svg","defs"),this.__root.appendChild(this.__defs),this.__currentElement=this.__document.createElementNS("http://www.w3.org/2000/svg","g"),this.__root.appendChild(this.__currentElement)}).prototype.__createElement=function(t,e,r){void 0===e&&(e={});var i,n,s=this.__document.createElementNS("http://www.w3.org/2000/svg",t),a=Object.keys(e);for(r&&(s.setAttribute("fill","none"),s.setAttribute("stroke","none")),i=0;i<a.length;i++)n=a[i],s.setAttribute(n,e[n]);return s},e.prototype.__setDefaultStyles=function(){var e,r,i=Object.keys(t);for(e=0;e<i.length;e++)this[r=i[e]]=t[r].canvas},e.prototype.__applyStyleState=function(t){var e,r,i=Object.keys(t);for(e=0;e<i.length;e++)this[r=i[e]]=t[r]},e.prototype.__getStyleState=function(){var e,r,i={},n=Object.keys(t);for(e=0;e<n.length;e++)i[r=n[e]]=this[r];return i},e.prototype.__applyStyleToCurrentElement=function(e){var n,a,o,h,l,c=Object.keys(t);for(n=0;n<c.length;n++)if(a=t[c[n]],o=this[c[n]],a.apply)if(-1!==a.apply.indexOf("fill")&&o instanceof i){if(o.__ctx)for(;o.__ctx.__defs.childNodes.length;)h=o.__ctx.__defs.childNodes[0].getAttribute("id"),this.__ids[h]=h,this.__defs.appendChild(o.__ctx.__defs.childNodes[0]);this.__currentElement.setAttribute("fill",s("url(#{id})",{id:o.__root.getAttribute("id")}))}else-1!==a.apply.indexOf("fill")&&o instanceof r?this.__currentElement.setAttribute("fill",s("url(#{id})",{id:o.__root.getAttribute("id")})):-1!==a.apply.indexOf(e)&&a.svg!==o&&("stroke"!==a.svgAttr&&"fill"!==a.svgAttr||-1===o.indexOf("rgba")?this.__currentElement.setAttribute(a.svgAttr,o):(l=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?\.?\d*)\s*\)/gi.exec(o),this.__currentElement.setAttribute(a.svgAttr,s("rgb({r},{g},{b})",{r:l[1],g:l[2],b:l[3]})),this.__currentElement.setAttribute(a.svgAttr+"-opacity",l[4])))},e.prototype.__closestGroupOrSvg=function(t){return"g"===(t=t||this.__currentElement).nodeName||"svg"===t.nodeName?t:this.__closestGroupOrSvg(t.parentNode)},e.prototype.getSerializedSvg=function(t){var e,r,i,s,a,o=(new XMLSerializer).serializeToString(this.__root);if(/xmlns="http:\/\/www\.w3\.org\/2000\/svg".+xmlns="http:\/\/www\.w3\.org\/2000\/svg/gi.test(o)&&(o=o.replace('xmlns="http://www.w3.org/2000/svg','xmlns:xlink="http://www.w3.org/1999/xlink')),t)for(e=Object.keys(n),r=0;r<e.length;r++)i=e[r],s=n[i],(a=new RegExp(i,"gi")).test(o)&&(o=o.replace(a,s));return o},e.prototype.getSvg=function(){return this.__root},e.prototype.save=function(){var t=this.__createElement("g"),e=this.__closestGroupOrSvg();this.__groupStack.push(e),e.appendChild(t),this.__currentElement=t,this.__stack.push(this.__getStyleState())},e.prototype.restore=function(){this.__currentElement=this.__groupStack.pop();var t=this.__stack.pop();this.__applyStyleState(t)},e.prototype.__addTransform=function(t){var e=this.__closestGroupOrSvg();if(e.childNodes.length>0){var r=this.__createElement("g");e.appendChild(r),this.__currentElement=r}var i=this.__currentElement.getAttribute("transform");i?i+=" ":i="",i+=t,this.__currentElement.setAttribute("transform",i)},e.prototype.scale=function(t,e){void 0===e&&(e=t),this.__addTransform(s("scale({x},{y})",{x:t,y:e}))},e.prototype.rotate=function(t){var e=180*t/Math.PI;this.__addTransform(s("rotate({angle},{cx},{cy})",{angle:e,cx:0,cy:0}))},e.prototype.translate=function(t,e){this.__addTransform(s("translate({x},{y})",{x:t,y:e}))},e.prototype.transform=function(t,e,r,i,n,a){this.__addTransform(s("matrix({a},{b},{c},{d},{e},{f})",{a:t,b:e,c:r,d:i,e:n,f:a}))},e.prototype.beginPath=function(){var t;this.__currentDefaultPath="",this.__currentPosition={},t=this.__createElement("path",{},!0),this.__closestGroupOrSvg().appendChild(t),this.__currentElement=t},e.prototype.__applyCurrentDefaultPath=function(){if("path"!==this.__currentElement.nodeName)throw new Error("Attempted to apply path command to node "+this.__currentElement.nodeName);var t=this.__currentDefaultPath;this.__currentElement.setAttribute("d",t)},e.prototype.__addPathCommand=function(t){this.__currentDefaultPath+=" ",this.__currentDefaultPath+=t},e.prototype.moveTo=function(t,e){"path"!==this.__currentElement.nodeName&&this.beginPath(),this.__currentPosition={x:t,y:e},this.__addPathCommand(s("M {x} {y}",{x:t,y:e}))},e.prototype.closePath=function(){this.__addPathCommand("Z")},e.prototype.lineTo=function(t,e){this.__currentPosition={x:t,y:e},this.__currentDefaultPath.indexOf("M")>-1?this.__addPathCommand(s("L {x} {y}",{x:t,y:e})):this.__addPathCommand(s("M {x} {y}",{x:t,y:e}))},e.prototype.bezierCurveTo=function(t,e,r,i,n,a){this.__currentPosition={x:n,y:a},this.__addPathCommand(s("C {cp1x} {cp1y} {cp2x} {cp2y} {x} {y}",{cp1x:t,cp1y:e,cp2x:r,cp2y:i,x:n,y:a}))},e.prototype.quadraticCurveTo=function(t,e,r,i){this.__currentPosition={x:r,y:i},this.__addPathCommand(s("Q {cpx} {cpy} {x} {y}",{cpx:t,cpy:e,x:r,y:i}))};var h=function(t){var e=Math.sqrt(t[0]*t[0]+t[1]*t[1]);return[t[0]/e,t[1]/e]};e.prototype.arcTo=function(t,e,r,i,n){var s=this.__currentPosition&&this.__currentPosition.x,a=this.__currentPosition&&this.__currentPosition.y;if(void 0!==s&&void 0!==a){if(n<0)throw new Error("IndexSizeError: The radius provided ("+n+") is negative.");if(s===t&&a===e||t===r&&e===i||0===n)this.lineTo(t,e);else{var o=h([s-t,a-e]),l=h([r-t,i-e]);if(o[0]*l[1]!=o[1]*l[0]){var c=o[0]*l[0]+o[1]*l[1],p=Math.acos(Math.abs(c)),_=h([o[0]+l[0],o[1]+l[1]]),u=n/Math.sin(p/2),d=t+u*_[0],g=e+u*_[1],m=[-o[1],o[0]],f=[l[1],-l[0]],y=function(t){var e=t[0];return t[1]>=0?Math.acos(e):-Math.acos(e)},v=y(m),x=y(f);this.lineTo(d+m[0]*n,g+m[1]*n),this.arc(d,g,n,v,x)}else this.lineTo(t,e)}}},e.prototype.stroke=function(){"path"===this.__currentElement.nodeName&&this.__currentElement.setAttribute("paint-order","fill stroke markers"),this.__applyCurrentDefaultPath(),this.__applyStyleToCurrentElement("stroke")},e.prototype.fill=function(){"path"===this.__currentElement.nodeName&&this.__currentElement.setAttribute("paint-order","stroke fill markers"),this.__applyCurrentDefaultPath(),this.__applyStyleToCurrentElement("fill")},e.prototype.rect=function(t,e,r,i){"path"!==this.__currentElement.nodeName&&this.beginPath(),this.moveTo(t,e),this.lineTo(t+r,e),this.lineTo(t+r,e+i),this.lineTo(t,e+i),this.lineTo(t,e),this.closePath()},e.prototype.fillRect=function(t,e,r,i){var n;n=this.__createElement("rect",{x:t,y:e,width:r,height:i},!0),this.__closestGroupOrSvg().appendChild(n),this.__currentElement=n,this.__applyStyleToCurrentElement("fill")},e.prototype.strokeRect=function(t,e,r,i){var n;n=this.__createElement("rect",{x:t,y:e,width:r,height:i},!0),this.__closestGroupOrSvg().appendChild(n),this.__currentElement=n,this.__applyStyleToCurrentElement("stroke")},e.prototype.clearRect=function(t,e,r,i){var n,s=this.__closestGroupOrSvg();n=this.__createElement("rect",{x:t,y:e,width:r,height:i,fill:"#FFFFFF"},!0),s.appendChild(n)},e.prototype.createLinearGradient=function(t,e,i,n){var s=this.__createElement("linearGradient",{id:a(this.__ids),x1:t+"px",x2:i+"px",y1:e+"px",y2:n+"px",gradientUnits:"userSpaceOnUse"},!1);return this.__defs.appendChild(s),new r(s,this)},e.prototype.createRadialGradient=function(t,e,i,n,s,o){var h=this.__createElement("radialGradient",{id:a(this.__ids),cx:n+"px",cy:s+"px",r:o+"px",fx:t+"px",fy:e+"px",gradientUnits:"userSpaceOnUse"},!1);return this.__defs.appendChild(h),new r(h,this)},e.prototype.__parseFont=function(){var t=/^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-,\"\sa-z]+?)\s*$/i.exec(this.font),e={style:t[1]||"normal",size:t[4]||"10px",family:t[6]||"sans-serif",weight:t[3]||"normal",decoration:t[2]||"normal",href:null};return"underline"===this.__fontUnderline&&(e.decoration="underline"),this.__fontHref&&(e.href=this.__fontHref),e},e.prototype.__wrapTextLink=function(t,e){if(t.href){var r=this.__createElement("a");return r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t.href),r.appendChild(e),r}return e},e.prototype.__applyText=function(t,e,r,i){var n,s,a=this.__parseFont(),h=this.__closestGroupOrSvg(),l=this.__createElement("text",{"font-family":a.family,"font-size":a.size,"font-style":a.style,"font-weight":a.weight,"text-decoration":a.decoration,x:e,y:r,"text-anchor":(n=this.textAlign,s={left:"start",right:"end",center:"middle",start:"start",end:"end"},s[n]||s.start),"dominant-baseline":o(this.textBaseline)},!0);l.appendChild(this.__document.createTextNode(t)),this.__currentElement=l,this.__applyStyleToCurrentElement(i),h.appendChild(this.__wrapTextLink(a,l))},e.prototype.fillText=function(t,e,r){this.__applyText(t,e,r,"fill")},e.prototype.strokeText=function(t,e,r){this.__applyText(t,e,r,"stroke")},e.prototype.measureText=function(t){return this.__ctx.font=this.font,this.__ctx.measureText(t)},e.prototype.arc=function(t,e,r,i,n,a){if(i!==n){(i%=2*Math.PI)===(n%=2*Math.PI)&&(n=(n+2*Math.PI-.001*(a?-1:1))%(2*Math.PI));var o=t+r*Math.cos(n),h=e+r*Math.sin(n),l=t+r*Math.cos(i),c=e+r*Math.sin(i),p=a?0:1,_=0,u=n-i;u<0&&(u+=2*Math.PI),_=a?u>Math.PI?0:1:u>Math.PI?1:0,this.lineTo(l,c),this.__addPathCommand(s("A {rx} {ry} {xAxisRotation} {largeArcFlag} {sweepFlag} {endX} {endY}",{rx:r,ry:r,xAxisRotation:0,largeArcFlag:_,sweepFlag:p,endX:o,endY:h})),this.__currentPosition={x:o,y:h}}},e.prototype.clip=function(){var t=this.__closestGroupOrSvg(),e=this.__createElement("clipPath"),r=a(this.__ids),i=this.__createElement("g");t.removeChild(this.__currentElement),e.setAttribute("id",r),e.appendChild(this.__currentElement),this.__defs.appendChild(e),t.setAttribute("clip-path",s("url(#{id})",{id:r})),t.appendChild(i),this.__currentElement=i},e.prototype.drawImage=function(){var t,r,i,n,s,a,o,h,l,c,p,_,u,d,g=Array.prototype.slice.call(arguments),m=g[0],f=0,y=0;if(3===g.length)t=g[1],r=g[2],i=s=m.width,n=a=m.height;else if(5===g.length)t=g[1],r=g[2],i=g[3],n=g[4],s=m.width,a=m.height;else{if(9!==g.length)throw new Error("Inavlid number of arguments passed to drawImage: "+arguments.length);f=g[1],y=g[2],s=g[3],a=g[4],t=g[5],r=g[6],i=g[7],n=g[8]}if(o=this.__closestGroupOrSvg(),p=this.__currentElement,m instanceof e){for(l=(h=m.getSvg()).childNodes[0];l.childNodes.length;)d=l.childNodes[0].getAttribute("id"),this.__ids[d]=d,this.__defs.appendChild(l.childNodes[0]);c=h.childNodes[1],o.appendChild(c),this.__currentElement=c,this.translate(t,r),this.__currentElement=p}else"CANVAS"!==m.nodeName&&"IMG"!==m.nodeName||((_=this.__createElement("image")).setAttribute("width",i),_.setAttribute("height",n),_.setAttribute("preserveAspectRatio","none"),(f||y||s!==m.width||a!==m.height)&&((u=this.__document.createElement("canvas")).width=i,u.height=n,u.getContext("2d").drawImage(m,f,y,s,a,0,0,i,n),m=u),_.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","CANVAS"===m.nodeName?m.toDataURL():m.getAttribute("src")),o.appendChild(_),this.__currentElement=_,this.translate(t,r),this.__currentElement=p)},e.prototype.createPattern=function(t,r){var n,s=this.__document.createElementNS("http://www.w3.org/2000/svg","pattern"),o=a(this.__ids);return s.setAttribute("id",o),s.setAttribute("width",t.width),s.setAttribute("height",t.height),"CANVAS"===t.nodeName||"IMG"===t.nodeName?((n=this.__document.createElementNS("http://www.w3.org/2000/svg","image")).setAttribute("width",t.width),n.setAttribute("height",t.height),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","CANVAS"===t.nodeName?t.toDataURL():t.getAttribute("src")),s.appendChild(n),this.__defs.appendChild(s)):t instanceof e&&(s.appendChild(t.__root.childNodes[1]),this.__defs.appendChild(s)),new i(s,this)},e.prototype.drawFocusRing=function(){},e.prototype.createImageData=function(){},e.prototype.getImageData=function(){},e.prototype.putImageData=function(){},e.prototype.globalCompositeOperation=function(){},e.prototype.setTransform=function(){},"object"==typeof window&&(window.C2S=e),"object"==typeof module&&"object"==typeof module.exports&&(module.exports=e)}();

},{}],6:[function(require,module,exports){
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(t){"use strict";function n(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function r(t){var r;return 1===t.length&&(r=t,t=function(t,o){return n(r(t),o)}),{left:function(n,r,o,e){for(null==o&&(o=0),null==e&&(e=n.length);o<e;){var f=o+e>>>1;t(n[f],r)<0?o=f+1:e=f}return o},right:function(n,r,o,e){for(null==o&&(o=0),null==e&&(e=n.length);o<e;){var f=o+e>>>1;t(n[f],r)>0?e=f:o=f+1}return o}}}var o=r(n),e=o.right,f=o.left;function u(t){return 0|t.length}function l(t){return!(t>0)}function i(t){return"object"!=typeof t||"length"in t?t:Array.from(t)}function c(t,n){let r,o=0,e=0,f=0;if(void 0===n)for(let n of t)null!=n&&(n=+n)>=n&&(f+=(r=n-e)*(n-(e+=r/++o)));else{let u=-1;for(let l of t)null!=(l=n(l,++u,t))&&(l=+l)>=l&&(f+=(r=l-e)*(l-(e+=r/++o)))}if(o>1)return f/(o-1)}function a(t,n){const r=c(t,n);return r?Math.sqrt(r):r}function s(t,n){let r,o;if(void 0===n)for(const n of t)null!=n&&(void 0===r?n>=n&&(r=o=n):(r>n&&(r=n),o<n&&(o=n)));else{let e=-1;for(let f of t)null!=(f=n(f,++e,t))&&(void 0===r?f>=f&&(r=o=f):(r>f&&(r=f),o<f&&(o=f)))}return[r,o]}function h(t){return t}function d(t,n,r,o){return function t(e,f){if(f>=o.length)return r(e);const u=new Map,l=o[f++];let i=-1;for(const t of e){const n=l(t,++i,e),r=u.get(n);r?r.push(t):u.set(n,[t])}for(const[n,r]of u)u.set(n,t(r,f));return n(u)}(t,0)}var v=Array.prototype,p=v.slice,M=v.map;function g(t){return function(){return t}}function y(t,n,r){t=+t,n=+n,r=(e=arguments.length)<2?(n=t,t=0,1):e<3?1:+r;for(var o=-1,e=0|Math.max(0,Math.ceil((n-t)/r)),f=new Array(e);++o<e;)f[o]=t+o*r;return f}var m=Math.sqrt(50),A=Math.sqrt(10),x=Math.sqrt(2);function w(t,n,r){var o=(n-t)/Math.max(0,r),e=Math.floor(Math.log(o)/Math.LN10),f=o/Math.pow(10,e);return e>=0?(f>=m?10:f>=A?5:f>=x?2:1)*Math.pow(10,e):-Math.pow(10,-e)/(f>=m?10:f>=A?5:f>=x?2:1)}function b(t,n,r){var o=Math.abs(n-t)/Math.max(0,r),e=Math.pow(10,Math.floor(Math.log(o)/Math.LN10)),f=o/e;return f>=m?e*=10:f>=A?e*=5:f>=x&&(e*=2),n<t?-e:e}function N(t){return Math.ceil(Math.log(t.length)/Math.LN2)+1}function q(){var t=h,n=s,r=N;function o(o){Array.isArray(o)||(o=Array.from(o));var f,u,l=o.length,i=new Array(l);for(f=0;f<l;++f)i[f]=t(o[f],f,o);var c=n(i),a=c[0],s=c[1],h=r(i,a,s);Array.isArray(h)||(h=b(a,s,h),h=y(Math.ceil(a/h)*h,s,h));for(var d=h.length;h[0]<=a;)h.shift(),--d;for(;h[d-1]>s;)h.pop(),--d;var v,p=new Array(d+1);for(f=0;f<=d;++f)(v=p[f]=[]).x0=f>0?h[f-1]:a,v.x1=f<d?h[f]:s;for(f=0;f<l;++f)a<=(u=i[f])&&u<=s&&p[e(h,u,0,d)].push(o[f]);return p}return o.value=function(n){return arguments.length?(t="function"==typeof n?n:g(n),o):t},o.domain=function(t){return arguments.length?(n="function"==typeof t?t:g([t[0],t[1]]),o):n},o.thresholds=function(t){return arguments.length?(r="function"==typeof t?t:Array.isArray(t)?g(p.call(t)):g(t),o):r},o}function k(t){return null===t?NaN:+t}function I(t,n,r=k){if(o=t.length){if((n=+n)<=0||o<2)return+r(t[0],0,t);if(n>=1)return+r(t[o-1],o-1,t);var o,e=(o-1)*n,f=Math.floor(e),u=+r(t[f],f,t);return u+(+r(t[f+1],f+1,t)-u)*(e-f)}}function L(t,r,o=0,e=t.length-1,f=n){for(;e>o;){if(e-o>600){const n=e-o+1,u=r-o+1,l=Math.log(n),i=.5*Math.exp(2*l/3),c=.5*Math.sqrt(l*i*(n-i)/n)*(u-n/2<0?-1:1);L(t,r,Math.max(o,Math.floor(r-u*i/n+c)),Math.min(e,Math.floor(r+(n-u)*i/n+c)),f)}const n=t[r];let u=o,l=e;for(j(t,o,r),f(t[e],n)>0&&j(t,o,e);u<l;){for(j(t,u,l),++u,--l;f(t[u],n)<0;)++u;for(;f(t[l],n)>0;)--l}0===f(t[o],n)?j(t,o,l):j(t,++l,e),l<=r&&(o=l+1),r<=l&&(e=l-1)}return t}function j(t,n,r){const o=t[n];t[n]=t[r],t[r]=o}function F(t,n){let r;if(void 0===n)for(const n of t)null!=n&&(r>n||void 0===r&&n>=n)&&(r=n);else{let o=-1;for(let e of t)null!=(e=n(e,++o,t))&&(r>e||void 0===r&&e>=e)&&(r=e)}return r}function S(t,r=n){let o,e=-1,f=-1;if(1===r.length)for(const u of t){++f;const t=r(u);(e<0?0===n(t,t):n(t,o)<0)&&(o=t,e=f)}else for(const n of t)++f,(e<0?0===r(n,n):r(n,o)<0)&&(o=n,e=f);return e}function _(t){if(!(e=t.length))return[];for(var n=-1,r=F(t,z),o=new Array(r);++n<r;)for(var e,f=-1,u=o[n]=new Array(e);++f<e;)u[f]=t[f][n];return o}function z(t){return t.length}t.bisect=e,t.bisectRight=e,t.bisectLeft=f,t.ascending=n,t.bisector=r,t.count=function(t,n){let r=0;if(void 0===n)for(const n of t)null!=n&&n>=n&&++r;else{let o=-1;for(let e of t)null!=(e=n(e,++o,t))&&e>=e&&++r}return r},t.cross=function(...t){const n="function"==typeof t[t.length-1]&&function(t){return n=>t(...n)}(t.pop()),r=(t=t.map(i)).map(u),o=t.length-1,e=new Array(o+1).fill(0),f=[];if(o<0||r.some(l))return f;for(;;){f.push(e.map((n,r)=>t[r][n]));let u=o;for(;++e[u]===r[u];){if(0===u)return n?f.map(n):f;e[u--]=0}}},t.descending=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN},t.deviation=a,t.extent=s,t.group=function(t,...n){return d(t,h,h,n)},t.groups=function(t,...n){return d(t,Array.from,h,n)},t.rollup=function(t,n,...r){return d(t,h,n,r)},t.rollups=function(t,n,...r){return d(t,Array.from,n,r)},t.bin=q,t.histogram=q,t.thresholdFreedmanDiaconis=function(t,r,o){return t=M.call(t,k).sort(n),Math.ceil((o-r)/(2*(I(t,.75)-I(t,.25))*Math.pow(t.length,-1/3)))},t.thresholdScott=function(t,n,r){return Math.ceil((r-n)/(3.5*a(t)*Math.pow(t.length,-1/3)))},t.thresholdSturges=N,t.max=function(t,n){let r;if(void 0===n)for(const n of t)null!=n&&(r<n||void 0===r&&n>=n)&&(r=n);else{let o=-1;for(let e of t)null!=(e=n(e,++o,t))&&(r<e||void 0===r&&e>=e)&&(r=e)}return r},t.maxIndex=function(t,n){let r,o=-1,e=-1;if(void 0===n)for(const n of t)++e,null!=n&&(r<n||void 0===r&&n>=n)&&(r=n,o=e);else for(let f of t)null!=(f=n(f,++e,t))&&(r<f||void 0===r&&f>=f)&&(r=f,o=e);return o},t.mean=function(t,n){let r=0,o=0;if(void 0===n)for(let n of t)null!=n&&(n=+n)>=n&&(++r,o+=n);else{let e=-1;for(let f of t)null!=(f=n(f,++e,t))&&(f=+f)>=f&&(++r,o+=f)}if(r)return o/r},t.median=function(t,n){if(!(t=Float64Array.from(function*(t,n){if(void 0===n)for(let n of t)null!=n&&(n=+n)>=n&&(yield n);else{let r=-1;for(let o of t)null!=(o=n(o,++r,t))&&(o=+o)>=o&&(yield o)}}(t,n))).length)return;const r=t.length,o=r>>1;return L(t,o-1,0),0==(1&r)&&L(t,o,o),I(t,.5)},t.merge=function(t){return Array.from(function*(t){for(const n of t)yield*n}(t))},t.min=F,t.minIndex=function(t,n){let r,o=-1,e=-1;if(void 0===n)for(const n of t)++e,null!=n&&(r>n||void 0===r&&n>=n)&&(r=n,o=e);else for(let f of t)null!=(f=n(f,++e,t))&&(r>f||void 0===r&&f>=f)&&(r=f,o=e);return o},t.pairs=function(t,n=function(t,n){return[t,n]}){const r=[];let o,e=!1;for(const f of t)e&&r.push(n(o,f)),o=f,e=!0;return r},t.permute=function(t,n){return Array.from(n,n=>t[n])},t.quantile=I,t.quickselect=L,t.range=y,t.least=function(t,r=n){let o,e=!1;if(1===r.length){let f;for(const u of t){const t=r(u);(e?n(t,f)<0:0===n(t,t))&&(o=u,f=t,e=!0)}}else for(const n of t)(e?r(n,o)<0:0===r(n,n))&&(o=n,e=!0);return o},t.leastIndex=S,t.scan=function(t,n){const r=S(t,n);return r<0?void 0:r},t.shuffle=function(t,n=0,r=t.length){for(var o,e,f=r-(n=+n);f;)e=Math.random()*f--|0,o=t[f+n],t[f+n]=t[e+n],t[e+n]=o;return t},t.sum=function(t,n){let r=0;if(void 0===n)for(let n of t)(n=+n)&&(r+=n);else{let o=-1;for(let e of t)(e=+n(e,++o,t))&&(r+=e)}return r},t.ticks=function(t,n,r){var o,e,f,u,l=-1;if(r=+r,(t=+t)==(n=+n)&&r>0)return[t];if((o=n<t)&&(e=t,t=n,n=e),0===(u=w(t,n,r))||!isFinite(u))return[];if(u>0)for(t=Math.ceil(t/u),n=Math.floor(n/u),f=new Array(e=Math.ceil(n-t+1));++l<e;)f[l]=(t+l)*u;else for(t=Math.floor(t*u),n=Math.ceil(n*u),f=new Array(e=Math.ceil(t-n+1));++l<e;)f[l]=(t-l)/u;return o&&f.reverse(),f},t.tickIncrement=w,t.tickStep=b,t.transpose=_,t.variance=c,t.zip=function(){return _(arguments)},Object.defineProperty(t,"__esModule",{value:!0})});

},{}],7:[function(require,module,exports){
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(t){"use strict";function e(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function n(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function i(){}var r="\\s*([+-]?\\d+)\\s*",a="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",h="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",s=/^#([0-9a-f]{3})$/,o=/^#([0-9a-f]{6})$/,l=new RegExp("^rgb\\("+[r,r,r]+"\\)$"),u=new RegExp("^rgb\\("+[h,h,h]+"\\)$"),c=new RegExp("^rgba\\("+[r,r,r,a]+"\\)$"),g=new RegExp("^rgba\\("+[h,h,h,a]+"\\)$"),d=new RegExp("^hsl\\("+[a,h,h]+"\\)$"),p=new RegExp("^hsla\\("+[a,h,h,a]+"\\)$"),f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function b(t){var e;return t=(t+"").trim().toLowerCase(),(e=s.exec(t))?new k((e=parseInt(e[1],16))>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):(e=o.exec(t))?y(parseInt(e[1],16)):(e=l.exec(t))?new k(e[1],e[2],e[3],1):(e=u.exec(t))?new k(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=c.exec(t))?w(e[1],e[2],e[3],e[4]):(e=g.exec(t))?w(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=d.exec(t))?v(e[1],e[2]/100,e[3]/100,1):(e=p.exec(t))?v(e[1],e[2]/100,e[3]/100,e[4]):f.hasOwnProperty(t)?y(f[t]):"transparent"===t?new k(NaN,NaN,NaN,0):null}function y(t){return new k(t>>16&255,t>>8&255,255&t,1)}function w(t,e,n,i){return i<=0&&(t=e=n=NaN),new k(t,e,n,i)}function m(t){return t instanceof i||(t=b(t)),t?new k((t=t.rgb()).r,t.g,t.b,t.opacity):new k}function N(t,e,n,i){return 1===arguments.length?m(t):new k(t,e,n,null==i?1:i)}function k(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}function M(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function v(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new q(t,e,n,i)}function x(t,e,n,r){return 1===arguments.length?function(t){if(t instanceof q)return new q(t.h,t.s,t.l,t.opacity);if(t instanceof i||(t=b(t)),!t)return new q;if(t instanceof q)return t;var e=(t=t.rgb()).r/255,n=t.g/255,r=t.b/255,a=Math.min(e,n,r),h=Math.max(e,n,r),s=NaN,o=h-a,l=(h+a)/2;return o?(s=e===h?(n-r)/o+6*(n<r):n===h?(r-e)/o+2:(e-n)/o+4,o/=l<.5?h+a:2-h-a,s*=60):o=l>0&&l<1?0:s,new q(s,o,l,t.opacity)}(t):new q(t,e,n,null==r?1:r)}function q(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}function E(t,e,n){return 255*(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)}e(i,b,{displayable:function(){return this.rgb().displayable()},hex:function(){return this.rgb().hex()},toString:function(){return this.rgb()+""}}),e(k,N,n(i,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new k(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new k(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:function(){return"#"+M(this.r)+M(this.g)+M(this.b)},toString:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}})),e(q,x,n(i,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new q(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new q(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,r=2*n-i;return new k(E(t>=240?t-240:t+120,r,i),E(t,r,i),E(t<120?t+240:t-120,r,i),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));var $=Math.PI/180,R=180/Math.PI,j=.96422,I=1,P=.82521,O=4/29,S=6/29,_=3*S*S,z=S*S*S;function C(t){if(t instanceof A)return new A(t.l,t.a,t.b,t.opacity);if(t instanceof K)return Q(t);t instanceof k||(t=m(t));var e,n,i=G(t.r),r=G(t.g),a=G(t.b),h=B((.2225045*i+.7168786*r+.0606169*a)/I);return i===r&&r===a?e=n=h:(e=B((.4360747*i+.3850649*r+.1430804*a)/j),n=B((.0139322*i+.0971045*r+.7141733*a)/P)),new A(116*h-16,500*(e-h),200*(h-n),t.opacity)}function L(t,e,n,i){return 1===arguments.length?C(t):new A(t,e,n,null==i?1:i)}function A(t,e,n,i){this.l=+t,this.a=+e,this.b=+n,this.opacity=+i}function B(t){return t>z?Math.pow(t,1/3):t/_+O}function D(t){return t>S?t*t*t:_*(t-O)}function F(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function G(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function H(t){if(t instanceof K)return new K(t.h,t.c,t.l,t.opacity);if(t instanceof A||(t=C(t)),0===t.a&&0===t.b)return new K(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var e=Math.atan2(t.b,t.a)*R;return new K(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function J(t,e,n,i){return 1===arguments.length?H(t):new K(t,e,n,null==i?1:i)}function K(t,e,n,i){this.h=+t,this.c=+e,this.l=+n,this.opacity=+i}function Q(t){if(isNaN(t.h))return new A(t.l,0,0,t.opacity);var e=t.h*$;return new A(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}e(A,L,n(i,{brighter:function(t){return new A(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new A(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,n=isNaN(this.b)?t:t-this.b/200;return new k(F(3.1338561*(e=j*D(e))-1.6168667*(t=I*D(t))-.4906146*(n=P*D(n))),F(-.9787684*e+1.9161415*t+.033454*n),F(.0719453*e-.2289914*t+1.4052427*n),this.opacity)}})),e(K,J,n(i,{brighter:function(t){return new K(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new K(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return Q(this).rgb()}}));var T=-.14861,U=1.78277,V=-.29227,W=-.90649,X=1.97294,Y=X*W,Z=X*U,tt=U*V-W*T;function et(t,e,n,i){return 1===arguments.length?function(t){if(t instanceof nt)return new nt(t.h,t.s,t.l,t.opacity);t instanceof k||(t=m(t));var e=t.r/255,n=t.g/255,i=t.b/255,r=(tt*i+Y*e-Z*n)/(tt+Y-Z),a=i-r,h=(X*(n-r)-V*a)/W,s=Math.sqrt(h*h+a*a)/(X*r*(1-r)),o=s?Math.atan2(h,a)*R-120:NaN;return new nt(o<0?o+360:o,s,r,t.opacity)}(t):new nt(t,e,n,null==i?1:i)}function nt(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}e(nt,et,n(i,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new nt(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new nt(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*$,e=+this.l,n=isNaN(this.s)?0:this.s*e*(1-e),i=Math.cos(t),r=Math.sin(t);return new k(255*(e+n*(T*i+U*r)),255*(e+n*(V*i+W*r)),255*(e+n*(X*i)),this.opacity)}})),t.color=b,t.rgb=N,t.hsl=x,t.lab=L,t.hcl=J,t.lch=function(t,e,n,i){return 1===arguments.length?H(t):new K(n,e,t,null==i?1:i)},t.gray=function(t,e){return new A(t,0,0,null==e?1:e)},t.cubehelix=et,Object.defineProperty(t,"__esModule",{value:!0})});

},{}],8:[function(require,module,exports){
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(n){"use strict";var e={value:function(){}};function t(){for(var n,e=0,t=arguments.length,o={};e<t;++e){if(!(n=arguments[e]+"")||n in o)throw new Error("illegal type: "+n);o[n]=[]}return new r(o)}function r(n){this._=n}function o(n,e){for(var t,r=0,o=n.length;r<o;++r)if((t=n[r]).name===e)return t.value}function i(n,t,r){for(var o=0,i=n.length;o<i;++o)if(n[o].name===t){n[o]=e,n=n.slice(0,o).concat(n.slice(o+1));break}return null!=r&&n.push({name:t,value:r}),n}r.prototype=t.prototype={constructor:r,on:function(n,e){var t,r,f=this._,l=(r=f,(n+"").trim().split(/^|\s+/).map(function(n){var e="",t=n.indexOf(".");if(t>=0&&(e=n.slice(t+1),n=n.slice(0,t)),n&&!r.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:e}})),a=-1,u=l.length;if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++a<u;)if(t=(n=l[a]).type)f[t]=i(f[t],n.name,e);else if(null==e)for(t in f)f[t]=i(f[t],n.name,null);return this}for(;++a<u;)if((t=(n=l[a]).type)&&(t=o(f[t],n.name)))return t},copy:function(){var n={},e=this._;for(var t in e)n[t]=e[t].slice();return new r(n)},call:function(n,e){if((t=arguments.length-2)>0)for(var t,r,o=new Array(t),i=0;i<t;++i)o[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(i=0,t=(r=this._[n]).length;i<t;++i)r[i].value.apply(e,o)},apply:function(n,e,t){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var r=this._[n],o=0,i=r.length;o<i;++o)r[o].value.apply(e,t)}},n.dispatch=t,Object.defineProperty(n,"__esModule",{value:!0})});

},{}],9:[function(require,module,exports){
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("d3-selection"),require("d3-dispatch")): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports,__webpack_require__(0),__webpack_require__(5)], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(t,e,n){"use strict";function o(){e.event.stopImmediatePropagation()}function i(){e.event.preventDefault(),e.event.stopImmediatePropagation()}function r(t){var n=t.document.documentElement,o=e.select(t).on("dragstart.drag",i,!0);"onselectstart"in n?o.on("selectstart.drag",i,!0):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}function c(t,n){var o=t.document.documentElement,r=e.select(t).on("dragstart.drag",null);n&&(r.on("click.drag",i,!0),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in o?r.on("selectstart.drag",null):(o.style.MozUserSelect=o.__noselect,delete o.__noselect)}function u(t){return function(){return t}}function s(t,e,n,o,i,r,c,u,s,a){this.target=t,this.type=e,this.subject=n,this.identifier=o,this.active=i,this.x=r,this.y=c,this.dx=u,this.dy=s,this._=a}function a(){return!e.event.button}function l(){return this.parentNode}function d(t){return null==t?{x:e.event.x,y:e.event.y}:t}function f(){return"ontouchstart"in this}s.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t},t.drag=function(){var t,h,p,v,g=a,m=l,y=d,b=f,_={},w=n.dispatch("start","drag","end"),x=0,T=0;function j(t){t.on("mousedown.drag",k).filter(b).on("touchstart.drag",q).on("touchmove.drag",z).on("touchend.drag touchcancel.drag",D).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function k(){if(!v&&g.apply(this,arguments)){var n=P("mouse",m.apply(this,arguments),e.mouse,this,arguments);n&&(e.select(e.event.view).on("mousemove.drag",E,!0).on("mouseup.drag",M,!0),r(e.event.view),o(),p=!1,t=e.event.clientX,h=e.event.clientY,n("start"))}}function E(){if(i(),!p){var n=e.event.clientX-t,o=e.event.clientY-h;p=n*n+o*o>T}_.mouse("drag")}function M(){e.select(e.event.view).on("mousemove.drag mouseup.drag",null),c(e.event.view,p),i(),_.mouse("end")}function q(){if(g.apply(this,arguments)){var t,n,i=e.event.changedTouches,r=m.apply(this,arguments),c=i.length;for(t=0;t<c;++t)(n=P(i[t].identifier,r,e.touch,this,arguments))&&(o(),n("start"))}}function z(){var t,n,o=e.event.changedTouches,r=o.length;for(t=0;t<r;++t)(n=_[o[t].identifier])&&(i(),n("drag"))}function D(){var t,n,i=e.event.changedTouches,r=i.length;for(v&&clearTimeout(v),v=setTimeout(function(){v=null},500),t=0;t<r;++t)(n=_[i[t].identifier])&&(o(),n("end"))}function P(t,n,o,i,r){var c,u,a,l=o(n,t),d=w.copy();if(e.customEvent(new s(j,"beforestart",c,t,x,l[0],l[1],0,0,d),function(){return null!=(e.event.subject=c=y.apply(i,r))&&(u=c.x-l[0]||0,a=c.y-l[1]||0,!0)}))return function f(h){var p,v=l;switch(h){case"start":_[t]=f,p=x++;break;case"end":delete _[t],--x;case"drag":l=o(n,t),p=x}e.customEvent(new s(j,h,c,t,p,l[0]+u,l[1]+a,l[0]-v[0],l[1]-v[1],d),d.apply,d,[h,i,r])}}return j.filter=function(t){return arguments.length?(g="function"==typeof t?t:u(!!t),j):g},j.container=function(t){return arguments.length?(m="function"==typeof t?t:u(t),j):m},j.subject=function(t){return arguments.length?(y="function"==typeof t?t:u(t),j):y},j.touchable=function(t){return arguments.length?(b="function"==typeof t?t:u(!!t),j):b},j.on=function(){var t=w.on.apply(w,arguments);return t===w?j:t},j.clickDistance=function(t){return arguments.length?(T=(t=+t)*t,j):Math.sqrt(T)},j},t.dragDisable=r,t.dragEnable=c,Object.defineProperty(t,"__esModule",{value:!0})});

},{"d3-dispatch":8,"d3-selection":14}],10:[function(require,module,exports){
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(n){"use strict";function t(n){return((n*=2)<=1?n*n:--n*(2-n)+1)/2}function e(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var u=function n(t){function e(n){return Math.pow(n,t)}return t=+t,e.exponent=n,e}(3),r=function n(t){function e(n){return 1-Math.pow(1-n,t)}return t=+t,e.exponent=n,e}(3),a=function n(t){function e(n){return((n*=2)<=1?Math.pow(n,t):2-Math.pow(2-n,t))/2}return t=+t,e.exponent=n,e}(3),o=Math.PI,i=o/2;function c(n){return(1-Math.cos(o*n))/2}function s(n){return((n*=2)<=1?Math.pow(2,10*n-10):2-Math.pow(2,10-10*n))/2}function f(n){return((n*=2)<=1?1-Math.sqrt(1-n*n):Math.sqrt(1-(n-=2)*n)+1)/2}var h=4/11,p=6/11,M=8/11,d=.75,I=9/11,O=10/11,l=.9375,x=21/22,w=63/64,v=1/h/h;function m(n){return(n=+n)<h?v*n*n:n<M?v*(n-=p)*n+d:n<O?v*(n-=I)*n+l:v*(n-=x)*n+w}var y=function n(t){function e(n){return n*n*((t+1)*n-t)}return t=+t,e.overshoot=n,e}(1.70158),B=function n(t){function e(n){return--n*n*((t+1)*n+t)+1}return t=+t,e.overshoot=n,e}(1.70158),C=function n(t){function e(n){return((n*=2)<1?n*n*((t+1)*n-t):(n-=2)*n*((t+1)*n+t)+2)/2}return t=+t,e.overshoot=n,e}(1.70158),E=2*Math.PI,P=function n(t,e){var u=Math.asin(1/(t=Math.max(1,t)))*(e/=E);function r(n){return t*Math.pow(2,10*--n)*Math.sin((u-n)/e)}return r.amplitude=function(t){return n(t,e*E)},r.period=function(e){return n(t,e)},r}(1,.3),b=function n(t,e){var u=Math.asin(1/(t=Math.max(1,t)))*(e/=E);function r(n){return 1-t*Math.pow(2,-10*(n=+n))*Math.sin((n+u)/e)}return r.amplitude=function(t){return n(t,e*E)},r.period=function(e){return n(t,e)},r}(1,.3),k=function n(t,e){var u=Math.asin(1/(t=Math.max(1,t)))*(e/=E);function r(n){return((n=2*n-1)<0?t*Math.pow(2,10*n)*Math.sin((u-n)/e):2-t*Math.pow(2,-10*n)*Math.sin((u+n)/e))/2}return r.amplitude=function(t){return n(t,e*E)},r.period=function(e){return n(t,e)},r}(1,.3);n.easeLinear=function(n){return+n},n.easeQuad=t,n.easeQuadIn=function(n){return n*n},n.easeQuadOut=function(n){return n*(2-n)},n.easeQuadInOut=t,n.easeCubic=e,n.easeCubicIn=function(n){return n*n*n},n.easeCubicOut=function(n){return--n*n*n+1},n.easeCubicInOut=e,n.easePoly=a,n.easePolyIn=u,n.easePolyOut=r,n.easePolyInOut=a,n.easeSin=c,n.easeSinIn=function(n){return 1-Math.cos(n*i)},n.easeSinOut=function(n){return Math.sin(n*i)},n.easeSinInOut=c,n.easeExp=s,n.easeExpIn=function(n){return Math.pow(2,10*n-10)},n.easeExpOut=function(n){return 1-Math.pow(2,-10*n)},n.easeExpInOut=s,n.easeCircle=f,n.easeCircleIn=function(n){return 1-Math.sqrt(1-n*n)},n.easeCircleOut=function(n){return Math.sqrt(1- --n*n)},n.easeCircleInOut=f,n.easeBounce=m,n.easeBounceIn=function(n){return 1-m(1-n)},n.easeBounceOut=m,n.easeBounceInOut=function(n){return((n*=2)<=1?1-m(1-n):m(n-1)+1)/2},n.easeBack=C,n.easeBackIn=y,n.easeBackOut=B,n.easeBackInOut=C,n.easeElastic=b,n.easeElasticIn=P,n.easeElasticOut=b,n.easeElasticInOut=k,Object.defineProperty(n,"__esModule",{value:!0})});

},{}],11:[function(require,module,exports){
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(t){"use strict";function n(t,n){if((r=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var r,e=t.slice(0,r);return[e.length>1?e[0]+e.slice(2):e,+t.slice(r+1)]}function r(t){return(t=n(Math.abs(t)))?t[1]:NaN}var e,i=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function o(t){return new a(t)}function a(t){if(!(n=i.exec(t)))throw new Error("invalid format: "+t);var n;this.fill=n[1]||" ",this.align=n[2]||">",this.sign=n[3]||"-",this.symbol=n[4]||"",this.zero=!!n[5],this.width=n[6]&&+n[6],this.comma=!!n[7],this.precision=n[8]&&+n[8].slice(1),this.trim=!!n[9],this.type=n[10]||""}function u(t,r){var e=n(t,r);if(!e)return t+"";var i=e[0],o=e[1];return o<0?"0."+new Array(-o).join("0")+i:i.length>o+1?i.slice(0,o+1)+"."+i.slice(o+1):i+new Array(o-i.length+2).join("0")}o.prototype=a.prototype,a.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(null==this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(null==this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var s={"%":function(t,n){return(100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return u(100*t,n)},r:u,s:function(t,r){var i=n(t,r);if(!i)return t+"";var o=i[0],a=i[1],u=a-(e=3*Math.max(-8,Math.min(8,Math.floor(a/3))))+1,s=o.length;return u===s?o:u>s?o+new Array(u-s+1).join("0"):u>0?o.slice(0,u)+"."+o.slice(u):"0."+new Array(1-u).join("0")+n(t,Math.max(0,r+u-1))[0]},X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}};function c(t){return t}var f,h=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function l(t){var n,i,a=t.grouping&&t.thousands?(n=t.grouping,i=t.thousands,function(t,r){for(var e=t.length,o=[],a=0,u=n[0],s=0;e>0&&u>0&&(s+u+1>r&&(u=Math.max(1,r-s)),o.push(t.substring(e-=u,e+u)),!((s+=u+1)>r));)u=n[a=(a+1)%n.length];return o.reverse().join(i)}):c,u=t.currency,f=t.decimal,l=t.numerals?function(t){return function(n){return n.replace(/[0-9]/g,function(n){return t[+n]})}}(t.numerals):c,m=t.percent||"%";function p(t){var n=(t=o(t)).fill,r=t.align,i=t.sign,c=t.symbol,p=t.zero,g=t.width,d=t.comma,M=t.precision,x=t.trim,y=t.type;"n"===y?(d=!0,y="g"):s[y]||(null==M&&(M=12),x=!0,y="g"),(p||"0"===n&&"="===r)&&(p=!0,n="0",r="=");var b="$"===c?u[0]:"#"===c&&/[boxX]/.test(y)?"0"+y.toLowerCase():"",v="$"===c?u[1]:/[%p]/.test(y)?m:"",w=s[y],j=/[defgprs%]/.test(y);function k(t){var o,u,s,c=b,m=v;if("c"===y)m=w(t)+m,t="";else{var k=(t=+t)<0;if(t=w(Math.abs(t),M),x&&(t=function(t){t:for(var n,r=t.length,e=1,i=-1;e<r;++e)switch(t[e]){case".":i=n=e;break;case"0":0===i&&(i=e),n=e;break;default:if(i>0){if(!+t[e])break t;i=0}}return i>0?t.slice(0,i)+t.slice(n+1):t}(t)),k&&0==+t&&(k=!1),c=(k?"("===i?i:"-":"-"===i||"("===i?"":i)+c,m=("s"===y?h[8+e/3]:"")+m+(k&&"("===i?")":""),j)for(o=-1,u=t.length;++o<u;)if(48>(s=t.charCodeAt(o))||s>57){m=(46===s?f+t.slice(o+1):t.slice(o))+m,t=t.slice(0,o);break}}d&&!p&&(t=a(t,1/0));var S=c.length+t.length+m.length,P=S<g?new Array(g-S+1).join(n):"";switch(d&&p&&(t=a(P+t,P.length?g-m.length:1/0),P=""),r){case"<":t=c+t+m+P;break;case"=":t=c+P+t+m;break;case"^":t=P.slice(0,S=P.length>>1)+c+t+m+P.slice(S);break;default:t=P+c+t+m}return l(t)}return M=null==M?6:/[gprs]/.test(y)?Math.max(1,Math.min(21,M)):Math.max(0,Math.min(20,M)),k.toString=function(){return t+""},k}return{format:p,formatPrefix:function(t,n){var e=p(((t=o(t)).type="f",t)),i=3*Math.max(-8,Math.min(8,Math.floor(r(n)/3))),a=Math.pow(10,-i),u=h[8+i/3];return function(t){return e(a*t)+u}}}}function m(n){return f=l(n),t.format=f.format,t.formatPrefix=f.formatPrefix,f}m({decimal:".",thousands:",",grouping:[3],currency:["$",""]}),t.formatDefaultLocale=m,t.formatLocale=l,t.formatSpecifier=o,t.precisionFixed=function(t){return Math.max(0,-r(Math.abs(t)))},t.precisionPrefix=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(r(n)/3)))-r(Math.abs(t)))},t.precisionRound=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,r(n)-r(t))+1},Object.defineProperty(t,"__esModule",{value:!0})});

},{}],12:[function(require,module,exports){
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("d3-color")): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports,__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(t,n){"use strict";function r(t,n,r,e,o){var a=t*t,u=a*t;return((1-3*t+3*a-u)*n+(4-6*a+3*u)*r+(1+3*t+3*a-3*u)*e+u*o)/6}function e(t){var n=t.length-1;return function(e){var o=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),a=t[o],u=t[o+1],i=o>0?t[o-1]:2*a-u,l=o<n-1?t[o+2]:2*u-a;return r((e-o/n)*n,i,a,u,l)}}function o(t){var n=t.length;return function(e){var o=Math.floor(((e%=1)<0?++e:e)*n),a=t[(o+n-1)%n],u=t[o%n],i=t[(o+1)%n],l=t[(o+2)%n];return r((e-o/n)*n,a,u,i,l)}}function a(t){return function(){return t}}function u(t,n){return function(r){return t+r*n}}function i(t,n){var r=n-t;return r?u(t,r>180||r<-180?r-360*Math.round(r/360):r):a(isNaN(t)?n:t)}function l(t){return 1==(t=+t)?c:function(n,r){return r-n?function(t,n,r){return t=Math.pow(t,r),n=Math.pow(n,r)-t,r=1/r,function(e){return Math.pow(t+e*n,r)}}(n,r,t):a(isNaN(n)?r:n)}}function c(t,n){var r=n-t;return r?u(t,r):a(isNaN(t)?n:t)}var f=function t(r){var e=l(r);function o(t,r){var o=e((t=n.rgb(t)).r,(r=n.rgb(r)).r),a=e(t.g,r.g),u=e(t.b,r.b),i=c(t.opacity,r.opacity);return function(n){return t.r=o(n),t.g=a(n),t.b=u(n),t.opacity=i(n),t+""}}return o.gamma=t,o}(1);function s(t){return function(r){var e,o,a=r.length,u=new Array(a),i=new Array(a),l=new Array(a);for(e=0;e<a;++e)o=n.rgb(r[e]),u[e]=o.r||0,i[e]=o.g||0,l[e]=o.b||0;return u=t(u),i=t(i),l=t(l),o.opacity=1,function(t){return o.r=u(t),o.g=i(t),o.b=l(t),o+""}}}var p=s(e),h=s(o);function v(t,n){var r,e=n?n.length:0,o=t?Math.min(e,t.length):0,a=new Array(o),u=new Array(e);for(r=0;r<o;++r)a[r]=m(t[r],n[r]);for(;r<e;++r)u[r]=n[r];return function(t){for(r=0;r<o;++r)u[r]=a[r](t);return u}}function g(t,n){var r=new Date;return n-=t=+t,function(e){return r.setTime(t+n*e),r}}function d(t,n){return n-=t=+t,function(r){return t+n*r}}function y(t,n){var r,e={},o={};for(r in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)r in t?e[r]=m(t[r],n[r]):o[r]=n[r];return function(t){for(r in e)o[r]=e[r](t);return o}}var x=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,M=new RegExp(x.source,"g");function b(t,n){var r,e,o,a=x.lastIndex=M.lastIndex=0,u=-1,i=[],l=[];for(t+="",n+="";(r=x.exec(t))&&(e=M.exec(n));)(o=e.index)>a&&(o=n.slice(a,o),i[u]?i[u]+=o:i[++u]=o),(r=r[0])===(e=e[0])?i[u]?i[u]+=e:i[++u]=e:(i[++u]=null,l.push({i:u,x:d(r,e)})),a=M.lastIndex;return a<n.length&&(o=n.slice(a),i[u]?i[u]+=o:i[++u]=o),i.length<2?l[0]?function(t){return function(n){return t(n)+""}}(l[0].x):function(t){return function(){return t}}(n):(n=l.length,function(t){for(var r,e=0;e<n;++e)i[(r=l[e]).i]=r.x(t);return i.join("")})}function m(t,r){var e,o=typeof r;return null==r||"boolean"===o?a(r):("number"===o?d:"string"===o?(e=n.color(r))?(r=e,f):b:r instanceof n.color?f:r instanceof Date?g:Array.isArray(r)?v:"function"!=typeof r.valueOf&&"function"!=typeof r.toString||isNaN(r)?y:d)(t,r)}var w,X,A,N,C=180/Math.PI,Y={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function j(t,n,r,e,o,a){var u,i,l;return(u=Math.sqrt(t*t+n*n))&&(t/=u,n/=u),(l=t*r+n*e)&&(r-=t*l,e-=n*l),(i=Math.sqrt(r*r+e*e))&&(r/=i,e/=i,l/=i),t*e<n*r&&(t=-t,n=-n,l=-l,u=-u),{translateX:o,translateY:a,rotate:Math.atan2(n,t)*C,skewX:Math.atan(l)*C,scaleX:u,scaleY:i}}function q(t,n,r,e){function o(t){return t.length?t.pop()+" ":""}return function(a,u){var i=[],l=[];return a=t(a),u=t(u),function(t,e,o,a,u,i){if(t!==o||e!==a){var l=u.push("translate(",null,n,null,r);i.push({i:l-4,x:d(t,o)},{i:l-2,x:d(e,a)})}else(o||a)&&u.push("translate("+o+n+a+r)}(a.translateX,a.translateY,u.translateX,u.translateY,i,l),function(t,n,r,a){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),a.push({i:r.push(o(r)+"rotate(",null,e)-2,x:d(t,n)})):n&&r.push(o(r)+"rotate("+n+e)}(a.rotate,u.rotate,i,l),function(t,n,r,a){t!==n?a.push({i:r.push(o(r)+"skewX(",null,e)-2,x:d(t,n)}):n&&r.push(o(r)+"skewX("+n+e)}(a.skewX,u.skewX,i,l),function(t,n,r,e,a,u){if(t!==r||n!==e){var i=a.push(o(a)+"scale(",null,",",null,")");u.push({i:i-4,x:d(t,r)},{i:i-2,x:d(n,e)})}else 1===r&&1===e||a.push(o(a)+"scale("+r+","+e+")")}(a.scaleX,a.scaleY,u.scaleX,u.scaleY,i,l),a=u=null,function(t){for(var n,r=-1,e=l.length;++r<e;)i[(n=l[r]).i]=n.x(t);return i.join("")}}}var k=q(function(t){return"none"===t?Y:(w||(w=document.createElement("DIV"),X=document.documentElement,A=document.defaultView),w.style.transform=t,t=A.getComputedStyle(X.appendChild(w),null).getPropertyValue("transform"),X.removeChild(w),j(+(t=t.slice(7,-1).split(","))[0],+t[1],+t[2],+t[3],+t[4],+t[5]))},"px, ","px)","deg)"),R=q(function(t){return null==t?Y:(N||(N=document.createElementNS("http://www.w3.org/2000/svg","g")),N.setAttribute("transform",t),(t=N.transform.baseVal.consolidate())?j((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):Y)},", ",")",")"),S=Math.SQRT2,D=2,E=4,H=1e-12;function I(t){return((t=Math.exp(t))+1/t)/2}function B(t){return function(r,e){var o=t((r=n.hsl(r)).h,(e=n.hsl(e)).h),a=c(r.s,e.s),u=c(r.l,e.l),i=c(r.opacity,e.opacity);return function(t){return r.h=o(t),r.s=a(t),r.l=u(t),r.opacity=i(t),r+""}}}var L=B(i),T=B(c);function V(t){return function(r,e){var o=t((r=n.hcl(r)).h,(e=n.hcl(e)).h),a=c(r.c,e.c),u=c(r.l,e.l),i=c(r.opacity,e.opacity);return function(t){return r.h=o(t),r.c=a(t),r.l=u(t),r.opacity=i(t),r+""}}}var O=V(i),P=V(c);function _(t){return function r(e){function o(r,o){var a=t((r=n.cubehelix(r)).h,(o=n.cubehelix(o)).h),u=c(r.s,o.s),i=c(r.l,o.l),l=c(r.opacity,o.opacity);return function(t){return r.h=a(t),r.s=u(t),r.l=i(Math.pow(t,e)),r.opacity=l(t),r+""}}return e=+e,o.gamma=r,o}(1)}var z=_(i),Q=_(c);t.interpolate=m,t.interpolateArray=v,t.interpolateBasis=e,t.interpolateBasisClosed=o,t.interpolateDate=g,t.interpolateDiscrete=function(t){var n=t.length;return function(r){return t[Math.max(0,Math.min(n-1,Math.floor(r*n)))]}},t.interpolateHue=function(t,n){var r=i(+t,+n);return function(t){var n=r(t);return n-360*Math.floor(n/360)}},t.interpolateNumber=d,t.interpolateObject=y,t.interpolateRound=function(t,n){return n-=t=+t,function(r){return Math.round(t+n*r)}},t.interpolateString=b,t.interpolateTransformCss=k,t.interpolateTransformSvg=R,t.interpolateZoom=function(t,n){var r,e,o=t[0],a=t[1],u=t[2],i=n[0],l=n[1],c=n[2],f=i-o,s=l-a,p=f*f+s*s;if(p<H)e=Math.log(c/u)/S,r=function(t){return[o+t*f,a+t*s,u*Math.exp(S*t*e)]};else{var h=Math.sqrt(p),v=(c*c-u*u+E*p)/(2*u*D*h),g=(c*c-u*u-E*p)/(2*c*D*h),d=Math.log(Math.sqrt(v*v+1)-v),y=Math.log(Math.sqrt(g*g+1)-g);e=(y-d)/S,r=function(t){var n,r=t*e,i=I(d),l=u/(D*h)*(i*(n=S*r+d,((n=Math.exp(2*n))-1)/(n+1))-function(t){return((t=Math.exp(t))-1/t)/2}(d));return[o+l*f,a+l*s,u*i/I(S*r+d)]}}return r.duration=1e3*e,r},t.interpolateRgb=f,t.interpolateRgbBasis=p,t.interpolateRgbBasisClosed=h,t.interpolateHsl=L,t.interpolateHslLong=T,t.interpolateLab=function(t,r){var e=c((t=n.lab(t)).l,(r=n.lab(r)).l),o=c(t.a,r.a),a=c(t.b,r.b),u=c(t.opacity,r.opacity);return function(n){return t.l=e(n),t.a=o(n),t.b=a(n),t.opacity=u(n),t+""}},t.interpolateHcl=O,t.interpolateHclLong=P,t.interpolateCubehelix=z,t.interpolateCubehelixLong=Q,t.piecewise=function(t,n){for(var r=0,e=n.length-1,o=n[0],a=new Array(e<0?0:e);r<e;)a[r]=t(o,o=n[++r]);return function(t){var n=Math.max(0,Math.min(e-1,Math.floor(t*=e)));return a[n](t-n)}},t.quantize=function(t,n){for(var r=new Array(n),e=0;e<n;++e)r[e]=t(e/(n-1));return r},Object.defineProperty(t,"__esModule",{value:!0})});

},{"d3-color":7}],13:[function(require,module,exports){
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("d3-array"),require("d3-interpolate"),require("d3-format"),require("d3-time"),require("d3-time-format")): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports,__webpack_require__(9),__webpack_require__(3),__webpack_require__(11),__webpack_require__(1),__webpack_require__(13)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(n,t,r,e,u,i){"use strict";function o(n,t){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(t).domain(n)}return this}function a(n,t){switch(arguments.length){case 0:break;case 1:this.interpolator(n);break;default:this.interpolator(t).domain(n)}return this}const c=Symbol("implicit");function f(){var n=new Map,t=[],r=[],e=c;function u(u){var i=u+"",o=n.get(i);if(!o){if(e!==c)return e;n.set(i,o=t.push(u))}return r[(o-1)%r.length]}return u.domain=function(r){if(!arguments.length)return t.slice();t=[],n=new Map;for(const e of r){const r=e+"";n.has(r)||n.set(r,t.push(e))}return u},u.range=function(n){return arguments.length?(r=Array.from(n),u):r.slice()},u.unknown=function(n){return arguments.length?(e=n,u):e},u.copy=function(){return f(t,r).unknown(e)},o.apply(u,arguments),u}function l(){var n,r,e=f().unknown(void 0),u=e.domain,i=e.range,a=0,c=1,p=!1,s=0,h=0,g=.5;function m(){var e=u().length,o=c<a,f=o?c:a,l=o?a:c;n=(l-f)/Math.max(1,e-s+2*h),p&&(n=Math.floor(n)),f+=(l-f-n*(e-s))*g,r=n*(1-s),p&&(f=Math.round(f),r=Math.round(r));var m=t.range(e).map(function(t){return f+n*t});return i(o?m.reverse():m)}return delete e.unknown,e.domain=function(n){return arguments.length?(u(n),m()):u()},e.range=function(n){return arguments.length?([a,c]=n,a=+a,c=+c,m()):[a,c]},e.rangeRound=function(n){return[a,c]=n,a=+a,c=+c,p=!0,m()},e.bandwidth=function(){return r},e.step=function(){return n},e.round=function(n){return arguments.length?(p=!!n,m()):p},e.padding=function(n){return arguments.length?(s=Math.min(1,h=+n),m()):s},e.paddingInner=function(n){return arguments.length?(s=Math.min(1,n),m()):s},e.paddingOuter=function(n){return arguments.length?(h=+n,m()):h},e.align=function(n){return arguments.length?(g=Math.max(0,Math.min(1,n)),m()):g},e.copy=function(){return l(u(),[a,c]).round(p).paddingInner(s).paddingOuter(h).align(g)},o.apply(m(),arguments)}function p(n){return+n}var s=[0,1];function h(n){return n}function g(n,t){return(t-=n=+n)?function(r){return(r-n)/t}:(r=isNaN(t)?NaN:.5,function(){return r});var r}function m(n){var t,r=n[0],e=n[n.length-1];return r>e&&(t=r,r=e,e=t),function(n){return Math.max(r,Math.min(e,n))}}function d(n,t,r){var e=n[0],u=n[1],i=t[0],o=t[1];return u<e?(e=g(u,e),i=r(o,i)):(e=g(e,u),i=r(i,o)),function(n){return i(e(n))}}function y(n,r,e){var u=Math.min(n.length,r.length)-1,i=new Array(u),o=new Array(u),a=-1;for(n[u]<n[0]&&(n=n.slice().reverse(),r=r.slice().reverse());++a<u;)i[a]=g(n[a],n[a+1]),o[a]=e(r[a],r[a+1]);return function(r){var e=t.bisect(n,r,1,u)-1;return o[e](i[e](r))}}function v(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function M(){var n,t,e,u,i,o,a=s,c=s,f=r.interpolate,l=h;function g(){return u=Math.min(a.length,c.length)>2?y:d,i=o=null,v}function v(t){return isNaN(t=+t)?e:(i||(i=u(a.map(n),c,f)))(n(l(t)))}return v.invert=function(e){return l(t((o||(o=u(c,a.map(n),r.interpolateNumber)))(e)))},v.domain=function(n){return arguments.length?(a=Array.from(n,p),l===h||(l=m(a)),g()):a.slice()},v.range=function(n){return arguments.length?(c=Array.from(n),g()):c.slice()},v.rangeRound=function(n){return c=Array.from(n),f=r.interpolateRound,g()},v.clamp=function(n){return arguments.length?(l=n?m(a):h,v):l!==h},v.interpolate=function(n){return arguments.length?(f=n,g()):f},v.unknown=function(n){return arguments.length?(e=n,v):e},function(r,e){return n=r,t=e,g()}}function k(n,t){return M()(n,t)}function w(n,r,u,i){var o,a=t.tickStep(n,r,u);switch((i=e.formatSpecifier(null==i?",f":i)).type){case"s":var c=Math.max(Math.abs(n),Math.abs(r));return null!=i.precision||isNaN(o=e.precisionPrefix(a,c))||(i.precision=o),e.formatPrefix(i,c);case"":case"e":case"g":case"p":case"r":null!=i.precision||isNaN(o=e.precisionRound(a,Math.max(Math.abs(n),Math.abs(r))))||(i.precision=o-("e"===i.type));break;case"f":case"%":null!=i.precision||isNaN(o=e.precisionFixed(a))||(i.precision=o-2*("%"===i.type))}return e.format(i)}function x(n){var r=n.domain;return n.ticks=function(n){var e=r();return t.ticks(e[0],e[e.length-1],null==n?10:n)},n.tickFormat=function(n,t){var e=r();return w(e[0],e[e.length-1],null==n?10:n,t)},n.nice=function(e){null==e&&(e=10);var u,i=r(),o=0,a=i.length-1,c=i[o],f=i[a];return f<c&&(u=c,c=f,f=u,u=o,o=a,a=u),(u=t.tickIncrement(c,f,e))>0?(c=Math.floor(c/u)*u,f=Math.ceil(f/u)*u,u=t.tickIncrement(c,f,e)):u<0&&(c=Math.ceil(c*u)/u,f=Math.floor(f*u)/u,u=t.tickIncrement(c,f,e)),u>0?(i[o]=Math.floor(c/u)*u,i[a]=Math.ceil(f/u)*u,r(i)):u<0&&(i[o]=Math.ceil(c*u)/u,i[a]=Math.floor(f*u)/u,r(i)),n},n}function N(n,t){var r,e=0,u=(n=n.slice()).length-1,i=n[e],o=n[u];return o<i&&(r=e,e=u,u=r,r=i,i=o,o=r),n[e]=t.floor(i),n[u]=t.ceil(o),n}function b(n){return Math.log(n)}function S(n){return Math.exp(n)}function q(n){return-Math.log(-n)}function A(n){return-Math.exp(-n)}function D(n){return isFinite(n)?+("1e"+n):n<0?0:n}function I(n){return function(t){return-n(-t)}}function O(n){var r,u,i=n(b,S),o=i.domain,a=10;function c(){return r=function(n){return n===Math.E?Math.log:10===n&&Math.log10||2===n&&Math.log2||(n=Math.log(n),function(t){return Math.log(t)/n})}(a),u=function(n){return 10===n?D:n===Math.E?Math.exp:function(t){return Math.pow(n,t)}}(a),o()[0]<0?(r=I(r),u=I(u),n(q,A)):n(b,S),i}return i.base=function(n){return arguments.length?(a=+n,c()):a},i.domain=function(n){return arguments.length?(o(n),c()):o()},i.ticks=function(n){var e,i=o(),c=i[0],f=i[i.length-1];(e=f<c)&&(h=c,c=f,f=h);var l,p,s,h=r(c),g=r(f),m=null==n?10:+n,d=[];if(!(a%1)&&g-h<m){if(h=Math.round(h)-1,g=Math.round(g)+1,c>0){for(;h<g;++h)for(p=1,l=u(h);p<a;++p)if(!((s=l*p)<c)){if(s>f)break;d.push(s)}}else for(;h<g;++h)for(p=a-1,l=u(h);p>=1;--p)if(!((s=l*p)<c)){if(s>f)break;d.push(s)}}else d=t.ticks(h,g,Math.min(g-h,m)).map(u);return e?d.reverse():d},i.tickFormat=function(n,t){if(null==t&&(t=10===a?".0e":","),"function"!=typeof t&&(t=e.format(t)),n===1/0)return t;null==n&&(n=10);var o=Math.max(1,a*n/i.ticks().length);return function(n){var e=n/u(Math.round(r(n)));return e*a<a-.5&&(e*=a),e<=o?t(n):""}},i.nice=function(){return o(N(o(),{floor:function(n){return u(Math.floor(r(n)))},ceil:function(n){return u(Math.ceil(r(n)))}}))},i}function F(n){return function(t){return Math.sign(t)*Math.log1p(Math.abs(t/n))}}function P(n){return function(t){return Math.sign(t)*Math.expm1(Math.abs(t))*n}}function E(n){var t=1,r=n(F(t),P(t));return r.constant=function(r){return arguments.length?n(F(t=+r),P(t)):t},x(r)}function L(n){return function(t){return t<0?-Math.pow(-t,n):Math.pow(t,n)}}function R(n){return n<0?-Math.sqrt(-n):Math.sqrt(n)}function T(n){return n<0?-n*n:n*n}function Q(n){var t=n(h,h),r=1;return t.exponent=function(t){return arguments.length?1===(r=+t)?n(h,h):.5===r?n(R,T):n(L(r),L(1/r)):r},x(t)}function U(){var n=Q(M());return n.copy=function(){return v(n,U()).exponent(n.exponent())},o.apply(n,arguments),n}var Y=1e3,j=60*Y,B=60*j,C=24*B,H=7*C,W=30*C,_=365*C;function z(n){return new Date(n)}function G(n){return n instanceof Date?+n:+new Date(+n)}function J(n,r,e,u,i,o,a,c,f){var l=k(h,h),p=l.invert,s=l.domain,g=f(".%L"),m=f(":%S"),d=f("%I:%M"),y=f("%I %p"),M=f("%a %d"),w=f("%b %d"),x=f("%B"),b=f("%Y"),S=[[a,1,Y],[a,5,5*Y],[a,15,15*Y],[a,30,30*Y],[o,1,j],[o,5,5*j],[o,15,15*j],[o,30,30*j],[i,1,B],[i,3,3*B],[i,6,6*B],[i,12,12*B],[u,1,C],[u,2,2*C],[e,1,H],[r,1,W],[r,3,3*W],[n,1,_]];function q(t){return(a(t)<t?g:o(t)<t?m:i(t)<t?d:u(t)<t?y:r(t)<t?e(t)<t?M:w:n(t)<t?x:b)(t)}function A(r,e,u,i){if(null==r&&(r=10),"number"==typeof r){var o=Math.abs(u-e)/r,a=t.bisector(function(n){return n[2]}).right(S,o);a===S.length?(i=t.tickStep(e/_,u/_,r),r=n):a?(i=(a=S[o/S[a-1][2]<S[a][2]/o?a-1:a])[1],r=a[0]):(i=Math.max(t.tickStep(e,u,r),1),r=c)}return null==i?r:r.every(i)}return l.invert=function(n){return new Date(p(n))},l.domain=function(n){return arguments.length?s(Array.from(n,G)):s().map(z)},l.ticks=function(n,t){var r,e=s(),u=e[0],i=e[e.length-1],o=i<u;return o&&(r=u,u=i,i=r),r=(r=A(n,u,i,t))?r.range(u,i+1):[],o?r.reverse():r},l.tickFormat=function(n,t){return null==t?q:f(t)},l.nice=function(n,t){var r=s();return(n=A(n,r[0],r[r.length-1],t))?s(N(r,n)):l},l.copy=function(){return v(l,J(n,r,e,u,i,o,a,c,f))},l}function K(){var n,t,r,e,u,i=0,o=1,a=h,c=!1;function f(t){return isNaN(t=+t)?u:a(0===r?.5:(t=(e(t)-n)*r,c?Math.max(0,Math.min(1,t)):t))}return f.domain=function(u){return arguments.length?([i,o]=u,n=e(i=+i),t=e(o=+o),r=n===t?0:1/(t-n),f):[i,o]},f.clamp=function(n){return arguments.length?(c=!!n,f):c},f.interpolator=function(n){return arguments.length?(a=n,f):a},f.unknown=function(n){return arguments.length?(u=n,f):u},function(u){return e=u,n=u(i),t=u(o),r=n===t?0:1/(t-n),f}}function V(n,t){return t.domain(n.domain()).interpolator(n.interpolator()).clamp(n.clamp()).unknown(n.unknown())}function X(){var n=Q(K());return n.copy=function(){return V(n,X()).exponent(n.exponent())},a.apply(n,arguments)}function Z(){var n,t,r,e,u,i,o,a=0,c=.5,f=1,l=h,p=!1;function s(n){return isNaN(n=+n)?o:(n=.5+((n=+i(n))-t)*(n<t?e:u),l(p?Math.max(0,Math.min(1,n)):n))}return s.domain=function(o){return arguments.length?([a,c,f]=o,n=i(a=+a),t=i(c=+c),r=i(f=+f),e=n===t?0:.5/(t-n),u=t===r?0:.5/(r-t),s):[a,c,f]},s.clamp=function(n){return arguments.length?(p=!!n,s):p},s.interpolator=function(n){return arguments.length?(l=n,s):l},s.unknown=function(n){return arguments.length?(o=n,s):o},function(o){return i=o,n=o(a),t=o(c),r=o(f),e=n===t?0:.5/(t-n),u=t===r?0:.5/(r-t),s}}function $(){var n=Q(Z());return n.copy=function(){return V(n,$()).exponent(n.exponent())},a.apply(n,arguments)}n.scaleBand=l,n.scalePoint=function(){return function n(t){var r=t.copy;return t.padding=t.paddingOuter,delete t.paddingInner,delete t.paddingOuter,t.copy=function(){return n(r())},t}(l.apply(null,arguments).paddingInner(1))},n.scaleIdentity=function n(t){var r;function e(n){return isNaN(n=+n)?r:n}return e.invert=e,e.domain=e.range=function(n){return arguments.length?(t=Array.from(n,p),e):t.slice()},e.unknown=function(n){return arguments.length?(r=n,e):r},e.copy=function(){return n(t).unknown(r)},t=arguments.length?Array.from(t,p):[0,1],x(e)},n.scaleLinear=function n(){var t=k(h,h);return t.copy=function(){return v(t,n())},o.apply(t,arguments),x(t)},n.scaleLog=function n(){var t=O(M()).domain([1,10]);return t.copy=function(){return v(t,n()).base(t.base())},o.apply(t,arguments),t},n.scaleSymlog=function n(){var t=E(M());return t.copy=function(){return v(t,n()).constant(t.constant())},o.apply(t,arguments)},n.scaleOrdinal=f,n.scaleImplicit=c,n.scalePow=U,n.scaleSqrt=function(){return U.apply(null,arguments).exponent(.5)},n.scaleQuantile=function n(){var r,e=[],u=[],i=[];function a(){var n=0,r=Math.max(1,u.length);for(i=new Array(r-1);++n<r;)i[n-1]=t.quantile(e,n/r);return c}function c(n){return isNaN(n=+n)?r:u[t.bisect(i,n)]}return c.invertExtent=function(n){var t=u.indexOf(n);return t<0?[NaN,NaN]:[t>0?i[t-1]:e[0],t<i.length?i[t]:e[e.length-1]]},c.domain=function(n){if(!arguments.length)return e.slice();e=[];for(let t of n)null==t||isNaN(t=+t)||e.push(t);return e.sort(t.ascending),a()},c.range=function(n){return arguments.length?(u=Array.from(n),a()):u.slice()},c.unknown=function(n){return arguments.length?(r=n,c):r},c.quantiles=function(){return i.slice()},c.copy=function(){return n().domain(e).range(u).unknown(r)},o.apply(c,arguments)},n.scaleQuantize=function n(){var r,e=0,u=1,i=1,a=[.5],c=[0,1];function f(n){return n<=n?c[t.bisect(a,n,0,i)]:r}function l(){var n=-1;for(a=new Array(i);++n<i;)a[n]=((n+1)*u-(n-i)*e)/(i+1);return f}return f.domain=function(n){return arguments.length?([e,u]=n,e=+e,u=+u,l()):[e,u]},f.range=function(n){return arguments.length?(i=(c=Array.from(n)).length-1,l()):c.slice()},f.invertExtent=function(n){var t=c.indexOf(n);return t<0?[NaN,NaN]:t<1?[e,a[0]]:t>=i?[a[i-1],u]:[a[t-1],a[t]]},f.unknown=function(n){return arguments.length?(r=n,f):f},f.thresholds=function(){return a.slice()},f.copy=function(){return n().domain([e,u]).range(c).unknown(r)},o.apply(x(f),arguments)},n.scaleThreshold=function n(){var r,e=[.5],u=[0,1],i=1;function a(n){return n<=n?u[t.bisect(e,n,0,i)]:r}return a.domain=function(n){return arguments.length?(e=Array.from(n),i=Math.min(e.length,u.length-1),a):e.slice()},a.range=function(n){return arguments.length?(u=Array.from(n),i=Math.min(e.length,u.length-1),a):u.slice()},a.invertExtent=function(n){var t=u.indexOf(n);return[e[t-1],e[t]]},a.unknown=function(n){return arguments.length?(r=n,a):r},a.copy=function(){return n().domain(e).range(u).unknown(r)},o.apply(a,arguments)},n.scaleTime=function(){return o.apply(J(u.timeYear,u.timeMonth,u.timeWeek,u.timeDay,u.timeHour,u.timeMinute,u.timeSecond,u.timeMillisecond,i.timeFormat).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)},n.scaleUtc=function(){return o.apply(J(u.utcYear,u.utcMonth,u.utcWeek,u.utcDay,u.utcHour,u.utcMinute,u.utcSecond,u.utcMillisecond,i.utcFormat).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)},n.scaleSequential=function n(){var t=x(K()(h));return t.copy=function(){return V(t,n())},a.apply(t,arguments)},n.scaleSequentialLog=function n(){var t=O(K()).domain([1,10]);return t.copy=function(){return V(t,n()).base(t.base())},a.apply(t,arguments)},n.scaleSequentialPow=X,n.scaleSequentialSqrt=function(){return X.apply(null,arguments).exponent(.5)},n.scaleSequentialSymlog=function n(){var t=E(K());return t.copy=function(){return V(t,n()).constant(t.constant())},a.apply(t,arguments)},n.scaleSequentialQuantile=function n(){var r=[],e=h;function u(n){if(!isNaN(n=+n))return e((t.bisect(r,n)-1)/(r.length-1))}return u.domain=function(n){if(!arguments.length)return r.slice();r=[];for(let t of n)null==t||isNaN(t=+t)||r.push(t);return r.sort(t.ascending),u},u.interpolator=function(n){return arguments.length?(e=n,u):e},u.copy=function(){return n(e).domain(r)},a.apply(u,arguments)},n.scaleDiverging=function n(){var t=x(Z()(h));return t.copy=function(){return V(t,n())},a.apply(t,arguments)},n.scaleDivergingLog=function n(){var t=O(Z()).domain([.1,1,10]);return t.copy=function(){return V(t,n()).base(t.base())},a.apply(t,arguments)},n.scaleDivergingPow=$,n.scaleDivergingSqrt=function(){return $.apply(null,arguments).exponent(.5)},n.scaleDivergingSymlog=function n(){var t=E(Z());return t.copy=function(){return V(t,n()).constant(t.constant())},a.apply(t,arguments)},n.tickFormat=w,Object.defineProperty(n,"__esModule",{value:!0})});

},{"d3-array":6,"d3-format":11,"d3-interpolate":12,"d3-time":16,"d3-time-format":15}],14:[function(require,module,exports){
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(t){"use strict";var n="http://www.w3.org/1999/xhtml",e={svg:"http://www.w3.org/2000/svg",xhtml:n,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function r(t){var n=t+="",r=n.indexOf(":");return r>=0&&"xmlns"!==(n=t.slice(0,r))&&(t=t.slice(r+1)),e.hasOwnProperty(n)?{space:e[n],local:t}:t}function i(t){var e=r(t);return(e.local?function(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}:function(t){return function(){var e=this.ownerDocument,r=this.namespaceURI;return r===n&&e.documentElement.namespaceURI===n?e.createElement(t):e.createElementNS(r,t)}})(e)}function o(){}function u(t){return null==t?o:function(){return this.querySelector(t)}}function c(){return[]}function s(t){return null==t?c:function(){return this.querySelectorAll(t)}}function a(t){return function(){return this.matches(t)}}function l(t){return new Array(t.length)}function f(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}f.prototype={constructor:f,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var h="$";function p(t,n,e,r,i,o){for(var u,c=0,s=n.length,a=o.length;c<a;++c)(u=n[c])?(u.__data__=o[c],r[c]=u):e[c]=new f(t,o[c]);for(;c<s;++c)(u=n[c])&&(i[c]=u)}function _(t,n,e,r,i,o,u){var c,s,a,l={},p=n.length,_=o.length,v=new Array(p);for(c=0;c<p;++c)(s=n[c])&&(v[c]=a=h+u.call(s,s.__data__,c,n),a in l?i[c]=s:l[a]=s);for(c=0;c<_;++c)(s=l[a=h+u.call(t,o[c],c,o)])?(r[c]=s,s.__data__=o[c],l[a]=null):e[c]=new f(t,o[c]);for(c=0;c<p;++c)(s=n[c])&&l[v[c]]===s&&(i[c]=s)}function v(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function d(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function y(t,n){return t.style.getPropertyValue(n)||d(t).getComputedStyle(t,null).getPropertyValue(n)}function m(t){return t.trim().split(/^|\s+/)}function g(t){return t.classList||new w(t)}function w(t){this._node=t,this._names=m(t.getAttribute("class")||"")}function A(t,n){for(var e=g(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function x(t,n){for(var e=g(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function S(){this.textContent=""}function b(){this.innerHTML=""}function E(){this.nextSibling&&this.parentNode.appendChild(this)}function N(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function P(){return null}function C(){var t=this.parentNode;t&&t.removeChild(this)}function L(){return this.parentNode.insertBefore(this.cloneNode(!1),this.nextSibling)}function T(){return this.parentNode.insertBefore(this.cloneNode(!0),this.nextSibling)}w.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var B={};(t.event=null,"undefined"!=typeof document)&&("onmouseenter"in document.documentElement||(B={mouseenter:"mouseover",mouseleave:"mouseout"}));function q(t,n,e){return t=D(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function D(n,e,r){return function(i){var o=t.event;t.event=i;try{n.call(this,this.__data__,e,r)}finally{t.event=o}}}function M(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function O(t,n,e){var r=B.hasOwnProperty(t.type)?q:D;return function(i,o,u){var c,s=this.__on,a=r(n,o,u);if(s)for(var l=0,f=s.length;l<f;++l)if((c=s[l]).type===t.type&&c.name===t.name)return this.removeEventListener(c.type,c.listener,c.capture),this.addEventListener(c.type,c.listener=a,c.capture=e),void(c.value=n);this.addEventListener(t.type,a,e),c={type:t.type,name:t.name,value:n,listener:a,capture:e},s?s.push(c):this.__on=[c]}}function V(t,n,e){var r=d(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}var j=[null];function R(t,n){this._groups=t,this._parents=n}function H(){return new R([[document.documentElement]],j)}function I(t){return"string"==typeof t?new R([[document.querySelector(t)]],[document.documentElement]):new R([[t]],j)}R.prototype=H.prototype={constructor:R,select:function(t){"function"!=typeof t&&(t=u(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,c,s=n[i],a=s.length,l=r[i]=new Array(a),f=0;f<a;++f)(o=s[f])&&(c=t.call(o,o.__data__,f,s))&&("__data__"in o&&(c.__data__=o.__data__),l[f]=c);return new R(r,this._parents)},selectAll:function(t){"function"!=typeof t&&(t=s(t));for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var u,c=n[o],a=c.length,l=0;l<a;++l)(u=c[l])&&(r.push(t.call(u,u.__data__,l,c)),i.push(u));return new R(r,i)},filter:function(t){"function"!=typeof t&&(t=a(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u=n[i],c=u.length,s=r[i]=[],l=0;l<c;++l)(o=u[l])&&t.call(o,o.__data__,l,u)&&s.push(o);return new R(r,this._parents)},data:function(t,n){if(!t)return d=new Array(this.size()),l=-1,this.each(function(t){d[++l]=t}),d;var e,r=n?_:p,i=this._parents,o=this._groups;"function"!=typeof t&&(e=t,t=function(){return e});for(var u=o.length,c=new Array(u),s=new Array(u),a=new Array(u),l=0;l<u;++l){var f=i[l],h=o[l],v=h.length,d=t.call(f,f&&f.__data__,l,i),y=d.length,m=s[l]=new Array(y),g=c[l]=new Array(y);r(f,h,m,g,a[l]=new Array(v),d,n);for(var w,A,x=0,S=0;x<y;++x)if(w=m[x]){for(x>=S&&(S=x+1);!(A=g[S])&&++S<y;);w._next=A||null}}return(c=new R(c,i))._enter=s,c._exit=a,c},enter:function(){return new R(this._enter||this._groups.map(l),this._parents)},exit:function(){return new R(this._exit||this._groups.map(l),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,o=this.exit();return r="function"==typeof t?t(r):r.append(t+""),null!=n&&(i=n(i)),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),c=0;c<o;++c)for(var s,a=n[c],l=e[c],f=a.length,h=u[c]=new Array(f),p=0;p<f;++p)(s=a[p]||l[p])&&(h[p]=s);for(;c<r;++c)u[c]=n[c];return new R(u,this._parents)},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,u=i[o];--o>=0;)(r=i[o])&&(u&&4^r.compareDocumentPosition(u)&&u.parentNode.insertBefore(r,u),u=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=v);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var u,c=e[o],s=c.length,a=i[o]=new Array(s),l=0;l<s;++l)(u=c[l])&&(a[l]=u);a.sort(n)}return new R(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this}),t},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var u=r[i];if(u)return u}return null},size:function(){var t=0;return this.each(function(){++t}),t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],u=0,c=o.length;u<c;++u)(i=o[u])&&t.call(i,i.__data__,u,o);return this},attr:function(t,n){var e=r(t);if(arguments.length<2){var i=this.node();return e.local?i.getAttributeNS(e.space,e.local):i.getAttribute(e)}return this.each((null==n?e.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}}:"function"==typeof n?e.local?function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}:function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}:e.local?function(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}:function(t,n){return function(){this.setAttribute(t,n)}})(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?function(t){return function(){this.style.removeProperty(t)}}:"function"==typeof n?function(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}:function(t,n,e){return function(){this.style.setProperty(t,n,e)}})(t,n,null==e?"":e)):y(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?function(t){return function(){delete this[t]}}:"function"==typeof n?function(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}:function(t,n){return function(){this[t]=n}})(t,n)):this.node()[t]},classed:function(t,n){var e=m(t+"");if(arguments.length<2){for(var r=g(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?function(t,n){return function(){(n.apply(this,arguments)?A:x)(this,t)}}:n?function(t){return function(){A(this,t)}}:function(t){return function(){x(this,t)}})(e,n))},text:function(t){return arguments.length?this.each(null==t?S:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}:function(t){return function(){this.textContent=t}})(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?b:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}:function(t){return function(){this.innerHTML=t}})(t)):this.node().innerHTML},raise:function(){return this.each(E)},lower:function(){return this.each(N)},append:function(t){var n="function"==typeof t?t:i(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})},insert:function(t,n){var e="function"==typeof t?t:i(t),r=null==n?P:"function"==typeof n?n:u(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})},remove:function(){return this.each(C)},clone:function(t){return this.select(t?T:L)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=function(t){return t.trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}})}(t+""),u=o.length;if(!(arguments.length<2)){for(c=n?O:M,null==e&&(e=!1),r=0;r<u;++r)this.each(c(o[r],n,e));return this}var c=this.node().__on;if(c)for(var s,a=0,l=c.length;a<l;++a)for(r=0,s=c[a];r<u;++r)if((i=o[r]).type===s.type&&i.name===s.name)return s.value},dispatch:function(t,n){return this.each(("function"==typeof n?function(t,n){return function(){return V(this,t,n.apply(this,arguments))}}:function(t,n){return function(){return V(this,t,n)}})(t,n))}};var U=0;function z(){return new G}function G(){this._="@"+(++U).toString(36)}function X(){for(var n,e=t.event;n=e.sourceEvent;)e=n;return e}function k(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=n.clientX,r.y=n.clientY,[(r=r.matrixTransform(t.getScreenCTM().inverse())).x,r.y]}var i=t.getBoundingClientRect();return[n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]}G.prototype=z.prototype={constructor:G,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}},t.create=function(t){return I(i(t).call(document.documentElement))},t.creator=i,t.local=z,t.matcher=a,t.mouse=function(t){var n=X();return n.changedTouches&&(n=n.changedTouches[0]),k(t,n)},t.namespace=r,t.namespaces=e,t.clientPoint=k,t.select=I,t.selectAll=function(t){return"string"==typeof t?new R([document.querySelectorAll(t)],[document.documentElement]):new R([null==t?[]:t],j)},t.selection=H,t.selector=u,t.selectorAll=s,t.style=y,t.touch=function(t,n,e){arguments.length<3&&(e=n,n=X().changedTouches);for(var r,i=0,o=n?n.length:0;i<o;++i)if((r=n[i]).identifier===e)return k(t,r);return null},t.touches=function(t,n){null==n&&(n=X().touches);for(var e=0,r=n?n.length:0,i=new Array(r);e<r;++e)i[e]=k(t,n[e]);return i},t.window=d,t.customEvent=function(n,e,r,i){var o=t.event;n.sourceEvent=t.event,t.event=n;try{return e.apply(r,i)}finally{t.event=o}},Object.defineProperty(t,"__esModule",{value:!0})});

},{}],15:[function(require,module,exports){
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("d3-time")): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports,__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(e,t){"use strict";function n(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function r(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function u(e){return{y:e,m:0,d:1,H:0,M:0,S:0,L:0}}function c(e){var c=e.dateTime,i=e.date,a=e.time,f=e.periods,l=e.days,s=e.shortDays,g=e.months,ve=e.shortMonths,Me=y(f),Te=d(f),De=y(l),Ce=d(l),xe=y(s),Ue=d(s),pe=y(g),we=d(g),Se=y(ve),Ye=d(ve),Fe={a:function(e){return s[e.getDay()]},A:function(e){return l[e.getDay()]},b:function(e){return ve[e.getMonth()]},B:function(e){return g[e.getMonth()]},c:null,d:W,e:W,f:I,H:V,I:j,j:P,L:Q,m:J,M:O,p:function(e){return f[+(e.getHours()>=12)]},Q:he,s:me,S:X,u:N,U:B,V:_,w:$,W:q,x:null,X:null,y:z,Y:E,Z:R,"%":de},He={a:function(e){return s[e.getUTCDay()]},A:function(e){return l[e.getUTCDay()]},b:function(e){return ve[e.getUTCMonth()]},B:function(e){return g[e.getUTCMonth()]},c:null,d:k,e:k,f:ne,H:G,I:K,j:ee,L:te,m:re,M:ue,p:function(e){return f[+(e.getUTCHours()>=12)]},Q:he,s:me,S:ce,u:ie,U:oe,V:ae,w:fe,W:le,x:null,X:null,y:se,Y:ge,Z:ye,"%":de},Le={a:function(e,t,n){var r=xe.exec(t.slice(n));return r?(e.w=Ue[r[0].toLowerCase()],n+r[0].length):-1},A:function(e,t,n){var r=De.exec(t.slice(n));return r?(e.w=Ce[r[0].toLowerCase()],n+r[0].length):-1},b:function(e,t,n){var r=Se.exec(t.slice(n));return r?(e.m=Ye[r[0].toLowerCase()],n+r[0].length):-1},B:function(e,t,n){var r=pe.exec(t.slice(n));return r?(e.m=we[r[0].toLowerCase()],n+r[0].length):-1},c:function(e,t,n){return be(e,c,t,n)},d:p,e:p,f:L,H:S,I:S,j:w,L:H,m:U,M:Y,p:function(e,t,n){var r=Me.exec(t.slice(n));return r?(e.p=Te[r[0].toLowerCase()],n+r[0].length):-1},Q:Z,s:b,S:F,u:m,U:v,V:M,w:h,W:T,x:function(e,t,n){return be(e,i,t,n)},X:function(e,t,n){return be(e,a,t,n)},y:C,Y:D,Z:x,"%":A};function Ae(e,t){return function(n){var r,u,c,i=[],a=-1,f=0,l=e.length;for(n instanceof Date||(n=new Date(+n));++a<l;)37===e.charCodeAt(a)&&(i.push(e.slice(f,a)),null!=(u=o[r=e.charAt(++a)])?r=e.charAt(++a):u="e"===r?" ":"0",(c=t[r])&&(r=c(n,u)),i.push(r),f=a+1);return i.push(e.slice(f,a)),i.join("")}}function Ze(e,n){return function(c){var i,o,a=u(1900);if(be(a,e,c+="",0)!=c.length)return null;if("Q"in a)return new Date(a.Q);if("p"in a&&(a.H=a.H%12+12*a.p),"V"in a){if(a.V<1||a.V>53)return null;"w"in a||(a.w=1),"Z"in a?(o=(i=r(u(a.y))).getUTCDay(),i=o>4||0===o?t.utcMonday.ceil(i):t.utcMonday(i),i=t.utcDay.offset(i,7*(a.V-1)),a.y=i.getUTCFullYear(),a.m=i.getUTCMonth(),a.d=i.getUTCDate()+(a.w+6)%7):(o=(i=n(u(a.y))).getDay(),i=o>4||0===o?t.timeMonday.ceil(i):t.timeMonday(i),i=t.timeDay.offset(i,7*(a.V-1)),a.y=i.getFullYear(),a.m=i.getMonth(),a.d=i.getDate()+(a.w+6)%7)}else("W"in a||"U"in a)&&("w"in a||(a.w="u"in a?a.u%7:"W"in a?1:0),o="Z"in a?r(u(a.y)).getUTCDay():n(u(a.y)).getDay(),a.m=0,a.d="W"in a?(a.w+6)%7+7*a.W-(o+5)%7:a.w+7*a.U-(o+6)%7);return"Z"in a?(a.H+=a.Z/100|0,a.M+=a.Z%100,r(a)):n(a)}}function be(e,t,n,r){for(var u,c,i=0,a=t.length,f=n.length;i<a;){if(r>=f)return-1;if(37===(u=t.charCodeAt(i++))){if(u=t.charAt(i++),!(c=Le[u in o?t.charAt(i++):u])||(r=c(e,n,r))<0)return-1}else if(u!=n.charCodeAt(r++))return-1}return r}return Fe.x=Ae(i,Fe),Fe.X=Ae(a,Fe),Fe.c=Ae(c,Fe),He.x=Ae(i,He),He.X=Ae(a,He),He.c=Ae(c,He),{format:function(e){var t=Ae(e+="",Fe);return t.toString=function(){return e},t},parse:function(e){var t=Ze(e+="",n);return t.toString=function(){return e},t},utcFormat:function(e){var t=Ae(e+="",He);return t.toString=function(){return e},t},utcParse:function(e){var t=Ze(e,r);return t.toString=function(){return e},t}}}var i,o={"-":"",_:" ",0:"0"},a=/^\s*\d+/,f=/^%/,l=/[\\^$*+?|[\]().{}]/g;function s(e,t,n){var r=e<0?"-":"",u=(r?-e:e)+"",c=u.length;return r+(c<n?new Array(n-c+1).join(t)+u:u)}function g(e){return e.replace(l,"\\$&")}function y(e){return new RegExp("^(?:"+e.map(g).join("|")+")","i")}function d(e){for(var t={},n=-1,r=e.length;++n<r;)t[e[n].toLowerCase()]=n;return t}function h(e,t,n){var r=a.exec(t.slice(n,n+1));return r?(e.w=+r[0],n+r[0].length):-1}function m(e,t,n){var r=a.exec(t.slice(n,n+1));return r?(e.u=+r[0],n+r[0].length):-1}function v(e,t,n){var r=a.exec(t.slice(n,n+2));return r?(e.U=+r[0],n+r[0].length):-1}function M(e,t,n){var r=a.exec(t.slice(n,n+2));return r?(e.V=+r[0],n+r[0].length):-1}function T(e,t,n){var r=a.exec(t.slice(n,n+2));return r?(e.W=+r[0],n+r[0].length):-1}function D(e,t,n){var r=a.exec(t.slice(n,n+4));return r?(e.y=+r[0],n+r[0].length):-1}function C(e,t,n){var r=a.exec(t.slice(n,n+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function x(e,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function U(e,t,n){var r=a.exec(t.slice(n,n+2));return r?(e.m=r[0]-1,n+r[0].length):-1}function p(e,t,n){var r=a.exec(t.slice(n,n+2));return r?(e.d=+r[0],n+r[0].length):-1}function w(e,t,n){var r=a.exec(t.slice(n,n+3));return r?(e.m=0,e.d=+r[0],n+r[0].length):-1}function S(e,t,n){var r=a.exec(t.slice(n,n+2));return r?(e.H=+r[0],n+r[0].length):-1}function Y(e,t,n){var r=a.exec(t.slice(n,n+2));return r?(e.M=+r[0],n+r[0].length):-1}function F(e,t,n){var r=a.exec(t.slice(n,n+2));return r?(e.S=+r[0],n+r[0].length):-1}function H(e,t,n){var r=a.exec(t.slice(n,n+3));return r?(e.L=+r[0],n+r[0].length):-1}function L(e,t,n){var r=a.exec(t.slice(n,n+6));return r?(e.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function A(e,t,n){var r=f.exec(t.slice(n,n+1));return r?n+r[0].length:-1}function Z(e,t,n){var r=a.exec(t.slice(n));return r?(e.Q=+r[0],n+r[0].length):-1}function b(e,t,n){var r=a.exec(t.slice(n));return r?(e.Q=1e3*+r[0],n+r[0].length):-1}function W(e,t){return s(e.getDate(),t,2)}function V(e,t){return s(e.getHours(),t,2)}function j(e,t){return s(e.getHours()%12||12,t,2)}function P(e,n){return s(1+t.timeDay.count(t.timeYear(e),e),n,3)}function Q(e,t){return s(e.getMilliseconds(),t,3)}function I(e,t){return Q(e,t)+"000"}function J(e,t){return s(e.getMonth()+1,t,2)}function O(e,t){return s(e.getMinutes(),t,2)}function X(e,t){return s(e.getSeconds(),t,2)}function N(e){var t=e.getDay();return 0===t?7:t}function B(e,n){return s(t.timeSunday.count(t.timeYear(e),e),n,2)}function _(e,n){var r=e.getDay();return e=r>=4||0===r?t.timeThursday(e):t.timeThursday.ceil(e),s(t.timeThursday.count(t.timeYear(e),e)+(4===t.timeYear(e).getDay()),n,2)}function $(e){return e.getDay()}function q(e,n){return s(t.timeMonday.count(t.timeYear(e),e),n,2)}function z(e,t){return s(e.getFullYear()%100,t,2)}function E(e,t){return s(e.getFullYear()%1e4,t,4)}function R(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+s(t/60|0,"0",2)+s(t%60,"0",2)}function k(e,t){return s(e.getUTCDate(),t,2)}function G(e,t){return s(e.getUTCHours(),t,2)}function K(e,t){return s(e.getUTCHours()%12||12,t,2)}function ee(e,n){return s(1+t.utcDay.count(t.utcYear(e),e),n,3)}function te(e,t){return s(e.getUTCMilliseconds(),t,3)}function ne(e,t){return te(e,t)+"000"}function re(e,t){return s(e.getUTCMonth()+1,t,2)}function ue(e,t){return s(e.getUTCMinutes(),t,2)}function ce(e,t){return s(e.getUTCSeconds(),t,2)}function ie(e){var t=e.getUTCDay();return 0===t?7:t}function oe(e,n){return s(t.utcSunday.count(t.utcYear(e),e),n,2)}function ae(e,n){var r=e.getUTCDay();return e=r>=4||0===r?t.utcThursday(e):t.utcThursday.ceil(e),s(t.utcThursday.count(t.utcYear(e),e)+(4===t.utcYear(e).getUTCDay()),n,2)}function fe(e){return e.getUTCDay()}function le(e,n){return s(t.utcMonday.count(t.utcYear(e),e),n,2)}function se(e,t){return s(e.getUTCFullYear()%100,t,2)}function ge(e,t){return s(e.getUTCFullYear()%1e4,t,4)}function ye(){return"+0000"}function de(){return"%"}function he(e){return+e}function me(e){return Math.floor(+e/1e3)}function ve(t){return i=c(t),e.timeFormat=i.format,e.timeParse=i.parse,e.utcFormat=i.utcFormat,e.utcParse=i.utcParse,i}ve({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});var Me=Date.prototype.toISOString?function(e){return e.toISOString()}:e.utcFormat("%Y-%m-%dT%H:%M:%S.%LZ");var Te=+new Date("2000-01-01T00:00:00.000Z")?function(e){var t=new Date(e);return isNaN(t)?null:t}:e.utcParse("%Y-%m-%dT%H:%M:%S.%LZ");e.timeFormatDefaultLocale=ve,e.timeFormatLocale=c,e.isoFormat=Me,e.isoParse=Te,Object.defineProperty(e,"__esModule",{value:!0})});

},{"d3-time":16}],16:[function(require,module,exports){
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(e){"use strict";var t=new Date,n=new Date;function u(e,r,i,o){function s(t){return e(t=new Date(+t)),t}return s.floor=s,s.ceil=function(t){return e(t=new Date(t-1)),r(t,1),e(t),t},s.round=function(e){var t=s(e),n=s.ceil(e);return e-t<n-e?t:n},s.offset=function(e,t){return r(e=new Date(+e),null==t?1:Math.floor(t)),e},s.range=function(t,n,u){var i,o=[];if(t=s.ceil(t),u=null==u?1:Math.floor(u),!(t<n&&u>0))return o;do{o.push(i=new Date(+t)),r(t,u),e(t)}while(i<t&&t<n);return o},s.filter=function(t){return u(function(n){if(n>=n)for(;e(n),!t(n);)n.setTime(n-1)},function(e,n){if(e>=e)if(n<0)for(;++n<=0;)for(;r(e,-1),!t(e););else for(;--n>=0;)for(;r(e,1),!t(e););})},i&&(s.count=function(u,r){return t.setTime(+u),n.setTime(+r),e(t),e(n),Math.floor(i(t,n))},s.every=function(e){return e=Math.floor(e),isFinite(e)&&e>0?e>1?s.filter(o?function(t){return o(t)%e==0}:function(t){return s.count(0,t)%e==0}):s:null}),s}var r=u(function(){},function(e,t){e.setTime(+e+t)},function(e,t){return t-e});r.every=function(e){return e=Math.floor(e),isFinite(e)&&e>0?e>1?u(function(t){t.setTime(Math.floor(t/e)*e)},function(t,n){t.setTime(+t+n*e)},function(t,n){return(n-t)/e}):r:null};var i=r.range,o=6e4,s=6048e5,a=u(function(e){e.setTime(e-e.getMilliseconds())},function(e,t){e.setTime(+e+1e3*t)},function(e,t){return(t-e)/1e3},function(e){return e.getUTCSeconds()}),c=a.range,f=u(function(e){e.setTime(e-e.getMilliseconds()-1e3*e.getSeconds())},function(e,t){e.setTime(+e+t*o)},function(e,t){return(t-e)/o},function(e){return e.getMinutes()}),l=f.range,g=u(function(e){e.setTime(e-e.getMilliseconds()-1e3*e.getSeconds()-e.getMinutes()*o)},function(e,t){e.setTime(+e+36e5*t)},function(e,t){return(t-e)/36e5},function(e){return e.getHours()}),T=g.range,d=u(function(e){e.setHours(0,0,0,0)},function(e,t){e.setDate(e.getDate()+t)},function(e,t){return(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*o)/864e5},function(e){return e.getDate()-1}),m=d.range;function M(e){return u(function(t){t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},function(e,t){e.setDate(e.getDate()+7*t)},function(e,t){return(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*o)/s})}var y=M(0),C=M(1),U=M(2),h=M(3),F=M(4),D=M(5),Y=M(6),H=y.range,S=C.range,v=U.range,p=h.range,W=F.range,w=D.range,O=Y.range,k=u(function(e){e.setDate(1),e.setHours(0,0,0,0)},function(e,t){e.setMonth(e.getMonth()+t)},function(e,t){return t.getMonth()-e.getMonth()+12*(t.getFullYear()-e.getFullYear())},function(e){return e.getMonth()}),z=k.range,x=u(function(e){e.setMonth(0,1),e.setHours(0,0,0,0)},function(e,t){e.setFullYear(e.getFullYear()+t)},function(e,t){return t.getFullYear()-e.getFullYear()},function(e){return e.getFullYear()});x.every=function(e){return isFinite(e=Math.floor(e))&&e>0?u(function(t){t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,n){t.setFullYear(t.getFullYear()+n*e)}):null};var b=x.range,j=u(function(e){e.setUTCSeconds(0,0)},function(e,t){e.setTime(+e+t*o)},function(e,t){return(t-e)/o},function(e){return e.getUTCMinutes()}),_=j.range,I=u(function(e){e.setUTCMinutes(0,0,0)},function(e,t){e.setTime(+e+36e5*t)},function(e,t){return(t-e)/36e5},function(e){return e.getUTCHours()}),P=I.range,q=u(function(e){e.setUTCHours(0,0,0,0)},function(e,t){e.setUTCDate(e.getUTCDate()+t)},function(e,t){return(t-e)/864e5},function(e){return e.getUTCDate()-1}),A=q.range;function B(e){return u(function(t){t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},function(e,t){e.setUTCDate(e.getUTCDate()+7*t)},function(e,t){return(t-e)/s})}var E=B(0),G=B(1),J=B(2),K=B(3),L=B(4),N=B(5),Q=B(6),R=E.range,V=G.range,X=J.range,Z=K.range,$=L.range,ee=N.range,te=Q.range,ne=u(function(e){e.setUTCDate(1),e.setUTCHours(0,0,0,0)},function(e,t){e.setUTCMonth(e.getUTCMonth()+t)},function(e,t){return t.getUTCMonth()-e.getUTCMonth()+12*(t.getUTCFullYear()-e.getUTCFullYear())},function(e){return e.getUTCMonth()}),ue=ne.range,re=u(function(e){e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},function(e,t){e.setUTCFullYear(e.getUTCFullYear()+t)},function(e,t){return t.getUTCFullYear()-e.getUTCFullYear()},function(e){return e.getUTCFullYear()});re.every=function(e){return isFinite(e=Math.floor(e))&&e>0?u(function(t){t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n*e)}):null};var ie=re.range;e.timeInterval=u,e.timeMillisecond=r,e.timeMilliseconds=i,e.utcMillisecond=r,e.utcMilliseconds=i,e.timeSecond=a,e.timeSeconds=c,e.utcSecond=a,e.utcSeconds=c,e.timeMinute=f,e.timeMinutes=l,e.timeHour=g,e.timeHours=T,e.timeDay=d,e.timeDays=m,e.timeWeek=y,e.timeWeeks=H,e.timeSunday=y,e.timeSundays=H,e.timeMonday=C,e.timeMondays=S,e.timeTuesday=U,e.timeTuesdays=v,e.timeWednesday=h,e.timeWednesdays=p,e.timeThursday=F,e.timeThursdays=W,e.timeFriday=D,e.timeFridays=w,e.timeSaturday=Y,e.timeSaturdays=O,e.timeMonth=k,e.timeMonths=z,e.timeYear=x,e.timeYears=b,e.utcMinute=j,e.utcMinutes=_,e.utcHour=I,e.utcHours=P,e.utcDay=q,e.utcDays=A,e.utcWeek=E,e.utcWeeks=R,e.utcSunday=E,e.utcSundays=R,e.utcMonday=G,e.utcMondays=V,e.utcTuesday=J,e.utcTuesdays=X,e.utcWednesday=K,e.utcWednesdays=Z,e.utcThursday=L,e.utcThursdays=$,e.utcFriday=N,e.utcFridays=ee,e.utcSaturday=Q,e.utcSaturdays=te,e.utcMonth=ne,e.utcMonths=ue,e.utcYear=re,e.utcYears=ie,Object.defineProperty(e,"__esModule",{value:!0})});

},{}],17:[function(require,module,exports){
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(t){"use strict";var n,e,o=0,i=0,r=0,u=1e3,l=0,c=0,a=0,f="object"==typeof performance&&performance.now?performance:Date,s="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function _(){return c||(s(m),c=f.now()+a)}function m(){c=0}function p(){this._call=this._time=this._next=null}function w(t,n,e){var o=new p;return o.restart(t,n,e),o}function d(){_(),++o;for(var t,e=n;e;)(t=c-e._time)>=0&&e._call.call(null,t),e=e._next;--o}function h(){c=(l=f.now())+a,o=i=0;try{d()}finally{o=0,function(){var t,o,i=n,r=1/0;for(;i;)i._call?(r>i._time&&(r=i._time),t=i,i=i._next):(o=i._next,i._next=null,i=t?t._next=o:n=o);e=t,v(r)}(),c=0}}function y(){var t=f.now(),n=t-l;n>u&&(a-=n,l=t)}function v(t){o||(i&&(i=clearTimeout(i)),t-c>24?(t<1/0&&(i=setTimeout(h,t-f.now()-a)),r&&(r=clearInterval(r))):(r||(l=f.now(),r=setInterval(y,u)),o=1,s(h)))}p.prototype=w.prototype={constructor:p,restart:function(t,o,i){if("function"!=typeof t)throw new TypeError("callback is not a function");i=(null==i?_():+i)+(null==o?0:+o),this._next||e===this||(e?e._next=this:n=this,e=this),this._call=t,this._time=i,v()},stop:function(){this._call&&(this._call=null,this._time=1/0,v())}},t.now=_,t.timer=w,t.timerFlush=d,t.timeout=function(t,n,e){var o=new p;return n=null==n?0:+n,o.restart(function(e){o.stop(),t(e+n)},n,e),o},t.interval=function(t,n,e){var o=new p,i=n;return null==n?(o.restart(t,n,e),o):(n=+n,e=null==e?_():+e,o.restart(function r(u){u+=i,o.restart(r,i+=n,e),t(u)},n,e),o)},Object.defineProperty(t,"__esModule",{value:!0})});

},{}],18:[function(require,module,exports){
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("d3-dispatch"),require("d3-timer"),require("d3-color"),require("d3-interpolate"),require("d3-selection"),require("d3-ease")): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports,__webpack_require__(5),__webpack_require__(4),__webpack_require__(2),__webpack_require__(3),__webpack_require__(0),__webpack_require__(6)], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(t,n,e,r,i,o,a){"use strict";var u=n.dispatch("start","end","cancel","interrupt"),s=[],l=0,f=1,c=2,h=3,d=4,_=5,p=6;function v(t,n,r,i,o,a){var v=t.__transition;if(v){if(r in v)return}else t.__transition={};!function(t,n,r){var i,o=t.__transition;function a(l){var _,v,y,m;if(r.state!==f)return s();for(_ in o)if((m=o[_]).name===r.name){if(m.state===h)return e.timeout(a);m.state===d?(m.state=p,m.timer.stop(),m.on.call("interrupt",t,t.__data__,m.index,m.group),delete o[_]):+_<n&&(m.state=p,m.timer.stop(),m.on.call("cancel",t,t.__data__,m.index,m.group),delete o[_])}if(e.timeout(function(){r.state===h&&(r.state=d,r.timer.restart(u,r.delay,r.time),u(l))}),r.state=c,r.on.call("start",t,t.__data__,r.index,r.group),r.state===c){for(r.state=h,i=new Array(y=r.tween.length),_=0,v=-1;_<y;++_)(m=r.tween[_].value.call(t,t.__data__,r.index,r.group))&&(i[++v]=m);i.length=v+1}}function u(n){for(var e=n<r.duration?r.ease.call(null,n/r.duration):(r.timer.restart(s),r.state=_,1),o=-1,a=i.length;++o<a;)i[o].call(t,e);r.state===_&&(r.on.call("end",t,t.__data__,r.index,r.group),s())}function s(){for(var e in r.state=p,r.timer.stop(),delete o[n],o)return;delete t.__transition}o[n]=r,r.timer=e.timer(function(t){r.state=f,r.timer.restart(a,r.delay,r.time),r.delay<=t&&a(t-r.delay)},0,r.time)}(t,r,{name:n,index:i,group:o,on:u,tween:s,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:l})}function y(t,n){var e=w(t,n);if(e.state>l)throw new Error("too late; already scheduled");return e}function m(t,n){var e=w(t,n);if(e.state>h)throw new Error("too late; already running");return e}function w(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function g(t,n){var e,r,i,o=t.__transition,a=!0;if(o){for(i in n=null==n?null:n+"",o)(e=o[i]).name===n?(r=e.state>c&&e.state<_,e.state=p,e.timer.stop(),e.on.call(r?"interrupt":"cancel",t,t.__data__,e.index,e.group),delete o[i]):a=!1;a&&delete t.__transition}}function b(t,n,e){var r=t._id;return t.each(function(){var t=m(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)}),function(t){return w(t,r).value[n]}}function A(t,n){var e;return("number"==typeof n?i.interpolateNumber:n instanceof r.color?i.interpolateRgb:(e=r.color(n))?(n=e,i.interpolateRgb):i.interpolateString)(t,n)}var x=o.selection.prototype.constructor;function E(t){return function(){this.style.removeProperty(t)}}var N=0;function T(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function S(t){return o.selection().transition(t)}function q(){return++N}var P=o.selection.prototype;T.prototype=S.prototype={constructor:T,select:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=o.selector(t));for(var r=this._groups,i=r.length,a=new Array(i),u=0;u<i;++u)for(var s,l,f=r[u],c=f.length,h=a[u]=new Array(c),d=0;d<c;++d)(s=f[d])&&(l=t.call(s,s.__data__,d,f))&&("__data__"in s&&(l.__data__=s.__data__),h[d]=l,v(h[d],n,e,d,h,w(s,e)));return new T(a,this._parents,n,e)},selectAll:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=o.selectorAll(t));for(var r=this._groups,i=r.length,a=[],u=[],s=0;s<i;++s)for(var l,f=r[s],c=f.length,h=0;h<c;++h)if(l=f[h]){for(var d,_=t.call(l,l.__data__,h,f),p=w(l,e),y=0,m=_.length;y<m;++y)(d=_[y])&&v(d,n,e,y,_,p);a.push(_),u.push(l)}return new T(a,u,n,e)},filter:function(t){"function"!=typeof t&&(t=o.matcher(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var a,u=n[i],s=u.length,l=r[i]=[],f=0;f<s;++f)(a=u[f])&&t.call(a,a.__data__,f,u)&&l.push(a);return new T(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var s,l=n[u],f=e[u],c=l.length,h=a[u]=new Array(c),d=0;d<c;++d)(s=l[d]||f[d])&&(h[d]=s);for(;u<r;++u)a[u]=n[u];return new T(a,this._parents,this._name,this._id)},selection:function(){return new x(this._groups,this._parents)},transition:function(){for(var t=this._name,n=this._id,e=q(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],s=u.length,l=0;l<s;++l)if(a=u[l]){var f=w(a,n);v(a,t,e,l,u,{time:f.time+f.delay+f.duration,delay:0,duration:f.duration,ease:f.ease})}return new T(r,this._parents,t,e)},call:P.call,nodes:P.nodes,node:P.node,size:P.size,empty:P.empty,each:P.each,on:function(t,n){var e=this._id;return arguments.length<2?w(this.node(),e).on.on(t):this.each(function(t,n,e){var r,i,o=function(t){return(t+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t})}(n)?y:m;return function(){var a=o(this,t),u=a.on;u!==r&&(i=(r=u).copy()).on(n,e),a.on=i}}(e,t,n))},attr:function(t,n){var e=o.namespace(t),r="transform"===e?i.interpolateTransformSvg:A;return this.attrTween(t,"function"==typeof n?(e.local?function(t,n,e){var r,i,o;return function(){var a,u,s=e(this);if(null!=s)return(a=this.getAttributeNS(t.space,t.local))===(u=s+"")?null:a===r&&u===i?o:(i=u,o=n(r=a,s));this.removeAttributeNS(t.space,t.local)}}:function(t,n,e){var r,i,o;return function(){var a,u,s=e(this);if(null!=s)return(a=this.getAttribute(t))===(u=s+"")?null:a===r&&u===i?o:(i=u,o=n(r=a,s));this.removeAttribute(t)}})(e,r,b(this,"attr."+t,n)):null==n?(e.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}})(e):(e.local?function(t,n,e){var r,i,o=e+"";return function(){var a=this.getAttributeNS(t.space,t.local);return a===o?null:a===r?i:i=n(r=a,e)}}:function(t,n,e){var r,i,o=e+"";return function(){var a=this.getAttribute(t);return a===o?null:a===r?i:i=n(r=a,e)}})(e,r,n))},attrTween:function(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!=typeof n)throw new Error;var r=o.namespace(t);return this.tween(e,(r.local?function(t,n){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&function(t,n){return function(e){this.setAttributeNS(t.space,t.local,n(e))}}(t,i)),e}return i._value=n,i}:function(t,n){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&function(t,n){return function(e){this.setAttribute(t,n(e))}}(t,i)),e}return i._value=n,i})(r,n))},style:function(t,n,e){var r="transform"==(t+="")?i.interpolateTransformCss:A;return null==n?this.styleTween(t,function(t,n){var e,r,i;return function(){var a=o.style(this,t),u=(this.style.removeProperty(t),o.style(this,t));return a===u?null:a===e&&u===r?i:i=n(e=a,r=u)}}(t,r)).on("end.style."+t,E(t)):"function"==typeof n?this.styleTween(t,function(t,n,e){var r,i,a;return function(){var u=o.style(this,t),s=e(this),l=s+"";return null==s&&(this.style.removeProperty(t),l=s=o.style(this,t)),u===l?null:u===r&&l===i?a:(i=l,a=n(r=u,s))}}(t,r,b(this,"style."+t,n))).each(function(t,n){var e,r,i,o,a="style."+n,u="end."+a;return function(){var s=m(this,t),l=s.on,f=null==s.value[a]?o||(o=E(n)):void 0;l===e&&i===f||(r=(e=l).copy()).on(u,i=f),s.on=r}}(this._id,t)):this.styleTween(t,function(t,n,e){var r,i,a=e+"";return function(){var u=o.style(this,t);return u===a?null:u===r?i:i=n(r=u,e)}}(t,r,n),e).on("end.style."+t,null)},styleTween:function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;return this.tween(r,function(t,n,e){var r,i;function o(){var o=n.apply(this,arguments);return o!==i&&(r=(i=o)&&function(t,n,e){return function(r){this.style.setProperty(t,n(r),e)}}(t,o,e)),r}return o._value=n,o}(t,n,null==e?"":e))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var n=t(this);this.textContent=null==n?"":n}}(b(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},remove:function(){return this.on("end.remove",(t=this._id,function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}));var t},tween:function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=w(this.node(),e).tween,o=0,a=i.length;o<a;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==n?function(t,n){var e,r;return function(){var i=m(this,t),o=i.tween;if(o!==e)for(var a=0,u=(r=e=o).length;a<u;++a)if(r[a].name===n){(r=r.slice()).splice(a,1);break}i.tween=r}}:function(t,n,e){var r,i;if("function"!=typeof e)throw new Error;return function(){var o=m(this,t),a=o.tween;if(a!==r){i=(r=a).slice();for(var u={name:n,value:e},s=0,l=i.length;s<l;++s)if(i[s].name===n){i[s]=u;break}s===l&&i.push(u)}o.tween=i}})(e,t,n))},delay:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?function(t,n){return function(){y(this,t).delay=+n.apply(this,arguments)}}:function(t,n){return n=+n,function(){y(this,t).delay=n}})(n,t)):w(this.node(),n).delay},duration:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?function(t,n){return function(){m(this,t).duration=+n.apply(this,arguments)}}:function(t,n){return n=+n,function(){m(this,t).duration=n}})(n,t)):w(this.node(),n).duration},ease:function(t){var n=this._id;return arguments.length?this.each(function(t,n){if("function"!=typeof n)throw new Error;return function(){m(this,t).ease=n}}(n,t)):w(this.node(),n).ease},end:function(){var t,n,e=this,r=e._id,i=e.size();return new Promise(function(o,a){var u={value:a},s={value:function(){0==--i&&o()}};e.each(function(){var e=m(this,r),i=e.on;i!==t&&((n=(t=i).copy())._.cancel.push(u),n._.interrupt.push(u),n._.end.push(s)),e.on=n})})}};var C={time:null,delay:0,duration:250,ease:a.easeCubicInOut};function z(t,n){for(var r;!(r=t.__transition)||!(r=r[n]);)if(!(t=t.parentNode))return C.time=e.now(),C;return r}o.selection.prototype.interrupt=function(t){return this.each(function(){g(this,t)})},o.selection.prototype.transition=function(t){var n,r;t instanceof T?(n=t._id,t=t._name):(n=q(),(r=C).time=e.now(),t=null==t?null:t+"");for(var i=this._groups,o=i.length,a=0;a<o;++a)for(var u,s=i[a],l=s.length,f=0;f<l;++f)(u=s[f])&&v(u,t,n,f,s,r||z(u,n));return new T(i,this._parents,t,n)};var O=[null];t.transition=S,t.active=function(t,n){var e,r,i=t.__transition;if(i)for(r in n=null==n?null:n+"",i)if((e=i[r]).state>f&&e.name===n)return new T([[t]],O,n,+r);return null},t.interrupt=g,Object.defineProperty(t,"__esModule",{value:!0})});

},{"d3-color":7,"d3-dispatch":8,"d3-ease":10,"d3-interpolate":12,"d3-selection":14,"d3-timer":17}],19:[function(require,module,exports){
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("d3-selection"),require("d3-dispatch"),require("d3-drag"),require("d3-interpolate"),require("d3-transition")): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports,__webpack_require__(0),__webpack_require__(5),__webpack_require__(12),__webpack_require__(3),__webpack_require__(10)], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(t,n,e,o,i,r){"use strict";function u(t){return function(){return t}}function h(t,n,e){this.target=t,this.type=n,this.transform=e}function s(t,n,e){this.k=t,this.x=n,this.y=e}s.prototype={constructor:s,scale:function(t){return 1===t?this:new s(this.k*t,this.x,this.y)},translate:function(t,n){return 0===t&0===n?this:new s(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var c=new s(1,0,0);function a(t){return t.__zoom||c}function f(){n.event.stopImmediatePropagation()}function l(){n.event.preventDefault(),n.event.stopImmediatePropagation()}function m(){return!n.event.button}function p(){var t,n,e=this;return e instanceof SVGElement?(t=(e=e.ownerSVGElement||e).width.baseVal.value,n=e.height.baseVal.value):(t=e.clientWidth,n=e.clientHeight),[[0,0],[t,n]]}function d(){return this.__zoom||c}function v(){return-n.event.deltaY*(n.event.deltaMode?120:1)/500}function y(){return"ontouchstart"in this}function z(t,n,e){var o=t.invertX(n[0][0])-e[0][0],i=t.invertX(n[1][0])-e[1][0],r=t.invertY(n[0][1])-e[0][1],u=t.invertY(n[1][1])-e[1][1];return t.translate(i>o?(o+i)/2:Math.min(0,o)||Math.max(0,i),u>r?(r+u)/2:Math.min(0,r)||Math.max(0,u))}a.prototype=s.prototype,t.zoom=function(){var t,a,_=m,g=p,k=z,x=v,w=y,M=[0,1/0],T=[[-1/0,-1/0],[1/0,1/0]],b=250,Y=i.interpolateZoom,X=[],q=e.dispatch("start","zoom","end"),E=500,D=150,V=0;function I(t){t.property("__zoom",d).on("wheel.zoom",K).on("mousedown.zoom",O).on("dblclick.zoom",W).filter(w).on("touchstart.zoom",Z).on("touchmove.zoom",A).on("touchend.zoom touchcancel.zoom",C).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function P(t,n){return(n=Math.max(M[0],Math.min(M[1],n)))===t.k?t:new s(n,t.x,t.y)}function S(t,n,e){var o=n[0]-e[0]*t.k,i=n[1]-e[1]*t.k;return o===t.x&&i===t.y?t:new s(t.k,o,i)}function j(t){return[(+t[0][0]+ +t[1][0])/2,(+t[0][1]+ +t[1][1])/2]}function B(t,n,e){t.on("start.zoom",function(){G(this,arguments).start()}).on("interrupt.zoom end.zoom",function(){G(this,arguments).end()}).tween("zoom",function(){var t=arguments,o=G(this,t),i=g.apply(this,t),r=e||j(i),u=Math.max(i[1][0]-i[0][0],i[1][1]-i[0][1]),h=this.__zoom,c="function"==typeof n?n.apply(this,t):n,a=Y(h.invert(r).concat(u/h.k),c.invert(r).concat(u/c.k));return function(t){if(1===t)t=c;else{var n=a(t),e=u/n[2];t=new s(e,r[0]-n[0]*e,r[1]-n[1]*e)}o.zoom(null,t)}})}function G(t,n){for(var e,o=0,i=X.length;o<i;++o)if((e=X[o]).that===t)return e;return new H(t,n)}function H(t,n){this.that=t,this.args=n,this.index=-1,this.active=0,this.extent=g.apply(t,n)}function K(){if(_.apply(this,arguments)){var t=G(this,arguments),e=this.__zoom,o=Math.max(M[0],Math.min(M[1],e.k*Math.pow(2,x.apply(this,arguments)))),i=n.mouse(this);if(t.wheel)t.mouse[0][0]===i[0]&&t.mouse[0][1]===i[1]||(t.mouse[1]=e.invert(t.mouse[0]=i)),clearTimeout(t.wheel);else{if(e.k===o)return;t.mouse=[i,e.invert(i)],r.interrupt(this),t.start()}l(),t.wheel=setTimeout(function(){t.wheel=null,t.end()},D),t.zoom("mouse",k(S(P(e,o),t.mouse[0],t.mouse[1]),t.extent,T))}}function O(){if(!a&&_.apply(this,arguments)){var t=G(this,arguments),e=n.select(n.event.view).on("mousemove.zoom",function(){if(l(),!t.moved){var e=n.event.clientX-u,o=n.event.clientY-h;t.moved=e*e+o*o>V}t.zoom("mouse",k(S(t.that.__zoom,t.mouse[0]=n.mouse(t.that),t.mouse[1]),t.extent,T))},!0).on("mouseup.zoom",function(){e.on("mousemove.zoom mouseup.zoom",null),o.dragEnable(n.event.view,t.moved),l(),t.end()},!0),i=n.mouse(this),u=n.event.clientX,h=n.event.clientY;o.dragDisable(n.event.view),f(),t.mouse=[i,this.__zoom.invert(i)],r.interrupt(this),t.start()}}function W(){if(_.apply(this,arguments)){var t=this.__zoom,e=n.mouse(this),o=t.invert(e),i=t.k*(n.event.shiftKey?.5:2),r=k(S(P(t,i),e,o),g.apply(this,arguments),T);l(),b>0?n.select(this).transition().duration(b).call(B,r,e):n.select(this).call(I.transform,r)}}function Z(){if(_.apply(this,arguments)){var e,o,i,u,h=G(this,arguments),s=n.event.changedTouches,c=s.length;for(f(),o=0;o<c;++o)i=s[o],u=[u=n.touch(this,s,i.identifier),this.__zoom.invert(u),i.identifier],h.touch0?h.touch1||(h.touch1=u):(h.touch0=u,e=!0);if(t&&(t=clearTimeout(t),!h.touch1))return h.end(),void((u=n.select(this).on("dblclick.zoom"))&&u.apply(this,arguments));e&&(t=setTimeout(function(){t=null},E),r.interrupt(this),h.start())}}function A(){var e,o,i,r,u=G(this,arguments),h=n.event.changedTouches,s=h.length;for(l(),t&&(t=clearTimeout(t)),e=0;e<s;++e)o=h[e],i=n.touch(this,h,o.identifier),u.touch0&&u.touch0[2]===o.identifier?u.touch0[0]=i:u.touch1&&u.touch1[2]===o.identifier&&(u.touch1[0]=i);if(o=u.that.__zoom,u.touch1){var c=u.touch0[0],a=u.touch0[1],f=u.touch1[0],m=u.touch1[1],p=(p=f[0]-c[0])*p+(p=f[1]-c[1])*p,d=(d=m[0]-a[0])*d+(d=m[1]-a[1])*d;o=P(o,Math.sqrt(p/d)),i=[(c[0]+f[0])/2,(c[1]+f[1])/2],r=[(a[0]+m[0])/2,(a[1]+m[1])/2]}else{if(!u.touch0)return;i=u.touch0[0],r=u.touch0[1]}u.zoom("touch",k(S(o,i,r),u.extent,T))}function C(){var t,e,o=G(this,arguments),i=n.event.changedTouches,r=i.length;for(f(),a&&clearTimeout(a),a=setTimeout(function(){a=null},E),t=0;t<r;++t)e=i[t],o.touch0&&o.touch0[2]===e.identifier?delete o.touch0:o.touch1&&o.touch1[2]===e.identifier&&delete o.touch1;o.touch1&&!o.touch0&&(o.touch0=o.touch1,delete o.touch1),o.touch0?o.touch0[1]=this.__zoom.invert(o.touch0[0]):o.end()}return I.transform=function(t,n){var e=t.selection?t.selection():t;e.property("__zoom",d),t!==e?B(t,n):e.interrupt().each(function(){G(this,arguments).start().zoom(null,"function"==typeof n?n.apply(this,arguments):n).end()})},I.scaleBy=function(t,n){I.scaleTo(t,function(){return this.__zoom.k*("function"==typeof n?n.apply(this,arguments):n)})},I.scaleTo=function(t,n){I.transform(t,function(){var t=g.apply(this,arguments),e=this.__zoom,o=j(t),i=e.invert(o),r="function"==typeof n?n.apply(this,arguments):n;return k(S(P(e,r),o,i),t,T)})},I.translateBy=function(t,n,e){I.transform(t,function(){return k(this.__zoom.translate("function"==typeof n?n.apply(this,arguments):n,"function"==typeof e?e.apply(this,arguments):e),g.apply(this,arguments),T)})},I.translateTo=function(t,n,e){I.transform(t,function(){var t=g.apply(this,arguments),o=this.__zoom,i=j(t);return k(c.translate(i[0],i[1]).scale(o.k).translate("function"==typeof n?-n.apply(this,arguments):-n,"function"==typeof e?-e.apply(this,arguments):-e),t,T)})},H.prototype={start:function(){return 1==++this.active&&(this.index=X.push(this)-1,this.emit("start")),this},zoom:function(t,n){return this.mouse&&"mouse"!==t&&(this.mouse[1]=n.invert(this.mouse[0])),this.touch0&&"touch"!==t&&(this.touch0[1]=n.invert(this.touch0[0])),this.touch1&&"touch"!==t&&(this.touch1[1]=n.invert(this.touch1[0])),this.that.__zoom=n,this.emit("zoom"),this},end:function(){return 0==--this.active&&(X.splice(this.index,1),this.index=-1,this.emit("end")),this},emit:function(t){n.customEvent(new h(I,t,this.that.__zoom),q.apply,q,[t,this.that,this.args])}},I.wheelDelta=function(t){return arguments.length?(x="function"==typeof t?t:u(+t),I):x},I.filter=function(t){return arguments.length?(_="function"==typeof t?t:u(!!t),I):_},I.touchable=function(t){return arguments.length?(w="function"==typeof t?t:u(!!t),I):w},I.extent=function(t){return arguments.length?(g="function"==typeof t?t:u([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),I):g},I.scaleExtent=function(t){return arguments.length?(M[0]=+t[0],M[1]=+t[1],I):[M[0],M[1]]},I.translateExtent=function(t){return arguments.length?(T[0][0]=+t[0][0],T[1][0]=+t[1][0],T[0][1]=+t[0][1],T[1][1]=+t[1][1],I):[[T[0][0],T[0][1]],[T[1][0],T[1][1]]]},I.constrain=function(t){return arguments.length?(k=t,I):k},I.duration=function(t){return arguments.length?(b=+t,I):b},I.interpolate=function(t){return arguments.length?(Y=t,I):Y},I.on=function(){var t=q.on.apply(q,arguments);return t===q?I:t},I.clickDistance=function(t){return arguments.length?(V=(t=+t)*t,I):Math.sqrt(V)},I},t.zoomTransform=a,t.zoomIdentity=c,Object.defineProperty(t,"__esModule",{value:!0})});

},{"d3-dispatch":8,"d3-drag":9,"d3-interpolate":12,"d3-selection":14,"d3-transition":18}],20:[function(require,module,exports){
var objectCreate=Object.create||objectCreatePolyfill,objectKeys=Object.keys||objectKeysPolyfill,bind=Function.prototype.bind||functionBindPolyfill;function EventEmitter(){this._events&&Object.prototype.hasOwnProperty.call(this,"_events")||(this._events=objectCreate(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0}module.exports=EventEmitter,EventEmitter.EventEmitter=EventEmitter,EventEmitter.prototype._events=void 0,EventEmitter.prototype._maxListeners=void 0;var hasDefineProperty,defaultMaxListeners=10;try{var o={};Object.defineProperty&&Object.defineProperty(o,"x",{value:0}),hasDefineProperty=0===o.x}catch(e){hasDefineProperty=!1}function $getMaxListeners(e){return void 0===e._maxListeners?EventEmitter.defaultMaxListeners:e._maxListeners}function emitNone(e,t,n){if(t)e.call(n);else for(var r=e.length,i=arrayClone(e,r),s=0;s<r;++s)i[s].call(n)}function emitOne(e,t,n,r){if(t)e.call(n,r);else for(var i=e.length,s=arrayClone(e,i),o=0;o<i;++o)s[o].call(n,r)}function emitTwo(e,t,n,r,i){if(t)e.call(n,r,i);else for(var s=e.length,o=arrayClone(e,s),a=0;a<s;++a)o[a].call(n,r,i)}function emitThree(e,t,n,r,i,s){if(t)e.call(n,r,i,s);else for(var o=e.length,a=arrayClone(e,o),l=0;l<o;++l)a[l].call(n,r,i,s)}function emitMany(e,t,n,r){if(t)e.apply(n,r);else for(var i=e.length,s=arrayClone(e,i),o=0;o<i;++o)s[o].apply(n,r)}function _addListener(e,t,n,r){var i,s,o;if("function"!=typeof n)throw new TypeError('"listener" argument must be a function');if((s=e._events)?(s.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),s=e._events),o=s[t]):(s=e._events=objectCreate(null),e._eventsCount=0),o){if("function"==typeof o?o=s[t]=r?[n,o]:[o,n]:r?o.unshift(n):o.push(n),!o.warned&&(i=$getMaxListeners(e))&&i>0&&o.length>i){o.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+o.length+' "'+String(t)+'" listeners added. Use emitter.setMaxListeners() to increase limit.');a.name="MaxListenersExceededWarning",a.emitter=e,a.type=t,a.count=o.length,"object"==typeof console&&console.warn&&console.warn("%s: %s",a.name,a.message)}}else o=s[t]=n,++e._eventsCount;return e}function onceWrapper(){if(!this.fired)switch(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length){case 0:return this.listener.call(this.target);case 1:return this.listener.call(this.target,arguments[0]);case 2:return this.listener.call(this.target,arguments[0],arguments[1]);case 3:return this.listener.call(this.target,arguments[0],arguments[1],arguments[2]);default:for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];this.listener.apply(this.target,e)}}function _onceWrap(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=bind.call(onceWrapper,r);return i.listener=n,r.wrapFn=i,i}function _listeners(e,t,n){var r=e._events;if(!r)return[];var i=r[t];return i?"function"==typeof i?n?[i.listener||i]:[i]:n?unwrapListeners(i):arrayClone(i,i.length):[]}function listenerCount(e){var t=this._events;if(t){var n=t[e];if("function"==typeof n)return 1;if(n)return n.length}return 0}function spliceOne(e,t){for(var n=t,r=n+1,i=e.length;r<i;n+=1,r+=1)e[n]=e[r];e.pop()}function arrayClone(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function unwrapListeners(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}function objectCreatePolyfill(e){var t=function(){};return t.prototype=e,new t}function objectKeysPolyfill(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return n}function functionBindPolyfill(e){var t=this;return function(){return t.apply(e,arguments)}}hasDefineProperty?Object.defineProperty(EventEmitter,"defaultMaxListeners",{enumerable:!0,get:function(){return defaultMaxListeners},set:function(e){if("number"!=typeof e||e<0||e!=e)throw new TypeError('"defaultMaxListeners" must be a positive number');defaultMaxListeners=e}}):EventEmitter.defaultMaxListeners=defaultMaxListeners,EventEmitter.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=e,this},EventEmitter.prototype.getMaxListeners=function(){return $getMaxListeners(this)},EventEmitter.prototype.emit=function(e){var t,n,r,i,s,o,a="error"===e;if(o=this._events)a=a&&null==o.error;else if(!a)return!1;if(a){if(arguments.length>1&&(t=arguments[1]),t instanceof Error)throw t;var l=new Error('Unhandled "error" event. ('+t+")");throw l.context=t,l}if(!(n=o[e]))return!1;var u="function"==typeof n;switch(r=arguments.length){case 1:emitNone(n,u,this);break;case 2:emitOne(n,u,this,arguments[1]);break;case 3:emitTwo(n,u,this,arguments[1],arguments[2]);break;case 4:emitThree(n,u,this,arguments[1],arguments[2],arguments[3]);break;default:for(i=new Array(r-1),s=1;s<r;s++)i[s-1]=arguments[s];emitMany(n,u,this,i)}return!0},EventEmitter.prototype.addListener=function(e,t){return _addListener(this,e,t,!1)},EventEmitter.prototype.on=EventEmitter.prototype.addListener,EventEmitter.prototype.prependListener=function(e,t){return _addListener(this,e,t,!0)},EventEmitter.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.on(e,_onceWrap(this,e,t)),this},EventEmitter.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.prependListener(e,_onceWrap(this,e,t)),this},EventEmitter.prototype.removeListener=function(e,t){var n,r,i,s,o;if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');if(!(r=this._events))return this;if(!(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=objectCreate(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,s=n.length-1;s>=0;s--)if(n[s]===t||n[s].listener===t){o=n[s].listener,i=s;break}if(i<0)return this;0===i?n.shift():spliceOne(n,i),1===n.length&&(r[e]=n[0]),r.removeListener&&this.emit("removeListener",e,o||t)}return this},EventEmitter.prototype.removeAllListeners=function(e){var t,n,r;if(!(n=this._events))return this;if(!n.removeListener)return 0===arguments.length?(this._events=objectCreate(null),this._eventsCount=0):n[e]&&(0==--this._eventsCount?this._events=objectCreate(null):delete n[e]),this;if(0===arguments.length){var i,s=objectKeys(n);for(r=0;r<s.length;++r)"removeListener"!==(i=s[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=objectCreate(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},EventEmitter.prototype.listeners=function(e){return _listeners(this,e,!0)},EventEmitter.prototype.rawListeners=function(e){return _listeners(this,e,!1)},EventEmitter.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):listenerCount.call(e,t)},EventEmitter.prototype.listenerCount=listenerCount,EventEmitter.prototype.eventNames=function(){return this._eventsCount>0?Reflect.ownKeys(this._events):[]};

},{}],21:[function(require,module,exports){
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function r(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){},function(t,e,r){"use strict";r.r(e);r(0);var a=function(){function t(t,e,r){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=t,this.start=e,this.end=r}return t.range=function(e,r){return r?e&&e.loc&&r.loc&&e.loc.lexer===r.loc.lexer?new t(e.loc.lexer,e.loc.start,r.loc.end):null:e&&e.loc},t}(),n=function(){function t(t,e){this.text=void 0,this.loc=void 0,this.text=t,this.loc=e}return t.prototype.range=function(e,r){return new t(r,a.range(this,e))},t}(),o=function t(e,r){this.position=void 0;var a,n="KaTeX parse error: "+e,o=r&&r.loc;if(o&&o.start<=o.end){var i=o.lexer.input;a=o.start;var s=o.end;a===i.length?n+=" at end of input: ":n+=" at position "+(a+1)+": ";var h=i.slice(a,s).replace(/[^]/g,"$&̲");n+=(a>15?"…"+i.slice(a-15,a):i.slice(0,a))+h+(s+15<i.length?i.slice(s,s+15)+"…":i.slice(s))}var l=new Error(n);return l.name="ParseError",l.__proto__=t.prototype,l.position=a,l};o.prototype.__proto__=Error.prototype;var i=o,s=/([A-Z])/g,h={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},l=/[&><"']/g;var m=function t(e){return"ordgroup"===e.type?1===e.body.length?t(e.body[0]):e:"color"===e.type?1===e.body.length?t(e.body[0]):e:"font"===e.type?t(e.body):e},c={contains:function(t,e){return-1!==t.indexOf(e)},deflt:function(t,e){return void 0===t?e:t},escape:function(t){return String(t).replace(l,function(t){return h[t]})},hyphenate:function(t){return t.replace(s,"-$1").toLowerCase()},getBaseElem:m,isCharacterBox:function(t){var e=m(t);return"mathord"===e.type||"textord"===e.type||"atom"===e.type}},u=function(){function t(t){this.displayMode=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.allowedProtocols=void 0,t=t||{},this.displayMode=c.deflt(t.displayMode,!1),this.leqno=c.deflt(t.leqno,!1),this.fleqn=c.deflt(t.fleqn,!1),this.throwOnError=c.deflt(t.throwOnError,!0),this.errorColor=c.deflt(t.errorColor,"#cc0000"),this.macros=t.macros||{},this.colorIsTextColor=c.deflt(t.colorIsTextColor,!1),this.strict=c.deflt(t.strict,"warn"),this.maxSize=Math.max(0,c.deflt(t.maxSize,1/0)),this.maxExpand=Math.max(0,c.deflt(t.maxExpand,1e3)),this.allowedProtocols=c.deflt(t.allowedProtocols,["http","https","mailto","_relative"])}var e=t.prototype;return e.reportNonstrict=function(t,e,r){var a=this.strict;if("function"==typeof a&&(a=a(t,e,r)),a&&"ignore"!==a){if(!0===a||"error"===a)throw new i("LaTeX-incompatible input and strict mode is set to 'error': "+e+" ["+t+"]",r);"warn"===a?"undefined"!=typeof console&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+e+" ["+t+"]"):"undefined"!=typeof console&&console.warn("LaTeX-incompatible input and strict mode is set to unrecognized '"+a+"': "+e+" ["+t+"]")}},e.useStrictBehavior=function(t,e,r){var a=this.strict;if("function"==typeof a)try{a=a(t,e,r)}catch(t){a="error"}return!(!a||"ignore"===a)&&(!0===a||"error"===a||("warn"===a?("undefined"!=typeof console&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+e+" ["+t+"]"),!1):("undefined"!=typeof console&&console.warn("LaTeX-incompatible input and strict mode is set to unrecognized '"+a+"': "+e+" ["+t+"]"),!1)))},t}(),d=function(){function t(t,e,r){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=t,this.size=e,this.cramped=r}var e=t.prototype;return e.sup=function(){return p[f[this.id]]},e.sub=function(){return p[g[this.id]]},e.fracNum=function(){return p[x[this.id]]},e.fracDen=function(){return p[v[this.id]]},e.cramp=function(){return p[b[this.id]]},e.text=function(){return p[y[this.id]]},e.isTight=function(){return this.size>=2},t}(),p=[new d(0,0,!1),new d(1,0,!0),new d(2,1,!1),new d(3,1,!0),new d(4,2,!1),new d(5,2,!0),new d(6,3,!1),new d(7,3,!0)],f=[4,5,4,5,6,7,6,7],g=[5,5,5,5,7,7,7,7],x=[2,3,4,5,6,7,6,7],v=[3,3,5,5,7,7,7,7],b=[1,1,3,3,5,5,7,7],y=[0,1,2,3,2,3,2,3],w={DISPLAY:p[0],TEXT:p[2],SCRIPT:p[4],SCRIPTSCRIPT:p[6]},k=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];var S=[];function z(t){for(var e=0;e<S.length;e+=2)if(t>=S[e]&&t<=S[e+1])return!0;return!1}k.forEach(function(t){return t.blocks.forEach(function(t){return S.push.apply(S,t)})});var M={path:{sqrtMain:"M95,702c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,\n-10,-9.5,-14c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54c44.2,-33.3,65.8,\n-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10s173,378,173,378c0.7,0,\n35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429c69,-144,104.5,-217.7,106.5,\n-221c5.3,-9.3,12,-14,20,-14H400000v40H845.2724s-225.272,467,-225.272,467\ns-235,486,-235,486c-2.7,4.7,-9,7,-19,7c-6,0,-10,-1,-12,-3s-194,-422,-194,-422\ns-65,47,-65,47z M834 80H400000v40H845z",sqrtSize1:"M263,681c0.7,0,18,39.7,52,119c34,79.3,68.167,\n158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120c340,-704.7,510.7,-1060.3,512,-1067\nc4.7,-7.3,11,-11,19,-11H40000v40H1012.3s-271.3,567,-271.3,567c-38.7,80.7,-84,\n175,-136,283c-52,108,-89.167,185.3,-111.5,232c-22.3,46.7,-33.8,70.3,-34.5,71\nc-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1s-109,-253,-109,-253c-72.7,-168,-109.3,\n-252,-110,-252c-10.7,8,-22,16.7,-34,26c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26\ns76,-59,76,-59s76,-60,76,-60z M1001 80H40000v40H1012z",sqrtSize2:"M1001,80H400000v40H1013.1s-83.4,268,-264.1,840c-180.7,\n572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,\n-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744c-10,12,-21,25,-33,39s-32,39,-32,39\nc-6,-5.3,-15,-14,-27,-26s25,-30,25,-30c26.7,-32.7,52,-63,76,-91s52,-60,52,-60\ns208,722,208,722c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,\n-658.5c53.7,-170.3,84.5,-266.8,92.5,-289.5c4,-6.7,10,-10,18,-10z\nM1001 80H400000v40H1013z",sqrtSize3:"M424,2478c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,\n-342,-109.8,-513.3,-110.5,-514c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,\n25c-5.7,9.3,-9.8,16,-12.5,20s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,\n-13s76,-122,76,-122s77,-121,77,-121s209,968,209,968c0,-2,84.7,-361.7,254,-1079\nc169.3,-717.3,254.7,-1077.7,256,-1081c4,-6.7,10,-10,18,-10H400000v40H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M1001 80H400000v40H1014z",sqrtSize4:"M473,2793c339.3,-1799.3,509.3,-2700,510,-2702\nc3.3,-7.3,9.3,-11,18,-11H400000v40H1017.7s-90.5,478,-276.2,1466c-185.7,988,\n-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,\n-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200c0,-1.3,-5.3,8.7,-16,30c-10.7,\n21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26s76,-153,76,-153s77,-151,\n77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,606z\nM1001 80H400000v40H1017z",doubleleftarrow:"M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z",doublerightarrow:"M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z",leftarrow:"M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z",leftbrace:"M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z",leftbraceunder:"M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z",leftgroup:"M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z",leftgroupunder:"M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z",leftharpoon:"M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z",leftharpoonplus:"M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z",leftharpoondown:"M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z",leftharpoondownplus:"M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z",lefthook:"M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z",leftlinesegment:"M40 281 V428 H0 V94 H40 V241 H400000 v40z\nM40 281 V428 H0 V94 H40 V241 H400000 v40z",leftmapsto:"M40 281 V448H0V74H40V241H400000v40z\nM40 281 V448H0V74H40V241H400000v40z",leftToFrom:"M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z",longequal:"M0 50 h400000 v40H0z m0 194h40000v40H0z\nM0 50 h400000 v40H0z m0 194h40000v40H0z",midbrace:"M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z",midbraceunder:"M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z",oiintSize1:"M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6\n-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z\nm368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8\n60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z",oiintSize2:"M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8\n-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z\nm502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2\nc0 110 84 276 504 276s502.4-166 502.4-276z",oiiintSize1:"M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6\n-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z\nm525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0\n85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z",oiiintSize2:"M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8\n-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z\nm770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1\nc0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z",rightarrow:"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z",rightbrace:"M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z",rightbraceunder:"M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z",rightgroup:"M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z",rightgroupunder:"M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z",rightharpoon:"M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z",rightharpoonplus:"M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z",rightharpoondown:"M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z",rightharpoondownplus:"M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z",righthook:"M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z",rightlinesegment:"M399960 241 V94 h40 V428 h-40 V281 H0 v-40z\nM399960 241 V94 h40 V428 h-40 V281 H0 v-40z",rightToFrom:"M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z",twoheadleftarrow:"M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z",twoheadrightarrow:"M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z",tilde1:"M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z",tilde2:"M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z",tilde3:"M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z",tilde4:"M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z",vec:"M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z",widehat1:"M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z",widehat2:"M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",widehat3:"M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",widehat4:"M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",widecheck1:"M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,\n-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z",widecheck2:"M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",widecheck3:"M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",widecheck4:"M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",baraboveleftarrow:"M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202\nc4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5\nc-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130\ns-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47\n121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6\ns2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11\nc0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z\nM100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z",rightarrowabovebar:"M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32\n-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0\n13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39\n-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5\n-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z",baraboveshortleftharpoon:"M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17\nc2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21\nc-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40\nc-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z\nM0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z",rightharpoonaboveshortbar:"M0,241 l0,40c399126,0,399993,0,399993,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z",shortbaraboveleftharpoon:"M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,\n1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,\n-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z\nM93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z",shortrightharpoonabovebar:"M53,241l0,40c398570,0,399437,0,399437,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z"}},T=function(){function t(t){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=t,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}var e=t.prototype;return e.hasClass=function(t){return c.contains(this.classes,t)},e.toNode=function(){for(var t=document.createDocumentFragment(),e=0;e<this.children.length;e++)t.appendChild(this.children[e].toNode());return t},e.toMarkup=function(){for(var t="",e=0;e<this.children.length;e++)t+=this.children[e].toMarkup();return t},e.toText=function(){var t=function(t){return t.toText()};return this.children.map(t).join("")},t}(),A=function(t){return t.filter(function(t){return t}).join(" ")},B=function(t,e,r){if(this.classes=t||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=r||{},e){e.style.isTight()&&this.classes.push("mtight");var a=e.getColor();a&&(this.style.color=a)}},q=function(t){var e=document.createElement(t);for(var r in e.className=A(this.classes),this.style)this.style.hasOwnProperty(r)&&(e.style[r]=this.style[r]);for(var a in this.attributes)this.attributes.hasOwnProperty(a)&&e.setAttribute(a,this.attributes[a]);for(var n=0;n<this.children.length;n++)e.appendChild(this.children[n].toNode());return e},C=function(t){var e="<"+t;this.classes.length&&(e+=' class="'+c.escape(A(this.classes))+'"');var r="";for(var a in this.style)this.style.hasOwnProperty(a)&&(r+=c.hyphenate(a)+":"+this.style[a]+";");for(var n in r&&(e+=' style="'+c.escape(r)+'"'),this.attributes)this.attributes.hasOwnProperty(n)&&(e+=" "+n+'="'+c.escape(this.attributes[n])+'"');e+=">";for(var o=0;o<this.children.length;o++)e+=this.children[o].toMarkup();return e+="</"+t+">"},N=function(){function t(t,e,r,a){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,B.call(this,t,r,a),this.children=e||[]}var e=t.prototype;return e.setAttribute=function(t,e){this.attributes[t]=e},e.hasClass=function(t){return c.contains(this.classes,t)},e.toNode=function(){return q.call(this,"span")},e.toMarkup=function(){return C.call(this,"span")},t}(),I=function(){function t(t,e,r,a){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,B.call(this,e,a),this.children=r||[],this.setAttribute("href",t)}var e=t.prototype;return e.setAttribute=function(t,e){this.attributes[t]=e},e.hasClass=function(t){return c.contains(this.classes,t)},e.toNode=function(){return q.call(this,"a")},e.toMarkup=function(){return C.call(this,"a")},t}(),O={"î":"ı̂","ï":"ı̈","í":"ı́","ì":"ı̀"},E=function(){function t(t,e,r,a,n,o,i,s){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=t,this.height=e||0,this.depth=r||0,this.italic=a||0,this.skew=n||0,this.width=o||0,this.classes=i||[],this.style=s||{},this.maxFontSize=0;var h=function(t){for(var e=0;e<k.length;e++)for(var r=k[e],a=0;a<r.blocks.length;a++){var n=r.blocks[a];if(t>=n[0]&&t<=n[1])return r.name}return null}(this.text.charCodeAt(0));h&&this.classes.push(h+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=O[this.text])}var e=t.prototype;return e.hasClass=function(t){return c.contains(this.classes,t)},e.toNode=function(){var t=document.createTextNode(this.text),e=null;for(var r in this.italic>0&&((e=document.createElement("span")).style.marginRight=this.italic+"em"),this.classes.length>0&&((e=e||document.createElement("span")).className=A(this.classes)),this.style)this.style.hasOwnProperty(r)&&((e=e||document.createElement("span")).style[r]=this.style[r]);return e?(e.appendChild(t),e):t},e.toMarkup=function(){var t=!1,e="<span";this.classes.length&&(t=!0,e+=' class="',e+=c.escape(A(this.classes)),e+='"');var r="";for(var a in this.italic>0&&(r+="margin-right:"+this.italic+"em;"),this.style)this.style.hasOwnProperty(a)&&(r+=c.hyphenate(a)+":"+this.style[a]+";");r&&(t=!0,e+=' style="'+c.escape(r)+'"');var n=c.escape(this.text);return t?(e+=">",e+=n,e+="</span>"):n},t}(),R=function(){function t(t,e){this.children=void 0,this.attributes=void 0,this.children=t||[],this.attributes=e||{}}var e=t.prototype;return e.toNode=function(){var t=document.createElementNS("http://www.w3.org/2000/svg","svg");for(var e in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,e)&&t.setAttribute(e,this.attributes[e]);for(var r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t},e.toMarkup=function(){var t="<svg";for(var e in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,e)&&(t+=" "+e+"='"+this.attributes[e]+"'");t+=">";for(var r=0;r<this.children.length;r++)t+=this.children[r].toMarkup();return t+="</svg>"},t}(),L=function(){function t(t,e){this.pathName=void 0,this.alternate=void 0,this.pathName=t,this.alternate=e}var e=t.prototype;return e.toNode=function(){var t=document.createElementNS("http://www.w3.org/2000/svg","path");return this.alternate?t.setAttribute("d",this.alternate):t.setAttribute("d",M.path[this.pathName]),t},e.toMarkup=function(){return this.alternate?"<path d='"+this.alternate+"'/>":"<path d='"+M.path[this.pathName]+"'/>"},t}(),H=function(){function t(t){this.attributes=void 0,this.attributes=t||{}}var e=t.prototype;return e.toNode=function(){var t=document.createElementNS("http://www.w3.org/2000/svg","line");for(var e in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,e)&&t.setAttribute(e,this.attributes[e]);return t},e.toMarkup=function(){var t="<line";for(var e in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,e)&&(t+=" "+e+"='"+this.attributes[e]+"'");return t+="/>"},t}();var P={"AMS-Regular":{65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473]},"Fraktur-Regular":{33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],163:[0,.69444,0,0,.86853],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],163:[0,.69444,0,0,.76909],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],305:[0,.43056,0,.02778,.32246],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],567:[.19444,.43056,0,.08334,.38403],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.12,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,1],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.67,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.9,0,0,.278],8943:[-.19,.31,0,0,1.172],8945:[-.1,.82,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.744,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.744,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333]},"Math-Italic":{65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059]},"Math-Regular":{65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059]},"SansSerif-Bold":{33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212]},"Size1-Regular":{40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},D={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2]},F={"Å":"A","Ç":"C","Ð":"D","Þ":"o","å":"a","ç":"c","ð":"d","þ":"o","А":"A","Б":"B","В":"B","Г":"F","Д":"A","Е":"E","Ж":"K","З":"3","И":"N","Й":"N","К":"K","Л":"N","М":"M","Н":"H","О":"O","П":"N","Р":"P","С":"C","Т":"T","У":"y","Ф":"O","Х":"X","Ц":"U","Ч":"h","Ш":"W","Щ":"W","Ъ":"B","Ы":"X","Ь":"B","Э":"3","Ю":"X","Я":"R","а":"a","б":"b","в":"a","г":"r","д":"y","е":"e","ж":"m","з":"e","и":"n","й":"n","к":"n","л":"n","м":"m","н":"n","о":"o","п":"n","р":"p","с":"c","т":"o","у":"y","ф":"b","х":"x","ц":"n","ч":"n","ш":"w","щ":"w","ъ":"a","ы":"m","ь":"a","э":"e","ю":"m","я":"r"};function V(t,e,r){if(!P[e])throw new Error("Font metrics not found for font: "+e+".");var a=t.charCodeAt(0),n=P[e][a];if(!n&&t[0]in F&&(a=F[t[0]].charCodeAt(0),n=P[e][a]),n||"text"!==r||z(a)&&(n=P[e][77]),n)return{depth:n[0],height:n[1],italic:n[2],skew:n[3],width:n[4]}}var U={};var G={bin:1,close:1,inner:1,open:1,punct:1,rel:1},X={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},Y={math:{},text:{}},_=Y;function W(t,e,r,a,n,o){Y[t][n]={font:e,group:r,replace:a},o&&a&&(Y[t][a]=Y[t][n])}var j="main",$="ams",Z="bin",K="mathord",J="op-token",Q="rel";W("math",j,Q,"≡","\\equiv",!0),W("math",j,Q,"≺","\\prec",!0),W("math",j,Q,"≻","\\succ",!0),W("math",j,Q,"∼","\\sim",!0),W("math",j,Q,"⊥","\\perp"),W("math",j,Q,"⪯","\\preceq",!0),W("math",j,Q,"⪰","\\succeq",!0),W("math",j,Q,"≃","\\simeq",!0),W("math",j,Q,"∣","\\mid",!0),W("math",j,Q,"≪","\\ll",!0),W("math",j,Q,"≫","\\gg",!0),W("math",j,Q,"≍","\\asymp",!0),W("math",j,Q,"∥","\\parallel"),W("math",j,Q,"⋈","\\bowtie",!0),W("math",j,Q,"⌣","\\smile",!0),W("math",j,Q,"⊑","\\sqsubseteq",!0),W("math",j,Q,"⊒","\\sqsupseteq",!0),W("math",j,Q,"≐","\\doteq",!0),W("math",j,Q,"⌢","\\frown",!0),W("math",j,Q,"∋","\\ni",!0),W("math",j,Q,"∝","\\propto",!0),W("math",j,Q,"⊢","\\vdash",!0),W("math",j,Q,"⊣","\\dashv",!0),W("math",j,Q,"∋","\\owns"),W("math",j,"punct",".","\\ldotp"),W("math",j,"punct","⋅","\\cdotp"),W("math",j,"textord","#","\\#"),W("text",j,"textord","#","\\#"),W("math",j,"textord","&","\\&"),W("text",j,"textord","&","\\&"),W("math",j,"textord","ℵ","\\aleph",!0),W("math",j,"textord","∀","\\forall",!0),W("math",j,"textord","ℏ","\\hbar",!0),W("math",j,"textord","∃","\\exists",!0),W("math",j,"textord","∇","\\nabla",!0),W("math",j,"textord","♭","\\flat",!0),W("math",j,"textord","ℓ","\\ell",!0),W("math",j,"textord","♮","\\natural",!0),W("math",j,"textord","♣","\\clubsuit",!0),W("math",j,"textord","℘","\\wp",!0),W("math",j,"textord","♯","\\sharp",!0),W("math",j,"textord","♢","\\diamondsuit",!0),W("math",j,"textord","ℜ","\\Re",!0),W("math",j,"textord","♡","\\heartsuit",!0),W("math",j,"textord","ℑ","\\Im",!0),W("math",j,"textord","♠","\\spadesuit",!0),W("text",j,"textord","§","\\S",!0),W("text",j,"textord","¶","\\P",!0),W("math",j,"textord","†","\\dag"),W("text",j,"textord","†","\\dag"),W("text",j,"textord","†","\\textdagger"),W("math",j,"textord","‡","\\ddag"),W("text",j,"textord","‡","\\ddag"),W("text",j,"textord","‡","\\textdaggerdbl"),W("math",j,"close","⎱","\\rmoustache",!0),W("math",j,"open","⎰","\\lmoustache",!0),W("math",j,"close","⟯","\\rgroup",!0),W("math",j,"open","⟮","\\lgroup",!0),W("math",j,Z,"∓","\\mp",!0),W("math",j,Z,"⊖","\\ominus",!0),W("math",j,Z,"⊎","\\uplus",!0),W("math",j,Z,"⊓","\\sqcap",!0),W("math",j,Z,"∗","\\ast"),W("math",j,Z,"⊔","\\sqcup",!0),W("math",j,Z,"◯","\\bigcirc"),W("math",j,Z,"∙","\\bullet"),W("math",j,Z,"‡","\\ddagger"),W("math",j,Z,"≀","\\wr",!0),W("math",j,Z,"⨿","\\amalg"),W("math",j,Z,"&","\\And"),W("math",j,Q,"⟵","\\longleftarrow",!0),W("math",j,Q,"⇐","\\Leftarrow",!0),W("math",j,Q,"⟸","\\Longleftarrow",!0),W("math",j,Q,"⟶","\\longrightarrow",!0),W("math",j,Q,"⇒","\\Rightarrow",!0),W("math",j,Q,"⟹","\\Longrightarrow",!0),W("math",j,Q,"↔","\\leftrightarrow",!0),W("math",j,Q,"⟷","\\longleftrightarrow",!0),W("math",j,Q,"⇔","\\Leftrightarrow",!0),W("math",j,Q,"⟺","\\Longleftrightarrow",!0),W("math",j,Q,"↦","\\mapsto",!0),W("math",j,Q,"⟼","\\longmapsto",!0),W("math",j,Q,"↗","\\nearrow",!0),W("math",j,Q,"↩","\\hookleftarrow",!0),W("math",j,Q,"↪","\\hookrightarrow",!0),W("math",j,Q,"↘","\\searrow",!0),W("math",j,Q,"↼","\\leftharpoonup",!0),W("math",j,Q,"⇀","\\rightharpoonup",!0),W("math",j,Q,"↙","\\swarrow",!0),W("math",j,Q,"↽","\\leftharpoondown",!0),W("math",j,Q,"⇁","\\rightharpoondown",!0),W("math",j,Q,"↖","\\nwarrow",!0),W("math",j,Q,"⇌","\\rightleftharpoons",!0),W("math",$,Q,"≮","\\nless",!0),W("math",$,Q,"","\\@nleqslant"),W("math",$,Q,"","\\@nleqq"),W("math",$,Q,"⪇","\\lneq",!0),W("math",$,Q,"≨","\\lneqq",!0),W("math",$,Q,"","\\@lvertneqq"),W("math",$,Q,"⋦","\\lnsim",!0),W("math",$,Q,"⪉","\\lnapprox",!0),W("math",$,Q,"⊀","\\nprec",!0),W("math",$,Q,"⋠","\\npreceq",!0),W("math",$,Q,"⋨","\\precnsim",!0),W("math",$,Q,"⪹","\\precnapprox",!0),W("math",$,Q,"≁","\\nsim",!0),W("math",$,Q,"","\\@nshortmid"),W("math",$,Q,"∤","\\nmid",!0),W("math",$,Q,"⊬","\\nvdash",!0),W("math",$,Q,"⊭","\\nvDash",!0),W("math",$,Q,"⋪","\\ntriangleleft"),W("math",$,Q,"⋬","\\ntrianglelefteq",!0),W("math",$,Q,"⊊","\\subsetneq",!0),W("math",$,Q,"","\\@varsubsetneq"),W("math",$,Q,"⫋","\\subsetneqq",!0),W("math",$,Q,"","\\@varsubsetneqq"),W("math",$,Q,"≯","\\ngtr",!0),W("math",$,Q,"","\\@ngeqslant"),W("math",$,Q,"","\\@ngeqq"),W("math",$,Q,"⪈","\\gneq",!0),W("math",$,Q,"≩","\\gneqq",!0),W("math",$,Q,"","\\@gvertneqq"),W("math",$,Q,"⋧","\\gnsim",!0),W("math",$,Q,"⪊","\\gnapprox",!0),W("math",$,Q,"⊁","\\nsucc",!0),W("math",$,Q,"⋡","\\nsucceq",!0),W("math",$,Q,"⋩","\\succnsim",!0),W("math",$,Q,"⪺","\\succnapprox",!0),W("math",$,Q,"≆","\\ncong",!0),W("math",$,Q,"","\\@nshortparallel"),W("math",$,Q,"∦","\\nparallel",!0),W("math",$,Q,"⊯","\\nVDash",!0),W("math",$,Q,"⋫","\\ntriangleright"),W("math",$,Q,"⋭","\\ntrianglerighteq",!0),W("math",$,Q,"","\\@nsupseteqq"),W("math",$,Q,"⊋","\\supsetneq",!0),W("math",$,Q,"","\\@varsupsetneq"),W("math",$,Q,"⫌","\\supsetneqq",!0),W("math",$,Q,"","\\@varsupsetneqq"),W("math",$,Q,"⊮","\\nVdash",!0),W("math",$,Q,"⪵","\\precneqq",!0),W("math",$,Q,"⪶","\\succneqq",!0),W("math",$,Q,"","\\@nsubseteqq"),W("math",$,Z,"⊴","\\unlhd"),W("math",$,Z,"⊵","\\unrhd"),W("math",$,Q,"↚","\\nleftarrow",!0),W("math",$,Q,"↛","\\nrightarrow",!0),W("math",$,Q,"⇍","\\nLeftarrow",!0),W("math",$,Q,"⇏","\\nRightarrow",!0),W("math",$,Q,"↮","\\nleftrightarrow",!0),W("math",$,Q,"⇎","\\nLeftrightarrow",!0),W("math",$,Q,"△","\\vartriangle"),W("math",$,"textord","ℏ","\\hslash"),W("math",$,"textord","▽","\\triangledown"),W("math",$,"textord","◊","\\lozenge"),W("math",$,"textord","Ⓢ","\\circledS"),W("math",$,"textord","®","\\circledR"),W("text",$,"textord","®","\\circledR"),W("math",$,"textord","∡","\\measuredangle",!0),W("math",$,"textord","∄","\\nexists"),W("math",$,"textord","℧","\\mho"),W("math",$,"textord","Ⅎ","\\Finv",!0),W("math",$,"textord","⅁","\\Game",!0),W("math",$,"textord","‵","\\backprime"),W("math",$,"textord","▲","\\blacktriangle"),W("math",$,"textord","▼","\\blacktriangledown"),W("math",$,"textord","■","\\blacksquare"),W("math",$,"textord","⧫","\\blacklozenge"),W("math",$,"textord","★","\\bigstar"),W("math",$,"textord","∢","\\sphericalangle",!0),W("math",$,"textord","∁","\\complement",!0),W("math",$,"textord","ð","\\eth",!0),W("math",$,"textord","╱","\\diagup"),W("math",$,"textord","╲","\\diagdown"),W("math",$,"textord","□","\\square"),W("math",$,"textord","□","\\Box"),W("math",$,"textord","◊","\\Diamond"),W("math",$,"textord","¥","\\yen",!0),W("text",$,"textord","¥","\\yen",!0),W("math",$,"textord","✓","\\checkmark",!0),W("text",$,"textord","✓","\\checkmark"),W("math",$,"textord","ℶ","\\beth",!0),W("math",$,"textord","ℸ","\\daleth",!0),W("math",$,"textord","ℷ","\\gimel",!0),W("math",$,"textord","ϝ","\\digamma"),W("math",$,"textord","ϰ","\\varkappa"),W("math",$,"open","┌","\\ulcorner",!0),W("math",$,"close","┐","\\urcorner",!0),W("math",$,"open","└","\\llcorner",!0),W("math",$,"close","┘","\\lrcorner",!0),W("math",$,Q,"≦","\\leqq",!0),W("math",$,Q,"⩽","\\leqslant",!0),W("math",$,Q,"⪕","\\eqslantless",!0),W("math",$,Q,"≲","\\lesssim",!0),W("math",$,Q,"⪅","\\lessapprox",!0),W("math",$,Q,"≊","\\approxeq",!0),W("math",$,Z,"⋖","\\lessdot"),W("math",$,Q,"⋘","\\lll",!0),W("math",$,Q,"≶","\\lessgtr",!0),W("math",$,Q,"⋚","\\lesseqgtr",!0),W("math",$,Q,"⪋","\\lesseqqgtr",!0),W("math",$,Q,"≑","\\doteqdot"),W("math",$,Q,"≓","\\risingdotseq",!0),W("math",$,Q,"≒","\\fallingdotseq",!0),W("math",$,Q,"∽","\\backsim",!0),W("math",$,Q,"⋍","\\backsimeq",!0),W("math",$,Q,"⫅","\\subseteqq",!0),W("math",$,Q,"⋐","\\Subset",!0),W("math",$,Q,"⊏","\\sqsubset",!0),W("math",$,Q,"≼","\\preccurlyeq",!0),W("math",$,Q,"⋞","\\curlyeqprec",!0),W("math",$,Q,"≾","\\precsim",!0),W("math",$,Q,"⪷","\\precapprox",!0),W("math",$,Q,"⊲","\\vartriangleleft"),W("math",$,Q,"⊴","\\trianglelefteq"),W("math",$,Q,"⊨","\\vDash",!0),W("math",$,Q,"⊪","\\Vvdash",!0),W("math",$,Q,"⌣","\\smallsmile"),W("math",$,Q,"⌢","\\smallfrown"),W("math",$,Q,"≏","\\bumpeq",!0),W("math",$,Q,"≎","\\Bumpeq",!0),W("math",$,Q,"≧","\\geqq",!0),W("math",$,Q,"⩾","\\geqslant",!0),W("math",$,Q,"⪖","\\eqslantgtr",!0),W("math",$,Q,"≳","\\gtrsim",!0),W("math",$,Q,"⪆","\\gtrapprox",!0),W("math",$,Z,"⋗","\\gtrdot"),W("math",$,Q,"⋙","\\ggg",!0),W("math",$,Q,"≷","\\gtrless",!0),W("math",$,Q,"⋛","\\gtreqless",!0),W("math",$,Q,"⪌","\\gtreqqless",!0),W("math",$,Q,"≖","\\eqcirc",!0),W("math",$,Q,"≗","\\circeq",!0),W("math",$,Q,"≜","\\triangleq",!0),W("math",$,Q,"∼","\\thicksim"),W("math",$,Q,"≈","\\thickapprox"),W("math",$,Q,"⫆","\\supseteqq",!0),W("math",$,Q,"⋑","\\Supset",!0),W("math",$,Q,"⊐","\\sqsupset",!0),W("math",$,Q,"≽","\\succcurlyeq",!0),W("math",$,Q,"⋟","\\curlyeqsucc",!0),W("math",$,Q,"≿","\\succsim",!0),W("math",$,Q,"⪸","\\succapprox",!0),W("math",$,Q,"⊳","\\vartriangleright"),W("math",$,Q,"⊵","\\trianglerighteq"),W("math",$,Q,"⊩","\\Vdash",!0),W("math",$,Q,"∣","\\shortmid"),W("math",$,Q,"∥","\\shortparallel"),W("math",$,Q,"≬","\\between",!0),W("math",$,Q,"⋔","\\pitchfork",!0),W("math",$,Q,"∝","\\varpropto"),W("math",$,Q,"◀","\\blacktriangleleft"),W("math",$,Q,"∴","\\therefore",!0),W("math",$,Q,"∍","\\backepsilon"),W("math",$,Q,"▶","\\blacktriangleright"),W("math",$,Q,"∵","\\because",!0),W("math",$,Q,"⋘","\\llless"),W("math",$,Q,"⋙","\\gggtr"),W("math",$,Z,"⊲","\\lhd"),W("math",$,Z,"⊳","\\rhd"),W("math",$,Q,"≂","\\eqsim",!0),W("math",j,Q,"⋈","\\Join"),W("math",$,Q,"≑","\\Doteq",!0),W("math",$,Z,"∔","\\dotplus",!0),W("math",$,Z,"∖","\\smallsetminus"),W("math",$,Z,"⋒","\\Cap",!0),W("math",$,Z,"⋓","\\Cup",!0),W("math",$,Z,"⩞","\\doublebarwedge",!0),W("math",$,Z,"⊟","\\boxminus",!0),W("math",$,Z,"⊞","\\boxplus",!0),W("math",$,Z,"⋇","\\divideontimes",!0),W("math",$,Z,"⋉","\\ltimes",!0),W("math",$,Z,"⋊","\\rtimes",!0),W("math",$,Z,"⋋","\\leftthreetimes",!0),W("math",$,Z,"⋌","\\rightthreetimes",!0),W("math",$,Z,"⋏","\\curlywedge",!0),W("math",$,Z,"⋎","\\curlyvee",!0),W("math",$,Z,"⊝","\\circleddash",!0),W("math",$,Z,"⊛","\\circledast",!0),W("math",$,Z,"⋅","\\centerdot"),W("math",$,Z,"⊺","\\intercal",!0),W("math",$,Z,"⋒","\\doublecap"),W("math",$,Z,"⋓","\\doublecup"),W("math",$,Z,"⊠","\\boxtimes",!0),W("math",$,Q,"⇢","\\dashrightarrow",!0),W("math",$,Q,"⇠","\\dashleftarrow",!0),W("math",$,Q,"⇇","\\leftleftarrows",!0),W("math",$,Q,"⇆","\\leftrightarrows",!0),W("math",$,Q,"⇚","\\Lleftarrow",!0),W("math",$,Q,"↞","\\twoheadleftarrow",!0),W("math",$,Q,"↢","\\leftarrowtail",!0),W("math",$,Q,"↫","\\looparrowleft",!0),W("math",$,Q,"⇋","\\leftrightharpoons",!0),W("math",$,Q,"↶","\\curvearrowleft",!0),W("math",$,Q,"↺","\\circlearrowleft",!0),W("math",$,Q,"↰","\\Lsh",!0),W("math",$,Q,"⇈","\\upuparrows",!0),W("math",$,Q,"↿","\\upharpoonleft",!0),W("math",$,Q,"⇃","\\downharpoonleft",!0),W("math",$,Q,"⊸","\\multimap",!0),W("math",$,Q,"↭","\\leftrightsquigarrow",!0),W("math",$,Q,"⇉","\\rightrightarrows",!0),W("math",$,Q,"⇄","\\rightleftarrows",!0),W("math",$,Q,"↠","\\twoheadrightarrow",!0),W("math",$,Q,"↣","\\rightarrowtail",!0),W("math",$,Q,"↬","\\looparrowright",!0),W("math",$,Q,"↷","\\curvearrowright",!0),W("math",$,Q,"↻","\\circlearrowright",!0),W("math",$,Q,"↱","\\Rsh",!0),W("math",$,Q,"⇊","\\downdownarrows",!0),W("math",$,Q,"↾","\\upharpoonright",!0),W("math",$,Q,"⇂","\\downharpoonright",!0),W("math",$,Q,"⇝","\\rightsquigarrow",!0),W("math",$,Q,"⇝","\\leadsto"),W("math",$,Q,"⇛","\\Rrightarrow",!0),W("math",$,Q,"↾","\\restriction"),W("math",j,"textord","‘","`"),W("math",j,"textord","$","\\$"),W("text",j,"textord","$","\\$"),W("text",j,"textord","$","\\textdollar"),W("math",j,"textord","%","\\%"),W("text",j,"textord","%","\\%"),W("math",j,"textord","_","\\_"),W("text",j,"textord","_","\\_"),W("text",j,"textord","_","\\textunderscore"),W("math",j,"textord","∠","\\angle",!0),W("math",j,"textord","∞","\\infty",!0),W("math",j,"textord","′","\\prime"),W("math",j,"textord","△","\\triangle"),W("math",j,"textord","Γ","\\Gamma",!0),W("math",j,"textord","Δ","\\Delta",!0),W("math",j,"textord","Θ","\\Theta",!0),W("math",j,"textord","Λ","\\Lambda",!0),W("math",j,"textord","Ξ","\\Xi",!0),W("math",j,"textord","Π","\\Pi",!0),W("math",j,"textord","Σ","\\Sigma",!0),W("math",j,"textord","Υ","\\Upsilon",!0),W("math",j,"textord","Φ","\\Phi",!0),W("math",j,"textord","Ψ","\\Psi",!0),W("math",j,"textord","Ω","\\Omega",!0),W("math",j,"textord","A","Α"),W("math",j,"textord","B","Β"),W("math",j,"textord","E","Ε"),W("math",j,"textord","Z","Ζ"),W("math",j,"textord","H","Η"),W("math",j,"textord","I","Ι"),W("math",j,"textord","K","Κ"),W("math",j,"textord","M","Μ"),W("math",j,"textord","N","Ν"),W("math",j,"textord","O","Ο"),W("math",j,"textord","P","Ρ"),W("math",j,"textord","T","Τ"),W("math",j,"textord","X","Χ"),W("math",j,"textord","¬","\\neg",!0),W("math",j,"textord","¬","\\lnot"),W("math",j,"textord","⊤","\\top"),W("math",j,"textord","⊥","\\bot"),W("math",j,"textord","∅","\\emptyset"),W("math",$,"textord","∅","\\varnothing"),W("math",j,K,"α","\\alpha",!0),W("math",j,K,"β","\\beta",!0),W("math",j,K,"γ","\\gamma",!0),W("math",j,K,"δ","\\delta",!0),W("math",j,K,"ϵ","\\epsilon",!0),W("math",j,K,"ζ","\\zeta",!0),W("math",j,K,"η","\\eta",!0),W("math",j,K,"θ","\\theta",!0),W("math",j,K,"ι","\\iota",!0),W("math",j,K,"κ","\\kappa",!0),W("math",j,K,"λ","\\lambda",!0),W("math",j,K,"μ","\\mu",!0),W("math",j,K,"ν","\\nu",!0),W("math",j,K,"ξ","\\xi",!0),W("math",j,K,"ο","\\omicron",!0),W("math",j,K,"π","\\pi",!0),W("math",j,K,"ρ","\\rho",!0),W("math",j,K,"σ","\\sigma",!0),W("math",j,K,"τ","\\tau",!0),W("math",j,K,"υ","\\upsilon",!0),W("math",j,K,"ϕ","\\phi",!0),W("math",j,K,"χ","\\chi",!0),W("math",j,K,"ψ","\\psi",!0),W("math",j,K,"ω","\\omega",!0),W("math",j,K,"ε","\\varepsilon",!0),W("math",j,K,"ϑ","\\vartheta",!0),W("math",j,K,"ϖ","\\varpi",!0),W("math",j,K,"ϱ","\\varrho",!0),W("math",j,K,"ς","\\varsigma",!0),W("math",j,K,"φ","\\varphi",!0),W("math",j,Z,"∗","*"),W("math",j,Z,"+","+"),W("math",j,Z,"−","-"),W("math",j,Z,"⋅","\\cdot",!0),W("math",j,Z,"∘","\\circ"),W("math",j,Z,"÷","\\div",!0),W("math",j,Z,"±","\\pm",!0),W("math",j,Z,"×","\\times",!0),W("math",j,Z,"∩","\\cap",!0),W("math",j,Z,"∪","\\cup",!0),W("math",j,Z,"∖","\\setminus"),W("math",j,Z,"∧","\\land"),W("math",j,Z,"∨","\\lor"),W("math",j,Z,"∧","\\wedge",!0),W("math",j,Z,"∨","\\vee",!0),W("math",j,"textord","√","\\surd"),W("math",j,"open","(","("),W("math",j,"open","[","["),W("math",j,"open","⟨","\\langle",!0),W("math",j,"open","∣","\\lvert"),W("math",j,"open","∥","\\lVert"),W("math",j,"close",")",")"),W("math",j,"close","]","]"),W("math",j,"close","?","?"),W("math",j,"close","!","!"),W("math",j,"close","⟩","\\rangle",!0),W("math",j,"close","∣","\\rvert"),W("math",j,"close","∥","\\rVert"),W("math",j,Q,"=","="),W("math",j,Q,"<","<"),W("math",j,Q,">",">"),W("math",j,Q,":",":"),W("math",j,Q,"≈","\\approx",!0),W("math",j,Q,"≅","\\cong",!0),W("math",j,Q,"≥","\\ge"),W("math",j,Q,"≥","\\geq",!0),W("math",j,Q,"←","\\gets"),W("math",j,Q,">","\\gt"),W("math",j,Q,"∈","\\in",!0),W("math",j,Q,"","\\@not"),W("math",j,Q,"⊂","\\subset",!0),W("math",j,Q,"⊃","\\supset",!0),W("math",j,Q,"⊆","\\subseteq",!0),W("math",j,Q,"⊇","\\supseteq",!0),W("math",$,Q,"⊈","\\nsubseteq",!0),W("math",$,Q,"⊉","\\nsupseteq",!0),W("math",j,Q,"⊨","\\models"),W("math",j,Q,"←","\\leftarrow",!0),W("math",j,Q,"≤","\\le"),W("math",j,Q,"≤","\\leq",!0),W("math",j,Q,"<","\\lt"),W("math",j,Q,"→","\\rightarrow",!0),W("math",j,Q,"→","\\to"),W("math",$,Q,"≱","\\ngeq",!0),W("math",$,Q,"≰","\\nleq",!0),W("math",j,"spacing"," ","\\ "),W("math",j,"spacing"," ","~"),W("math",j,"spacing"," ","\\space"),W("math",j,"spacing"," ","\\nobreakspace"),W("text",j,"spacing"," ","\\ "),W("text",j,"spacing"," ","~"),W("text",j,"spacing"," ","\\space"),W("text",j,"spacing"," ","\\nobreakspace"),W("math",j,"spacing",null,"\\nobreak"),W("math",j,"spacing",null,"\\allowbreak"),W("math",j,"punct",",",","),W("math",j,"punct",";",";"),W("math",$,Z,"⊼","\\barwedge",!0),W("math",$,Z,"⊻","\\veebar",!0),W("math",j,Z,"⊙","\\odot",!0),W("math",j,Z,"⊕","\\oplus",!0),W("math",j,Z,"⊗","\\otimes",!0),W("math",j,"textord","∂","\\partial",!0),W("math",j,Z,"⊘","\\oslash",!0),W("math",$,Z,"⊚","\\circledcirc",!0),W("math",$,Z,"⊡","\\boxdot",!0),W("math",j,Z,"△","\\bigtriangleup"),W("math",j,Z,"▽","\\bigtriangledown"),W("math",j,Z,"†","\\dagger"),W("math",j,Z,"⋄","\\diamond"),W("math",j,Z,"⋆","\\star"),W("math",j,Z,"◃","\\triangleleft"),W("math",j,Z,"▹","\\triangleright"),W("math",j,"open","{","\\{"),W("text",j,"textord","{","\\{"),W("text",j,"textord","{","\\textbraceleft"),W("math",j,"close","}","\\}"),W("text",j,"textord","}","\\}"),W("text",j,"textord","}","\\textbraceright"),W("math",j,"open","{","\\lbrace"),W("math",j,"close","}","\\rbrace"),W("math",j,"open","[","\\lbrack"),W("text",j,"textord","[","\\lbrack"),W("math",j,"close","]","\\rbrack"),W("text",j,"textord","]","\\rbrack"),W("math",j,"open","(","\\lparen"),W("math",j,"close",")","\\rparen"),W("text",j,"textord","<","\\textless"),W("text",j,"textord",">","\\textgreater"),W("math",j,"open","⌊","\\lfloor",!0),W("math",j,"close","⌋","\\rfloor",!0),W("math",j,"open","⌈","\\lceil",!0),W("math",j,"close","⌉","\\rceil",!0),W("math",j,"textord","\\","\\backslash"),W("math",j,"textord","∣","|"),W("math",j,"textord","∣","\\vert"),W("text",j,"textord","|","\\textbar"),W("math",j,"textord","∥","\\|"),W("math",j,"textord","∥","\\Vert"),W("text",j,"textord","∥","\\textbardbl"),W("text",j,"textord","~","\\textasciitilde"),W("text",j,"textord","\\","\\textbackslash"),W("text",j,"textord","^","\\textasciicircum"),W("math",j,Q,"↑","\\uparrow",!0),W("math",j,Q,"⇑","\\Uparrow",!0),W("math",j,Q,"↓","\\downarrow",!0),W("math",j,Q,"⇓","\\Downarrow",!0),W("math",j,Q,"↕","\\updownarrow",!0),W("math",j,Q,"⇕","\\Updownarrow",!0),W("math",j,J,"∐","\\coprod"),W("math",j,J,"⋁","\\bigvee"),W("math",j,J,"⋀","\\bigwedge"),W("math",j,J,"⨄","\\biguplus"),W("math",j,J,"⋂","\\bigcap"),W("math",j,J,"⋃","\\bigcup"),W("math",j,J,"∫","\\int"),W("math",j,J,"∫","\\intop"),W("math",j,J,"∬","\\iint"),W("math",j,J,"∭","\\iiint"),W("math",j,J,"∏","\\prod"),W("math",j,J,"∑","\\sum"),W("math",j,J,"⨂","\\bigotimes"),W("math",j,J,"⨁","\\bigoplus"),W("math",j,J,"⨀","\\bigodot"),W("math",j,J,"∮","\\oint"),W("math",j,J,"∯","\\oiint"),W("math",j,J,"∰","\\oiiint"),W("math",j,J,"⨆","\\bigsqcup"),W("math",j,J,"∫","\\smallint"),W("text",j,"inner","…","\\textellipsis"),W("math",j,"inner","…","\\mathellipsis"),W("text",j,"inner","…","\\ldots",!0),W("math",j,"inner","…","\\ldots",!0),W("math",j,"inner","⋯","\\@cdots",!0),W("math",j,"inner","⋱","\\ddots",!0),W("math",j,"textord","⋮","\\varvdots"),W("math",j,"accent-token","ˊ","\\acute"),W("math",j,"accent-token","ˋ","\\grave"),W("math",j,"accent-token","¨","\\ddot"),W("math",j,"accent-token","~","\\tilde"),W("math",j,"accent-token","ˉ","\\bar"),W("math",j,"accent-token","˘","\\breve"),W("math",j,"accent-token","ˇ","\\check"),W("math",j,"accent-token","^","\\hat"),W("math",j,"accent-token","⃗","\\vec"),W("math",j,"accent-token","˙","\\dot"),W("math",j,"accent-token","˚","\\mathring"),W("math",j,K,"ı","\\imath",!0),W("math",j,K,"ȷ","\\jmath",!0),W("text",j,"textord","ı","\\i",!0),W("text",j,"textord","ȷ","\\j",!0),W("text",j,"textord","ß","\\ss",!0),W("text",j,"textord","æ","\\ae",!0),W("text",j,"textord","æ","\\ae",!0),W("text",j,"textord","œ","\\oe",!0),W("text",j,"textord","ø","\\o",!0),W("text",j,"textord","Æ","\\AE",!0),W("text",j,"textord","Œ","\\OE",!0),W("text",j,"textord","Ø","\\O",!0),W("text",j,"accent-token","ˊ","\\'"),W("text",j,"accent-token","ˋ","\\`"),W("text",j,"accent-token","ˆ","\\^"),W("text",j,"accent-token","˜","\\~"),W("text",j,"accent-token","ˉ","\\="),W("text",j,"accent-token","˘","\\u"),W("text",j,"accent-token","˙","\\."),W("text",j,"accent-token","˚","\\r"),W("text",j,"accent-token","ˇ","\\v"),W("text",j,"accent-token","¨",'\\"'),W("text",j,"accent-token","˝","\\H"),W("text",j,"accent-token","◯","\\textcircled");var tt={"--":!0,"---":!0,"``":!0,"''":!0};W("text",j,"textord","–","--"),W("text",j,"textord","–","\\textendash"),W("text",j,"textord","—","---"),W("text",j,"textord","—","\\textemdash"),W("text",j,"textord","‘","`"),W("text",j,"textord","‘","\\textquoteleft"),W("text",j,"textord","’","'"),W("text",j,"textord","’","\\textquoteright"),W("text",j,"textord","“","``"),W("text",j,"textord","“","\\textquotedblleft"),W("text",j,"textord","”","''"),W("text",j,"textord","”","\\textquotedblright"),W("math",j,"textord","°","\\degree",!0),W("text",j,"textord","°","\\degree"),W("text",j,"textord","°","\\textdegree",!0),W("math",j,K,"£","\\pounds"),W("math",j,K,"£","\\mathsterling",!0),W("text",j,K,"£","\\pounds"),W("text",j,K,"£","\\textsterling",!0),W("math",$,"textord","✠","\\maltese"),W("text",$,"textord","✠","\\maltese"),W("text",j,"spacing"," ","\\ "),W("text",j,"spacing"," "," "),W("text",j,"spacing"," ","~");for(var et=0;et<'0123456789/@."'.length;et++){var rt='0123456789/@."'.charAt(et);W("math",j,"textord",rt,rt)}for(var at=0;at<'0123456789!@*()-=+[]<>|";:?/.,'.length;at++){var nt='0123456789!@*()-=+[]<>|";:?/.,'.charAt(at);W("text",j,"textord",nt,nt)}for(var ot="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",it=0;it<ot.length;it++){var st=ot.charAt(it);W("math",j,K,st,st),W("text",j,"textord",st,st)}W("math",$,"textord","C","ℂ"),W("text",$,"textord","C","ℂ"),W("math",$,"textord","H","ℍ"),W("text",$,"textord","H","ℍ"),W("math",$,"textord","N","ℕ"),W("text",$,"textord","N","ℕ"),W("math",$,"textord","P","ℙ"),W("text",$,"textord","P","ℙ"),W("math",$,"textord","Q","ℚ"),W("text",$,"textord","Q","ℚ"),W("math",$,"textord","R","ℝ"),W("text",$,"textord","R","ℝ"),W("math",$,"textord","Z","ℤ"),W("text",$,"textord","Z","ℤ"),W("math",j,K,"h","ℎ"),W("text",j,K,"h","ℎ");for(var ht="",lt=0;lt<ot.length;lt++){var mt=ot.charAt(lt);W("math",j,K,mt,ht=String.fromCharCode(55349,56320+lt)),W("text",j,"textord",mt,ht),W("math",j,K,mt,ht=String.fromCharCode(55349,56372+lt)),W("text",j,"textord",mt,ht),W("math",j,K,mt,ht=String.fromCharCode(55349,56424+lt)),W("text",j,"textord",mt,ht),W("math",j,K,mt,ht=String.fromCharCode(55349,56580+lt)),W("text",j,"textord",mt,ht),W("math",j,K,mt,ht=String.fromCharCode(55349,56736+lt)),W("text",j,"textord",mt,ht),W("math",j,K,mt,ht=String.fromCharCode(55349,56788+lt)),W("text",j,"textord",mt,ht),W("math",j,K,mt,ht=String.fromCharCode(55349,56840+lt)),W("text",j,"textord",mt,ht),W("math",j,K,mt,ht=String.fromCharCode(55349,56944+lt)),W("text",j,"textord",mt,ht),lt<26&&(W("math",j,K,mt,ht=String.fromCharCode(55349,56632+lt)),W("text",j,"textord",mt,ht),W("math",j,K,mt,ht=String.fromCharCode(55349,56476+lt)),W("text",j,"textord",mt,ht))}W("math",j,K,"k",ht=String.fromCharCode(55349,56668)),W("text",j,"textord","k",ht);for(var ct=0;ct<10;ct++){var ut=ct.toString();W("math",j,K,ut,ht=String.fromCharCode(55349,57294+ct)),W("text",j,"textord",ut,ht),W("math",j,K,ut,ht=String.fromCharCode(55349,57314+ct)),W("text",j,"textord",ut,ht),W("math",j,K,ut,ht=String.fromCharCode(55349,57324+ct)),W("text",j,"textord",ut,ht),W("math",j,K,ut,ht=String.fromCharCode(55349,57334+ct)),W("text",j,"textord",ut,ht)}for(var dt=0;dt<"ÇÐÞçþ".length;dt++){var pt="ÇÐÞçþ".charAt(dt);W("math",j,K,pt,pt),W("text",j,"textord",pt,pt)}W("text",j,"textord","ð","ð"),W("text",j,"textord","–","–"),W("text",j,"textord","—","—"),W("text",j,"textord","‘","‘"),W("text",j,"textord","’","’"),W("text",j,"textord","“","“"),W("text",j,"textord","”","”");var ft=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathdefault","textit","Math-Italic"],["mathdefault","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["","",""],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],gt=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],xt=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],vt=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],bt=function(t,e){return e.size<2?t:xt[t-1][e.size-1]},yt=function(){function t(e){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this._fontMetrics=void 0,this.style=e.style,this.color=e.color,this.size=e.size||t.BASESIZE,this.textSize=e.textSize||this.size,this.phantom=!!e.phantom,this.font=e.font||"",this.fontFamily=e.fontFamily||"",this.fontWeight=e.fontWeight||"",this.fontShape=e.fontShape||"",this.sizeMultiplier=vt[this.size-1],this.maxSize=e.maxSize,this._fontMetrics=void 0}var e=t.prototype;return e.extend=function(e){var r={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize};for(var a in e)e.hasOwnProperty(a)&&(r[a]=e[a]);return new t(r)},e.havingStyle=function(t){return this.style===t?this:this.extend({style:t,size:bt(this.textSize,t)})},e.havingCrampedStyle=function(){return this.havingStyle(this.style.cramp())},e.havingSize=function(t){return this.size===t&&this.textSize===t?this:this.extend({style:this.style.text(),size:t,textSize:t,sizeMultiplier:vt[t-1]})},e.havingBaseStyle=function(e){e=e||this.style.text();var r=bt(t.BASESIZE,e);return this.size===r&&this.textSize===t.BASESIZE&&this.style===e?this:this.extend({style:e,size:r})},e.havingBaseSizing=function(){var t;switch(this.style.id){case 4:case 5:t=3;break;case 6:case 7:t=1;break;default:t=6}return this.extend({style:this.style.text(),size:t})},e.withColor=function(t){return this.extend({color:t})},e.withPhantom=function(){return this.extend({phantom:!0})},e.withFont=function(t){return this.extend({font:t})},e.withTextFontFamily=function(t){return this.extend({fontFamily:t,font:""})},e.withTextFontWeight=function(t){return this.extend({fontWeight:t,font:""})},e.withTextFontShape=function(t){return this.extend({fontShape:t,font:""})},e.sizingClasses=function(t){return t.size!==this.size?["sizing","reset-size"+t.size,"size"+this.size]:[]},e.baseSizingClasses=function(){return this.size!==t.BASESIZE?["sizing","reset-size"+this.size,"size"+t.BASESIZE]:[]},e.fontMetrics=function(){return this._fontMetrics||(this._fontMetrics=function(t){var e;if(!U[e=t>=5?0:t>=3?1:2]){var r=U[e]={cssEmPerMu:D.quad[e]/18};for(var a in D)D.hasOwnProperty(a)&&(r[a]=D[a][e])}return U[e]}(this.size)),this._fontMetrics},e.getColor=function(){return this.phantom?"transparent":this.color},t}();yt.BASESIZE=6;var wt=yt,kt={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:1.00375,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:1.00375},St={ex:!0,em:!0,mu:!0},zt=function(t,e){var r;if(t.unit in kt)r=kt[t.unit]/e.fontMetrics().ptPerEm/e.sizeMultiplier;else if("mu"===t.unit)r=e.fontMetrics().cssEmPerMu;else{var a;if(a=e.style.isTight()?e.havingStyle(e.style.text()):e,"ex"===t.unit)r=a.fontMetrics().xHeight;else{if("em"!==t.unit)throw new i("Invalid unit: '"+t.unit+"'");r=a.fontMetrics().quad}a!==e&&(r*=a.sizeMultiplier/e.sizeMultiplier)}return Math.min(t.number*r,e.maxSize)},Mt=["\\imath","ı","\\jmath","ȷ","\\pounds","\\mathsterling","\\textsterling","£"],Tt=function(t,e,r){return _[r][t]&&_[r][t].replace&&(t=_[r][t].replace),{value:t,metrics:V(t,e,r)}},At=function(t,e,r,a,n){var o,i=Tt(t,e,r),s=i.metrics;if(t=i.value,s){var h=s.italic;("text"===r||a&&"mathit"===a.font)&&(h=0),o=new E(t,s.height,s.depth,h,s.skew,s.width,n)}else"undefined"!=typeof console&&console.warn("No character metrics for '"+t+"' in style '"+e+"'"),o=new E(t,0,0,0,0,0,n);if(a){o.maxFontSize=a.sizeMultiplier,a.style.isTight()&&o.classes.push("mtight");var l=a.getColor();l&&(o.style.color=l)}return o},Bt=function(t,e){if(A(t.classes)!==A(e.classes)||t.skew!==e.skew||t.maxFontSize!==e.maxFontSize)return!1;for(var r in t.style)if(t.style.hasOwnProperty(r)&&t.style[r]!==e.style[r])return!1;for(var a in e.style)if(e.style.hasOwnProperty(a)&&t.style[a]!==e.style[a])return!1;return!0},qt=function(t){for(var e=0,r=0,a=0,n=0;n<t.children.length;n++){var o=t.children[n];o.height>e&&(e=o.height),o.depth>r&&(r=o.depth),o.maxFontSize>a&&(a=o.maxFontSize)}t.height=e,t.depth=r,t.maxFontSize=a},Ct=function(t,e,r,a){var n=new N(t,e,r,a);return qt(n),n},Nt=function(t,e,r,a){return new N(t,e,r,a)},It=function(t){var e=new T(t);return qt(e),e},Ot=function(t,e,r){var a="";switch(t){case"amsrm":a="AMS";break;case"textrm":a="Main";break;case"textsf":a="SansSerif";break;case"texttt":a="Typewriter";break;default:a=t}return a+"-"+("textbf"===e&&"textit"===r?"BoldItalic":"textbf"===e?"Bold":"textit"===e?"Italic":"Regular")},Et={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},Rt={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},Lt={fontMap:Et,makeSymbol:At,mathsym:function(t,e,r,a){return void 0===a&&(a=[]),r&&r.font&&"boldsymbol"===r.font&&Tt(t,"Main-Bold",e).metrics?At(t,"Main-Bold",e,r,a.concat(["mathbf"])):"\\"===t||"main"===_[e][t].font?At(t,"Main-Regular",e,r,a):At(t,"AMS-Regular",e,r,a.concat(["amsrm"]))},makeSpan:Ct,makeSvgSpan:Nt,makeLineSpan:function(t,e,r){var a=Ct([t],[],e);return a.height=r||e.fontMetrics().defaultRuleThickness,a.style.borderBottomWidth=a.height+"em",a.maxFontSize=1,a},makeAnchor:function(t,e,r,a){var n=new I(t,e,r,a);return qt(n),n},makeFragment:It,wrapFragment:function(t,e){return t instanceof T?Ct([],[t],e):t},makeVList:function(t,e){for(var r=function(t){if("individualShift"===t.positionType){for(var e=t.children,r=[e[0]],a=-e[0].shift-e[0].elem.depth,n=a,o=1;o<e.length;o++){var i=-e[o].shift-n-e[o].elem.depth,s=i-(e[o-1].elem.height+e[o-1].elem.depth);n+=i,r.push({type:"kern",size:s}),r.push(e[o])}return{children:r,depth:a}}var h;if("top"===t.positionType){for(var l=t.positionData,m=0;m<t.children.length;m++){var c=t.children[m];l-="kern"===c.type?c.size:c.elem.height+c.elem.depth}h=l}else if("bottom"===t.positionType)h=-t.positionData;else{var u=t.children[0];if("elem"!==u.type)throw new Error('First child must have type "elem".');if("shift"===t.positionType)h=-u.elem.depth-t.positionData;else{if("firstBaseline"!==t.positionType)throw new Error("Invalid positionType "+t.positionType+".");h=-u.elem.depth}}return{children:t.children,depth:h}}(t),a=r.children,n=r.depth,o=0,i=0;i<a.length;i++){var s=a[i];if("elem"===s.type){var h=s.elem;o=Math.max(o,h.maxFontSize,h.height)}}o+=2;var l=Ct(["pstrut"],[]);l.style.height=o+"em";for(var m=[],c=n,u=n,d=n,p=0;p<a.length;p++){var f=a[p];if("kern"===f.type)d+=f.size;else{var g=f.elem,x=f.wrapperClasses||[],v=f.wrapperStyle||{},b=Ct(x,[l,g],void 0,v);b.style.top=-o-d-g.depth+"em",f.marginLeft&&(b.style.marginLeft=f.marginLeft),f.marginRight&&(b.style.marginRight=f.marginRight),m.push(b),d+=g.height+g.depth}c=Math.min(c,d),u=Math.max(u,d)}var y,w=Ct(["vlist"],m);if(w.style.height=u+"em",c<0){var k=Ct([],[]),S=Ct(["vlist"],[k]);S.style.height=-c+"em";var z=Ct(["vlist-s"],[new E("​")]);y=[Ct(["vlist-r"],[w,z]),Ct(["vlist-r"],[S])]}else y=[Ct(["vlist-r"],[w])];var M=Ct(["vlist-t"],y);return 2===y.length&&M.classes.push("vlist-t2"),M.height=u,M.depth=-c,M},makeOrd:function(t,e,r){var a,n=t.mode,o=t.text,s=["mord"],h="math"===n||"text"===n&&e.font,l=h?e.font:e.fontFamily;if(55349===o.charCodeAt(0)){var m=function(t,e){var r=1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320)+65536,a="math"===e?0:1;if(119808<=r&&r<120484){var n=Math.floor((r-119808)/26);return[ft[n][2],ft[n][a]]}if(120782<=r&&r<=120831){var o=Math.floor((r-120782)/10);return[gt[o][2],gt[o][a]]}if(120485===r||120486===r)return[ft[0][2],ft[0][a]];if(120486<r&&r<120782)return["",""];throw new i("Unsupported character: "+t)}(o,n),u=m[0],d=m[1];return At(o,u,n,e,s.concat(d))}if(l){var p,f;if("boldsymbol"===l||"mathnormal"===l){var g="boldsymbol"===l?function(t,e,r,a){return Tt(t,"Math-BoldItalic",e).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}}(o,n):(a=o,c.contains(Mt,a)?{fontName:"Main-Italic",fontClass:"mathit"}:/[0-9]/.test(a.charAt(0))?{fontName:"Caligraphic-Regular",fontClass:"mathcal"}:{fontName:"Math-Italic",fontClass:"mathdefault"});p=g.fontName,f=[g.fontClass]}else c.contains(Mt,o)?(p="Main-Italic",f=["mathit"]):h?(p=Et[l].fontName,f=[l]):(p=Ot(l,e.fontWeight,e.fontShape),f=[l,e.fontWeight,e.fontShape]);if(Tt(o,p,n).metrics)return At(o,p,n,e,s.concat(f));if(tt.hasOwnProperty(o)&&"Typewriter"===p.substr(0,10)){for(var x=[],v=0;v<o.length;v++)x.push(At(o[v],p,n,e,s.concat(f)));return It(x)}}if("mathord"===r){var b=function(t,e,r,a){return/[0-9]/.test(t.charAt(0))||c.contains(Mt,t)?{fontName:"Main-Italic",fontClass:"mathit"}:{fontName:"Math-Italic",fontClass:"mathdefault"}}(o);return At(o,b.fontName,n,e,s.concat([b.fontClass]))}if("textord"===r){var y=_[n][o]&&_[n][o].font;if("ams"===y){var w=Ot("amsrm",e.fontWeight,e.fontShape);return At(o,w,n,e,s.concat("amsrm",e.fontWeight,e.fontShape))}if("main"!==y&&y){var k=Ot(y,e.fontWeight,e.fontShape);return At(o,k,n,e,s.concat(k,e.fontWeight,e.fontShape))}var S=Ot("textrm",e.fontWeight,e.fontShape);return At(o,S,n,e,s.concat(e.fontWeight,e.fontShape))}throw new Error("unexpected type: "+r+" in makeOrd")},makeGlue:function(t,e){var r=Ct(["mspace"],[],e),a=zt(t,e);return r.style.marginRight=a+"em",r},staticSvg:function(t,e){var r=Rt[t],a=r[0],n=r[1],o=r[2],i=new L(a),s=new R([i],{width:n+"em",height:o+"em",style:"width:"+n+"em",viewBox:"0 0 "+1e3*n+" "+1e3*o,preserveAspectRatio:"xMinYMin"}),h=Nt(["overlay"],[s],e);return h.height=o,h.style.height=o+"em",h.style.width=n+"em",h},svgData:Rt,tryCombineChars:function(t){for(var e=0;e<t.length-1;e++){var r=t[e],a=t[e+1];r instanceof E&&a instanceof E&&Bt(r,a)&&(r.text+=a.text,r.height=Math.max(r.height,a.height),r.depth=Math.max(r.depth,a.depth),r.italic=a.italic,t.splice(e+1,1),e--)}return t}};function Ht(t,e){var r=Pt(t,e);if(!r)throw new Error("Expected node of type "+e+", but got "+(t?"node of type "+t.type:String(t)));return r}function Pt(t,e){return t&&t.type===e?t:null}function Dt(t,e){var r=function(t,e){return t&&"atom"===t.type&&t.family===e?t:null}(t,e);if(!r)throw new Error('Expected node of type "atom" and family "'+e+'", but got '+(t?"atom"===t.type?"atom of family "+t.family:"node of type "+t.type:String(t)));return r}function Ft(t){return t&&("atom"===t.type||X.hasOwnProperty(t.type))?t:null}var Vt={number:3,unit:"mu"},Ut={number:4,unit:"mu"},Gt={number:5,unit:"mu"},Xt={mord:{mop:Vt,mbin:Ut,mrel:Gt,minner:Vt},mop:{mord:Vt,mop:Vt,mrel:Gt,minner:Vt},mbin:{mord:Ut,mop:Ut,mopen:Ut,minner:Ut},mrel:{mord:Gt,mop:Gt,mopen:Gt,minner:Gt},mopen:{},mclose:{mop:Vt,mbin:Ut,mrel:Gt,minner:Vt},mpunct:{mord:Vt,mop:Vt,mrel:Gt,mopen:Vt,mclose:Vt,mpunct:Vt,minner:Vt},minner:{mord:Vt,mop:Vt,mbin:Ut,mrel:Gt,mopen:Vt,mpunct:Vt,minner:Vt}},Yt={mord:{mop:Vt},mop:{mord:Vt,mop:Vt},mbin:{},mrel:{},mopen:{},mclose:{mop:Vt},mpunct:{},minner:{mop:Vt}},_t={},Wt={},jt={};function $t(t){for(var e=t.type,r=(t.nodeType,t.names),a=t.props,n=t.handler,o=t.htmlBuilder,i=t.mathmlBuilder,s={type:e,numArgs:a.numArgs,argTypes:a.argTypes,greediness:void 0===a.greediness?1:a.greediness,allowedInText:!!a.allowedInText,allowedInMath:void 0===a.allowedInMath||a.allowedInMath,numOptionalArgs:a.numOptionalArgs||0,infix:!!a.infix,consumeMode:a.consumeMode,handler:n},h=0;h<r.length;++h)_t[r[h]]=s;e&&(o&&(Wt[e]=o),i&&(jt[e]=i))}function Zt(t){$t({type:t.type,names:[],props:{numArgs:0},handler:function(){throw new Error("Should never be called.")},htmlBuilder:t.htmlBuilder,mathmlBuilder:t.mathmlBuilder})}var Kt=function(t){var e=Pt(t,"ordgroup");return e?e.body:[t]},Jt=Lt.makeSpan,Qt=["leftmost","mbin","mopen","mrel","mop","mpunct"],te=["rightmost","mrel","mclose","mpunct"],ee={display:w.DISPLAY,text:w.TEXT,script:w.SCRIPT,scriptscript:w.SCRIPTSCRIPT},re={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},ae=function(t,e,r,a){void 0===a&&(a=[null,null]);for(var n=[],o=0;o<t.length;o++){var i=he(t[o],e);if(i instanceof T){var s=i.children;n.push.apply(n,s)}else n.push(i)}if(!r)return n;var h=e;if(1===t.length){var l=Pt(t[0],"sizing")||Pt(t[0],"styling");l&&("sizing"===l.type?h=e.havingSize(l.size):"styling"===l.type&&(h=e.havingStyle(ee[l.style])))}var m=Jt([a[0]||"leftmost"],[],e),u=Jt([a[1]||"rightmost"],[],e);return ne(n,function(t,e){var r=e.classes[0],a=t.classes[0];"mbin"===r&&c.contains(te,a)?e.classes[0]="mord":"mbin"===a&&c.contains(Qt,r)&&(t.classes[0]="mord")},{node:m},u),ne(n,function(t,e){var r=ie(e),a=ie(t),n=r&&a?t.hasClass("mtight")?Yt[r][a]:Xt[r][a]:null;if(n)return Lt.makeGlue(n,h)},{node:m},u),n},ne=function t(e,r,a,n){n&&e.push(n);for(var o=0;o<e.length;o++){var i=e[o],s=oe(i);if(s)t(s.children,r,a);else if("mspace"!==i.classes[0]){var h=r(i,a.node);h&&(a.insertAfter?a.insertAfter(h):(e.unshift(h),o++)),a.node=i,a.insertAfter=function(t){return function(r){e.splice(t+1,0,r),o++}}(o)}}n&&e.pop()},oe=function(t){return t instanceof T||t instanceof I?t:null},ie=function(t,e){return t?(e&&(t=function t(e,r){var a=oe(e);if(a){var n=a.children;if(n.length){if("right"===r)return t(n[n.length-1],"right");if("left"===r)return t(n[0],"left")}}return e}(t,e)),re[t.classes[0]]||null):null},se=function(t,e){var r=["nulldelimiter"].concat(t.baseSizingClasses());return Jt(e.concat(r))},he=function(t,e,r){if(!t)return Jt();if(Wt[t.type]){var a=Wt[t.type](t,e);if(r&&e.size!==r.size){a=Jt(e.sizingClasses(r),[a],e);var n=e.sizeMultiplier/r.sizeMultiplier;a.height*=n,a.depth*=n}return a}throw new i("Got group of unknown type: '"+t.type+"'")};function le(t,e){var r=Jt(["base"],t,e),a=Jt(["strut"]);return a.style.height=r.height+r.depth+"em",a.style.verticalAlign=-r.depth+"em",r.children.unshift(a),r}function me(t,e){var r=null;1===t.length&&"tag"===t[0].type&&(r=t[0].tag,t=t[0].body);for(var a,n=ae(t,e,!0),o=[],i=[],s=0;s<n.length;s++)if(i.push(n[s]),n[s].hasClass("mbin")||n[s].hasClass("mrel")||n[s].hasClass("allowbreak")){for(var h=!1;s<n.length-1&&n[s+1].hasClass("mspace")&&!n[s+1].hasClass("newline");)s++,i.push(n[s]),n[s].hasClass("nobreak")&&(h=!0);h||(o.push(le(i,e)),i=[])}else n[s].hasClass("newline")&&(i.pop(),i.length>0&&(o.push(le(i,e)),i=[]),o.push(n[s]));i.length>0&&o.push(le(i,e)),r&&((a=le(ae(r,e,!0))).classes=["tag"],o.push(a));var l=Jt(["katex-html"],o);if(l.setAttribute("aria-hidden","true"),a){var m=a.children[0];m.style.height=l.height+l.depth+"em",m.style.verticalAlign=-l.depth+"em"}return l}function ce(t){return new T(t)}var ue=function(){function t(t,e){this.type=void 0,this.attributes=void 0,this.children=void 0,this.type=t,this.attributes={},this.children=e||[]}var e=t.prototype;return e.setAttribute=function(t,e){this.attributes[t]=e},e.getAttribute=function(t){return this.attributes[t]},e.toNode=function(){var t=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var e in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,e)&&t.setAttribute(e,this.attributes[e]);for(var r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t},e.toMarkup=function(){var t="<"+this.type;for(var e in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,e)&&(t+=" "+e+'="',t+=c.escape(this.attributes[e]),t+='"');t+=">";for(var r=0;r<this.children.length;r++)t+=this.children[r].toMarkup();return t+="</"+this.type+">"},e.toText=function(){return this.children.map(function(t){return t.toText()}).join("")},t}(),de=function(){function t(t){this.text=void 0,this.text=t}var e=t.prototype;return e.toNode=function(){return document.createTextNode(this.text)},e.toMarkup=function(){return c.escape(this.toText())},e.toText=function(){return this.text},t}(),pe={MathNode:ue,TextNode:de,SpaceNode:function(){function t(t){this.width=void 0,this.character=void 0,this.width=t,this.character=t>=.05555&&t<=.05556?" ":t>=.1666&&t<=.1667?" ":t>=.2222&&t<=.2223?" ":t>=.2777&&t<=.2778?"  ":t>=-.05556&&t<=-.05555?" ⁣":t>=-.1667&&t<=-.1666?" ⁣":t>=-.2223&&t<=-.2222?" ⁣":t>=-.2778&&t<=-.2777?" ⁣":null}var e=t.prototype;return e.toNode=function(){if(this.character)return document.createTextNode(this.character);var t=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return t.setAttribute("width",this.width+"em"),t},e.toMarkup=function(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+this.width+'em"/>'},e.toText=function(){return this.character?this.character:" "},t}(),newDocumentFragment:ce},fe=function(t,e,r){return!_[e][t]||!_[e][t].replace||55349===t.charCodeAt(0)||tt.hasOwnProperty(t)&&r&&(r.fontFamily&&"tt"===r.fontFamily.substr(4,2)||r.font&&"tt"===r.font.substr(4,2))||(t=_[e][t].replace),new pe.TextNode(t)},ge=function(t){return 1===t.length?t[0]:new pe.MathNode("mrow",t)},xe=function(t,e){if("texttt"===e.fontFamily)return"monospace";if("textsf"===e.fontFamily)return"textit"===e.fontShape&&"textbf"===e.fontWeight?"sans-serif-bold-italic":"textit"===e.fontShape?"sans-serif-italic":"textbf"===e.fontWeight?"bold-sans-serif":"sans-serif";if("textit"===e.fontShape&&"textbf"===e.fontWeight)return"bold-italic";if("textit"===e.fontShape)return"italic";if("textbf"===e.fontWeight)return"bold";var r=e.font;if(!r||"mathnormal"===r)return null;var a=t.mode;if("mathit"===r)return"italic";if("boldsymbol"===r)return"bold-italic";var n=t.text;return c.contains(["\\imath","\\jmath"],n)?null:(_[a][n]&&_[a][n].replace&&(n=_[a][n].replace),V(n,Lt.fontMap[r].fontName,a)?Lt.fontMap[r].variant:null)},ve=function(t,e){for(var r,a=[],n=0;n<t.length;n++){var o=ye(t[n],e);if(o instanceof ue&&r instanceof ue){if("mtext"===o.type&&"mtext"===r.type&&o.getAttribute("mathvariant")===r.getAttribute("mathvariant")){var i;(i=r.children).push.apply(i,o.children);continue}if("mn"===o.type&&"mn"===r.type){var s;(s=r.children).push.apply(s,o.children);continue}if("mi"===o.type&&1===o.children.length&&"mn"===r.type){var h=o.children[0];if(h instanceof de&&"."===h.text){var l;(l=r.children).push.apply(l,o.children);continue}}else if("mi"===r.type&&1===r.children.length){var m=r.children[0];if(m instanceof de&&"̸"===m.text&&("mo"===o.type||"mi"===o.type||"mn"===o.type)){var c=o.children[0];c instanceof de&&c.text.length>0&&(c.text=c.text.slice(0,1)+"̸"+c.text.slice(1),a.pop())}}}a.push(o),r=o}return a},be=function(t,e){return ge(ve(t,e))},ye=function(t,e){if(!t)return new pe.MathNode("mrow");if(jt[t.type])return jt[t.type](t,e);throw new i("Got group of unknown type: '"+t.type+"'")};var we=function(t){return new wt({style:t.displayMode?w.DISPLAY:w.TEXT,maxSize:t.maxSize})},ke=function(t,e){if(e.displayMode){var r=["katex-display"];e.leqno&&r.push("leqno"),e.fleqn&&r.push("fleqn"),t=Lt.makeSpan(r,[t])}return t},Se=function(t,e,r){var a=we(r),n=function(t,e,r){var a,n=ve(t,r);a=1===n.length&&n[0]instanceof ue&&c.contains(["mrow","mtable"],n[0].type)?n[0]:new pe.MathNode("mrow",n);var o=new pe.MathNode("annotation",[new pe.TextNode(e)]);o.setAttribute("encoding","application/x-tex");var i=new pe.MathNode("semantics",[a,o]),s=new pe.MathNode("math",[i]);return Lt.makeSpan(["katex-mathml"],[s])}(t,e,a),o=me(t,a),i=Lt.makeSpan(["katex"],[n,o]);return ke(i,r)},ze={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋"},Me={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},Te=function(t){return"ordgroup"===t.type?t.body.length:1},Ae=function(t,e,r,a){var n,o=t.height+t.depth+2*r;if(/fbox|color/.test(e)){if(n=Lt.makeSpan(["stretchy",e],[],a),"fbox"===e){var i=a.color&&a.getColor();i&&(n.style.borderColor=i)}}else{var s=[];/^[bx]cancel$/.test(e)&&s.push(new H({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(e)&&s.push(new H({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var h=new R(s,{width:"100%",height:o+"em"});n=Lt.makeSvgSpan([],[h],a)}return n.height=o,n.style.height=o+"em",n},Be=function(t){var e=new pe.MathNode("mo",[new pe.TextNode(ze[t.substr(1)])]);return e.setAttribute("stretchy","true"),e},qe=function(t,e){var r=function(){var r=4e5,a=t.label.substr(1);if(c.contains(["widehat","widecheck","widetilde","utilde"],a)){var n,o,i,s=Te(t.base);if(s>5)"widehat"===a||"widecheck"===a?(n=420,r=2364,i=.42,o=a+"4"):(n=312,r=2340,i=.34,o="tilde4");else{var h=[1,1,2,2,3,3][s];"widehat"===a||"widecheck"===a?(r=[0,1062,2364,2364,2364][h],n=[0,239,300,360,420][h],i=[0,.24,.3,.3,.36,.42][h],o=a+h):(r=[0,600,1033,2339,2340][h],n=[0,260,286,306,312][h],i=[0,.26,.286,.3,.306,.34][h],o="tilde"+h)}var l=new L(o),m=new R([l],{width:"100%",height:i+"em",viewBox:"0 0 "+r+" "+n,preserveAspectRatio:"none"});return{span:Lt.makeSvgSpan([],[m],e),minWidth:0,height:i}}var u,d,p=[],f=Me[a],g=f[0],x=f[1],v=f[2],b=v/1e3,y=g.length;if(1===y)u=["hide-tail"],d=[f[3]];else if(2===y)u=["halfarrow-left","halfarrow-right"],d=["xMinYMin","xMaxYMin"];else{if(3!==y)throw new Error("Correct katexImagesData or update code here to support\n                    "+y+" children.");u=["brace-left","brace-center","brace-right"],d=["xMinYMin","xMidYMin","xMaxYMin"]}for(var w=0;w<y;w++){var k=new L(g[w]),S=new R([k],{width:"400em",height:b+"em",viewBox:"0 0 "+r+" "+v,preserveAspectRatio:d[w]+" slice"}),z=Lt.makeSvgSpan([u[w]],[S],e);if(1===y)return{span:z,minWidth:x,height:b};z.style.height=b+"em",p.push(z)}return{span:Lt.makeSpan(["stretchy"],p,e),minWidth:x,height:b}}(),a=r.span,n=r.minWidth,o=r.height;return a.height=o,a.style.height=o+"em",n>0&&(a.style.minWidth=n+"em"),a},Ce=function(t,e){var r,a,n,o=Pt(t,"supsub");o?(r=(a=Ht(o.base,"accent")).base,o.base=r,n=function(t){if(t instanceof N)return t;throw new Error("Expected span<HtmlDomNode> but got "+String(t)+".")}(he(o,e)),o.base=a):r=(a=Ht(t,"accent")).base;var i=he(r,e.havingCrampedStyle()),s=0;if(a.isShifty&&c.isCharacterBox(r)){var h=c.getBaseElem(r);s=function(t){if(t instanceof E)return t;throw new Error("Expected symbolNode but got "+String(t)+".")}(he(h,e.havingCrampedStyle())).skew}var l,m=Math.min(i.height,e.fontMetrics().xHeight);if(a.isStretchy)l=qe(a,e),l=Lt.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:i},{type:"elem",elem:l,wrapperClasses:["svg-align"],wrapperStyle:s>0?{width:"calc(100% - "+2*s+"em)",marginLeft:2*s+"em"}:void 0}]},e);else{var u,d;"\\vec"===a.label?(u=Lt.staticSvg("vec",e),d=Lt.svgData.vec[1]):((u=Lt.makeSymbol(a.label,"Main-Regular",a.mode,e)).italic=0,d=u.width),l=Lt.makeSpan(["accent-body"],[u]);var p="\\textcircled"===a.label;p&&(l.classes.push("accent-full"),m=i.height);var f=s;p||(f-=d/2),l.style.left=f+"em","\\textcircled"===a.label&&(l.style.top=".2em"),l=Lt.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:i},{type:"kern",size:-m},{type:"elem",elem:l}]},e)}var g=Lt.makeSpan(["mord","accent"],[l],e);return n?(n.children[0]=g,n.height=Math.max(g.height,n.height),n.classes[0]="mord",n):g},Ne=function(t,e){var r=t.isStretchy?Be(t.label):new pe.MathNode("mo",[fe(t.label,t.mode)]),a=new pe.MathNode("mover",[ye(t.base,e),r]);return a.setAttribute("accent","true"),a},Ie=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(function(t){return"\\"+t}).join("|"));$t({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:function(t,e){var r=e[0],a=!Ie.test(t.funcName),n=!a||"\\widehat"===t.funcName||"\\widetilde"===t.funcName||"\\widecheck"===t.funcName;return{type:"accent",mode:t.parser.mode,label:t.funcName,isStretchy:a,isShifty:n,base:r}},htmlBuilder:Ce,mathmlBuilder:Ne}),$t({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!1},handler:function(t,e){var r=e[0];return{type:"accent",mode:t.parser.mode,label:t.funcName,isStretchy:!1,isShifty:!0,base:r}},htmlBuilder:Ce,mathmlBuilder:Ne}),$t({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:function(t,e){var r=t.parser,a=t.funcName,n=e[0];return{type:"accentUnder",mode:r.mode,label:a,base:n}},htmlBuilder:function(t,e){var r=he(t.base,e),a=qe(t,e),n="\\utilde"===t.label?.12:0,o=Lt.makeVList({positionType:"bottom",positionData:a.height+n,children:[{type:"elem",elem:a,wrapperClasses:["svg-align"]},{type:"kern",size:n},{type:"elem",elem:r}]},e);return Lt.makeSpan(["mord","accentunder"],[o],e)},mathmlBuilder:function(t,e){var r=Be(t.label),a=new pe.MathNode("munder",[ye(t.base,e),r]);return a.setAttribute("accentunder","true"),a}});var Oe=function(t){var e=new pe.MathNode("mpadded",t?[t]:[]);return e.setAttribute("width","+0.6em"),e.setAttribute("lspace","0.3em"),e};$t({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium"],props:{numArgs:1,numOptionalArgs:1},handler:function(t,e,r){var a=t.parser,n=t.funcName;return{type:"xArrow",mode:a.mode,label:n,body:e[0],below:r[0]}},htmlBuilder:function(t,e){var r,a=e.style,n=e.havingStyle(a.sup()),o=Lt.wrapFragment(he(t.body,n,e),e);o.classes.push("x-arrow-pad"),t.below&&(n=e.havingStyle(a.sub()),(r=Lt.wrapFragment(he(t.below,n,e),e)).classes.push("x-arrow-pad"));var i,s=qe(t,e),h=-e.fontMetrics().axisHeight+.5*s.height,l=-e.fontMetrics().axisHeight-.5*s.height-.111;if((o.depth>.25||"\\xleftequilibrium"===t.label)&&(l-=o.depth),r){var m=-e.fontMetrics().axisHeight+r.height+.5*s.height+.111;i=Lt.makeVList({positionType:"individualShift",children:[{type:"elem",elem:o,shift:l},{type:"elem",elem:s,shift:h},{type:"elem",elem:r,shift:m}]},e)}else i=Lt.makeVList({positionType:"individualShift",children:[{type:"elem",elem:o,shift:l},{type:"elem",elem:s,shift:h}]},e);return i.children[0].children[0].children[1].classes.push("svg-align"),Lt.makeSpan(["mrel","x-arrow"],[i],e)},mathmlBuilder:function(t,e){var r,a=Be(t.label);if(t.body){var n=Oe(ye(t.body,e));if(t.below){var o=Oe(ye(t.below,e));r=new pe.MathNode("munderover",[a,o,n])}else r=new pe.MathNode("mover",[a,n])}else if(t.below){var i=Oe(ye(t.below,e));r=new pe.MathNode("munder",[a,i])}else r=Oe(),r=new pe.MathNode("mover",[a,r]);return r}}),$t({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler:function(t,e){for(var r=t.parser,a=Ht(e[0],"ordgroup").body,n="",o=0;o<a.length;o++){n+=Ht(a[o],"textord").text}var s=parseInt(n);if(isNaN(s))throw new i("\\@char has non-numeric argument "+n);return{type:"textord",mode:r.mode,text:String.fromCharCode(s)}}});var Ee=function(t,e){var r=ae(t.body,e.withColor(t.color),!1);return Lt.makeFragment(r)},Re=function(t,e){var r=ve(t.body,e.withColor(t.color)),a=new pe.MathNode("mstyle",r);return a.setAttribute("mathcolor",t.color),a};$t({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,greediness:3,argTypes:["color","original"]},handler:function(t,e){var r=t.parser,a=Ht(e[0],"color-token").color,n=e[1];return{type:"color",mode:r.mode,color:a,body:Kt(n)}},htmlBuilder:Ee,mathmlBuilder:Re}),$t({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,greediness:3,argTypes:["color"]},handler:function(t,e){var r=t.parser,a=t.breakOnTokenText,n=Ht(e[0],"color-token").color,o=r.parseExpression(!0,a);return{type:"color",mode:r.mode,color:n,body:o}},htmlBuilder:Ee,mathmlBuilder:Re}),$t({type:"cr",names:["\\cr","\\newline"],props:{numArgs:0,numOptionalArgs:1,argTypes:["size"],allowedInText:!0},handler:function(t,e,r){var a=t.parser,n=t.funcName,o=r[0],i="\\cr"===n,s=!1;return i||(s=!a.settings.displayMode||!a.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode")),{type:"cr",mode:a.mode,newLine:s,newRow:i,size:o&&Ht(o,"size").value}},htmlBuilder:function(t,e){if(t.newRow)throw new i("\\cr valid only within a tabular/array environment");var r=Lt.makeSpan(["mspace"],[],e);return t.newLine&&(r.classes.push("newline"),t.size&&(r.style.marginTop=zt(t.size,e)+"em")),r},mathmlBuilder:function(t,e){var r=new pe.MathNode("mspace");return t.newLine&&(r.setAttribute("linebreak","newline"),t.size&&r.setAttribute("height",zt(t.size,e)+"em")),r}});var Le=function(t,e,r){var a=V(_.math[t]&&_.math[t].replace||t,e,r);if(!a)throw new Error("Unsupported symbol "+t+" and font size "+e+".");return a},He=function(t,e,r,a){var n=r.havingBaseStyle(e),o=Lt.makeSpan(a.concat(n.sizingClasses(r)),[t],r),i=n.sizeMultiplier/r.sizeMultiplier;return o.height*=i,o.depth*=i,o.maxFontSize=n.sizeMultiplier,o},Pe=function(t,e,r){var a=e.havingBaseStyle(r),n=(1-e.sizeMultiplier/a.sizeMultiplier)*e.fontMetrics().axisHeight;t.classes.push("delimcenter"),t.style.top=n+"em",t.height-=n,t.depth+=n},De=function(t,e,r,a,n,o){var i=function(t,e,r,a){return Lt.makeSymbol(t,"Size"+e+"-Regular",r,a)}(t,e,n,a),s=He(Lt.makeSpan(["delimsizing","size"+e],[i],a),w.TEXT,a,o);return r&&Pe(s,a,w.TEXT),s},Fe=function(t,e,r){var a;return a="Size1-Regular"===e?"delim-size1":"delim-size4",{type:"elem",elem:Lt.makeSpan(["delimsizinginner",a],[Lt.makeSpan([],[Lt.makeSymbol(t,e,r)])])}},Ve=function(t,e,r,a,n,o){var i,s,h,l;i=h=l=t,s=null;var m="Size1-Regular";"\\uparrow"===t?h=l="⏐":"\\Uparrow"===t?h=l="‖":"\\downarrow"===t?i=h="⏐":"\\Downarrow"===t?i=h="‖":"\\updownarrow"===t?(i="\\uparrow",h="⏐",l="\\downarrow"):"\\Updownarrow"===t?(i="\\Uparrow",h="‖",l="\\Downarrow"):"["===t||"\\lbrack"===t?(i="⎡",h="⎢",l="⎣",m="Size4-Regular"):"]"===t||"\\rbrack"===t?(i="⎤",h="⎥",l="⎦",m="Size4-Regular"):"\\lfloor"===t||"⌊"===t?(h=i="⎢",l="⎣",m="Size4-Regular"):"\\lceil"===t||"⌈"===t?(i="⎡",h=l="⎢",m="Size4-Regular"):"\\rfloor"===t||"⌋"===t?(h=i="⎥",l="⎦",m="Size4-Regular"):"\\rceil"===t||"⌉"===t?(i="⎤",h=l="⎥",m="Size4-Regular"):"("===t||"\\lparen"===t?(i="⎛",h="⎜",l="⎝",m="Size4-Regular"):")"===t||"\\rparen"===t?(i="⎞",h="⎟",l="⎠",m="Size4-Regular"):"\\{"===t||"\\lbrace"===t?(i="⎧",s="⎨",l="⎩",h="⎪",m="Size4-Regular"):"\\}"===t||"\\rbrace"===t?(i="⎫",s="⎬",l="⎭",h="⎪",m="Size4-Regular"):"\\lgroup"===t||"⟮"===t?(i="⎧",l="⎩",h="⎪",m="Size4-Regular"):"\\rgroup"===t||"⟯"===t?(i="⎫",l="⎭",h="⎪",m="Size4-Regular"):"\\lmoustache"===t||"⎰"===t?(i="⎧",l="⎭",h="⎪",m="Size4-Regular"):"\\rmoustache"!==t&&"⎱"!==t||(i="⎫",l="⎩",h="⎪",m="Size4-Regular");var c=Le(i,m,n),u=c.height+c.depth,d=Le(h,m,n),p=d.height+d.depth,f=Le(l,m,n),g=f.height+f.depth,x=0,v=1;if(null!==s){var b=Le(s,m,n);x=b.height+b.depth,v=2}var y=u+g+x,k=Math.ceil((e-y)/(v*p)),S=y+k*v*p,z=a.fontMetrics().axisHeight;r&&(z*=a.sizeMultiplier);var M=S/2-z,T=[];if(T.push(Fe(l,m,n)),null===s)for(var A=0;A<k;A++)T.push(Fe(h,m,n));else{for(var B=0;B<k;B++)T.push(Fe(h,m,n));T.push(Fe(s,m,n));for(var q=0;q<k;q++)T.push(Fe(h,m,n))}T.push(Fe(i,m,n));var C=a.havingBaseStyle(w.TEXT),N=Lt.makeVList({positionType:"bottom",positionData:M,children:T},C);return He(Lt.makeSpan(["delimsizing","mult"],[N],C),w.TEXT,a,o)},Ue=function(t,e,r,a){var n;"sqrtTall"===t&&(n="M702 80H400000v40H742v"+(r-54-80)+"l-4 4-4 4c-.667.7\n-2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1h-12l-28-84c-16.667-52-96.667\n-294.333-240-727l-212 -643 -85 170c-4-3.333-8.333-7.667-13 -13l-13-13l77-155\n 77-156c66 199.333 139 419.667 219 661 l218 661zM702 80H400000v40H742z");var o=new L(t,n),i=new R([o],{width:"400em",height:e+"em",viewBox:"0 0 400000 "+r,preserveAspectRatio:"xMinYMin slice"});return Lt.makeSvgSpan(["hide-tail"],[i],a)},Ge=["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"],Xe=["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"],Ye=["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"],_e=[0,1.2,1.8,2.4,3],We=[{type:"small",style:w.SCRIPTSCRIPT},{type:"small",style:w.SCRIPT},{type:"small",style:w.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],je=[{type:"small",style:w.SCRIPTSCRIPT},{type:"small",style:w.SCRIPT},{type:"small",style:w.TEXT},{type:"stack"}],$e=[{type:"small",style:w.SCRIPTSCRIPT},{type:"small",style:w.SCRIPT},{type:"small",style:w.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],Ze=function(t){if("small"===t.type)return"Main-Regular";if("large"===t.type)return"Size"+t.size+"-Regular";if("stack"===t.type)return"Size4-Regular";throw new Error("Add support for delim type '"+t.type+"' here.")},Ke=function(t,e,r,a){for(var n=Math.min(2,3-a.style.size);n<r.length&&"stack"!==r[n].type;n++){var o=Le(t,Ze(r[n]),"math"),i=o.height+o.depth;if("small"===r[n].type&&(i*=a.havingBaseStyle(r[n].style).sizeMultiplier),i>e)return r[n]}return r[r.length-1]},Je=function(t,e,r,a,n,o){var i;"<"===t||"\\lt"===t||"⟨"===t?t="\\langle":">"!==t&&"\\gt"!==t&&"⟩"!==t||(t="\\rangle"),i=c.contains(Ye,t)?We:c.contains(Ge,t)?$e:je;var s=Ke(t,e,i,a);return"small"===s.type?function(t,e,r,a,n,o){var i=Lt.makeSymbol(t,"Main-Regular",n,a),s=He(i,e,a,o);return r&&Pe(s,a,e),s}(t,s.style,r,a,n,o):"large"===s.type?De(t,s.size,r,a,n,o):Ve(t,e,r,a,n,o)},Qe=function(t,e){var r,a,n=e.havingBaseSizing(),o=Ke("\\surd",t*n.sizeMultiplier,$e,n),i=n.sizeMultiplier,s=0,h=0,l=0;return"small"===o.type?(t<1?i=1:t<1.4&&(i=.7),h=1/i,(r=Ue("sqrtMain",s=1.08/i,l=1080,e)).style.minWidth="0.853em",a=.833/i):"large"===o.type?(l=1080*_e[o.size],h=_e[o.size]/i,s=(_e[o.size]+.08)/i,(r=Ue("sqrtSize"+o.size,s,l,e)).style.minWidth="1.02em",a=1/i):(s=t+.08,h=t,l=Math.floor(1e3*t)+80,(r=Ue("sqrtTall",s,l,e)).style.minWidth="0.742em",a=1.056),r.height=h,r.style.height=s+"em",{span:r,advanceWidth:a,ruleWidth:e.fontMetrics().sqrtRuleThickness*i}},tr=function(t,e,r,a,n){if("<"===t||"\\lt"===t||"⟨"===t?t="\\langle":">"!==t&&"\\gt"!==t&&"⟩"!==t||(t="\\rangle"),c.contains(Ge,t)||c.contains(Ye,t))return De(t,e,!1,r,a,n);if(c.contains(Xe,t))return Ve(t,_e[e],!1,r,a,n);throw new i("Illegal delimiter: '"+t+"'")},er=Je,rr=function(t,e,r,a,n,o){var i=a.fontMetrics().axisHeight*a.sizeMultiplier,s=5/a.fontMetrics().ptPerEm,h=Math.max(e-i,r+i),l=Math.max(h/500*901,2*h-s);return Je(t,l,!0,a,n,o)},ar={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},nr=["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."];function or(t,e){var r=Ft(t);if(r&&c.contains(nr,r.text))return r;throw new i("Invalid delimiter: '"+(r?r.text:JSON.stringify(t))+"' after '"+e.funcName+"'",t)}function ir(t){if(!t.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}$t({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1},handler:function(t,e){var r=or(e[0],t);return{type:"delimsizing",mode:t.parser.mode,size:ar[t.funcName].size,mclass:ar[t.funcName].mclass,delim:r.text}},htmlBuilder:function(t,e){return"."===t.delim?Lt.makeSpan([t.mclass]):tr(t.delim,t.size,e,t.mode,[t.mclass])},mathmlBuilder:function(t){var e=[];"."!==t.delim&&e.push(fe(t.delim,t.mode));var r=new pe.MathNode("mo",e);return"mopen"===t.mclass||"mclose"===t.mclass?r.setAttribute("fence","true"):r.setAttribute("fence","false"),r}}),$t({type:"leftright-right",names:["\\right"],props:{numArgs:1},handler:function(t,e){return{type:"leftright-right",mode:t.parser.mode,delim:or(e[0],t).text}}}),$t({type:"leftright",names:["\\left"],props:{numArgs:1},handler:function(t,e){var r=or(e[0],t),a=t.parser;++a.leftrightDepth;var n=a.parseExpression(!1);--a.leftrightDepth,a.expect("\\right",!1);var o=Ht(a.parseFunction(),"leftright-right");return{type:"leftright",mode:a.mode,body:n,left:r.text,right:o.delim}},htmlBuilder:function(t,e){ir(t);for(var r,a,n=ae(t.body,e,!0,["mopen","mclose"]),o=0,i=0,s=!1,h=0;h<n.length;h++)n[h].isMiddle?s=!0:(o=Math.max(n[h].height,o),i=Math.max(n[h].depth,i));if(o*=e.sizeMultiplier,i*=e.sizeMultiplier,r="."===t.left?se(e,["mopen"]):rr(t.left,o,i,e,t.mode,["mopen"]),n.unshift(r),s)for(var l=1;l<n.length;l++){var m=n[l].isMiddle;m&&(n[l]=rr(m.delim,o,i,m.options,t.mode,[]))}return a="."===t.right?se(e,["mclose"]):rr(t.right,o,i,e,t.mode,["mclose"]),n.push(a),Lt.makeSpan(["minner"],n,e)},mathmlBuilder:function(t,e){ir(t);var r=ve(t.body,e);if("."!==t.left){var a=new pe.MathNode("mo",[fe(t.left,t.mode)]);a.setAttribute("fence","true"),r.unshift(a)}if("."!==t.right){var n=new pe.MathNode("mo",[fe(t.right,t.mode)]);n.setAttribute("fence","true"),r.push(n)}return ge(r)}}),$t({type:"middle",names:["\\middle"],props:{numArgs:1},handler:function(t,e){var r=or(e[0],t);if(!t.parser.leftrightDepth)throw new i("\\middle without preceding \\left",r);return{type:"middle",mode:t.parser.mode,delim:r.text}},htmlBuilder:function(t,e){var r;if("."===t.delim)r=se(e,[]);else{r=tr(t.delim,1,e,t.mode,[]);var a={delim:t.delim,options:e};r.isMiddle=a}return r},mathmlBuilder:function(t,e){var r="\\vert"===t.delim||"|"===t.delim?fe("|","text"):fe(t.delim,t.mode),a=new pe.MathNode("mo",[r]);return a.setAttribute("fence","true"),a.setAttribute("lspace","0.05em"),a.setAttribute("rspace","0.05em"),a}});var sr=function(t,e){var r,a,n=Lt.wrapFragment(he(t.body,e),e),o=t.label.substr(1),i=e.sizeMultiplier,s=0,h=c.isCharacterBox(t.body);if("sout"===o)(r=Lt.makeSpan(["stretchy","sout"])).height=e.fontMetrics().defaultRuleThickness/i,s=-.5*e.fontMetrics().xHeight;else{/cancel/.test(o)?h||n.classes.push("cancel-pad"):n.classes.push("boxpad");var l=0;l=/box/.test(o)?"colorbox"===o?.3:.34:h?.2:0,r=Ae(n,o,l,e),s=n.depth+l,t.backgroundColor&&(r.style.backgroundColor=t.backgroundColor,t.borderColor&&(r.style.borderColor=t.borderColor))}return a=t.backgroundColor?Lt.makeVList({positionType:"individualShift",children:[{type:"elem",elem:r,shift:s},{type:"elem",elem:n,shift:0}]},e):Lt.makeVList({positionType:"individualShift",children:[{type:"elem",elem:n,shift:0},{type:"elem",elem:r,shift:s,wrapperClasses:/cancel/.test(o)?["svg-align"]:[]}]},e),/cancel/.test(o)&&(a.height=n.height,a.depth=n.depth),/cancel/.test(o)&&!h?Lt.makeSpan(["mord","cancel-lap"],[a],e):Lt.makeSpan(["mord"],[a],e)},hr=function(t,e){var r=new pe.MathNode(t.label.indexOf("colorbox")>-1?"mpadded":"menclose",[ye(t.body,e)]);switch(t.label){case"\\cancel":r.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":r.setAttribute("notation","downdiagonalstrike");break;case"\\sout":r.setAttribute("notation","horizontalstrike");break;case"\\fbox":r.setAttribute("notation","box");break;case"\\fcolorbox":case"\\colorbox":if(r.setAttribute("width","+6pt"),r.setAttribute("height","+6pt"),r.setAttribute("lspace","3pt"),r.setAttribute("voffset","3pt"),"\\fcolorbox"===t.label){var a=e.fontMetrics().defaultRuleThickness;r.setAttribute("style","border: "+a+"em solid "+String(t.borderColor))}break;case"\\xcancel":r.setAttribute("notation","updiagonalstrike downdiagonalstrike")}return t.backgroundColor&&r.setAttribute("mathbackground",t.backgroundColor),r};$t({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,greediness:3,argTypes:["color","text"]},handler:function(t,e,r){var a=t.parser,n=t.funcName,o=Ht(e[0],"color-token").color,i=e[1];return{type:"enclose",mode:a.mode,label:n,backgroundColor:o,body:i}},htmlBuilder:sr,mathmlBuilder:hr}),$t({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,greediness:3,argTypes:["color","color","text"]},handler:function(t,e,r){var a=t.parser,n=t.funcName,o=Ht(e[0],"color-token").color,i=Ht(e[1],"color-token").color,s=e[2];return{type:"enclose",mode:a.mode,label:n,backgroundColor:i,borderColor:o,body:s}},htmlBuilder:sr,mathmlBuilder:hr}),$t({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0},handler:function(t,e){return{type:"enclose",mode:t.parser.mode,label:"\\fbox",body:e[0]}}}),$t({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout"],props:{numArgs:1},handler:function(t,e,r){var a=t.parser,n=t.funcName,o=e[0];return{type:"enclose",mode:a.mode,label:n,body:o}},htmlBuilder:sr,mathmlBuilder:hr});var lr={};function mr(t){for(var e=t.type,r=t.names,a=t.props,n=t.handler,o=t.htmlBuilder,i=t.mathmlBuilder,s={type:e,numArgs:a.numArgs||0,greediness:1,allowedInText:!1,numOptionalArgs:0,handler:n},h=0;h<r.length;++h)lr[r[h]]=s;o&&(Wt[e]=o),i&&(jt[e]=i)}function cr(t){var e=[];t.consumeSpaces();for(var r=t.nextToken.text;"\\hline"===r||"\\hdashline"===r;)t.consume(),e.push("\\hdashline"===r),t.consumeSpaces(),r=t.nextToken.text;return e}function ur(t,e,r){var a=e.hskipBeforeAndAfter,n=e.addJot,o=e.cols,s=e.arraystretch,h=e.colSeparationType;if(t.gullet.beginGroup(),t.gullet.macros.set("\\\\","\\cr"),!s){var l=t.gullet.expandMacroAsText("\\arraystretch");if(null==l)s=1;else if(!(s=parseFloat(l))||s<0)throw new i("Invalid \\arraystretch: "+l)}var m=[],c=[m],u=[],d=[];for(d.push(cr(t));;){var p=t.parseExpression(!1,"\\cr");p={type:"ordgroup",mode:t.mode,body:p},r&&(p={type:"styling",mode:t.mode,style:r,body:[p]}),m.push(p);var f=t.nextToken.text;if("&"===f)t.consume();else{if("\\end"===f){1===m.length&&"styling"===p.type&&0===p.body[0].body.length&&c.pop(),d.length<c.length+1&&d.push([]);break}if("\\cr"!==f)throw new i("Expected & or \\\\ or \\cr or \\end",t.nextToken);var g=Ht(t.parseFunction(),"cr");u.push(g.size),d.push(cr(t)),m=[],c.push(m)}}return t.gullet.endGroup(),{type:"array",mode:t.mode,addJot:n,arraystretch:s,body:c,cols:o,rowGaps:u,hskipBeforeAndAfter:a,hLinesBeforeRow:d,colSeparationType:h}}function dr(t){return"d"===t.substr(0,1)?"display":"text"}var pr=function(t,e){var r,a,n=t.body.length,o=t.hLinesBeforeRow,s=0,h=new Array(n),l=[],m=1/e.fontMetrics().ptPerEm,u=5*m,d=12*m,p=3*m,f=t.arraystretch*d,g=.7*f,x=.3*f,v=0;function b(t){for(var e=0;e<t.length;++e)e>0&&(v+=.25),l.push({pos:v,isDashed:t[e]})}for(b(o[0]),r=0;r<t.body.length;++r){var y=t.body[r],w=g,k=x;s<y.length&&(s=y.length);var S=new Array(y.length);for(a=0;a<y.length;++a){var z=he(y[a],e);k<z.depth&&(k=z.depth),w<z.height&&(w=z.height),S[a]=z}var M=t.rowGaps[r],T=0;M&&(T=zt(M,e))>0&&(k<(T+=x)&&(k=T),T=0),t.addJot&&(k+=p),S.height=w,S.depth=k,v+=w,S.pos=v,v+=k+T,h[r]=S,b(o[r+1])}var A,B,q=v/2+e.fontMetrics().axisHeight,C=t.cols||[],N=[];for(a=0,B=0;a<s||B<C.length;++a,++B){for(var I=C[B]||{},O=!0;"separator"===I.type;){if(O||((A=Lt.makeSpan(["arraycolsep"],[])).style.width=e.fontMetrics().doubleRuleSep+"em",N.push(A)),"|"===I.separator){var E=Lt.makeSpan(["vertical-separator"],[],e);E.style.height=v+"em",E.style.verticalAlign=-(v-q)+"em",N.push(E)}else{if(":"!==I.separator)throw new i("Invalid separator type: "+I.separator);var R=Lt.makeSpan(["vertical-separator","vs-dashed"],[],e);R.style.height=v+"em",R.style.verticalAlign=-(v-q)+"em",N.push(R)}I=C[++B]||{},O=!1}if(!(a>=s)){var L=void 0;(a>0||t.hskipBeforeAndAfter)&&0!==(L=c.deflt(I.pregap,u))&&((A=Lt.makeSpan(["arraycolsep"],[])).style.width=L+"em",N.push(A));var H=[];for(r=0;r<n;++r){var P=h[r],D=P[a];if(D){var F=P.pos-q;D.depth=P.depth,D.height=P.height,H.push({type:"elem",elem:D,shift:F})}}H=Lt.makeVList({positionType:"individualShift",children:H},e),H=Lt.makeSpan(["col-align-"+(I.align||"c")],[H]),N.push(H),(a<s-1||t.hskipBeforeAndAfter)&&0!==(L=c.deflt(I.postgap,u))&&((A=Lt.makeSpan(["arraycolsep"],[])).style.width=L+"em",N.push(A))}}if(h=Lt.makeSpan(["mtable"],N),l.length>0){for(var V=Lt.makeLineSpan("hline",e,.05),U=Lt.makeLineSpan("hdashline",e,.05),G=[{type:"elem",elem:h,shift:0}];l.length>0;){var X=l.pop(),Y=X.pos-q;X.isDashed?G.push({type:"elem",elem:U,shift:Y}):G.push({type:"elem",elem:V,shift:Y})}h=Lt.makeVList({positionType:"individualShift",children:G},e)}return Lt.makeSpan(["mord"],[h],e)},fr={c:"center ",l:"left ",r:"right "},gr=function(t,e){var r=new pe.MathNode("mtable",t.body.map(function(t){return new pe.MathNode("mtr",t.map(function(t){return new pe.MathNode("mtd",[ye(t,e)])}))})),a=.16+t.arraystretch-1+(t.addJot?.09:0);r.setAttribute("rowspacing",a+"em");var n="",o="";if(t.cols){var i=t.cols,s="",h=!1,l=0,m=i.length;"separator"===i[0].type&&(n+="top ",l=1),"separator"===i[i.length-1].type&&(n+="bottom ",m-=1);for(var c=l;c<m;c++)"align"===i[c].type?(o+=fr[i[c].align],h&&(s+="none "),h=!0):"separator"===i[c].type&&h&&(s+="|"===i[c].separator?"solid ":"dashed ",h=!1);r.setAttribute("columnalign",o.trim()),/[sd]/.test(s)&&r.setAttribute("columnlines",s.trim())}if("align"===t.colSeparationType){for(var u=t.cols||[],d="",p=1;p<u.length;p++)d+=p%2?"0em ":"1em ";r.setAttribute("columnspacing",d.trim())}else"alignat"===t.colSeparationType?r.setAttribute("columnspacing","0em"):r.setAttribute("columnspacing","1em");var f="",g=t.hLinesBeforeRow;n+=g[0].length>0?"left ":"",n+=g[g.length-1].length>0?"right ":"";for(var x=1;x<g.length-1;x++)f+=0===g[x].length?"none ":g[x][0]?"dashed ":"solid ";if(/[sd]/.test(f)&&r.setAttribute("rowlines",f.trim()),""===n)return r;var v=new pe.MathNode("menclose",[r]);return v.setAttribute("notation",n.trim()),v},xr=function(t,e){var r,a=[],n=ur(t.parser,{cols:a,addJot:!0},"display"),o=0,s={type:"ordgroup",mode:t.mode,body:[]},h=Pt(e[0],"ordgroup");if(h){for(var l="",m=0;m<h.body.length;m++){l+=Ht(h.body[m],"textord").text}r=Number(l),o=2*r}var c=!o;n.body.forEach(function(t){for(var e=1;e<t.length;e+=2){var a=Ht(t[e],"styling");Ht(a.body[0],"ordgroup").body.unshift(s)}if(c)o<t.length&&(o=t.length);else{var n=t.length/2;if(r<n)throw new i("Too many math in a row: expected "+r+", but got "+n,t[0])}});for(var u=0;u<o;++u){var d="r",p=0;u%2==1?d="l":u>0&&c&&(p=1),a[u]={type:"align",align:d,pregap:p,postgap:0}}return n.colSeparationType=c?"align":"alignat",n};mr({type:"array",names:["array","darray"],props:{numArgs:1},handler:function(t,e){var r={cols:(Ft(e[0])?[e[0]]:Ht(e[0],"ordgroup").body).map(function(t){var e=function(t){var e=Ft(t);if(!e)throw new Error("Expected node of symbol group type, but got "+(t?"node of type "+t.type:String(t)));return e}(t).text;if(-1!=="lcr".indexOf(e))return{type:"align",align:e};if("|"===e)return{type:"separator",separator:"|"};if(":"===e)return{type:"separator",separator:":"};throw new i("Unknown column alignment: "+e,t)}),hskipBeforeAndAfter:!0};return ur(t.parser,r,dr(t.envName))},htmlBuilder:pr,mathmlBuilder:gr}),mr({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix"],props:{numArgs:0},handler:function(t){var e={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[t.envName],r=ur(t.parser,{hskipBeforeAndAfter:!1},dr(t.envName));return e?{type:"leftright",mode:t.mode,body:[r],left:e[0],right:e[1]}:r},htmlBuilder:pr,mathmlBuilder:gr}),mr({type:"array",names:["cases","dcases"],props:{numArgs:0},handler:function(t){var e=ur(t.parser,{arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},dr(t.envName));return{type:"leftright",mode:t.mode,body:[e],left:"\\{",right:"."}},htmlBuilder:pr,mathmlBuilder:gr}),mr({type:"array",names:["aligned"],props:{numArgs:0},handler:xr,htmlBuilder:pr,mathmlBuilder:gr}),mr({type:"array",names:["gathered"],props:{numArgs:0},handler:function(t){return ur(t.parser,{cols:[{type:"align",align:"c"}],addJot:!0},"display")},htmlBuilder:pr,mathmlBuilder:gr}),mr({type:"array",names:["alignedat"],props:{numArgs:1},handler:xr,htmlBuilder:pr,mathmlBuilder:gr}),$t({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler:function(t,e){throw new i(t.funcName+" valid only within array environment")}});var vr=lr;$t({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler:function(t,e){var r=t.parser,a=t.funcName,n=e[0];if("ordgroup"!==n.type)throw new i("Invalid environment name",n);for(var o="",s=0;s<n.body.length;++s)o+=Ht(n.body[s],"textord").text;if("\\begin"===a){if(!vr.hasOwnProperty(o))throw new i("No such environment: "+o,n);var h=vr[o],l=r.parseArguments("\\begin{"+o+"}",h),m=l.args,c=l.optArgs,u={mode:r.mode,envName:o,parser:r},d=h.handler(u,m,c);r.expect("\\end",!1);var p=r.nextToken,f=Ht(r.parseFunction(),"environment");if(f.name!==o)throw new i("Mismatch: \\begin{"+o+"} matched by \\end{"+f.name+"}",p);return d}return{type:"environment",mode:r.mode,name:o,nameGroup:n}}});var br=Lt.makeSpan;function yr(t,e){var r=ae(t.body,e,!0);return br([t.mclass],r,e)}function wr(t,e){var r=ve(t.body,e);return pe.newDocumentFragment(r)}$t({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1},handler:function(t,e){var r=t.parser,a=t.funcName,n=e[0];return{type:"mclass",mode:r.mode,mclass:"m"+a.substr(5),body:Kt(n)}},htmlBuilder:yr,mathmlBuilder:wr});var kr=function(t){var e="ordgroup"===t.type&&t.body.length?t.body[0]:t;return"atom"!==e.type||"bin"!==e.family&&"rel"!==e.family?"mord":"m"+e.family};$t({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler:function(t,e){return{type:"mclass",mode:t.parser.mode,mclass:kr(e[0]),body:[e[1]]}}}),$t({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler:function(t,e){var r,a=t.parser,n=t.funcName,o=e[1],i=e[0];r="\\stackrel"!==n?kr(o):"mrel";var s={type:"op",mode:o.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:"\\stackrel"!==n,body:Kt(o)},h={type:"supsub",mode:i.mode,base:s,sup:"\\underset"===n?null:i,sub:"\\underset"===n?i:null};return{type:"mclass",mode:a.mode,mclass:r,body:[h]}},htmlBuilder:yr,mathmlBuilder:wr});var Sr=function(t,e){var r=t.font,a=e.withFont(r);return he(t.body,a)},zr=function(t,e){var r=t.font,a=e.withFont(r);return ye(t.body,a)},Mr={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};$t({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,greediness:2},handler:function(t,e){var r=t.parser,a=t.funcName,n=e[0],o=a;return o in Mr&&(o=Mr[o]),{type:"font",mode:r.mode,font:o.slice(1),body:n}},htmlBuilder:Sr,mathmlBuilder:zr}),$t({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1,greediness:2},handler:function(t,e){var r=t.parser,a=e[0];return{type:"mclass",mode:r.mode,mclass:kr(a),body:[{type:"font",mode:r.mode,font:"boldsymbol",body:a}]}}}),$t({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it"],props:{numArgs:0,allowedInText:!0},handler:function(t,e){var r=t.parser,a=t.funcName,n=t.breakOnTokenText,o=r.mode,i=r.parseExpression(!0,n);return{type:"font",mode:o,font:"math"+a.slice(1),body:{type:"ordgroup",mode:r.mode,body:i}}},htmlBuilder:Sr,mathmlBuilder:zr});var Tr=function(t,e){var r=e;return"display"===t?r=r.id>=w.SCRIPT.id?r.text():w.DISPLAY:"text"===t&&r.size===w.DISPLAY.size?r=w.TEXT:"script"===t?r=w.SCRIPT:"scriptscript"===t&&(r=w.SCRIPTSCRIPT),r},Ar=function(t,e){var r,a=Tr(t.size,e.style),n=a.fracNum(),o=a.fracDen();r=e.havingStyle(n);var i=he(t.numer,r,e);if(t.continued){var s=8.5/e.fontMetrics().ptPerEm,h=3.5/e.fontMetrics().ptPerEm;i.height=i.height<s?s:i.height,i.depth=i.depth<h?h:i.depth}r=e.havingStyle(o);var l,m,c,u,d,p,f,g,x,v,b=he(t.denom,r,e);if(t.hasBarLine?(t.barSize?(m=zt(t.barSize,e),l=Lt.makeLineSpan("frac-line",e,m)):l=Lt.makeLineSpan("frac-line",e),m=l.height,c=l.height):(l=null,m=0,c=e.fontMetrics().defaultRuleThickness),a.size===w.DISPLAY.size||"display"===t.size?(u=e.fontMetrics().num1,d=m>0?3*c:7*c,p=e.fontMetrics().denom1):(m>0?(u=e.fontMetrics().num2,d=c):(u=e.fontMetrics().num3,d=3*c),p=e.fontMetrics().denom2),l){var y=e.fontMetrics().axisHeight;u-i.depth-(y+.5*m)<d&&(u+=d-(u-i.depth-(y+.5*m))),y-.5*m-(b.height-p)<d&&(p+=d-(y-.5*m-(b.height-p)));var k=-(y-.5*m);f=Lt.makeVList({positionType:"individualShift",children:[{type:"elem",elem:b,shift:p},{type:"elem",elem:l,shift:k},{type:"elem",elem:i,shift:-u}]},e)}else{var S=u-i.depth-(b.height-p);S<d&&(u+=.5*(d-S),p+=.5*(d-S)),f=Lt.makeVList({positionType:"individualShift",children:[{type:"elem",elem:b,shift:p},{type:"elem",elem:i,shift:-u}]},e)}return r=e.havingStyle(a),f.height*=r.sizeMultiplier/e.sizeMultiplier,f.depth*=r.sizeMultiplier/e.sizeMultiplier,g=a.size===w.DISPLAY.size?e.fontMetrics().delim1:e.fontMetrics().delim2,x=null==t.leftDelim?se(e,["mopen"]):er(t.leftDelim,g,!0,e.havingStyle(a),t.mode,["mopen"]),v=t.continued?Lt.makeSpan([]):null==t.rightDelim?se(e,["mclose"]):er(t.rightDelim,g,!0,e.havingStyle(a),t.mode,["mclose"]),Lt.makeSpan(["mord"].concat(r.sizingClasses(e)),[x,Lt.makeSpan(["mfrac"],[f]),v],e)},Br=function(t,e){var r=new pe.MathNode("mfrac",[ye(t.numer,e),ye(t.denom,e)]);if(t.hasBarLine){if(t.barSize){var a=zt(t.barSize,e);r.setAttribute("linethickness",a+"em")}}else r.setAttribute("linethickness","0px");var n=Tr(t.size,e.style);if(n.size!==e.style.size){r=new pe.MathNode("mstyle",[r]);var o=n.size===w.DISPLAY.size?"true":"false";r.setAttribute("displaystyle",o),r.setAttribute("scriptlevel","0")}if(null!=t.leftDelim||null!=t.rightDelim){var i=[];if(null!=t.leftDelim){var s=new pe.MathNode("mo",[new pe.TextNode(t.leftDelim.replace("\\",""))]);s.setAttribute("fence","true"),i.push(s)}if(i.push(r),null!=t.rightDelim){var h=new pe.MathNode("mo",[new pe.TextNode(t.rightDelim.replace("\\",""))]);h.setAttribute("fence","true"),i.push(h)}return ge(i)}return r};$t({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,greediness:2},handler:function(t,e){var r,a=t.parser,n=t.funcName,o=e[0],i=e[1],s=null,h=null,l="auto";switch(n){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":r=!0;break;case"\\\\atopfrac":r=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":r=!1,s="(",h=")";break;case"\\\\bracefrac":r=!1,s="\\{",h="\\}";break;case"\\\\brackfrac":r=!1,s="[",h="]";break;default:throw new Error("Unrecognized genfrac command")}switch(n){case"\\cfrac":case"\\dfrac":case"\\dbinom":l="display";break;case"\\tfrac":case"\\tbinom":l="text"}return{type:"genfrac",mode:a.mode,continued:"\\cfrac"===n,numer:o,denom:i,hasBarLine:r,leftDelim:s,rightDelim:h,size:l,barSize:null}},htmlBuilder:Ar,mathmlBuilder:Br}),$t({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler:function(t){var e,r=t.parser,a=t.funcName,n=t.token;switch(a){case"\\over":e="\\frac";break;case"\\choose":e="\\binom";break;case"\\atop":e="\\\\atopfrac";break;case"\\brace":e="\\\\bracefrac";break;case"\\brack":e="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:r.mode,replaceWith:e,token:n}}});var qr=["display","text","script","scriptscript"],Cr=function(t){var e=null;return t.length>0&&(e="."===(e=t)?null:e),e};$t({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,greediness:6,argTypes:["math","math","size","text","math","math"]},handler:function(t,e){var r=t.parser,a=e[4],n=e[5],o=Pt(e[0],"atom");o&&(o=Dt(e[0],"open"));var i=o?Cr(o.text):null,s=Pt(e[1],"atom");s&&(s=Dt(e[1],"close"));var h,l=s?Cr(s.text):null,m=Ht(e[2],"size"),c=null;h=!!m.isBlank||(c=m.value).number>0;var u="auto",d=Pt(e[3],"ordgroup");if(d){if(d.body.length>0){var p=Ht(d.body[0],"textord");u=qr[Number(p.text)]}}else d=Ht(e[3],"textord"),u=qr[Number(d.text)];return{type:"genfrac",mode:r.mode,numer:a,denom:n,continued:!1,hasBarLine:h,barSize:c,leftDelim:i,rightDelim:l,size:u}},htmlBuilder:Ar,mathmlBuilder:Br}),$t({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler:function(t,e){var r=t.parser,a=(t.funcName,t.token);return{type:"infix",mode:r.mode,replaceWith:"\\\\abovefrac",size:Ht(e[0],"size").value,token:a}}}),$t({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:function(t,e){var r=t.parser,a=(t.funcName,e[0]),n=function(t){if(!t)throw new Error("Expected non-null, but got "+String(t));return t}(Ht(e[1],"infix").size),o=e[2],i=n.number>0;return{type:"genfrac",mode:r.mode,numer:a,denom:o,continued:!1,hasBarLine:i,barSize:n,leftDelim:null,rightDelim:null,size:"auto"}},htmlBuilder:Ar,mathmlBuilder:Br});var Nr=function(t,e){var r,a,n=e.style,o=Pt(t,"supsub");o?(r=o.sup?he(o.sup,e.havingStyle(n.sup()),e):he(o.sub,e.havingStyle(n.sub()),e),a=Ht(o.base,"horizBrace")):a=Ht(t,"horizBrace");var i,s=he(a.base,e.havingBaseStyle(w.DISPLAY)),h=qe(a,e);if(a.isOver?(i=Lt.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:s},{type:"kern",size:.1},{type:"elem",elem:h}]},e)).children[0].children[0].children[1].classes.push("svg-align"):(i=Lt.makeVList({positionType:"bottom",positionData:s.depth+.1+h.height,children:[{type:"elem",elem:h},{type:"kern",size:.1},{type:"elem",elem:s}]},e)).children[0].children[0].children[0].classes.push("svg-align"),r){var l=Lt.makeSpan(["mord",a.isOver?"mover":"munder"],[i],e);i=a.isOver?Lt.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:l},{type:"kern",size:.2},{type:"elem",elem:r}]},e):Lt.makeVList({positionType:"bottom",positionData:l.depth+.2+r.height+r.depth,children:[{type:"elem",elem:r},{type:"kern",size:.2},{type:"elem",elem:l}]},e)}return Lt.makeSpan(["mord",a.isOver?"mover":"munder"],[i],e)};$t({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler:function(t,e){var r=t.parser,a=t.funcName;return{type:"horizBrace",mode:r.mode,label:a,isOver:/^\\over/.test(a),base:e[0]}},htmlBuilder:Nr,mathmlBuilder:function(t,e){var r=Be(t.label);return new pe.MathNode(t.isOver?"mover":"munder",[ye(t.base,e),r])}}),$t({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:function(t,e){var r=t.parser,a=e[1],n=Ht(e[0],"url").url;return{type:"href",mode:r.mode,href:n,body:Kt(a)}},htmlBuilder:function(t,e){var r=ae(t.body,e,!1);return Lt.makeAnchor(t.href,[],r,e)},mathmlBuilder:function(t,e){var r=be(t.body,e);return r instanceof ue||(r=new ue("mrow",[r])),r.setAttribute("href",t.href),r}}),$t({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:function(t,e){for(var r=t.parser,a=Ht(e[0],"url").url,n=[],o=0;o<a.length;o++){var i=a[o];"~"===i&&(i="\\textasciitilde"),n.push({type:"textord",mode:"text",text:i})}var s={type:"text",mode:r.mode,font:"\\texttt",body:n};return{type:"href",mode:r.mode,href:a,body:Kt(s)}}}),$t({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInText:!0},handler:function(t,e){return{type:"htmlmathml",mode:t.parser.mode,html:Kt(e[0]),mathml:Kt(e[1])}},htmlBuilder:function(t,e){var r=ae(t.html,e,!1);return Lt.makeFragment(r)},mathmlBuilder:function(t,e){return be(t.mathml,e)}}),$t({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],allowedInText:!0},handler:function(t,e){var r=t.parser,a=t.funcName,n=Ht(e[0],"size");if(r.settings.strict){var o="m"===a[1],i="mu"===n.value.unit;o?(i||r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+a+" supports only mu units, not "+n.value.unit+" units"),"math"!==r.mode&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+a+" works only in math mode")):i&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+a+" doesn't support mu units")}return{type:"kern",mode:r.mode,dimension:n.value}},htmlBuilder:function(t,e){return Lt.makeGlue(t.dimension,e)},mathmlBuilder:function(t,e){var r=zt(t.dimension,e);return new pe.SpaceNode(r)}}),$t({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:function(t,e){var r=t.parser,a=t.funcName,n=e[0];return{type:"lap",mode:r.mode,alignment:a.slice(5),body:n}},htmlBuilder:function(t,e){var r;"clap"===t.alignment?(r=Lt.makeSpan([],[he(t.body,e)]),r=Lt.makeSpan(["inner"],[r],e)):r=Lt.makeSpan(["inner"],[he(t.body,e)]);var a=Lt.makeSpan(["fix"],[]),n=Lt.makeSpan([t.alignment],[r,a],e),o=Lt.makeSpan(["strut"]);return o.style.height=n.height+n.depth+"em",o.style.verticalAlign=-n.depth+"em",n.children.unshift(o),n=Lt.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:n}]},e),Lt.makeSpan(["mord"],[n],e)},mathmlBuilder:function(t,e){var r=new pe.MathNode("mpadded",[ye(t.body,e)]);if("rlap"!==t.alignment){var a="llap"===t.alignment?"-1":"-0.5";r.setAttribute("lspace",a+"width")}return r.setAttribute("width","0px"),r}}),$t({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1,consumeMode:"math"},handler:function(t,e){var r=t.funcName,a=t.parser,n=a.mode;a.switchMode("math");var o="\\("===r?"\\)":"$",i=a.parseExpression(!1,o);return a.expect(o,!1),a.switchMode(n),a.consume(),{type:"styling",mode:a.mode,style:"text",body:i}}}),$t({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler:function(t,e){throw new i("Mismatched "+t.funcName)}});var Ir=function(t,e){switch(e.style.size){case w.DISPLAY.size:return t.display;case w.TEXT.size:return t.text;case w.SCRIPT.size:return t.script;case w.SCRIPTSCRIPT.size:return t.scriptscript;default:return t.text}};$t({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4},handler:function(t,e){return{type:"mathchoice",mode:t.parser.mode,display:Kt(e[0]),text:Kt(e[1]),script:Kt(e[2]),scriptscript:Kt(e[3])}},htmlBuilder:function(t,e){var r=Ir(t,e),a=ae(r,e,!1);return Lt.makeFragment(a)},mathmlBuilder:function(t,e){var r=Ir(t,e);return be(r,e)}});var Or=["\\smallint"],Er=function(t,e){var r,a,n,o=!1,i=Pt(t,"supsub");i?(r=i.sup,a=i.sub,n=Ht(i.base,"op"),o=!0):n=Ht(t,"op");var s,h=e.style,l=!1;if(h.size===w.DISPLAY.size&&n.symbol&&!c.contains(Or,n.name)&&(l=!0),n.symbol){var m=l?"Size2-Regular":"Size1-Regular",u="";if("\\oiint"!==n.name&&"\\oiiint"!==n.name||(u=n.name.substr(1),n.name="oiint"===u?"\\iint":"\\iiint"),s=Lt.makeSymbol(n.name,m,"math",e,["mop","op-symbol",l?"large-op":"small-op"]),u.length>0){var d=s.italic,p=Lt.staticSvg(u+"Size"+(l?"2":"1"),e);s=Lt.makeVList({positionType:"individualShift",children:[{type:"elem",elem:s,shift:0},{type:"elem",elem:p,shift:l?.08:0}]},e),n.name="\\"+u,s.classes.unshift("mop"),s.italic=d}}else if(n.body){var f=ae(n.body,e,!0);1===f.length&&f[0]instanceof E?(s=f[0]).classes[0]="mop":s=Lt.makeSpan(["mop"],Lt.tryCombineChars(f),e)}else{for(var g=[],x=1;x<n.name.length;x++)g.push(Lt.mathsym(n.name[x],n.mode));s=Lt.makeSpan(["mop"],g,e)}var v=0,b=0;if((s instanceof E||"\\oiint"===n.name||"\\oiiint"===n.name)&&!n.suppressBaseShift&&(v=(s.height-s.depth)/2-e.fontMetrics().axisHeight,b=s.italic),o){var y,k,S;if(s=Lt.makeSpan([],[s]),r){var z=he(r,e.havingStyle(h.sup()),e);k={elem:z,kern:Math.max(e.fontMetrics().bigOpSpacing1,e.fontMetrics().bigOpSpacing3-z.depth)}}if(a){var M=he(a,e.havingStyle(h.sub()),e);y={elem:M,kern:Math.max(e.fontMetrics().bigOpSpacing2,e.fontMetrics().bigOpSpacing4-M.height)}}if(k&&y){var T=e.fontMetrics().bigOpSpacing5+y.elem.height+y.elem.depth+y.kern+s.depth+v;S=Lt.makeVList({positionType:"bottom",positionData:T,children:[{type:"kern",size:e.fontMetrics().bigOpSpacing5},{type:"elem",elem:y.elem,marginLeft:-b+"em"},{type:"kern",size:y.kern},{type:"elem",elem:s},{type:"kern",size:k.kern},{type:"elem",elem:k.elem,marginLeft:b+"em"},{type:"kern",size:e.fontMetrics().bigOpSpacing5}]},e)}else if(y){var A=s.height-v;S=Lt.makeVList({positionType:"top",positionData:A,children:[{type:"kern",size:e.fontMetrics().bigOpSpacing5},{type:"elem",elem:y.elem,marginLeft:-b+"em"},{type:"kern",size:y.kern},{type:"elem",elem:s}]},e)}else{if(!k)return s;var B=s.depth+v;S=Lt.makeVList({positionType:"bottom",positionData:B,children:[{type:"elem",elem:s},{type:"kern",size:k.kern},{type:"elem",elem:k.elem,marginLeft:b+"em"},{type:"kern",size:e.fontMetrics().bigOpSpacing5}]},e)}return Lt.makeSpan(["mop","op-limits"],[S],e)}return v&&(s.style.position="relative",s.style.top=v+"em"),s},Rr=function(t,e){var r;if(t.symbol)r=new ue("mo",[fe(t.name,t.mode)]),c.contains(Or,t.name)&&r.setAttribute("largeop","false");else if(t.body)r=new ue("mo",ve(t.body,e));else{r=new ue("mi",[new de(t.name.slice(1))]);var a=new ue("mo",[fe("⁡","text")]);r=t.parentIsSupSub?new ue("mo",[r,a]):ce([r,a])}return r},Lr={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};$t({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:function(t,e){var r=t.parser,a=t.funcName;return 1===a.length&&(a=Lr[a]),{type:"op",mode:r.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:a}},htmlBuilder:Er,mathmlBuilder:Rr}),$t({type:"op",names:["\\mathop"],props:{numArgs:1},handler:function(t,e){var r=t.parser,a=e[0];return{type:"op",mode:r.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:Kt(a)}},htmlBuilder:Er,mathmlBuilder:Rr});var Hr={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};function Pr(t,e,r){for(var a=ae(t,e,!1),n=e.sizeMultiplier/r.sizeMultiplier,o=0;o<a.length;o++){var i=a[o].classes.indexOf("sizing");i<0?Array.prototype.push.apply(a[o].classes,e.sizingClasses(r)):a[o].classes[i+1]==="reset-size"+e.size&&(a[o].classes[i+1]="reset-size"+r.size),a[o].height*=n,a[o].depth*=n}return Lt.makeFragment(a)}$t({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler:function(t){var e=t.parser,r=t.funcName;return{type:"op",mode:e.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:Er,mathmlBuilder:Rr}),$t({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler:function(t){var e=t.parser,r=t.funcName;return{type:"op",mode:e.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:Er,mathmlBuilder:Rr}),$t({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0},handler:function(t){var e=t.parser,r=t.funcName;return 1===r.length&&(r=Hr[r]),{type:"op",mode:e.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:r}},htmlBuilder:Er,mathmlBuilder:Rr}),$t({type:"operatorname",names:["\\operatorname"],props:{numArgs:1},handler:function(t,e){var r=t.parser,a=e[0];return{type:"operatorname",mode:r.mode,body:Kt(a)}},htmlBuilder:function(t,e){if(t.body.length>0){for(var r=t.body.map(function(t){var e=t.text;return"string"==typeof e?{type:"textord",mode:t.mode,text:e}:t}),a=ae(r,e.withFont("mathrm"),!0),n=0;n<a.length;n++){var o=a[n];o instanceof E&&(o.text=o.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}return Lt.makeSpan(["mop"],a,e)}return Lt.makeSpan(["mop"],[],e)},mathmlBuilder:function(t,e){for(var r=ve(t.body,e.withFont("mathrm")),a=!0,n=0;n<r.length;n++){var o=r[n];if(o instanceof pe.SpaceNode);else if(o instanceof pe.MathNode)switch(o.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":var i=o.children[0];1===o.children.length&&i instanceof pe.TextNode?i.text=i.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):a=!1;break;default:a=!1}else a=!1}if(a){var s=r.map(function(t){return t.toText()}).join("");r=[new pe.TextNode(s)]}var h=new pe.MathNode("mi",r);h.setAttribute("mathvariant","normal");var l=new pe.MathNode("mo",[fe("⁡","text")]);return pe.newDocumentFragment([h,l])}}),Zt({type:"ordgroup",htmlBuilder:function(t,e){return t.semisimple?Lt.makeFragment(ae(t.body,e,!1)):Lt.makeSpan(["mord"],ae(t.body,e,!0),e)},mathmlBuilder:function(t,e){return be(t.body,e)}}),$t({type:"overline",names:["\\overline"],props:{numArgs:1},handler:function(t,e){var r=t.parser,a=e[0];return{type:"overline",mode:r.mode,body:a}},htmlBuilder:function(t,e){var r=he(t.body,e.havingCrampedStyle()),a=Lt.makeLineSpan("overline-line",e),n=Lt.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:3*a.height},{type:"elem",elem:a},{type:"kern",size:a.height}]},e);return Lt.makeSpan(["mord","overline"],[n],e)},mathmlBuilder:function(t,e){var r=new pe.MathNode("mo",[new pe.TextNode("‾")]);r.setAttribute("stretchy","true");var a=new pe.MathNode("mover",[ye(t.body,e),r]);return a.setAttribute("accent","true"),a}}),$t({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:function(t,e){var r=t.parser,a=e[0];return{type:"phantom",mode:r.mode,body:Kt(a)}},htmlBuilder:function(t,e){var r=ae(t.body,e.withPhantom(),!1);return Lt.makeFragment(r)},mathmlBuilder:function(t,e){var r=ve(t.body,e);return new pe.MathNode("mphantom",r)}}),$t({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:function(t,e){var r=t.parser,a=e[0];return{type:"hphantom",mode:r.mode,body:a}},htmlBuilder:function(t,e){var r=Lt.makeSpan([],[he(t.body,e.withPhantom())]);if(r.height=0,r.depth=0,r.children)for(var a=0;a<r.children.length;a++)r.children[a].height=0,r.children[a].depth=0;return r=Lt.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:r}]},e),Lt.makeSpan(["mord"],[r],e)},mathmlBuilder:function(t,e){var r=ve(Kt(t.body),e),a=new pe.MathNode("mphantom",r),n=new pe.MathNode("mpadded",[a]);return n.setAttribute("height","0px"),n.setAttribute("depth","0px"),n}}),$t({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:function(t,e){var r=t.parser,a=e[0];return{type:"vphantom",mode:r.mode,body:a}},htmlBuilder:function(t,e){var r=Lt.makeSpan(["inner"],[he(t.body,e.withPhantom())]),a=Lt.makeSpan(["fix"],[]);return Lt.makeSpan(["mord","rlap"],[r,a],e)},mathmlBuilder:function(t,e){var r=ve(Kt(t.body),e),a=new pe.MathNode("mphantom",r),n=new pe.MathNode("mpadded",[a]);return n.setAttribute("width","0px"),n}});var Dr=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],Fr=function(t,e){var r=e.havingSize(t.size);return Pr(t.body,r,e)};$t({type:"sizing",names:Dr,props:{numArgs:0,allowedInText:!0},handler:function(t,e){var r=t.breakOnTokenText,a=t.funcName,n=t.parser,o=n.parseExpression(!1,r);return{type:"sizing",mode:n.mode,size:Dr.indexOf(a)+1,body:o}},htmlBuilder:Fr,mathmlBuilder:function(t,e){var r=e.havingSize(t.size),a=ve(t.body,r),n=new pe.MathNode("mstyle",a);return n.setAttribute("mathsize",r.sizeMultiplier+"em"),n}}),$t({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","text"],allowedInText:!0},handler:function(t,e){var r=t.parser,a=Ht(e[0],"size").value,n=e[1];return{type:"raisebox",mode:r.mode,dy:a,body:n}},htmlBuilder:function(t,e){var r={type:"text",mode:t.mode,body:Kt(t.body),font:"mathrm"},a={type:"sizing",mode:t.mode,body:[r],size:6},n=Fr(a,e),o=zt(t.dy,e);return Lt.makeVList({positionType:"shift",positionData:-o,children:[{type:"elem",elem:n}]},e)},mathmlBuilder:function(t,e){var r=new pe.MathNode("mpadded",[ye(t.body,e)]),a=t.dy.number+t.dy.unit;return r.setAttribute("voffset",a),r}}),$t({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,argTypes:["size","size","size"]},handler:function(t,e,r){var a=t.parser,n=r[0],o=Ht(e[0],"size"),i=Ht(e[1],"size");return{type:"rule",mode:a.mode,shift:n&&Ht(n,"size").value,width:o.value,height:i.value}},htmlBuilder:function(t,e){var r=Lt.makeSpan(["mord","rule"],[],e),a=zt(t.width,e),n=zt(t.height,e),o=t.shift?zt(t.shift,e):0;return r.style.borderRightWidth=a+"em",r.style.borderTopWidth=n+"em",r.style.bottom=o+"em",r.width=a,r.height=n+o,r.depth=-o,r.maxFontSize=1.125*n*e.sizeMultiplier,r},mathmlBuilder:function(t,e){var r=zt(t.width,e),a=zt(t.height,e),n=t.shift?zt(t.shift,e):0,o=e.color&&e.getColor()||"black",i=new pe.MathNode("mspace");i.setAttribute("mathbackground",o),i.setAttribute("width",r+"em"),i.setAttribute("height",a+"em");var s=new pe.MathNode("mpadded",[i]);return n>=0?s.setAttribute("height","+"+n+"em"):(s.setAttribute("height",n+"em"),s.setAttribute("depth","+"+-n+"em")),s.setAttribute("voffset",n+"em"),s}}),$t({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:function(t,e,r){var a=t.parser,n=!1,o=!1,i=r[0]&&Ht(r[0],"ordgroup");if(i)for(var s="",h=0;h<i.body.length;++h){if("t"===(s=i.body[h].text))n=!0;else{if("b"!==s){n=!1,o=!1;break}o=!0}}else n=!0,o=!0;var l=e[0];return{type:"smash",mode:a.mode,body:l,smashHeight:n,smashDepth:o}},htmlBuilder:function(t,e){var r=Lt.makeSpan([],[he(t.body,e)]);if(!t.smashHeight&&!t.smashDepth)return r;if(t.smashHeight&&(r.height=0,r.children))for(var a=0;a<r.children.length;a++)r.children[a].height=0;if(t.smashDepth&&(r.depth=0,r.children))for(var n=0;n<r.children.length;n++)r.children[n].depth=0;var o=Lt.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:r}]},e);return Lt.makeSpan(["mord"],[o],e)},mathmlBuilder:function(t,e){var r=new pe.MathNode("mpadded",[ye(t.body,e)]);return t.smashHeight&&r.setAttribute("height","0px"),t.smashDepth&&r.setAttribute("depth","0px"),r}}),$t({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler:function(t,e,r){var a=t.parser,n=r[0],o=e[0];return{type:"sqrt",mode:a.mode,body:o,index:n}},htmlBuilder:function(t,e){var r=he(t.body,e.havingCrampedStyle());0===r.height&&(r.height=e.fontMetrics().xHeight),r=Lt.wrapFragment(r,e);var a=e.fontMetrics().defaultRuleThickness,n=a;e.style.id<w.TEXT.id&&(n=e.fontMetrics().xHeight);var o=a+n/4,i=r.height+r.depth+o+a,s=Qe(i,e),h=s.span,l=s.ruleWidth,m=s.advanceWidth,c=h.height-l;c>r.height+r.depth+o&&(o=(o+c-r.height-r.depth)/2);var u=h.height-r.height-o-l;r.style.paddingLeft=m+"em";var d=Lt.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:-(r.height+u)},{type:"elem",elem:h},{type:"kern",size:l}]},e);if(t.index){var p=e.havingStyle(w.SCRIPTSCRIPT),f=he(t.index,p,e),g=.6*(d.height-d.depth),x=Lt.makeVList({positionType:"shift",positionData:-g,children:[{type:"elem",elem:f}]},e),v=Lt.makeSpan(["root"],[x]);return Lt.makeSpan(["mord","sqrt"],[v,d],e)}return Lt.makeSpan(["mord","sqrt"],[d],e)},mathmlBuilder:function(t,e){var r=t.body,a=t.index;return a?new pe.MathNode("mroot",[ye(r,e),ye(a,e)]):new pe.MathNode("msqrt",[ye(r,e)])}});var Vr={display:w.DISPLAY,text:w.TEXT,script:w.SCRIPT,scriptscript:w.SCRIPTSCRIPT};$t({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0},handler:function(t,e){var r=t.breakOnTokenText,a=t.funcName,n=t.parser,o=n.parseExpression(!0,r),i=a.slice(1,a.length-5);return{type:"styling",mode:n.mode,style:i,body:o}},htmlBuilder:function(t,e){var r=Vr[t.style],a=e.havingStyle(r).withFont("");return Pr(t.body,a,e)},mathmlBuilder:function(t,e){var r={display:w.DISPLAY,text:w.TEXT,script:w.SCRIPT,scriptscript:w.SCRIPTSCRIPT}[t.style],a=e.havingStyle(r),n=ve(t.body,a),o=new pe.MathNode("mstyle",n),i={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]}[t.style];return o.setAttribute("scriptlevel",i[0]),o.setAttribute("displaystyle",i[1]),o}});Zt({type:"supsub",htmlBuilder:function(t,e){var r=function(t,e){var r=t.base;return r?"op"===r.type?r.limits&&(e.style.size===w.DISPLAY.size||r.alwaysHandleSupSub)?Er:null:"accent"===r.type?c.isCharacterBox(r.base)?Ce:null:"horizBrace"===r.type&&!t.sub===r.isOver?Nr:null:null}(t,e);if(r)return r(t,e);var a,n,o,i=t.base,s=t.sup,h=t.sub,l=he(i,e),m=e.fontMetrics(),u=0,d=0,p=i&&c.isCharacterBox(i);if(s){var f=e.havingStyle(e.style.sup());a=he(s,f,e),p||(u=l.height-f.fontMetrics().supDrop*f.sizeMultiplier/e.sizeMultiplier)}if(h){var g=e.havingStyle(e.style.sub());n=he(h,g,e),p||(d=l.depth+g.fontMetrics().subDrop*g.sizeMultiplier/e.sizeMultiplier)}o=e.style===w.DISPLAY?m.sup1:e.style.cramped?m.sup3:m.sup2;var x,v=e.sizeMultiplier,b=.5/m.ptPerEm/v+"em",y=null;if(n){var k=t.base&&"op"===t.base.type&&t.base.name&&("\\oiint"===t.base.name||"\\oiiint"===t.base.name);(l instanceof E||k)&&(y=-l.italic+"em")}if(a&&n){u=Math.max(u,o,a.depth+.25*m.xHeight),d=Math.max(d,m.sub2);var S=4*m.defaultRuleThickness;if(u-a.depth-(n.height-d)<S){d=S-(u-a.depth)+n.height;var z=.8*m.xHeight-(u-a.depth);z>0&&(u+=z,d-=z)}var M=[{type:"elem",elem:n,shift:d,marginRight:b,marginLeft:y},{type:"elem",elem:a,shift:-u,marginRight:b}];x=Lt.makeVList({positionType:"individualShift",children:M},e)}else if(n){d=Math.max(d,m.sub1,n.height-.8*m.xHeight);var T=[{type:"elem",elem:n,marginLeft:y,marginRight:b}];x=Lt.makeVList({positionType:"shift",positionData:d,children:T},e)}else{if(!a)throw new Error("supsub must have either sup or sub.");u=Math.max(u,o,a.depth+.25*m.xHeight),x=Lt.makeVList({positionType:"shift",positionData:-u,children:[{type:"elem",elem:a,marginRight:b}]},e)}var A=ie(l,"right")||"mord";return Lt.makeSpan([A],[l,Lt.makeSpan(["msupsub"],[x])],e)},mathmlBuilder:function(t,e){var r,a=!1,n=Pt(t.base,"horizBrace");n&&!!t.sup===n.isOver&&(a=!0,r=n.isOver),t.base&&"op"===t.base.type&&(t.base.parentIsSupSub=!0);var o,i=[ye(t.base,e)];if(t.sub&&i.push(ye(t.sub,e)),t.sup&&i.push(ye(t.sup,e)),a)o=r?"mover":"munder";else if(t.sub)if(t.sup){var s=t.base;o=s&&"op"===s.type&&s.limits&&e.style===w.DISPLAY?"munderover":"msubsup"}else{var h=t.base;o=h&&"op"===h.type&&h.limits&&(e.style===w.DISPLAY||h.alwaysHandleSupSub)?"munder":"msub"}else{var l=t.base;o=l&&"op"===l.type&&l.limits&&(e.style===w.DISPLAY||l.alwaysHandleSupSub)?"mover":"msup"}return new pe.MathNode(o,i)}}),Zt({type:"atom",htmlBuilder:function(t,e){return Lt.mathsym(t.text,t.mode,e,["m"+t.family])},mathmlBuilder:function(t,e){var r=new pe.MathNode("mo",[fe(t.text,t.mode)]);if("bin"===t.family){var a=xe(t,e);"bold-italic"===a&&r.setAttribute("mathvariant",a)}else"punct"===t.family?r.setAttribute("separator","true"):"open"!==t.family&&"close"!==t.family||r.setAttribute("stretchy","false");return r}});var Ur={mi:"italic",mn:"normal",mtext:"normal"};Zt({type:"mathord",htmlBuilder:function(t,e){return Lt.makeOrd(t,e,"mathord")},mathmlBuilder:function(t,e){var r=new pe.MathNode("mi",[fe(t.text,t.mode,e)]),a=xe(t,e)||"italic";return a!==Ur[r.type]&&r.setAttribute("mathvariant",a),r}}),Zt({type:"textord",htmlBuilder:function(t,e){return Lt.makeOrd(t,e,"textord")},mathmlBuilder:function(t,e){var r,a=fe(t.text,t.mode,e),n=xe(t,e)||"normal";return r="text"===t.mode?new pe.MathNode("mtext",[a]):/[0-9]/.test(t.text)?new pe.MathNode("mn",[a]):"\\prime"===t.text?new pe.MathNode("mo",[a]):new pe.MathNode("mi",[a]),n!==Ur[r.type]&&r.setAttribute("mathvariant",n),r}});var Gr={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},Xr={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};Zt({type:"spacing",htmlBuilder:function(t,e){if(Xr.hasOwnProperty(t.text)){var r=Xr[t.text].className||"";if("text"===t.mode){var a=Lt.makeOrd(t,e,"textord");return a.classes.push(r),a}return Lt.makeSpan(["mspace",r],[Lt.mathsym(t.text,t.mode,e)],e)}if(Gr.hasOwnProperty(t.text))return Lt.makeSpan(["mspace",Gr[t.text]],[],e);throw new i('Unknown type of space "'+t.text+'"')},mathmlBuilder:function(t,e){if(!Xr.hasOwnProperty(t.text)){if(Gr.hasOwnProperty(t.text))return new pe.MathNode("mspace");throw new i('Unknown type of space "'+t.text+'"')}return new pe.MathNode("mtext",[new pe.TextNode(" ")])}});var Yr=function(){var t=new pe.MathNode("mtd",[]);return t.setAttribute("width","50%"),t};Zt({type:"tag",mathmlBuilder:function(t,e){var r=new pe.MathNode("mtable",[new pe.MathNode("mtr",[Yr(),new pe.MathNode("mtd",[be(t.body,e)]),Yr(),new pe.MathNode("mtd",[be(t.tag,e)])])]);return r.setAttribute("width","100%"),r}});var _r={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},Wr={"\\textbf":"textbf","\\textmd":"textmd"},jr={"\\textit":"textit","\\textup":"textup"},$r=function(t,e){var r=t.font;return r?_r[r]?e.withTextFontFamily(_r[r]):Wr[r]?e.withTextFontWeight(Wr[r]):e.withTextFontShape(jr[r]):e};$t({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup"],props:{numArgs:1,argTypes:["text"],greediness:2,allowedInText:!0,consumeMode:"text"},handler:function(t,e){var r=t.parser,a=t.funcName,n=e[0];return{type:"text",mode:r.mode,body:Kt(n),font:a}},htmlBuilder:function(t,e){var r=$r(t,e),a=ae(t.body,r,!0);return Lt.makeSpan(["mord","text"],Lt.tryCombineChars(a),r)},mathmlBuilder:function(t,e){var r=$r(t,e);return be(t.body,r)}}),$t({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler:function(t,e){return{type:"underline",mode:t.parser.mode,body:e[0]}},htmlBuilder:function(t,e){var r=he(t.body,e),a=Lt.makeLineSpan("underline-line",e),n=Lt.makeVList({positionType:"top",positionData:r.height,children:[{type:"kern",size:a.height},{type:"elem",elem:a},{type:"kern",size:3*a.height},{type:"elem",elem:r}]},e);return Lt.makeSpan(["mord","underline"],[n],e)},mathmlBuilder:function(t,e){var r=new pe.MathNode("mo",[new pe.TextNode("‾")]);r.setAttribute("stretchy","true");var a=new pe.MathNode("munder",[ye(t.body,e),r]);return a.setAttribute("accentunder","true"),a}}),$t({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler:function(t,e,r){throw new i("\\verb ended by end of line instead of matching delimiter")},htmlBuilder:function(t,e){for(var r=Zr(t),a=[],n=e.havingStyle(e.style.text()),o=0;o<r.length;o++){var i=r[o];"~"===i&&(i="\\textasciitilde"),a.push(Lt.makeSymbol(i,"Typewriter-Regular",t.mode,n,["mord","texttt"]))}return Lt.makeSpan(["mord","text"].concat(n.sizingClasses(e)),Lt.tryCombineChars(a),n)},mathmlBuilder:function(t,e){var r=new pe.TextNode(Zr(t)),a=new pe.MathNode("mtext",[r]);return a.setAttribute("mathvariant","monospace"),a}});var Zr=function(t){return t.body.replace(/ /g,t.star?"␣":" ")},Kr=_t,Jr=new RegExp("^(\\\\[a-zA-Z@]+)[ \r\n\t]*$"),Qr=new RegExp("[̀-ͯ]+$"),ta="([ \r\n\t]+)|([!-\\[\\]-‧‪-퟿豈-￿][̀-ͯ]*|[\ud800-\udbff][\udc00-\udfff][̀-ͯ]*|\\\\verb\\*([^]).*?\\3|\\\\verb([^*a-zA-Z]).*?\\4|\\\\[a-zA-Z@]+[ \r\n\t]*|\\\\[^\ud800-\udfff])",ea=function(){function t(t,e){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=t,this.settings=e,this.tokenRegex=new RegExp(ta,"g"),this.catcodes={"%":14}}var e=t.prototype;return e.setCatcode=function(t,e){this.catcodes[t]=e},e.lex=function(){var t=this.input,e=this.tokenRegex.lastIndex;if(e===t.length)return new n("EOF",new a(this,e,e));var r=this.tokenRegex.exec(t);if(null===r||r.index!==e)throw new i("Unexpected character: '"+t[e]+"'",new n(t[e],new a(this,e,e+1)));var o=r[2]||" ";if(14===this.catcodes[o]){var s=t.indexOf("\n",this.tokenRegex.lastIndex);return-1===s?(this.tokenRegex.lastIndex=t.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=s+1,this.lex()}var h=o.match(Jr);return h&&(o=h[1]),new n(o,new a(this,e,this.tokenRegex.lastIndex))},t}(),ra=function(){function t(t,e){void 0===t&&(t={}),void 0===e&&(e={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=e,this.builtins=t,this.undefStack=[]}var e=t.prototype;return e.beginGroup=function(){this.undefStack.push({})},e.endGroup=function(){if(0===this.undefStack.length)throw new i("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var t=this.undefStack.pop();for(var e in t)t.hasOwnProperty(e)&&(void 0===t[e]?delete this.current[e]:this.current[e]=t[e])},e.has=function(t){return this.current.hasOwnProperty(t)||this.builtins.hasOwnProperty(t)},e.get=function(t){return this.current.hasOwnProperty(t)?this.current[t]:this.builtins[t]},e.set=function(t,e,r){if(void 0===r&&(r=!1),r){for(var a=0;a<this.undefStack.length;a++)delete this.undefStack[a][t];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][t]=e)}else{var n=this.undefStack[this.undefStack.length-1];n&&!n.hasOwnProperty(t)&&(n[t]=this.current[t])}this.current[t]=e},t}(),aa={},na=aa;function oa(t,e){aa[t]=e}oa("\\@firstoftwo",function(t){return{tokens:t.consumeArgs(2)[0],numArgs:0}}),oa("\\@secondoftwo",function(t){return{tokens:t.consumeArgs(2)[1],numArgs:0}}),oa("\\@ifnextchar",function(t){var e=t.consumeArgs(3),r=t.future();return 1===e[0].length&&e[0][0].text===r.text?{tokens:e[1],numArgs:0}:{tokens:e[2],numArgs:0}}),oa("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}"),oa("\\TextOrMath",function(t){var e=t.consumeArgs(2);return"text"===t.mode?{tokens:e[0],numArgs:0}:{tokens:e[1],numArgs:0}});var ia={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};oa("\\char",function(t){var e,r=t.popToken(),a="";if("'"===r.text)e=8,r=t.popToken();else if('"'===r.text)e=16,r=t.popToken();else if("`"===r.text)if("\\"===(r=t.popToken()).text[0])a=r.text.charCodeAt(1);else{if("EOF"===r.text)throw new i("\\char` missing argument");a=r.text.charCodeAt(0)}else e=10;if(e){if(null==(a=ia[r.text])||a>=e)throw new i("Invalid base-"+e+" digit "+r.text);for(var n;null!=(n=ia[t.future().text])&&n<e;)a*=e,a+=n,t.popToken()}return"\\@char{"+a+"}"});var sa=function(t,e){var r=t.consumeArgs(1)[0];if(1!==r.length)throw new i("\\gdef's first argument must be a macro name");var a=r[0].text,n=0;for(r=t.consumeArgs(1)[0];1===r.length&&"#"===r[0].text;){if(1!==(r=t.consumeArgs(1)[0]).length)throw new i('Invalid argument number length "'+r.length+'"');if(!/^[1-9]$/.test(r[0].text))throw new i('Invalid argument number "'+r[0].text+'"');if(n++,parseInt(r[0].text)!==n)throw new i('Argument number "'+r[0].text+'" out of order');r=t.consumeArgs(1)[0]}return t.macros.set(a,{tokens:r,numArgs:n},e),""};oa("\\gdef",function(t){return sa(t,!0)}),oa("\\def",function(t){return sa(t,!1)}),oa("\\global",function(t){var e=t.consumeArgs(1)[0];if(1!==e.length)throw new i("Invalid command after \\global");var r=e[0].text;if("\\def"===r)return sa(t,!0);throw new i("Invalid command '"+r+"' after \\global")});var ha=function(t,e,r){var a=t.consumeArgs(1)[0];if(1!==a.length)throw new i("\\newcommand's first argument must be a macro name");var n=a[0].text,o=t.isDefined(n);if(o&&!e)throw new i("\\newcommand{"+n+"} attempting to redefine "+n+"; use \\renewcommand");if(!o&&!r)throw new i("\\renewcommand{"+n+"} when command "+n+" does not yet exist; use \\newcommand");var s=0;if(1===(a=t.consumeArgs(1)[0]).length&&"["===a[0].text){for(var h="",l=t.expandNextToken();"]"!==l.text&&"EOF"!==l.text;)h+=l.text,l=t.expandNextToken();if(!h.match(/^\s*[0-9]+\s*$/))throw new i("Invalid number of arguments: "+h);s=parseInt(h),a=t.consumeArgs(1)[0]}return t.macros.set(n,{tokens:a,numArgs:s}),""};oa("\\newcommand",function(t){return ha(t,!1,!0)}),oa("\\renewcommand",function(t){return ha(t,!0,!1)}),oa("\\providecommand",function(t){return ha(t,!0,!0)}),oa("\\bgroup","{"),oa("\\egroup","}"),oa("\\lq","`"),oa("\\rq","'"),oa("\\aa","\\r a"),oa("\\AA","\\r A"),oa("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}"),oa("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}"),oa("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}"),oa("ℬ","\\mathscr{B}"),oa("ℰ","\\mathscr{E}"),oa("ℱ","\\mathscr{F}"),oa("ℋ","\\mathscr{H}"),oa("ℐ","\\mathscr{I}"),oa("ℒ","\\mathscr{L}"),oa("ℳ","\\mathscr{M}"),oa("ℛ","\\mathscr{R}"),oa("ℭ","\\mathfrak{C}"),oa("ℌ","\\mathfrak{H}"),oa("ℨ","\\mathfrak{Z}"),oa("\\Bbbk","\\Bbb{k}"),oa("·","\\cdotp"),oa("\\llap","\\mathllap{\\textrm{#1}}"),oa("\\rlap","\\mathrlap{\\textrm{#1}}"),oa("\\clap","\\mathclap{\\textrm{#1}}"),oa("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}'),oa("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}"),oa("\\ne","\\neq"),oa("≠","\\neq"),oa("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}"),oa("∉","\\notin"),oa("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}"),oa("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}"),oa("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}"),oa("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}"),oa("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}"),oa("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}"),oa("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}"),oa("⟂","\\perp"),oa("‼","\\mathclose{!\\mkern-0.8mu!}"),oa("∌","\\notni"),oa("⌜","\\ulcorner"),oa("⌝","\\urcorner"),oa("⌞","\\llcorner"),oa("⌟","\\lrcorner"),oa("©","\\copyright"),oa("®","\\textregistered"),oa("️","\\textregistered"),oa("\\vdots","\\mathord{\\varvdots\\rule{0pt}{15pt}}"),oa("⋮","\\vdots"),oa("\\varGamma","\\mathit{\\Gamma}"),oa("\\varDelta","\\mathit{\\Delta}"),oa("\\varTheta","\\mathit{\\Theta}"),oa("\\varLambda","\\mathit{\\Lambda}"),oa("\\varXi","\\mathit{\\Xi}"),oa("\\varPi","\\mathit{\\Pi}"),oa("\\varSigma","\\mathit{\\Sigma}"),oa("\\varUpsilon","\\mathit{\\Upsilon}"),oa("\\varPhi","\\mathit{\\Phi}"),oa("\\varPsi","\\mathit{\\Psi}"),oa("\\varOmega","\\mathit{\\Omega}"),oa("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu"),oa("\\boxed","\\fbox{$\\displaystyle{#1}$}"),oa("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;"),oa("\\implies","\\DOTSB\\;\\Longrightarrow\\;"),oa("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");var la={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"};oa("\\dots",function(t){var e="\\dotso",r=t.expandAfterFuture().text;return r in la?e=la[r]:"\\not"===r.substr(0,4)?e="\\dotsb":r in _.math&&c.contains(["bin","rel"],_.math[r].group)&&(e="\\dotsb"),e});var ma={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};oa("\\dotso",function(t){return t.future().text in ma?"\\ldots\\,":"\\ldots"}),oa("\\dotsc",function(t){var e=t.future().text;return e in ma&&","!==e?"\\ldots\\,":"\\ldots"}),oa("\\cdots",function(t){return t.future().text in ma?"\\@cdots\\,":"\\@cdots"}),oa("\\dotsb","\\cdots"),oa("\\dotsm","\\cdots"),oa("\\dotsi","\\!\\cdots"),oa("\\dotsx","\\ldots\\,"),oa("\\DOTSI","\\relax"),oa("\\DOTSB","\\relax"),oa("\\DOTSX","\\relax"),oa("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax"),oa("\\,","\\tmspace+{3mu}{.1667em}"),oa("\\thinspace","\\,"),oa("\\>","\\mskip{4mu}"),oa("\\:","\\tmspace+{4mu}{.2222em}"),oa("\\medspace","\\:"),oa("\\;","\\tmspace+{5mu}{.2777em}"),oa("\\thickspace","\\;"),oa("\\!","\\tmspace-{3mu}{.1667em}"),oa("\\negthinspace","\\!"),oa("\\negmedspace","\\tmspace-{4mu}{.2222em}"),oa("\\negthickspace","\\tmspace-{5mu}{.277em}"),oa("\\enspace","\\kern.5em "),oa("\\enskip","\\hskip.5em\\relax"),oa("\\quad","\\hskip1em\\relax"),oa("\\qquad","\\hskip2em\\relax"),oa("\\tag","\\@ifstar\\tag@literal\\tag@paren"),oa("\\tag@paren","\\tag@literal{({#1})}"),oa("\\tag@literal",function(t){if(t.macros.get("\\df@tag"))throw new i("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"}),oa("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}"),oa("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)"),oa("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}"),oa("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1"),oa("\\pmb","\\html@mathml{\\@binrel{#1}{\\mathrlap{#1}\\mathrlap{\\mkern0.4mu\\raisebox{0.4mu}{$#1$}}{\\mkern0.8mu#1}}}{\\mathbf{#1}}"),oa("\\\\","\\newline"),oa("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var ca=P["Main-Regular"]["T".charCodeAt(0)][1]-.7*P["Main-Regular"]["A".charCodeAt(0)][1]+"em";oa("\\LaTeX","\\textrm{\\html@mathml{L\\kern-.36em\\raisebox{"+ca+"}{\\scriptsize A}\\kern-.15em\\TeX}{LaTeX}}"),oa("\\KaTeX","\\textrm{\\html@mathml{K\\kern-.17em\\raisebox{"+ca+"}{\\scriptsize A}\\kern-.15em\\TeX}{KaTeX}}"),oa("\\hspace","\\@ifstar\\@hspacer\\@hspace"),oa("\\@hspace","\\hskip #1\\relax"),oa("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax"),oa("\\ordinarycolon",":"),oa("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}"),oa("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}'),oa("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}'),oa("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}'),oa("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}'),oa("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}'),oa("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}'),oa("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}'),oa("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}'),oa("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}'),oa("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}'),oa("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}'),oa("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}'),oa("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}'),oa("∷","\\dblcolon"),oa("∹","\\eqcolon"),oa("≔","\\coloneqq"),oa("≕","\\eqqcolon"),oa("⩴","\\Coloneqq"),oa("\\ratio","\\vcentcolon"),oa("\\coloncolon","\\dblcolon"),oa("\\colonequals","\\coloneqq"),oa("\\coloncolonequals","\\Coloneqq"),oa("\\equalscolon","\\eqqcolon"),oa("\\equalscoloncolon","\\Eqqcolon"),oa("\\colonminus","\\coloneq"),oa("\\coloncolonminus","\\Coloneq"),oa("\\minuscolon","\\eqcolon"),oa("\\minuscoloncolon","\\Eqcolon"),oa("\\coloncolonapprox","\\Colonapprox"),oa("\\coloncolonsim","\\Colonsim"),oa("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}"),oa("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}"),oa("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}"),oa("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}"),oa("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}"),oa("\\limsup","\\DOTSB\\mathop{\\operatorname{lim\\,sup}}\\limits"),oa("\\liminf","\\DOTSB\\mathop{\\operatorname{lim\\,inf}}\\limits"),oa("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}"),oa("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}"),oa("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}"),oa("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}"),oa("\\nleqq","\\html@mathml{\\@nleqq}{≰}"),oa("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}"),oa("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}"),oa("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}"),oa("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}"),oa("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}"),oa("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}"),oa("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}"),oa("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}"),oa("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}"),oa("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}"),oa("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}"),oa("⟦","\\llbracket"),oa("⟧","\\rrbracket"),oa("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}"),oa("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}"),oa("⦃","\\lBrace"),oa("⦄","\\rBrace"),oa("\\darr","\\downarrow"),oa("\\dArr","\\Downarrow"),oa("\\Darr","\\Downarrow"),oa("\\lang","\\langle"),oa("\\rang","\\rangle"),oa("\\uarr","\\uparrow"),oa("\\uArr","\\Uparrow"),oa("\\Uarr","\\Uparrow"),oa("\\N","\\mathbb{N}"),oa("\\R","\\mathbb{R}"),oa("\\Z","\\mathbb{Z}"),oa("\\alef","\\aleph"),oa("\\alefsym","\\aleph"),oa("\\Alpha","\\mathrm{A}"),oa("\\Beta","\\mathrm{B}"),oa("\\bull","\\bullet"),oa("\\Chi","\\mathrm{X}"),oa("\\clubs","\\clubsuit"),oa("\\cnums","\\mathbb{C}"),oa("\\Complex","\\mathbb{C}"),oa("\\Dagger","\\ddagger"),oa("\\diamonds","\\diamondsuit"),oa("\\empty","\\emptyset"),oa("\\Epsilon","\\mathrm{E}"),oa("\\Eta","\\mathrm{H}"),oa("\\exist","\\exists"),oa("\\harr","\\leftrightarrow"),oa("\\hArr","\\Leftrightarrow"),oa("\\Harr","\\Leftrightarrow"),oa("\\hearts","\\heartsuit"),oa("\\image","\\Im"),oa("\\infin","\\infty"),oa("\\Iota","\\mathrm{I}"),oa("\\isin","\\in"),oa("\\Kappa","\\mathrm{K}"),oa("\\larr","\\leftarrow"),oa("\\lArr","\\Leftarrow"),oa("\\Larr","\\Leftarrow"),oa("\\lrarr","\\leftrightarrow"),oa("\\lrArr","\\Leftrightarrow"),oa("\\Lrarr","\\Leftrightarrow"),oa("\\Mu","\\mathrm{M}"),oa("\\natnums","\\mathbb{N}"),oa("\\Nu","\\mathrm{N}"),oa("\\Omicron","\\mathrm{O}"),oa("\\plusmn","\\pm"),oa("\\rarr","\\rightarrow"),oa("\\rArr","\\Rightarrow"),oa("\\Rarr","\\Rightarrow"),oa("\\real","\\Re"),oa("\\reals","\\mathbb{R}"),oa("\\Reals","\\mathbb{R}"),oa("\\Rho","\\mathrm{P}"),oa("\\sdot","\\cdot"),oa("\\sect","\\S"),oa("\\spades","\\spadesuit"),oa("\\sub","\\subset"),oa("\\sube","\\subseteq"),oa("\\supe","\\supseteq"),oa("\\Tau","\\mathrm{T}"),oa("\\thetasym","\\vartheta"),oa("\\weierp","\\wp"),oa("\\Zeta","\\mathrm{Z}"),oa("\\argmin","\\DOTSB\\mathop{\\operatorname{arg\\,min}}\\limits"),oa("\\argmax","\\DOTSB\\mathop{\\operatorname{arg\\,max}}\\limits"),oa("\\blue","\\textcolor{##6495ed}{#1}"),oa("\\orange","\\textcolor{##ffa500}{#1}"),oa("\\pink","\\textcolor{##ff00af}{#1}"),oa("\\red","\\textcolor{##df0030}{#1}"),oa("\\green","\\textcolor{##28ae7b}{#1}"),oa("\\gray","\\textcolor{gray}{##1}"),oa("\\purple","\\textcolor{##9d38bd}{#1}"),oa("\\blueA","\\textcolor{##ccfaff}{#1}"),oa("\\blueB","\\textcolor{##80f6ff}{#1}"),oa("\\blueC","\\textcolor{##63d9ea}{#1}"),oa("\\blueD","\\textcolor{##11accd}{#1}"),oa("\\blueE","\\textcolor{##0c7f99}{#1}"),oa("\\tealA","\\textcolor{##94fff5}{#1}"),oa("\\tealB","\\textcolor{##26edd5}{#1}"),oa("\\tealC","\\textcolor{##01d1c1}{#1}"),oa("\\tealD","\\textcolor{##01a995}{#1}"),oa("\\tealE","\\textcolor{##208170}{#1}"),oa("\\greenA","\\textcolor{##b6ffb0}{#1}"),oa("\\greenB","\\textcolor{##8af281}{#1}"),oa("\\greenC","\\textcolor{##74cf70}{#1}"),oa("\\greenD","\\textcolor{##1fab54}{#1}"),oa("\\greenE","\\textcolor{##0d923f}{#1}"),oa("\\goldA","\\textcolor{##ffd0a9}{#1}"),oa("\\goldB","\\textcolor{##ffbb71}{#1}"),oa("\\goldC","\\textcolor{##ff9c39}{#1}"),oa("\\goldD","\\textcolor{##e07d10}{#1}"),oa("\\goldE","\\textcolor{##a75a05}{#1}"),oa("\\redA","\\textcolor{##fca9a9}{#1}"),oa("\\redB","\\textcolor{##ff8482}{#1}"),oa("\\redC","\\textcolor{##f9685d}{#1}"),oa("\\redD","\\textcolor{##e84d39}{#1}"),oa("\\redE","\\textcolor{##bc2612}{#1}"),oa("\\maroonA","\\textcolor{##ffbde0}{#1}"),oa("\\maroonB","\\textcolor{##ff92c6}{#1}"),oa("\\maroonC","\\textcolor{##ed5fa6}{#1}"),oa("\\maroonD","\\textcolor{##ca337c}{#1}"),oa("\\maroonE","\\textcolor{##9e034e}{#1}"),oa("\\purpleA","\\textcolor{##ddd7ff}{#1}"),oa("\\purpleB","\\textcolor{##c6b9fc}{#1}"),oa("\\purpleC","\\textcolor{##aa87ff}{#1}"),oa("\\purpleD","\\textcolor{##7854ab}{#1}"),oa("\\purpleE","\\textcolor{##543b78}{#1}"),oa("\\mintA","\\textcolor{##f5f9e8}{#1}"),oa("\\mintB","\\textcolor{##edf2df}{#1}"),oa("\\mintC","\\textcolor{##e0e5cc}{#1}"),oa("\\grayA","\\textcolor{##f6f7f7}{#1}"),oa("\\grayB","\\textcolor{##f0f1f2}{#1}"),oa("\\grayC","\\textcolor{##e3e5e6}{#1}"),oa("\\grayD","\\textcolor{##d6d8da}{#1}"),oa("\\grayE","\\textcolor{##babec2}{#1}"),oa("\\grayF","\\textcolor{##888d93}{#1}"),oa("\\grayG","\\textcolor{##626569}{#1}"),oa("\\grayH","\\textcolor{##3b3e40}{#1}"),oa("\\grayI","\\textcolor{##21242c}{#1}"),oa("\\kaBlue","\\textcolor{##314453}{#1}"),oa("\\kaGreen","\\textcolor{##71B307}{#1}");var ua={"\\relax":!0,"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0},da=function(){function t(t,e,r){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=e,this.expansionCount=0,this.feed(t),this.macros=new ra(na,e.macros),this.mode=r,this.stack=[]}var e=t.prototype;return e.feed=function(t){this.lexer=new ea(t,this.settings)},e.switchMode=function(t){this.mode=t},e.beginGroup=function(){this.macros.beginGroup()},e.endGroup=function(){this.macros.endGroup()},e.future=function(){return 0===this.stack.length&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]},e.popToken=function(){return this.future(),this.stack.pop()},e.pushToken=function(t){this.stack.push(t)},e.pushTokens=function(t){var e;(e=this.stack).push.apply(e,t)},e.consumeSpaces=function(){for(;;){if(" "!==this.future().text)break;this.stack.pop()}},e.consumeArgs=function(t){for(var e=[],r=0;r<t;++r){this.consumeSpaces();var a=this.popToken();if("{"===a.text){for(var n=[],o=1;0!==o;){var s=this.popToken();if(n.push(s),"{"===s.text)++o;else if("}"===s.text)--o;else if("EOF"===s.text)throw new i("End of input in macro argument",a)}n.pop(),n.reverse(),e[r]=n}else{if("EOF"===a.text)throw new i("End of input expecting macro argument");e[r]=[a]}}return e},e.expandOnce=function(){var t=this.popToken(),e=t.text,r=this._getExpansion(e);if(null==r)return this.pushToken(t),t;if(this.expansionCount++,this.expansionCount>this.settings.maxExpand)throw new i("Too many expansions: infinite loop or need to increase maxExpand setting");var a=r.tokens;if(r.numArgs)for(var n=this.consumeArgs(r.numArgs),o=(a=a.slice()).length-1;o>=0;--o){var s=a[o];if("#"===s.text){if(0===o)throw new i("Incomplete placeholder at end of macro body",s);if("#"===(s=a[--o]).text)a.splice(o+1,1);else{if(!/^[1-9]$/.test(s.text))throw new i("Not a valid argument number",s);var h;(h=a).splice.apply(h,[o,2].concat(n[+s.text-1]))}}}return this.pushTokens(a),a},e.expandAfterFuture=function(){return this.expandOnce(),this.future()},e.expandNextToken=function(){for(;;){var t=this.expandOnce();if(t instanceof n){if("\\relax"!==t.text)return this.stack.pop();this.stack.pop()}}throw new Error},e.expandMacro=function(t){if(this.macros.get(t)){var e=[],r=this.stack.length;for(this.pushToken(new n(t));this.stack.length>r;){this.expandOnce()instanceof n&&e.push(this.stack.pop())}return e}},e.expandMacroAsText=function(t){var e=this.expandMacro(t);return e?e.map(function(t){return t.text}).join(""):e},e._getExpansion=function(t){var e=this.macros.get(t);if(null==e)return e;var r="function"==typeof e?e(this):e;if("string"==typeof r){var a=0;if(-1!==r.indexOf("#"))for(var n=r.replace(/##/g,"");-1!==n.indexOf("#"+(a+1));)++a;for(var o=new ea(r,this.settings),i=[],s=o.lex();"EOF"!==s.text;)i.push(s),s=o.lex();return i.reverse(),{tokens:i,numArgs:a}}return r},e.isDefined=function(t){return this.macros.has(t)||Kr.hasOwnProperty(t)||_.math.hasOwnProperty(t)||_.text.hasOwnProperty(t)||ua.hasOwnProperty(t)},t}(),pa={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"}},fa={"á":"á","à":"à","ä":"ä","ǟ":"ǟ","ã":"ã","ā":"ā","ă":"ă","ắ":"ắ","ằ":"ằ","ẵ":"ẵ","ǎ":"ǎ","â":"â","ấ":"ấ","ầ":"ầ","ẫ":"ẫ","ȧ":"ȧ","ǡ":"ǡ","å":"å","ǻ":"ǻ","ḃ":"ḃ","ć":"ć","č":"č","ĉ":"ĉ","ċ":"ċ","ď":"ď","ḋ":"ḋ","é":"é","è":"è","ë":"ë","ẽ":"ẽ","ē":"ē","ḗ":"ḗ","ḕ":"ḕ","ĕ":"ĕ","ě":"ě","ê":"ê","ế":"ế","ề":"ề","ễ":"ễ","ė":"ė","ḟ":"ḟ","ǵ":"ǵ","ḡ":"ḡ","ğ":"ğ","ǧ":"ǧ","ĝ":"ĝ","ġ":"ġ","ḧ":"ḧ","ȟ":"ȟ","ĥ":"ĥ","ḣ":"ḣ","í":"í","ì":"ì","ï":"ï","ḯ":"ḯ","ĩ":"ĩ","ī":"ī","ĭ":"ĭ","ǐ":"ǐ","î":"î","ǰ":"ǰ","ĵ":"ĵ","ḱ":"ḱ","ǩ":"ǩ","ĺ":"ĺ","ľ":"ľ","ḿ":"ḿ","ṁ":"ṁ","ń":"ń","ǹ":"ǹ","ñ":"ñ","ň":"ň","ṅ":"ṅ","ó":"ó","ò":"ò","ö":"ö","ȫ":"ȫ","õ":"õ","ṍ":"ṍ","ṏ":"ṏ","ȭ":"ȭ","ō":"ō","ṓ":"ṓ","ṑ":"ṑ","ŏ":"ŏ","ǒ":"ǒ","ô":"ô","ố":"ố","ồ":"ồ","ỗ":"ỗ","ȯ":"ȯ","ȱ":"ȱ","ő":"ő","ṕ":"ṕ","ṗ":"ṗ","ŕ":"ŕ","ř":"ř","ṙ":"ṙ","ś":"ś","ṥ":"ṥ","š":"š","ṧ":"ṧ","ŝ":"ŝ","ṡ":"ṡ","ẗ":"ẗ","ť":"ť","ṫ":"ṫ","ú":"ú","ù":"ù","ü":"ü","ǘ":"ǘ","ǜ":"ǜ","ǖ":"ǖ","ǚ":"ǚ","ũ":"ũ","ṹ":"ṹ","ū":"ū","ṻ":"ṻ","ŭ":"ŭ","ǔ":"ǔ","û":"û","ů":"ů","ű":"ű","ṽ":"ṽ","ẃ":"ẃ","ẁ":"ẁ","ẅ":"ẅ","ŵ":"ŵ","ẇ":"ẇ","ẘ":"ẘ","ẍ":"ẍ","ẋ":"ẋ","ý":"ý","ỳ":"ỳ","ÿ":"ÿ","ỹ":"ỹ","ȳ":"ȳ","ŷ":"ŷ","ẏ":"ẏ","ẙ":"ẙ","ź":"ź","ž":"ž","ẑ":"ẑ","ż":"ż","Á":"Á","À":"À","Ä":"Ä","Ǟ":"Ǟ","Ã":"Ã","Ā":"Ā","Ă":"Ă","Ắ":"Ắ","Ằ":"Ằ","Ẵ":"Ẵ","Ǎ":"Ǎ","Â":"Â","Ấ":"Ấ","Ầ":"Ầ","Ẫ":"Ẫ","Ȧ":"Ȧ","Ǡ":"Ǡ","Å":"Å","Ǻ":"Ǻ","Ḃ":"Ḃ","Ć":"Ć","Č":"Č","Ĉ":"Ĉ","Ċ":"Ċ","Ď":"Ď","Ḋ":"Ḋ","É":"É","È":"È","Ë":"Ë","Ẽ":"Ẽ","Ē":"Ē","Ḗ":"Ḗ","Ḕ":"Ḕ","Ĕ":"Ĕ","Ě":"Ě","Ê":"Ê","Ế":"Ế","Ề":"Ề","Ễ":"Ễ","Ė":"Ė","Ḟ":"Ḟ","Ǵ":"Ǵ","Ḡ":"Ḡ","Ğ":"Ğ","Ǧ":"Ǧ","Ĝ":"Ĝ","Ġ":"Ġ","Ḧ":"Ḧ","Ȟ":"Ȟ","Ĥ":"Ĥ","Ḣ":"Ḣ","Í":"Í","Ì":"Ì","Ï":"Ï","Ḯ":"Ḯ","Ĩ":"Ĩ","Ī":"Ī","Ĭ":"Ĭ","Ǐ":"Ǐ","Î":"Î","İ":"İ","Ĵ":"Ĵ","Ḱ":"Ḱ","Ǩ":"Ǩ","Ĺ":"Ĺ","Ľ":"Ľ","Ḿ":"Ḿ","Ṁ":"Ṁ","Ń":"Ń","Ǹ":"Ǹ","Ñ":"Ñ","Ň":"Ň","Ṅ":"Ṅ","Ó":"Ó","Ò":"Ò","Ö":"Ö","Ȫ":"Ȫ","Õ":"Õ","Ṍ":"Ṍ","Ṏ":"Ṏ","Ȭ":"Ȭ","Ō":"Ō","Ṓ":"Ṓ","Ṑ":"Ṑ","Ŏ":"Ŏ","Ǒ":"Ǒ","Ô":"Ô","Ố":"Ố","Ồ":"Ồ","Ỗ":"Ỗ","Ȯ":"Ȯ","Ȱ":"Ȱ","Ő":"Ő","Ṕ":"Ṕ","Ṗ":"Ṗ","Ŕ":"Ŕ","Ř":"Ř","Ṙ":"Ṙ","Ś":"Ś","Ṥ":"Ṥ","Š":"Š","Ṧ":"Ṧ","Ŝ":"Ŝ","Ṡ":"Ṡ","Ť":"Ť","Ṫ":"Ṫ","Ú":"Ú","Ù":"Ù","Ü":"Ü","Ǘ":"Ǘ","Ǜ":"Ǜ","Ǖ":"Ǖ","Ǚ":"Ǚ","Ũ":"Ũ","Ṹ":"Ṹ","Ū":"Ū","Ṻ":"Ṻ","Ŭ":"Ŭ","Ǔ":"Ǔ","Û":"Û","Ů":"Ů","Ű":"Ű","Ṽ":"Ṽ","Ẃ":"Ẃ","Ẁ":"Ẁ","Ẅ":"Ẅ","Ŵ":"Ŵ","Ẇ":"Ẇ","Ẍ":"Ẍ","Ẋ":"Ẋ","Ý":"Ý","Ỳ":"Ỳ","Ÿ":"Ÿ","Ỹ":"Ỹ","Ȳ":"Ȳ","Ŷ":"Ŷ","Ẏ":"Ẏ","Ź":"Ź","Ž":"Ž","Ẑ":"Ẑ","Ż":"Ż","ά":"ά","ὰ":"ὰ","ᾱ":"ᾱ","ᾰ":"ᾰ","έ":"έ","ὲ":"ὲ","ή":"ή","ὴ":"ὴ","ί":"ί","ὶ":"ὶ","ϊ":"ϊ","ΐ":"ΐ","ῒ":"ῒ","ῑ":"ῑ","ῐ":"ῐ","ό":"ό","ὸ":"ὸ","ύ":"ύ","ὺ":"ὺ","ϋ":"ϋ","ΰ":"ΰ","ῢ":"ῢ","ῡ":"ῡ","ῠ":"ῠ","ώ":"ώ","ὼ":"ὼ","Ύ":"Ύ","Ὺ":"Ὺ","Ϋ":"Ϋ","Ῡ":"Ῡ","Ῠ":"Ῠ","Ώ":"Ώ","Ὼ":"Ὼ"},ga=function(){function t(t,e){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new da(t,e,this.mode),this.settings=e,this.leftrightDepth=0}var e=t.prototype;return e.expect=function(t,e){if(void 0===e&&(e=!0),this.nextToken.text!==t)throw new i("Expected '"+t+"', got '"+this.nextToken.text+"'",this.nextToken);e&&this.consume()},e.consume=function(){this.nextToken=this.gullet.expandNextToken()},e.switchMode=function(t){this.mode=t,this.gullet.switchMode(t)},e.parse=function(){this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor"),this.consume();var t=this.parseExpression(!1);return this.expect("EOF",!1),this.gullet.endGroup(),t},e.parseExpression=function(e,r){for(var a=[];;){"math"===this.mode&&this.consumeSpaces();var n=this.nextToken;if(-1!==t.endOfExpression.indexOf(n.text))break;if(r&&n.text===r)break;if(e&&Kr[n.text]&&Kr[n.text].infix)break;var o=this.parseAtom(r);if(!o)break;a.push(o)}return"text"===this.mode&&this.formLigatures(a),this.handleInfixNodes(a)},e.handleInfixNodes=function(t){for(var e,r=-1,a=0;a<t.length;a++){var n=Pt(t[a],"infix");if(n){if(-1!==r)throw new i("only one infix operator per group",n.token);r=a,e=n.replaceWith}}if(-1!==r&&e){var o,s,h=t.slice(0,r),l=t.slice(r+1);return o=1===h.length&&"ordgroup"===h[0].type?h[0]:{type:"ordgroup",mode:this.mode,body:h},s=1===l.length&&"ordgroup"===l[0].type?l[0]:{type:"ordgroup",mode:this.mode,body:l},["\\\\abovefrac"===e?this.callFunction(e,[o,t[r],s],[]):this.callFunction(e,[o,s],[])]}return t},e.handleSupSubscript=function(e){var r=this.nextToken,a=r.text;this.consume(),this.consumeSpaces();var n=this.parseGroup(e,!1,t.SUPSUB_GREEDINESS);if(!n)throw new i("Expected group after '"+a+"'",r);return n},e.handleUnsupportedCmd=function(){for(var t=this.nextToken.text,e=[],r=0;r<t.length;r++)e.push({type:"textord",mode:"text",text:t[r]});var a={type:"text",mode:this.mode,body:e},n={type:"color",mode:this.mode,color:this.settings.errorColor,body:[a]};return this.consume(),n},e.parseAtom=function(t){var e,r,a=this.parseGroup("atom",!1,null,t);if("text"===this.mode)return a;for(;;){this.consumeSpaces();var n=this.nextToken;if("\\limits"===n.text||"\\nolimits"===n.text){var o=Pt(a,"op");if(!o)throw new i("Limit controls must follow a math operator",n);var s="\\limits"===n.text;o.limits=s,o.alwaysHandleSupSub=!0,this.consume()}else if("^"===n.text){if(e)throw new i("Double superscript",n);e=this.handleSupSubscript("superscript")}else if("_"===n.text){if(r)throw new i("Double subscript",n);r=this.handleSupSubscript("subscript")}else{if("'"!==n.text)break;if(e)throw new i("Double superscript",n);var h={type:"textord",mode:this.mode,text:"\\prime"},l=[h];for(this.consume();"'"===this.nextToken.text;)l.push(h),this.consume();"^"===this.nextToken.text&&l.push(this.handleSupSubscript("superscript")),e={type:"ordgroup",mode:this.mode,body:l}}}return e||r?{type:"supsub",mode:this.mode,base:a,sup:e,sub:r}:a},e.parseFunction=function(t,e,r){var a=this.nextToken,n=a.text,o=Kr[n];if(!o)return null;if(null!=r&&o.greediness<=r)throw new i("Got function '"+n+"' with no arguments"+(e?" as "+e:""),a);if("text"===this.mode&&!o.allowedInText)throw new i("Can't use function '"+n+"' in text mode",a);if("math"===this.mode&&!1===o.allowedInMath)throw new i("Can't use function '"+n+"' in math mode",a);if(o.argTypes&&"url"===o.argTypes[0]&&this.gullet.lexer.setCatcode("%",13),o.consumeMode){var s=this.mode;this.switchMode(o.consumeMode),this.consume(),this.switchMode(s)}else this.consume();var h=this.parseArguments(n,o),l=h.args,m=h.optArgs;return this.callFunction(n,l,m,a,t)},e.callFunction=function(t,e,r,a,n){var o={funcName:t,parser:this,token:a,breakOnTokenText:n},s=Kr[t];if(s&&s.handler)return s.handler(o,e,r);throw new i("No function handler for "+t)},e.parseArguments=function(t,e){var r=e.numArgs+e.numOptionalArgs;if(0===r)return{args:[],optArgs:[]};for(var a=e.greediness,n=[],o=[],s=0;s<r;s++){var h=e.argTypes&&e.argTypes[s],l=s<e.numOptionalArgs;s>0&&!l&&this.consumeSpaces(),0!==s||l||"math"!==this.mode||this.consumeSpaces();var m=this.nextToken,c=this.parseGroupOfType("argument to '"+t+"'",h,l,a);if(!c){if(l){o.push(null);continue}throw new i("Expected group after '"+t+"'",m)}(l?o:n).push(c)}return{args:n,optArgs:o}},e.parseGroupOfType=function(t,e,r,a){switch(e){case"color":return this.parseColorGroup(r);case"size":return this.parseSizeGroup(r);case"url":return this.parseUrlGroup(r);case"math":case"text":return this.parseGroup(t,r,a,void 0,e);case"raw":if(r&&"{"===this.nextToken.text)return null;var n=this.parseStringGroup("raw",r,!0);if(n)return{type:"raw",mode:"text",string:n.text};throw new i("Expected raw group",this.nextToken);case"original":case null:case void 0:return this.parseGroup(t,r,a);default:throw new i("Unknown group type as "+t,this.nextToken)}},e.consumeSpaces=function(){for(;" "===this.nextToken.text;)this.consume()},e.parseStringGroup=function(t,e,r){var a=e?"[":"{",n=e?"]":"}",o=this.nextToken;if(o.text!==a){if(e)return null;if(r&&"EOF"!==o.text&&/[^{}[\]]/.test(o.text))return this.gullet.lexer.setCatcode("%",14),this.consume(),o}var s=this.mode;this.mode="text",this.expect(a);for(var h="",l=this.nextToken,m=0,c=l;r&&m>0||this.nextToken.text!==n;){switch(this.nextToken.text){case"EOF":throw new i("Unexpected end of input in "+t,l.range(c,h));case a:m++;break;case n:m--}h+=(c=this.nextToken).text,this.consume()}return this.mode=s,this.gullet.lexer.setCatcode("%",14),this.expect(n),l.range(c,h)},e.parseRegexGroup=function(t,e){var r=this.mode;this.mode="text";for(var a=this.nextToken,n=a,o="";"EOF"!==this.nextToken.text&&t.test(o+this.nextToken.text);)o+=(n=this.nextToken).text,this.consume();if(""===o)throw new i("Invalid "+e+": '"+a.text+"'",a);return this.mode=r,a.range(n,o)},e.parseColorGroup=function(t){var e=this.parseStringGroup("color",t);if(!e)return null;var r=/^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(e.text);if(!r)throw new i("Invalid color: '"+e.text+"'",e);var a=r[0];return/^[0-9a-f]{6}$/i.test(a)&&(a="#"+a),{type:"color-token",mode:this.mode,color:a}},e.parseSizeGroup=function(t){var e,r=!1;if(!(e=t||"{"===this.nextToken.text?this.parseStringGroup("size",t):this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size")))return null;t||0!==e.text.length||(e.text="0pt",r=!0);var a=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e.text);if(!a)throw new i("Invalid size: '"+e.text+"'",e);var n,o={number:+(a[1]+a[2]),unit:a[3]};if("string"!=typeof(n=o)&&(n=n.unit),!(n in kt||n in St||"ex"===n))throw new i("Invalid unit: '"+o.unit+"'",e);return{type:"size",mode:this.mode,value:o,isBlank:r}},e.parseUrlGroup=function(t){var e=this.parseStringGroup("url",t,!0);if(!e)return null;var r=e.text.replace(/\\([#$%&~_^{}])/g,"$1"),a=/^\s*([^\\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(r);a=null!=a?a[1]:"_relative";var n=this.settings.allowedProtocols;if(!c.contains(n,"*")&&!c.contains(n,a))throw new i("Forbidden protocol '"+a+"'",e);return{type:"url",mode:this.mode,url:r}},e.parseGroup=function(e,r,n,o,s){var h,l,m=this.mode,c=this.nextToken,u=c.text;if(s&&this.switchMode(s),r?"["===u:"{"===u||"\\begingroup"===u){h=t.endOfGroup[u],this.gullet.beginGroup(),this.consume();var d=this.parseExpression(!1,h),p=this.nextToken;this.gullet.endGroup(),l={type:"ordgroup",mode:this.mode,loc:a.range(c,p),body:d,semisimple:"\\begingroup"===u||void 0}}else if(r)l=null;else if(null==(l=this.parseFunction(o,e,n)||this.parseSymbol())&&"\\"===u[0]&&!ua.hasOwnProperty(u)){if(this.settings.throwOnError)throw new i("Undefined control sequence: "+u,c);l=this.handleUnsupportedCmd()}return s&&this.switchMode(m),h&&this.expect(h),l},e.formLigatures=function(t){for(var e=t.length-1,r=0;r<e;++r){var n=t[r],o=n.text;"-"===o&&"-"===t[r+1].text&&(r+1<e&&"-"===t[r+2].text?(t.splice(r,3,{type:"textord",mode:"text",loc:a.range(n,t[r+2]),text:"---"}),e-=2):(t.splice(r,2,{type:"textord",mode:"text",loc:a.range(n,t[r+1]),text:"--"}),e-=1)),"'"!==o&&"`"!==o||t[r+1].text!==o||(t.splice(r,2,{type:"textord",mode:"text",loc:a.range(n,t[r+1]),text:o+o}),e-=1)}},e.parseSymbol=function(){var t=this.nextToken,e=t.text;if(/^\\verb[^a-zA-Z]/.test(e)){this.consume();var r=e.slice(5),n="*"===r.charAt(0);if(n&&(r=r.slice(1)),r.length<2||r.charAt(0)!==r.slice(-1))throw new i("\\verb assertion failed --\n                    please report what input caused this bug");return{type:"verb",mode:"text",body:r=r.slice(1,-1),star:n}}fa.hasOwnProperty(e[0])&&!_[this.mode][e[0]]&&(this.settings.strict&&"math"===this.mode&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+e[0]+'" used in math mode',t),e=fa[e[0]]+e.substr(1));var o,s=Qr.exec(e);if(s&&("i"===(e=e.substring(0,s.index))?e="ı":"j"===e&&(e="ȷ")),_[this.mode][e]){this.settings.strict&&"math"===this.mode&&"ÇÐÞçþ".indexOf(e)>=0&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+e[0]+'" used in math mode',t);var h,l=_[this.mode][e].group,m=a.range(t);if(G.hasOwnProperty(l)){var c=l;h={type:"atom",mode:this.mode,family:c,loc:m,text:e}}else h={type:l,mode:this.mode,loc:m,text:e};o=h}else{if(!(e.charCodeAt(0)>=128))return null;this.settings.strict&&(z(e.charCodeAt(0))?"math"===this.mode&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+e[0]+'" used in math mode',t):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+e[0]+'" ('+e.charCodeAt(0)+")",t)),o={type:"textord",mode:this.mode,loc:a.range(t),text:e}}if(this.consume(),s)for(var u=0;u<s[0].length;u++){var d=s[0][u];if(!pa[d])throw new i("Unknown accent ' "+d+"'",t);var p=pa[d][this.mode];if(!p)throw new i("Accent "+d+" unsupported in "+this.mode+" mode",t);o={type:"accent",mode:this.mode,loc:a.range(t),label:p,isStretchy:!1,isShifty:!0,base:o}}return o},t}();ga.endOfExpression=["}","\\endgroup","\\end","\\right","&"],ga.endOfGroup={"[":"]","{":"}","\\begingroup":"\\endgroup"},ga.SUPSUB_GREEDINESS=1;var xa=function(t,e){if(!("string"==typeof t||t instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var r=new ga(t,e);delete r.gullet.macros.current["\\df@tag"];var a=r.parse();if(r.gullet.macros.get("\\df@tag")){if(!e.displayMode)throw new i("\\tag works only in display equations");r.gullet.feed("\\df@tag"),a=[{type:"tag",mode:"text",body:a,tag:r.parse()}]}return a},va=function(t,e,r){e.textContent="";var a=ya(t,r).toNode();e.appendChild(a)};"undefined"!=typeof document&&"CSS1Compat"!==document.compatMode&&("undefined"!=typeof console&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),va=function(){throw new i("KaTeX doesn't work in quirks mode.")});var ba=function(t,e,r){if(r.throwOnError||!(t instanceof i))throw t;var a=Lt.makeSpan(["katex-error"],[new E(e)]);return a.setAttribute("title",t.toString()),a.setAttribute("style","color:"+r.errorColor),a},ya=function(t,e){var r=new u(e);try{var a=xa(t,r);return Se(a,t,r)}catch(e){return ba(e,t,r)}},wa={version:"0.10.2",render:va,renderToString:function(t,e){return ya(t,e).toMarkup()},ParseError:i,__parse:function(t,e){var r=new u(e);return xa(t,r)},__renderToDomTree:ya,__renderToHTMLTree:function(t,e){var r=new u(e);try{return function(t,e,r){var a=me(t,we(r)),n=Lt.makeSpan(["katex"],[a]);return ke(n,r)}(xa(t,r),0,r)}catch(e){return ba(e,t,r)}},__setFontMetrics:function(t,e){P[t]=e},__defineSymbol:W,__defineMacro:oa,__domTree:{Span:N,Anchor:I,SymbolNode:E,SvgNode:R,PathNode:L,LineNode:H}};e.default=wa}]).default});

},{}],22:[function(require,module,exports){
!function(e,t,n){if(e){for(var r,i={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},o={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},a={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},c={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},s=1;s<20;++s)i[111+s]="f"+s;for(s=0;s<=9;++s)i[s+96]=s.toString();d.prototype.bind=function(e,t,n){return e=e instanceof Array?e:[e],this._bindMultiple.call(this,e,t,n),this},d.prototype.unbind=function(e,t){return this.bind.call(this,e,function(){},t)},d.prototype.trigger=function(e,t){return this._directMap[e+":"+t]&&this._directMap[e+":"+t]({},e),this},d.prototype.reset=function(){return this._callbacks={},this._directMap={},this},d.prototype.stopCallback=function(e,n){if((" "+n.className+" ").indexOf(" mousetrap ")>-1)return!1;if(function e(n,r){return null!==n&&n!==t&&(n===r||e(n.parentNode,r))}(n,this.target))return!1;if("composedPath"in e&&"function"==typeof e.composedPath){var r=e.composedPath()[0];r!==e.target&&(n=r)}return"INPUT"==n.tagName||"SELECT"==n.tagName||"TEXTAREA"==n.tagName||n.isContentEditable},d.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)},d.addKeycodes=function(e){for(var t in e)e.hasOwnProperty(t)&&(i[t]=e[t]);r=null},d.init=function(){var e=d(t);for(var n in e)"_"!==n.charAt(0)&&(d[n]=function(t){return function(){return e[t].apply(e,arguments)}}(n))},d.init(),e.Mousetrap=d,"undefined"!=typeof module&&module.exports&&(module.exports=d), true&&!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return d}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}function u(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)}function l(e){if("keypress"==e.type){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return i[e.which]?i[e.which]:o[e.which]?o[e.which]:String.fromCharCode(e.which).toLowerCase()}function f(e){return"shift"==e||"ctrl"==e||"alt"==e||"meta"==e}function p(e,t,n){return n||(n=function(){if(!r)for(var e in r={},i)e>95&&e<112||i.hasOwnProperty(e)&&(r[i[e]]=e);return r}()[e]?"keydown":"keypress"),"keypress"==n&&t.length&&(n="keydown"),n}function h(e,t){var n,r,i,o=[];for(n=function(e){return"+"===e?["+"]:(e=e.replace(/\+{2}/g,"+plus")).split("+")}(e),i=0;i<n.length;++i)r=n[i],c[r]&&(r=c[r]),t&&"keypress"!=t&&a[r]&&(r=a[r],o.push("shift")),f(r)&&o.push(r);return{key:r,modifiers:o,action:t=p(r,o,t)}}function d(e){var n=this;if(e=e||t,!(n instanceof d))return new d(e);n.target=e,n._callbacks={},n._directMap={};var r,i={},o=!1,a=!1,c=!1;function s(e){e=e||{};var t,n=!1;for(t in i)e[t]?n=!0:i[t]=0;n||(c=!1)}function p(e,t,r,o,a,c){var s,u,l,p,h=[],d=r.type;if(!n._callbacks[e])return[];for("keyup"==d&&f(e)&&(t=[e]),s=0;s<n._callbacks[e].length;++s)if(u=n._callbacks[e][s],(o||!u.seq||i[u.seq]==u.level)&&d==u.action&&("keypress"==d&&!r.metaKey&&!r.ctrlKey||(l=t,p=u.modifiers,l.sort().join(",")===p.sort().join(",")))){var y=!o&&u.combo==a,m=o&&u.seq==o&&u.level==c;(y||m)&&n._callbacks[e].splice(s,1),h.push(u)}return h}function y(e,t,r,i){n.stopCallback(t,t.target||t.srcElement,r,i)||!1===e(t,r)&&(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}(t),function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}(t))}function m(e){"number"!=typeof e.which&&(e.which=e.keyCode);var t=l(e);t&&("keyup"!=e.type||o!==t?n.handleKey(t,function(e){var t=[];return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}(e),e):o=!1)}function k(e,t,n,a){function u(t){return function(){c=t,++i[e],clearTimeout(r),r=setTimeout(s,1e3)}}function f(t){y(n,t,e),"keyup"!==a&&(o=l(t)),setTimeout(s,10)}i[e]=0;for(var p=0;p<t.length;++p){var d=p+1===t.length?f:u(a||h(t[p+1]).action);v(t[p],d,a,e,p)}}function v(e,t,r,i,o){n._directMap[e+":"+r]=t;var a,c=(e=e.replace(/\s+/g," ")).split(" ");c.length>1?k(e,c,t,r):(a=h(e,r),n._callbacks[a.key]=n._callbacks[a.key]||[],p(a.key,a.modifiers,{type:a.action},i,e,o),n._callbacks[a.key][i?"unshift":"push"]({callback:t,modifiers:a.modifiers,action:a.action,seq:i,level:o,combo:e}))}n._handleKey=function(e,t,n){var r,i=p(e,t,n),o={},u=0,l=!1;for(r=0;r<i.length;++r)i[r].seq&&(u=Math.max(u,i[r].level));for(r=0;r<i.length;++r)if(i[r].seq){if(i[r].level!=u)continue;l=!0,o[i[r].seq]=1,y(i[r].callback,n,i[r].combo,i[r].seq)}else l||y(i[r].callback,n,i[r].combo);var h="keypress"==n.type&&a;n.type!=c||f(e)||h||s(o),a=l&&"keydown"==n.type},n._bindMultiple=function(e,t,n){for(var r=0;r<e.length;++r)v(e[r],t,n)},u(e,"keypress",m),u(e,"keydown",m),u(e,"keyup",m)}}("undefined"!=typeof window?window:null,"undefined"!=typeof window?document:null);

},{}],23:[function(require,module,exports){
"use strict";var getOwnPropertySymbols=Object.getOwnPropertySymbols,hasOwnProperty=Object.prototype.hasOwnProperty,propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function shouldUseNative(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map(function(e){return r[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}module.exports=shouldUseNative()?Object.assign:function(e,r){for(var t,n,o=toObject(e),a=1;a<arguments.length;a++){for(var s in t=Object(arguments[a]))hasOwnProperty.call(t,s)&&(o[s]=t[s]);if(getOwnPropertySymbols){n=getOwnPropertySymbols(t);for(var c=0;c<n.length;c++)propIsEnumerable.call(t,n[c])&&(o[n[c]]=t[n[c]])}}return o};

},{}],24:[function(require,module,exports){
var cachedSetTimeout,cachedClearTimeout,process=module.exports={};function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}function runTimeout(e){if(cachedSetTimeout===setTimeout)return setTimeout(e,0);if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout)return cachedSetTimeout=setTimeout,setTimeout(e,0);try{return cachedSetTimeout(e,0)}catch(t){try{return cachedSetTimeout.call(null,e,0)}catch(t){return cachedSetTimeout.call(this,e,0)}}}function runClearTimeout(e){if(cachedClearTimeout===clearTimeout)return clearTimeout(e);if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout)return cachedClearTimeout=clearTimeout,clearTimeout(e);try{return cachedClearTimeout(e)}catch(t){try{return cachedClearTimeout.call(null,e)}catch(t){return cachedClearTimeout.call(this,e)}}}!function(){try{cachedSetTimeout="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){cachedSetTimeout=defaultSetTimout}try{cachedClearTimeout="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){cachedClearTimeout=defaultClearTimeout}}();var currentQueue,queue=[],draining=!1,queueIndex=-1;function cleanUpNextTick(){draining&&currentQueue&&(draining=!1,currentQueue.length?queue=currentQueue.concat(queue):queueIndex=-1,queue.length&&drainQueue())}function drainQueue(){if(!draining){var e=runTimeout(cleanUpNextTick);draining=!0;for(var t=queue.length;t;){for(currentQueue=queue,queue=[];++queueIndex<t;)currentQueue&&currentQueue[queueIndex].run();queueIndex=-1,t=queue.length}currentQueue=null,draining=!1,runClearTimeout(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}process.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];queue.push(new Item(e,t)),1!==queue.length||draining||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},process.title="browser",process.browser=!0,process.env={},process.argv=[],process.version="",process.versions={},process.on=noop,process.addListener=noop,process.once=noop,process.off=noop,process.removeListener=noop,process.removeAllListeners=noop,process.emit=noop,process.prependListener=noop,process.prependOnceListener=noop,process.listeners=function(e){return[]},process.binding=function(e){throw new Error("process.binding is not supported")},process.cwd=function(){return"/"},process.chdir=function(e){throw new Error("process.chdir is not supported")},process.umask=function(){return 0};

},{}],25:[function(require,module,exports){
"use strict";let Display=require("./Display.js").Display,Tooltip=require("./Tooltip.js").Tooltip,Interface=require("./Interface.js"),Mousetrap=require("mousetrap");class BasicDisplay extends Display{constructor(t,i){super(t,i),this.page_indicator_div=this.container.append("div").style("position","absolute").style("left","20px").style("top","0px").style("font-family","Arial").style("font-size","15px"),this.tooltip=new Tooltip(this),this.on("mouseover",t=>{this.tooltip.setHTML(this.getClassTooltipHTML(t.c,this.page)),this.tooltip.show(t.x,t.y)}),this.on("mouseout",()=>this.tooltip.hide()),Mousetrap.bind("left",this.previousPage),Mousetrap.bind("right",this.nextPage),Mousetrap.bind("x",()=>{this.mouseover_node&&console.log(this.mouseover_node.c)}),this.on("page-change",t=>this.page_indicator_div.html(this.getPageDescriptor(t))),this.setPage(),this.status_div=this.container.append("div").attr("id","status").style("position","absolute").style("left","20px").style("bottom","20px").style("z-index",1e3)}setStatus(t){this.status_div_timer&&clearTimeout(this.status_div_timer),this.status_div.html(t)}delayedSetStatus(t,i){this.status_div_timer=setTimeout(()=>setStatus(t),i)}getClassTooltip(t,i){let s=t.getNameCoord(),e=BasicDisplay.toTooltipString(t.extra_info,i);return e&&(s+=e),s}getClassTooltipHTML(t,i){return Interface.renderLatex(this.getClassTooltip(t,i))}static toTooltipString(t,i){if(!t)return!1;if(t.constructor===String)return t;if(t.constructor===Array)return t.map(t=>Tooltip.toTooltipString(t,i)).filter(t=>t).join("\n");if(t.constructor===Map){let s;for(let e of t.keys()){if(e>i)break;s=e}return BasicDisplay.toTooltipString(t.get(s))}return!1}}exports.BasicDisplay=BasicDisplay;

},{"./Display.js":26,"./Interface.js":30,"./Tooltip.js":38,"mousetrap":22}],26:[function(require,module,exports){
"use strict";let EventEmitter=require("events"),d3=Object.assign({},require("d3-selection"),require("d3-zoom"),require("d3-scale"),require("d3-timer"));const gridGo="go",gridChess="chess";class Display extends EventEmitter{constructor(t,i){super(),this.leftMargin=40,this.rightMargin=5,this.topMargin=30,this.bottomMargin=60,this.domainOffset=.5,this.gridStyle=gridGo,this.gridColor="#c6c6c6",this.gridStrokeWidth=.3,this.TICK_STEP_LOG_BASE=1.1,this.hiddenStructlines=new Set,this.updateQueue=0,this.container=d3.select(t),this.container_DOM=this.container.node(),this.container.selectAll().remove(),this.xScaleInit=d3.scaleLinear(),this.yScaleInit=d3.scaleLinear(),this.canvas=document.createElement("canvas"),this.canvas.style.padding="0px",this.canvas.style.position="absolute",this.canvas.style.top="0",this.canvas.style.left="0",this.container_DOM.appendChild(this.canvas),this.context=this.canvas.getContext("2d"),this.updateBatch=this.updateBatch.bind(this),this.nextPage=this.nextPage.bind(this),this.previousPage=this.previousPage.bind(this),this._onMousemove=this._onMousemove.bind(this),this._onClick=this._onClick.bind(this),this.zoom=d3.zoom().scaleExtent([0,4]),this.zoom.on("zoom",this.updateBatch),this.zoomD3Element=d3.select(this.canvas),this.zoomD3Element.call(this.zoom).on("dblclick.zoom",null),this.canvas.addEventListener("mousemove",this._onMousemove),this.canvas.addEventListener("click",this._onClick),window.addEventListener("resize",()=>this.resize()),i&&this.setSseq(i)}resize(t,i){if(!this.sseq)return;let s=this.xminFloat,e=this.yminFloat;this._initializeCanvas(t,i),this._updateScale();let h=this.xminFloat-s,a=this.yminFloat-e;this.zoom.on("zoom",null),this.zoom.translateBy(this.zoomD3Element,this.dxScale(h),this.dyScale(a)),this.zoom.on("zoom",this.updateBatch),this.updateBatch()}_initializeCanvas(t,i){const s=this.container_DOM.getBoundingClientRect(),e=t||.99*s.width,h=i||.97*s.height;this.canvasWidth=e,this.canvasHeight=h,this.canvas.width=e,this.canvas.height=h,this.clipWidth=this.canvasWidth-this.rightMargin,this.clipHeight=this.canvasHeight-this.bottomMargin,this.plotWidth=this.canvasWidth-this.leftMargin-this.rightMargin,this.plotHeight=this.canvasHeight-this.bottomMargin-this.topMargin,this.xScaleInit=this.xScaleInit.range([this.leftMargin,this.clipWidth]),this.yScaleInit=this.yScaleInit.range([this.clipHeight,this.topMargin])}setSseq(t){this.sseq&&this.sseq.removeListener("update",this.updateBatch),this.sseq=t,this.sseq.initial_page_idx?this.page_idx=this.sseq.initial_page_idx:this.page_idx=this.sseq.min_page_idx,this.page_idx>=this.sseq.page_list.length&&(console.log(`Warning: min_page_idx ${this.sseq.min_page_idx} greater than page list length ${this.sseq.page_list.length}. Using 0 for min_page_idx instead.`),this.page_idx=0,this.min_page_idx=0),this.setPage(),this._initializeScale(),this._initializeCanvas(),t.gridStyle&&(this.gridStyle=t.gridStyle),this.sseq.on("update",this.updateBatch),this.update()}_initializeScale(){this.xScaleInit.domain([this.sseq.initialxRange[0]-this.domainOffset,this.sseq.initialxRange[1]+this.domainOffset]),this.yScaleInit.domain([this.sseq.initialyRange[0]-this.domainOffset,this.sseq.initialyRange[1]+this.domainOffset])}nextPage(){this.page_idx<this.sseq.page_list.length-1&&(this.setPage(this.page_idx+1),this.update())}previousPage(){this.page_idx>this.sseq.min_page_idx&&(this.setPage(this.page_idx-1),this.update())}setPage(t){this.sseq&&(void 0!==t&&(this.page_idx=t),this.pageRange=this.sseq.page_list[this.page_idx],Array.isArray(this.pageRange)?this.page=this.pageRange[0]:this.page=this.pageRange,this.emit("page-change",this.pageRange,this.page_idx))}updateBatch(){this.update(!0)}update(t=!1){if(!this.sseq)return;this.updateQueue++;let i=()=>{this.updateQueue--,0==this.updateQueue&&(this._drawSseq(this.context),d3.event?this._onMousemove(d3.event):this._onMousemove())};t?requestAnimationFrame(i):i()}clipContext(t){t.beginPath(),t.globalAlpha=0,t.rect(this.leftMargin,this.topMargin,this.plotWidth,this.plotHeight),t.stroke(),t.clip(),t.globalAlpha=1}_drawSseq(t=this.context){if(!this.sseq)return;this._updateScale(),this._updateGridAndTickStep(),t.clearRect(0,0,this.canvasWidth,this.canvasHeight),this._drawTicks(t),this._drawAxes(t),t.save(),this.clipContext(t);let[i,s]=this.sseq.getDrawnElements(this.pageRange,this.xmin,this.xmax,this.ymin,this.ymax);this._drawGrid(t),this._updateClasses(i),this._drawEdges(t,s),this._drawClasses(t),this.sseq.edgeLayerSVG&&this.drawSVG(t,this.sseq.edgeLayerSVG),t.restore(),this.emit("draw")}_updateScale(){let t=this.zoomD3Element,i=d3.zoomTransform(t.node()),s=i.k,e=i.rescaleX(this.xScaleInit),h=i.rescaleY(this.yScaleInit);this.zoom.on("zoom",null);let a=!1,n=!1;if(this.sseq.xRange&&(e(this.sseq.xRange[1]-this.sseq.xRange[0]+2*this.domainOffset)-e(0)<this.plotWidth?a=!0:e(this.sseq.xRange[0]-this.domainOffset)>this.leftMargin?this.zoom.translateBy(t,(this.leftMargin-e(this.sseq.xRange[0]-this.domainOffset))/s,0):e(this.sseq.xRange[1]+this.domainOffset)<this.clipWidth&&this.zoom.translateBy(t,(this.clipWidth-e(this.sseq.xRange[1]+this.domainOffset))/s,0)),this.sseq.yRange&&(h(0)-h(this.sseq.yRange[1]-this.sseq.yRange[0]+2*this.domainOffset)<this.plotHeight?n=!0:h(this.sseq.yRange[0]-this.domainOffset)<this.clipHeight?this.zoom.translateBy(t,0,(this.clipHeight-h(this.sseq.yRange[0]-this.domainOffset))/s):h(this.sseq.yRange[1]+this.domainOffset)>this.topMargin&&this.zoom.translateBy(t,0,this.topMargin-h(this.sseq.yRange[1]+this.domainOffset)/s)),a&&n){if(this.oldScalesMaxed&&s<this.scale)return this.zoom.transform(t,this.transform),void this.zoom.on("zoom",this.updateBatch);this.oldScalesMaxed=!0}else this.oldScalesMaxed=!1;this.transform=d3.zoomTransform(t.node()),this.scale=this.transform.k,this.xScale=this.transform.rescaleX(this.xScaleInit),this.yScale=this.transform.rescaleY(this.yScaleInit),a&&this.xScale.domain([this.sseq.xRange[0]-this.domainOffset,this.sseq.xRange[1]+this.domainOffset]),n&&this.yScale.domain([this.sseq.yRange[0]-this.domainOffset,this.sseq.yRange[1]+this.domainOffset]),this.xminFloat=this.xScale.invert(this.leftMargin),this.xmaxFloat=this.xScale.invert(this.clipWidth),this.yminFloat=this.yScale.invert(this.clipHeight),this.ymaxFloat=this.yScale.invert(this.topMargin),this.xmin=Math.ceil(this.xminFloat),this.xmax=Math.floor(this.xmaxFloat),this.ymin=Math.ceil(this.yminFloat),this.ymax=Math.floor(this.ymaxFloat),this.zoom.on("zoom",this.updateBatch)}dxScale(t){return this.xScale(t)-this.xScale(0)}dyScale(t){return this.yScale(t)-this.yScale(0)}_updateGridAndTickStep(){this.xTicks=this.xScale.ticks(this.canvasWidth/70),this.yTicks=this.yScale.ticks(this.canvasHeight/70),this.xTickStep=Math.ceil(this.xTicks[1]-this.xTicks[0]),this.yTickStep=Math.ceil(this.yTicks[1]-this.yTicks[0]),this.xGridStep=0===Math.floor(this.xTickStep/5)?1:Math.floor(this.xTickStep/5),this.yGridStep=0===Math.floor(this.yTickStep/5)?1:Math.floor(this.yTickStep/5),this.sseq.squareAspectRatio&&(this.xGridStep=1,this.yGridStep=this.xGridStep)}_drawTicks(t){t.save(),t.textBaseline="middle",t.font="15px Arial",t.textAlign="center";for(let i=Math.floor(this.xTicks[0]);i<=this.xTicks[this.xTicks.length-1];i+=this.xTickStep)t.fillText(i,this.xScale(i),this.clipHeight+20);t.textAlign="right";for(let i=Math.floor(this.yTicks[0]);i<=this.yTicks[this.yTicks.length-1];i+=this.yTickStep)t.fillText(i,this.leftMargin-10,this.yScale(i));t.restore()}_drawGrid(t){switch(t.save(),t.strokeStyle=this.gridColor,t.lineWidth=this.gridStrokeWidth,this.gridStyle){case gridGo:this._drawGoGrid(t);break;case gridChess:this._drawChessGrid(t)}t.restore()}_drawGoGrid(t){this._drawGridWithOffset(t,0,0)}_drawChessGrid(t){this._drawGridWithOffset(t,.5,.5)}_drawGridWithOffset(t,i,s){t.beginPath();for(let s=Math.floor(this.xmin/this.xGridStep)*this.xGridStep-i;s<=this.xmax;s+=this.xGridStep)t.moveTo(this.xScale(s),0),t.lineTo(this.xScale(s),this.clipHeight);t.stroke(),t.beginPath();for(let i=Math.floor(this.ymin/this.yGridStep)*this.yGridStep-s;i<=this.ymax;i+=this.yGridStep)t.moveTo(this.leftMargin,this.yScale(i)),t.lineTo(this.canvasWidth-this.rightMargin,this.yScale(i));t.stroke()}_drawAxes(t){t.save(),t.fillStyle="#FFF",t.rect(0,this.clipHeight,this.leftMargin-5,this.bottomMargin),t.fill(),t.fillStyle="#000",t.beginPath(),t.moveTo(this.leftMargin,this.topMargin),t.lineTo(this.leftMargin,this.clipHeight),t.lineTo(this.canvasWidth-this.rightMargin,this.clipHeight),t.stroke(),t.restore()}_updateClasses(t){let i=Math.min(Math.max(this.scale,1/3),2)*this.sseq.class_scale;this.nodes=[];for(let s of t){if(!s||s.invalid)continue;let t=this.sseq.getClassNode(s,this.page);void 0===t&&(console.log("Error: node for class is undefined. Using default node.",s),t=this.sseq.default_node),t.setPosition(this.xScale(s.x+this.sseq._getXOffset(s)),this.yScale(s.y+this.sseq._getYOffset(s)),i),t.c=s,s.node=t,this.nodes.push(t)}}_drawClasses(t){for(let i of this.nodes)i.draw(t)}_drawEdges(t,i){for(let s=0;s<i.length;s++){let e=i[s];if(!e||e.invalid||!e.visible)continue;if("Structline"==e.type&&this.hiddenStructlines.has(e.mult))continue;let h=e.source.node,a=e.target.node;if(!h||!a)continue;(!e.sourceOffset||0===e.sourceOffset.x&&0===e.sourceOffset.y)&&(e.sourceOffset={x:0,y:0},e.targetOffset={x:0,y:0}),t.save(),t.strokeStyle=e.color,e.lineWidth&&(t.lineWidth=e.lineWidth),e.opacity&&(t.globalAlpha=e.opacity),e.dash&&t.setLineDash(e.dash);let n=h.x+e.sourceOffset.x,o=h.y+e.sourceOffset.y,l=a.x+e.targetOffset.x,r=a.y+e.targetOffset.y;if(t.beginPath(),e.bend){let i=Math.sqrt((l-n)*(l-n)+(r-o)*(r-o)),s=.4;e.looseness&&(s=e.looseness);let h=Math.atan((r-o)/(l-n)),a=-e.bend*Math.PI/180,d=n+Math.cos(h+a)*s*i,c=o+Math.sin(h+a)*s*i,g=l-Math.cos(h-a)*s*i,m=r-Math.sin(h-a)*s*i;t.moveTo(n,o),t.bezierCurveTo(d,c,g,m,l,r)}else t.moveTo(n,o),t.lineTo(l,r);t.stroke(),t.restore()}}_onClick(t){this.emit("click",this.mouseover_node,t)}_onMousemove(t){if(!this.nodes)return;let i=!1;if(t&&(this.x=t.clientX,this.y=t.clientY),this.mouseover_node){if(this.nodes.includes(this.mouseover_node)&&this.context.isPointInPath(this.mouseover_node.path,this.x,this.y))return;this.mouseover_node.highlight=!1,this.mouseover_node=null,this.mouseover_class=null,i=!0,this.emit("mouseout")}let s=this.nodes.find(t=>this.context.isPointInPath(t.path,this.x,this.y));s&&(i=!0,s.highlight=!0,this.mouseover_node=s,this.mouseover_class=s.c,this.emit("mouseover",s)),i&&this._drawSseq(this.context)}drawSVG(t,i){let s="data:image/svg+xml;base64,"+btoa(i),e=new Image;e.src=s,t.drawImage(e,this.xScale(this.sseq.xRange[0])-this.xMinOffset,this.yScale(this.sseq.yRange[1]+1),this.canvasWidth/(this.xmaxFloat-this.xminFloat)*(this.sseq.xRange[1]-this.sseq.xRange[0]+1),this.canvasHeight/(this.ymaxFloat-this.yminFloat)*(this.sseq.yRange[1]-this.sseq.yRange[0]+1))}toSVG(){let t=new C2S(this.canvasWidth,this.canvasHeight);return this._drawSseq(t),t.getSerializedSvg(!0)}downloadSVG(t){void 0===t&&(t=`${this.sseq.name}_x-${this.xmin}-${this.xmax}_y-${this.ymin}-${this.ymax}.svg`),IO.download(t,this.toSVG(),"image/svg+xml")}seek(t,i){return new Promise(s=>{let e=0,h=0;if(t>this.xmaxFloat-1?e=this.xmaxFloat-1-t:t<this.xminFloat+1&&(e=this.xminFloat+1-t),i>this.ymaxFloat-1?h=this.ymaxFloat-1-i:i<this.xminFloat+1&&(h=this.yminFloat+1-i),0===e&&0===h)return;let a=this.dxScale(e),n=this.dyScale(h),o=Math.sqrt(a*a+n*n),l=Math.ceil(o/10),r=a/l,d=n/l,c=0,g=d3.interval(()=>{c++,this.translateBy(r,d),c>=l&&(g.stop(),s())},5)})}translateBy(t,i){this.zoom.on("zoom",null),this.zoom.translateBy(this.zoomD3Element,t/this.scale,i/this.scale),this.update(),this.zoom.on("zoom",this.updateBatch)}getPageDescriptor(t){if(!this.sseq)return;let i=2;return this.sseq.page_list.includes(1)&&(i=1),t===infinity?"Page ∞":0===t?`Page ${i} with all differentials`:1===t&&2===i?`Page ${i} with no differentials`:t.length?t[1]===infinity?`Page ${t[0]} with all differentials`:-1===t[1]?`Page ${t[0]} with no differentials`:t[0]===t[1]?`Page ${t[0]}`:`Pages ${t[0]} – ${t[1]}`.replace(infinity,"∞"):`Page ${t}`}}exports.Display=Display;

},{"d3-scale":13,"d3-selection":14,"d3-timer":17,"d3-zoom":19,"events":20}],27:[function(require,module,exports){
"use strict";let Util=require("./Util.js"),infinity=Util.infinity;class Edge{constructor(t,e,i){if(e.y>i.y){let t=e;e=i,i=t}this.sseq=t,this.source=e,this.target=i,this.source_name=this.source.last_page_name,this.target_name=this.target.last_page_name,this.page=infinity,this.page_min=0,this.color="#000",this.type=this.constructor.name,this.visible=!0,this.args=[]}getMemento(){return Util.copyFields({},this)}restoreFromMemento(t){if(!t.delete)return this.invalid&&this.revive(),Util.copyFields(this,t),this;this.invalid||this.delete()}otherClass(t){return this.source===t?this.target:this.target===t?this.source:void console.log("Invalid class")}setMinPage(t){return this.page_min=t,this}setColor(t){return t?(this.color=t,this):this}setBend(t){return t?(this.bend=t,this):this}isDummy(){return!1}delete(){this.invalid=!0,this.source.edges=this.source.edges.filter(t=>!t.invalid),this.target.edges=this.target.edges.filter(t=>!t.invalid)}revive(){this.invalid=!1,this.source.edges.push(this),this.target.edges.push(this)}static getDummy(){if(Edge._dummy)return Edge._dummy;let t=Object.create(Edge);return Edge._dummy=t,t.isDummy=(()=>!0),Util.setPrivateMethodsToInvalidOperation(t),t.setMinPage=Util.getDummyConstantFunction(t),t.constructor=Edge.constructor,t.otherClass=Util.getDummyConstantFunction(SseqClass.getDummy()),t.leibniz=Util.getDummyConstantFunction(t),t.delete=(()=>!0),t.setColor=Util.getDummyConstantFunction(t),Util.checkAllCommandsDefined(t),t}leibniz(t){for(let e of t){let i=this.source.getProductIfPresent(e),s=this.target.getProductIfPresent(e);this.sseq["add"+this.constructor.name](i,s,...this.args).leibniz(t)}return this}_drawOnPageQ(t){return t[0]<=this.page&&this.page_min<=t[0]}}exports.Edge=Edge;class Structline extends Edge{setProduct(t){return this.mult=t,this}}exports.Structline=Structline;class Extension extends Edge{_drawOnPageQ(t){return t[0]===infinity}setProduct(t){return this.mult=t,this}}exports.Extension=Extension;class Differential extends Edge{constructor(t,e,i,s){super(t,e,i),this.page=s,this.color="#00F",this.args=[s]}leibniz(t){for(let e of t){let i=this.source.getProductIfPresent(e),s=this.target.getProductIfPresent(e);i.isDummy()||s.isDummy()||(i.page_list[i.page_list.length-1]<infinity||s.page_list[s.page_list.length-1]<infinity||this.sseq["add"+this.constructor.name](i,s,...this.args).leibniz(t))}return this}static getDummy(){if(Differential._dummy)return Differential._dummy;let t=Object.create(Differential);Differential._dummy=t;let e=Edge.getDummy();Object.assign(t,e);let i=Util.getDummyConstantFunction(t);return Util.setRemainingMethods(t,()=>!0,()=>i),Util.setPrivateMethodsToInvalidOperation(t),t.toString=Util.getDummyConstantFunction(""),t}delete(){let t=[];return 1!==this.source.page_list.length&&this.source.page_list.indexOf(this.page)===this.source.page_list.length-2&&this.source.page_list[this.source.page_list.length-1]===infinity&&t.push(()=>this.source.page_list.pop()),1!==this.target.page_list.length&&this.target.page_list.indexOf(this.page)===this.target.page_list.length-2&&this.target.page_list[this.target.page_list.length-1]===infinity&&t.push(()=>this.target.page_list.pop()),this.revive_source_page_list=this.source.page_list.slice(),this.revive_target_page_list=this.target.page_list.slice(),t.forEach(t=>t()),-1!==this.source.page_list.indexOf(this.page)&&(this.source.page_list[this.source.page_list.length-1]=infinity),-1!==this.target.page_list.indexOf(this.page)&&(this.target.page_list[this.target.page_list.length-1]=infinity),Edge.prototype.delete.call(this),!0}revive(){this.source.page_list=this.revive_source_page_list.slice(),this.target.page_list=this.revive_target_page_list.slice(),Edge.prototype.revive.call(this)}setMinPage(t){throw"Unsupported operation"}setKernel(t,e){return this.source.replace(t,e),this}replaceSource(t,e){return this.setKernel(t,e),this}setCokernel(t,e){return this.target.replace(t,e),this}replaceTarget(t,e){return this.setCokernel(t,e),this}setTargetName(t){return this.target_name=t,this}setSourceName(t){return this.source_name=t,this}addInfoToSource(){return this.source.addExtraInfo(this.toString(!0,!1)),this}addInfoToTarget(){return this.target.addExtraInfo(this.toString(!1,!0)),this}addInfoToSourceAndTarget(){return this.source.addExtraInfo(this.toString(!0,!1)),this.target.addExtraInfo(this.toString(!1,!0)),this}setSourceStructlinePages(){return this.source.setStructlinePages(this.page),this}setTargetStructlinePages(){return this.target.setStructlinePages(this.page),this}setStructlinePages(){this.source.setStructlinePages(this.page),this.target.setStructlinePages(this.page);return this}toString(t,e){let i=this.source_name;i||(i=this.source.name);let s=this.target_name;return s||(s=this.target.name),t&&(i=`{\\color{blue}{${i}}}`),e&&(s=`{\\color{blue}{${s}}}`),`\\(d_{${this.page}}(${i}) = ${s}\\)`}_drawOnPageQ(t){return 0===t[0]||t[0]<=this.page&&this.page<=t[1]}}exports.Differential=Differential;

},{"./Util.js":39}],28:[function(require,module,exports){
"use strict";let SidebarDisplay=require("./SidebarDisplay.js").SidebarDisplay,Panel=require("./Panel.js"),Tooltip=require("./Tooltip.js").Tooltip,Interface=require("./Interface.js"),Mousetrap=require("mousetrap");const STATE_ADD_DIFFERENTIAL=1,STATE_RM_DIFFERENTIAL=2,STATE_ADD_STRUCTLINE=3,STATE_RM_STRUCTLINE=4,STATE_RM_EDGE=5,STATE_ADD_CLASS=6;class EditorDisplay extends SidebarDisplay{constructor(e,t){super(e),this.differentialColors={},this.sidebar.footer.newGroup(),this.sidebar.footer.addButtonRow([["Undo",()=>this.sseq.undo.undo()],["Redo",()=>this.sseq.undo.redo()]]),this.sidebar.footer.addButton("Download SVG",()=>this.downloadSVG("sseq.svg")),this.sidebar.footer.addButton("Save",()=>this.sseq.download("sseq.json")),this.generalPanel=new Panel.Panel(this.sidebar.main_div,this),this.generalPanel.newGroup(),this.pageLabel=document.createElement("span"),this.on("page-change",e=>{this.pageLabel.innerHTML=this.getPageDescriptor(e),this._unselect()}),this.generalPanel.addObject(this.pageLabel),this.generalPanel.newGroup(),this.generalPanel.addButton("Add class",()=>this.state=STATE_ADD_CLASS,{shortcuts:["n"]}),this.generalPanel.newGroup(),this.generalPanel.addLinkedInput("Min X","sseq.minX","number"),this.generalPanel.addLinkedInput("Max X","sseq.maxX","number"),this.generalPanel.addLinkedInput("Min Y","sseq.minY","number"),this.generalPanel.addLinkedInput("Max Y","sseq.maxY","number"),this.sidebar.addPanel(this.generalPanel),this.classPanel=new Panel.TabbedPanel(this.sidebar.main_div,this),this.sidebar.addPanel(this.classPanel),this.nodeTab=new Panel.Panel(this.classPanel.container,this),this.nodeTab.newGroup(),this.title_text=document.createElement("span"),this.nodeTab.addObject(this.title_text),this.title_edit_link=document.createElement("a"),this.title_edit_link.className="card-link-body",this.title_edit_link.href="#",this.title_edit_link.style.float="right",this.title_edit_link.innerHTML="Edit",this.title_edit_link.addEventListener("click",()=>{let e=this.selected.c;if("OK"==this.title_edit_link.innerHTML){let t=e.name;e.name=this.title_edit_input.value,this.sseq.undo.addValueChange(e,"name",t,e.name,()=>this.sidebar.showPanel()),this.sseq.emit("update"),this.nodeTab.show()}else this.title_edit_link.innerHTML="OK",e.name&&(this.title_edit_input.value=e.name),this.title_edit_input.style.removeProperty("display")}),this.nodeTab.addObject(this.title_edit_link),this.title_edit_input=document.createElement("input"),this.title_edit_input.className="form-control mt-2",this.title_edit_input.type="text",this.title_edit_input.placeholder="Enter class name",this.nodeTab.addObject(this.title_edit_input),this.nodeTab.on("show",()=>{this.title_edit_input.style.display="none",this.title_edit_input.value="",this.title_edit_link.innerHTML="Edit";let e=this.selected.c;e.name?this.title_text.innerHTML=Interface.renderLaTeX(Interface.ensureMath(e.name))+` - (${e.x}, ${e.y})`:this.title_text.innerHTML=`<span style='color: gray'>unnamed</span> - (${e.x}, ${e.y})`}),this.nodeTab.newGroup(),this.nodeTab.addLinkedInput("Color","selected.color","text","selected.c"),this.nodeTab.addLinkedInput("Size","selected.size","number","selected.c"),this.nodeTab.addButton("Delete class",()=>{this.sseq.startMutationTracking(),this.sseq.deleteClass(this.selected.c),this.sseq.addMutationsToUndoStack(),this.sidebar.showPanel(this.generalPanel)},{style:"danger"}),this.classPanel.addTab("Node",this.nodeTab),this.differentialTab=new Panel.DifferentialPanel(this.classPanel.container,this),Mousetrap.bind("d",()=>this.state=STATE_ADD_DIFFERENTIAL),Mousetrap.bind("r",()=>this.state=STATE_RM_EDGE),this.classPanel.addTab("Diff",this.differentialTab),this.structlineTab=new Panel.StructlinePanel(this.classPanel.container,this),Mousetrap.bind("s",()=>this.state=STATE_ADD_STRUCTLINE),this.classPanel.addTab("Struct",this.structlineTab),this.sidebar.showPanel(this.generalPanel),this.tooltip=new Tooltip(this),this.on("mouseover",e=>{this.tooltip.setHTML(`(${e.c.x}, ${e.c.y})`),this.tooltip.show(e.x,e.y)}),this.on("mouseout",this._onMouseout.bind(this)),this.on("click",this.__onClick.bind(this)),this._onDifferentialAdded=this._onDifferentialAdded.bind(this),Mousetrap.bind("left",this.previousPage),Mousetrap.bind("right",this.nextPage),Mousetrap.bind("x",()=>{this.selected&&console.log(this.selected.c)}),t&&this.setSseq(t)}setDifferentialColor(e,t){this.differentialColors[e]=t}setSseq(e){this.sseq&&this.sseq.removeListener("differential-added",this._onDifferentialAdded),super.setSseq(e),this.sidebar.showPanel(this.generalPanel),this.sseq.on("differential-added",this._onDifferentialAdded)}_onMouseout(){this.selected&&(this.selected.highlight=!0),this.tooltip.hide()}_unselect(){this.selected&&(this.selected.highlight=!1,this.selected=null,this.state=null,this.sidebar.showPanel(this.generalPanel),this._drawSseq(this.context))}__onClick(e,t){if(this.state==STATE_ADD_CLASS){let e=Math.round(this.xScale.invert(t.clientX)),s=Math.round(this.yScale.invert(t.clientY));return this.sseq.undo.startMutationTracking(),this.sseq.addClass(e,s),this.sseq.undo.addMutationsToUndoStack(),void(this.state=null)}if(!e)return void this._unselect();if(!this.selected)return this._unselect(),this.selected=e,this.sidebar.showPanel(this.classPanel),void(this.state=null);let s=this.selected.c,i=e.c;switch(this.state){case STATE_ADD_DIFFERENTIAL:if(s.x!==i.x+1){this._unselect();break}let t=i.y-s.y;this.sseq.undo.startMutationTracking(),this.sseq.addDifferential(s,i,t),this.sseq.undo.addMutationsToUndoStack(),this.sidebar.showPanel();break;case STATE_RM_DIFFERENTIAL:this.sseq.undo.startMutationTracking();for(let e of s.edges)"Differential"===e.type&&e.target==i&&sseq.deleteEdge(e);this.sseq.undo.addMutationsToUndoStack(),this.sidebar.showPanel();break;case STATE_ADD_STRUCTLINE:this.sseq.undo.startMutationTracking(),this.sseq.addStructline(s,i),this.sseq.undo.addMutationsToUndoStack(),this.sidebar.showPanel();break;case STATE_RM_STRUCTLINE:this.sseq.undo.startMutationTracking();for(let e of s.edges)"Structline"===e.type&&e.target==i&&sseq.deleteEdge(e);this.sseq.undo.addMutationsToUndoStack(),this.sidebar.showPanel();break;case STATE_RM_EDGE:this.sseq.undo.startMutationTracking();for(let e of s.edges)e.target==i&&sseq.deleteEdge(e);this.sseq.undo.addMutationsToUndoStack(),this.sidebar.showPanel();break;default:this._unselect(),this.selected=e,this.sidebar.showPanel(this.classPanel)}this.state=null}_onDifferentialAdded(e){this.differentialColors[e.page]&&(e.color=this.differentialColors[e.page])}}exports.EditorDisplay=EditorDisplay;

},{"./Interface.js":30,"./Panel.js":31,"./SidebarDisplay.js":34,"./Tooltip.js":38,"mousetrap":22}],29:[function(require,module,exports){
let IO=require("./SaveLoad.js");function SpectralSequenceToTex(e,t,n,o,r,l){let[i,a]=e.getDrawnElements(t,n,o,r,l),u=[],c=[],s=[],g=new Map;g.context=document.createElement("canvas").getContext("2d");for(let e of i)u.push(latexClassString(e,t,g));for(let e of a)c.push(latexEdgeString(e,t,g));return s.push(getBeginString(t,n,o,r,l)),s.push(Array.from(g,e=>`\\definecolor{${e[1][0]}}{RGB}{${e[1][1][0]},${e[1][1][1]},${e[1][1][2]}} % ${e[0]}`).join("\n")),s.push(u.join("\n")),s.push(c.join("\n")),s.push("\\end{sseqpage}"),s.join("\n")}function DownloadSpectralSequenceTex(e,t,n,o,r,l,i){IO.download(e,SpectralSequenceToTex(t,n,o,r,l,i))}function getBeginString(e,t,n,o,r){return`\\begin{sseqpage}[degree = {-1}{#1}, x range = {${t}}{${n}}, y range = {${o}}{${r}}]`}function latexClassString(e,t,n){let o=[];o.push(`name=${"id"+e.unique_id}`);let r=e.getNode(t);return r.fill&&o.push("fill"),r.color&&o.push(getTeXColor(r.color,n)),`\\class[${o.join(", ")}](${e.x},${e.y})`}function latexEdgeString(e,t,n){let o=[];switch(e.color&&o.push(getTeXColor(e.color,n)),e.type){case"Structline":return`\\structline[${o.join(", ")}](${"id"+e.source.unique_id})(${"id"+e.target.unique_id})`;case"Differential":return`\\d[${o.join(", ")}]${t}(${"id"+e.source.unique_id}, ${e.target.idx+1})`}}function getTeXColor(e,t){return t.has(e)||(t.context.fillStyle="white",t.context.fillRect(0,0,1,1),t.context.fillStyle=e,t.context.fillRect(0,0,1,1),t.set(e,[randomString(10),t.context.getImageData(0,0,1,1).data])),t.get(e)[0]}function randomChar(){return String.fromCharCode(Math.floor(26*Math.random())+97)}function randomString(e){let t="";for(let n=0;n<e;n++)t+=randomChar();return t}exports.SpectralSequenceToTex=SpectralSequenceToTex,exports.DownloadSpectralSequenceTex=DownloadSpectralSequenceTex;

},{"./SaveLoad.js":32}],30:[function(require,module,exports){
let katex=require("katex");function ensureMath(t){return t.startsWith("\\(")||t.startsWith("$")?t:t?"$"+t+"$":""}function renderLatex(t){let e=(t=t.replace(/\n/g,"\n<hr>\n")).split(/(?:\\\[)|(?:\\\()|(?:\\\))|(?:\\\])|(?:\$)/);for(let t=1;t<e.length;t+=2)e[t]=katex.renderToString(e[t]);return e.join("\n")}applyAttributesToElement=function(t,e){if(t&&e)for(let o of Object.entries(e))t.setAttribute(o[0],o[1])},exports.renderLatex=renderLatex,exports.renderLaTeX=renderLatex,exports.ensureMath=ensureMath,exports.renderMath=(t=>renderLatex(ensureMath(t))),fixFormHTML={},fixFormHTML.radio=function(t,e){let o=t.getElementsByName(e.name),r=e.options.items;for(let t=0;t<o.length;t++)applyAttributesToElement(o[t],r[t].attributes)};class PopupForm{static backupRecord(t){t.save_record={},Object.assign(t.save_record,t.record)}static saveRecord(t){Object.assign(t.original,t.save_record),Object.assign(t.record,t.save_record)}static restoreRecord(t){Object.assign(t.record,t.original)}constructor(t,e){let o=Object.assign({},PopupForm.default_form_obj,t);this.form_obj=o;let r=o.name;o.actions={},o.actions[this.form_obj.accept_button_name]=function(){w2ui[r].save(),PopupForm.backupRecord(w2ui[r]),w2ui[r].validate().length>0||(PopupForm.saveRecord(w2ui[r]),w2ui[r].onSuccess(),w2popup.close())},o.actions.Cancel=function(){w2popup.close()},$().w2form(this.form_obj);let n=w2ui[r];this.form=n,this.fixFormHTML(n),Object.assign(n.original,o.record),this.popup_obj=Object.assign({},PopupForm.default_popup_obj,e),this.popup_obj.onToggle=function(t){$(n.box).hide(),t.onComplete=function(){$(n.box).show(),n.resize()}},this.popup_obj.onKeydown=function(t){if("Enter"===t.originalEvent.key){if(document.getElementsByClassName("w2ui-error").length>0)return;n.actions[o.accept_button_name]()}},this.popup_obj.onClose=function(t){PopupForm.restoreRecord(n)},this.userOnOpen=this.popup_obj.onOpen,this.popup_obj.onOpen=(t=>{let e=document.createElement("style");e.innerText="#w2ui-popup, #w2ui-lock { opacity :  0 !important }",document.body.appendChild(e),t.onComplete=(()=>{$("#w2ui-popup #form").w2render(n),this.userOnOpen&&this.userOnOpen(t),document.body.removeChild(e)})}),this.open=this.open.bind(this)}open(){$("#w2ui-popup").length>0||$().w2popup(this.popup_obj)}fixFormHTML(){let t=(new DOMParser).parseFromString(this.form.formHTML,"text/html");for(let e of this.form.fields)e.attributes&&applyAttributesToElement(t.getElementsByName(e.name)[0],e.attributes),fixFormHTML[e.type]&&fixFormHTML[e.type](t,e);this.form.formHTML=(new XMLSerializer).serializeToString(t)}}PopupForm.default_form_obj={style:"border: 0px; background-color: transparent;"},PopupForm.default_popup_obj={body:'<div id="form" style="width: 100%; height: 100%;"></div>',style:"padding: 15px 0px 0px 0px opacity: 0",width:500,height:220},exports.PopupForm=PopupForm;class Undo{constructor(t){this.sseq=t,this.undoStack=[],this.undoObjStack=[],this.redoStack=[],this.redoObjStack=[],this.undo=this.undo.bind(this),this.redo=this.redo.bind(this)}startMutationTracking(){this.mutationMap=new Map}addMutationsToUndoStack(t){this.add(this.mutationMap,t),this.mutationMap=void 0}addMutation(t,e,o){this.mutationMap&&(this.mutationMap.get(t)&&(e=this.mutationMap.get(t).before),this.mutationMap.set(t,{obj:t,before:e,after:o}))}add(t,e){this.undoStack.push({type:"normal",mutations:t}),this.undoObjStack.push(e),this.redoStack=[],this.redoObjStack=[]}addValueChange(t,e,o,r,n){let i={type:"value",target:t,prop:e,before:o,after:r,callback:n};this.undoStack.push(i),this.undoObjStack.push(i),this.redoStack=[],this.redoObjStack=[]}addManual(t,e){this.undoStack.push(t),this.undoObjStack.push(e),this.redoStack=[],this.redoObjStack=[]}clear(){this.undoStack=[],this.redoStack=[]}undo(){if(0===this.undoStack.length)return;let t=this.undoStack.pop();this.redoStack.push(t);let e=this.undoObjStack.pop();switch(this.redoObjStack.push(e),t.type){case"normal":this.undoNormal(t);break;case"value":t.target[t.prop]=t.before,t.callback&&t.callback()}this.sseq.emit("update")}undoNormal(t){let e=t.mutations;for(let t of e.values())t.obj.undoFromMemento?t.obj.undoFromMemento(t.before):t.obj.restoreFromMemento(t.before)}redo(){if(0===this.redoStack.length)return;let t=this.redoStack.pop();this.undoStack.push(t);let e=this.redoObjStack.pop();switch(this.undoObjStack.push(e),t.type){case"normal":this.redoNormal(t);break;case"value":t.target[t.prop]=t.after,t.callback&&t.callback()}this.sseq.emit("update")}redoNormal(t){let e=t.mutations;for(let t of e.values())t.obj.redoFromMemento?t.obj.redoFromMemento(t.after):t.obj.restoreFromMemento(t.after)}addLock(t){let e=new Date;void 0===t&&(t=`Undo events before save at ${e.getFullYear()}-${e.getMonth()}-${e.getDay()} ${e.getHours()}:${e.getMinutes().toString().padStart(2,"0")}?`),this.undoStack.push({type:"lock",msg:t,date:e,undoFunction:lockFunction.bind(this)})}getEventObjects(){return this.undoObjStack}toJSON(){return this.undoStack.map(function(t){return"normal"===t.type?{type:"normal",mutations:Array.from(t.mutations.entries()).map(([t,e])=>[t.recid,e.before])}:t})}}function lockFunction(t){w2confirm(t.msg).yes(()=>{this.redoStack.pop()}).no(()=>{let t=this.redoStack.pop();this.undoStack.push(t)})}Undo.undoFunctions={},Undo.redoFunctions={},Undo.undoFunctions.lock=lockFunction,Undo.redoFunctions.lock=function(){},Undo.defaultLockMessage="Undo events before loaded page?",exports.Undo=Undo;

},{"katex":21}],31:[function(require,module,exports){
"use strict";let EventEmitter=require("events"),Mousetrap=require("mousetrap"),Interface=require("./Interface.js");const STATE_ADD_DIFFERENTIAL=1,STATE_RM_DIFFERENTIAL=2,STATE_ADD_STRUCTLINE=3,STATE_RM_STRUCTLINE=4,STATE_RM_EDGE=5;class Panel extends EventEmitter{constructor(e,t){super(),this.display=t,this.container=document.createElement("div"),e.appendChild(this.container),this.links=[],this.currentGroup=this.container}hide(){this.container.style.display="none"}clear(){for(;this.container.firstChild;)this.container.removeChild(this.container.firstChild);this.links=[]}show(){this.container.style.removeProperty("display");for(let e of this.links){let t=this.display;for(let s of e[0].split("."))if(null==(t=t[s]))return;e[1].value=t}this.emit("show")}newGroup(){this.currentGroup=document.createElement("div"),this.currentGroup.className="card-body",this.container.appendChild(this.currentGroup)}endGroup(){this.currentGroup=this.container}addObject(e){this.currentGroup.appendChild(e)}addButton(e,t,s={}){let i=document.createElement("button");if(s.style?i.className=`btn btn-${s.style} mb-2`:i.className="btn btn-primary mb-2",i.style.width="100%",i.innerHTML=e,i.addEventListener("click",t),s.tooltip&&i.addAttribute("title",s.tooltip),s.shortcuts)for(let e of s.shortcuts)Mousetrap.bind(e,t);this.currentGroup.appendChild(i)}addButtonRow(e){let t=this.currentGroup,s=document.createElement("div");s.className="form-row";for(let t of e){let e=document.createElement("div");e.className="col",this.currentGroup=e,this.addButton(...t),s.appendChild(e)}this.currentGroup=t,this.currentGroup.appendChild(s)}addLinkedInput(e,t,s,i){let a=document.createElement("div");a.className="form-row mb-2",a.style.width="100%",this.currentGroup.appendChild(a);let r=document.createElement("label");r.className="col-form-label mr-sm-2",r.innerHTML=e,a.appendChild(r);let l=document.createElement("input");switch(l.style["flex-grow"]=1,l.setAttribute("type",s),a.appendChild(l),s){case"text":l.setAttribute("size","1");break;default:l.style.width="1px"}this.links.push([t,l]),l.addEventListener("change",e=>{let s;i&&(s=(i=Panel.unwrapProperty(this.display,i.split("."))).getMemento());let a=t.split("."),r=a.pop(),l=Panel.unwrapProperty(this.display,a),n=l[r],d=e.target.value;l[r]=d,i?(this.display.sseq.undo.startMutationTracking(),this.display.sseq.undo.addMutation(i,s,i.getMemento()),this.display.sseq.undo.addMutationsToUndoStack()):this.display.sseq.undo.addValueChange(l,r,n,d,()=>this.display.sidebar.showPanel()),this.display.sseq.emit("update")})}static unwrapProperty(e,t){let s=e;for(let e of t)s=s[e];return s}}class TabbedPanel extends Panel{constructor(e,t){super(e,t);let s=document.createElement("div");s.className="card-header",this.container.appendChild(s),this.header=document.createElement("ul"),this.header.className="nav nav-tabs card-header-tabs",s.appendChild(this.header),this.tabs=[],this.currentTab=null}addTab(e,t){let s=document.createElement("li");s.className="nav-item",this.header.appendChild(s);let i=document.createElement("a");i.className="nav-link",i.href="#",i.innerHTML=e,s.appendChild(i),i.addEventListener("click",()=>this.showTab(t)),this.tabs[this.tabs.length]=[t,i],this.currentTab||(this.currentTab=t)}show(){super.show(),this.showTab(this.currentTab)}showTab(e){this.currentTab=e;for(let t of this.tabs)t[0]==e?(t[1].className="nav-link active",t[0].show()):(t[1].className="nav-link",t[0].hide())}}class DifferentialPanel extends Panel{constructor(e,t){super(e,t),this.differential_list=document.createElement("ul"),this.differential_list.className="list-group list-group-flush",this.differential_list.style["text-align"]="center",this.addObject(this.differential_list),this.on("show",()=>{for(;this.differential_list.firstChild;)this.differential_list.removeChild(this.differential_list.firstChild);let e,t,s=this.display.selected.c.edges.filter(e=>"Differential"===e.type).sort((e,t)=>e.page-t.page);for(let i of s)e=i.source.name?i.source.name:"?",t=i.target.name?i.target.name:"?",i.source==this.display.selected.c?this.addLI(Interface.renderMath(`d_${i.page}({\\color{blue}${e}}) = ${t}`)):this.addLI(Interface.renderMath(`d_${i.page}(${e}) = {\\color{blue}${t}}`));this.addLI("<a href='#'>Add differential</a>",()=>this.display.state=STATE_ADD_DIFFERENTIAL),this.addLI("<a href='#'>Remove differential</a>",()=>this.display.state=STATE_RM_DIFFERENTIAL)})}addLI(e,t){let s=document.createElement("li");s.className="list-group-item",s.style="padding: 0.75rem 0",s.innerHTML=e,t&&s.addEventListener("click",t),this.differential_list.appendChild(s)}}class StructlinePanel extends Panel{constructor(e,t){super(e,t),this.structline_list=document.createElement("ul"),this.structline_list.className="list-group list-group-flush",this.structline_list.style["text-align"]="center",this.addObject(this.structline_list),this.on("show",()=>{for(;this.structline_list.firstChild;)this.structline_list.removeChild(this.structline_list.firstChild);let e,t,s=this.display.selected.c.edges.filter(e=>"Structline"===e.type).sort((e,t)=>e.page-t.page);for(let i of s)e=i.source.name?i.source.name:"?",t=i.target.name?i.target.name:"?",i.source==this.display.selected.c?this.addLI(Interface.renderMath(`{\\color{blue}${e}} \\text{---} ${t}`)):this.addLI(Interface.renderMath(`${e} \\text{---} {\\color{blue}${t}}`));this.addLI("<a href='#'>Add structline</a>",()=>this.display.state=STATE_ADD_STRUCTLINE),this.addLI("<a href='#'>Remove structline</a>",()=>this.display.state=STATE_RM_STRUCTLINE)})}addLI(e,t){let s=document.createElement("li");s.className="list-group-item",s.style="padding: 0.75rem 0",s.innerHTML=e,t&&s.addEventListener("click",t),this.structline_list.appendChild(s)}}exports.Panel=Panel,exports.TabbedPanel=TabbedPanel,exports.DifferentialPanel=DifferentialPanel,exports.StructlinePanel=StructlinePanel;

},{"./Interface.js":30,"events":20,"mousetrap":22}],32:[function(require,module,exports){
function nextString(e){return 0===e.length?"¦":e.substring(0,e.length-1)+String.fromCharCode(e.charCodeAt(e.length-1)+1)}exports.download=function(e,t,n="text/plain"){t.constructor!==String&&(t=JSON.stringify(t));let o=document.createElement("a");o.setAttribute("href",`data:${n};charset=utf-8,`+encodeURIComponent(t)),o.setAttribute("download",e),o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o)},exports.upload=function(){return new Promise((e,t)=>{let n=document.createElement("input");n.setAttribute("type","file"),n.setAttribute("multiple",""),n.style.display="none";let o=new FileReader,s=0,a=[];n.onchange=function(){for(let e of n.files)a.push({name:e.name});o.readAsText(n.files[0])},o.onloadend=function(){a[s].content=o.result,++s<n.files.length?o.readAsText(n.files[s]):(e(a),document.body.removeChild(n))},document.body.appendChild(n),n.click()})},exports.saveToLocalStore=function(e,t,n){return t.constructor!==String&&(t=JSON.stringify(t)),sseqDatabase.open().catch(e=>console.log(e)).then(()=>sseqDatabase.createKey(e,t,n)).then(()=>console.log("Successfully saved."))},exports.loadKeysFromLocalStoreWithPrefix=async function(e){let t=nextString(e);return await sseqDatabase.open(),await sseqDatabase.fetchKeyRange(e,t)},exports.loadFromLocalStore=async function(e){await sseqDatabase.open();let t=await sseqDatabase.fetchKey(e);if(!t||!t.value)return;let n=JSON.parse(t.value);return n.name=t.key,n},exports.deleteFromLocalStore=async function(e){await sseqDatabase.open(),await sseqDatabase.deleteKey(e)},exports.loadFromServer=async function(e){let t=await fetch(e);return await t.json()};const sseqDatabase={};let datastore=null;sseqDatabase.open=function(){return new Promise(function(e,t){if(datastore)return void e();const n=indexedDB.open("sseq",6);n.onupgradeneeded=function(e){const t=e.target.result;e.target.transaction.onerror=sseqDatabase.onerror,t.objectStoreNames.contains("sseq")&&t.deleteObjectStore("sseq");const n=t.createObjectStore("sseq",{keyPath:"key"});n.createIndex("key","key",{unique:!0}),n.createIndex("collection","collection",{unique:!1})},n.onsuccess=function(t){datastore=t.target.result,e()},n.onerror=t})},sseqDatabase.fetchAllKeys=function(){return new Promise(function(e,t){const n=datastore.transaction(["sseq"],"readwrite"),o=n.objectStore("sseq"),s=IDBKeyRange.lowerBound(0),a=o.openCursor(s),r=[];n.oncomplete=function(t){e(r)},a.onsuccess=function(e){let t=e.target.result;!1!=!!t&&(r.push(t.value),t.continue())},a.onerror=t})},sseqDatabase.fetchKey=function(e){return new Promise(function(t,n){const o=datastore.transaction(["sseq"],"readwrite").objectStore("sseq"),s=(IDBKeyRange.lowerBound(0),o.index("key").get(e));s.onsuccess=function(e){t(s.result)},s.onerror=n})},sseqDatabase.fetchKeyRange=function(e,t){return new Promise(function(n,o){const s=datastore.transaction(["sseq"],"readwrite"),a=s.objectStore("sseq"),r=IDBKeyRange.bound(e,t,!0,!1),c=a.openCursor(r),i=[];s.oncomplete=function(e){n(i)},c.onsuccess=function(e){let t=e.target.result;!1!=!!t&&(i.push(t.value),t.continue())},c.onerror=o})},sseqDatabase.fetchCollection=function(e){return new Promise(function(t,n){const o=datastore.transaction(["sseq"],"readwrite"),s=o.objectStore("sseq");console.log(e);const a=s.index("collection").openCursor(e),r=[];o.oncomplete=function(e){t(r)},a.onsuccess=function(e){let t=e.target.result;0!=!!t&&(r.push(t.value),t.continue())},a.onerror=n})},sseqDatabase.createKey=function(e,t,n){return new Promise(function(o,s){const a=datastore.transaction(["sseq"],"readwrite").objectStore("sseq"),r=(new Date).getTime(),c={key:e,value:t,collection:n,timestamp:r},i=a.put(c);i.onsuccess=function(e){o(c)},i.onerror=s})},sseqDatabase.deleteKey=function(e){return new Promise(function(t,n){const o=datastore.transaction(["sseq"],"readwrite").objectStore("sseq").delete(e);o.onsuccess=function(e){t()},o.onerror=n})},exports.sseqDatabase=sseqDatabase;

},{}],33:[function(require,module,exports){
"use strict";let Shapes={};Shapes.circle={draw:function(e,t,r,a,l=!0){e.beginPath(),e.arc(t,r,a,0,2*Math.PI),e.fill(),e.stroke();let n=new Path2D;return n.arc(t,r,1.3*a,0,2*Math.PI),n}},Shapes.circlen={draw:function(e,t,r,a,l){e.beginPath(),e.arc(t,r,a,0,2*Math.PI),e.fill(),e.stroke(),e.textAlign="center",e.fillStyle="black";let n=2*a|0;e.font=`${n}px Arial`,e.fillText(l.order,t,r+a/2);let c=new Path2D;return c.arc(t,r,a,0,2*Math.PI),c}},Shapes.square={draw:function(e,t,r,a){e.beginPath(),e.rect(t-a,r-a,2*a,2*a),e.fill(),e.stroke();let l=new Path2D;return l.rect(t-a,r-a,2*a,2*a),l}};for(let e of Object.getOwnPropertyNames(Shapes))Shapes[e].name=e,exports[e]=Shapes[e];

},{}],34:[function(require,module,exports){
"use strict";let Display=require("./Display.js").Display,Panel=require("./Panel.js");class Sidebar{constructor(e){this.adjuster=document.createElement("div"),this.adjuster.style.backgroundColor="rgba(0,0,0,0.125)",this.adjuster.style.height="100%",this.adjuster.style.cursor="ew-resize",this.adjuster.style.width="2px",e.appendChild(this.adjuster),this.resize=this.resize.bind(this),this.stopResize=this.stopResize.bind(this),this.adjuster.addEventListener("mousedown",function(e){e.preventDefault(),window.addEventListener("mousemove",this.resize),window.addEventListener("mouseup",this.stopResize)}.bind(this)),this.sidebar=document.createElement("div"),this.sidebar.style.height="100%",this.sidebar.style.width="240px",this.sidebar.style.border="none",this.sidebar.style.display="flex",this.sidebar.style.flexDirection="column",this.sidebar.className="card",e.appendChild(this.sidebar),this.main_div=document.createElement("div"),this.main_div.style.overflow="auto",this.sidebar.appendChild(this.main_div);let t=document.createElement("div");t.style.flexGrow="1",this.sidebar.appendChild(t),this.footer_div=document.createElement("div"),this.sidebar.appendChild(this.footer_div),this.panels=[],this.currentPanel=null}addPanel(e){return this.panels.push(e),this.panels.length}init(e){this.display=e,this.footer=new Panel.Panel(this.footer_div,e)}resize(e){let t=this.sidebar.getBoundingClientRect().right-e.pageX;this.sidebar.style.width=`${t}px`}stopResize(){window.removeEventListener("mousemove",this.resize),window.removeEventListener("mouseup",this.stopResize),this.display.resize()}showPanel(e){e||(e=this.currentPanel),this.currentPanel=e;for(let t of this.panels)t==e?t.show():t.hide()}}class SidebarDisplay extends Display{constructor(e,t){"string"==typeof e&&(e=document.querySelector(e)),e.style.display="flex",e.style.displayDirection="row";let i=document.createElement("div");i.style.height="100%",i.style.minHeight="100%",i.style.overflow="hidden",i.style.position="relative",i.style.flexGrow="1",e.appendChild(i);let s=new Sidebar(e);super(i,t),this.sidebar=s,this.sidebar.init(this)}}exports.SidebarDisplay=SidebarDisplay;

},{"./Display.js":26,"./Panel.js":31}],35:[function(require,module,exports){
"use strict";let Shapes=require("./Shape.js"),SseqClassjs=require("./SseqClass.js"),SseqClass=SseqClassjs.SseqClass,Node=SseqClassjs.Node,Edges=require("./Edges.js"),Edge=Edges.Edge,Structline=Edges.Structline,Extension=Edges.Extension,Differential=Edges.Differential,monomial_basisjs=require("./monomial_basis.js"),monomial_basis=monomial_basisjs.monomial_basis,slice_basis=monomial_basisjs.slice_basis,Util=require("./Util.js"),infinity=Util.infinity,IO=require("./SaveLoad"),sseqDatabase=IO.sseqDatabase,EventEmitter=require("events"),StringifyingMap=require("./StringifyingMap.js"),Interface=require("./Interface.js");function dot_product(e,t){let s=0;for(let i=0;i<e.length;i++)s+=e[i]*t[i];return s}function addToDictionaryOfLists(e,t,s){e.has(t)||e.set(t,[]),e.get(t).push(s)}exports.SseqClass=SseqClass,exports.Node=Node,exports.Edge=Edge,exports.Differential=Differential,exports.Structline=Structline,exports.Extension=Extension,exports.monomialString=monomial_basisjs.monomialString,exports.range=monomial_basisjs.range,exports.product=monomial_basisjs.product,exports.vectorSum=monomial_basisjs.vectorSum,exports.vectorScale=monomial_basisjs.vectorScale,exports.vectorLinearCombination=monomial_basisjs.vectorLinearCombination,exports.dictionaryVectorSum=monomial_basisjs.dictionaryVectorSum,exports.dictionaryVectorScale=monomial_basisjs.dictionaryVectorScale,exports.dictionaryVectorLinearCombination=monomial_basisjs.dictionaryVectorLinearCombination;class Sseq extends EventEmitter{constructor(){super(),this.total_classes=0,this.xRange=[0,100],this.yRange=[0,100],this.initialxRange=[0,10],this.initialyRange=[0,10],this.classes_by_degree=new StringifyingMap,this.num_classes_by_degree=new StringifyingMap,this.classes_by_stem=new Map,this.classes=[],this.structlines=[],this.differentials=[],this.edges=[],this.xshift=0,this.yshift=0,this.offset_size=.3,this.class_scale=1,this.min_page_idx=0,this.page_list=[0,infinity],this.default_node=new Node,this.default_node.hcolor="red",this.default_node.fill=!0,this.default_node.stroke=!0,this.default_node.shape=Shapes.circle,this.default_node.size=6,this.projection=(e=>[e.degree.x,e.degree.y]),this.stem_degree=(e=>e.degree.x),this.filtration_degree=(e=>e.degree.y),this.products=[],this.selectedClasses=[],this.serializeSseqFields=Sseq.serializeSseqFields,this.serializeClassFields=Sseq.serializeClassFields,this.serializeEdgeFields=Sseq.serializeEdgeFields,this.serializeNodeFields=Sseq.serializeNodeFields,this.undo=new Interface.Undo(this)}startMutationTracking(){this.undo.startMutationTracking()}addMutationsToUndoStack(e){this.undo.addMutationsToUndoStack(e)}addMutation(e,t,s){this.undo.addMutation(e,t,s)}set_shift(e,t){return this.xshift=e,this.yshift=t,this}get minX(){return this.xRange[0]}get minY(){return this.yRange[0]}get maxX(){return this.xRange[1]}get maxY(){return this.yRange[1]}set minX(e){this.xRange[0]=parseInt(e)}set minY(e){this.yRange[0]=parseInt(e)}set maxX(e){this.xRange[1]=parseInt(e)}set maxY(e){this.yRange[1]=parseInt(e)}add_to_shift(e,t){return this.xshift+=e,this.yshift+=t,this}getClasses(){return this.classes}getEdges(){return this.edges}getStructlines(){return this.structlines}getDifferentials(){return this.differentials}getStructlineTypes(){return new Set(this.structlines.map(e=>e.mult))}getSelection(){}clearSelection(){for(let e of this.classes)e.selected=!1;return this.emit("update"),this}selectClass(e,t=!0){return e?(e.selected=t,this):this}unselectClass(e){this.selectClass(e,!1)}unselectAll(){for(let e of this.getClasses())e.selected=!1;this.emit("update")}getPotentialTargets(e){let t=e.x-1;return sseq.getClasses().filter(e=>e.x===t)}getClassesInDegree(e,t){return this.classes.filter(s=>s.x===e&&s.y===t)}getClassesByName(e){return this.classes.filter(t=>t.name===e)}getOccupiedStems(){return Array.from(this.classes_by_degree.keys())}getStem(e){return this.classes_by_stem.get(e)||[]}addClass(e,t){if(void 0===e)return SseqClass.getDummy();let s;s=void 0===t?e:{x:e+=this.xshift,y:t+=this.yshift};let i=new SseqClass(this,s),a=this.num_classes_by_degree.getOrElse([i.x,i.y],0);return this.num_classes_by_degree.set([i.x,i.y],a+1),i.idx=a,i.class_list_index=this.classes.length,this.classes.push(i),addToDictionaryOfLists(this.classes_by_degree,s,i),addToDictionaryOfLists(this.classes_by_stem,i.x,i),this.total_classes++,this.emit("class-added",i),this.emit("update"),this.addMutation(i,{delete:!0},i.getMemento()),i}deleteClass(e){this.addMutation(e,e.getMemento(),{delete:!0}),e.delete();for(let t of e.edges)t.invalid||this.deleteEdge(t,!0);this.emit("update")}deleteEdge(e,t=!1){this.addMutation(e,e.getMemento(),{delete:!0});let s=e.source.getMemento(),i=e.target.getMemento();e.delete(),this.addMutation(e.source,s,e.source.getMemento()),this.addMutation(e.target,i,e.target.getMemento()),t||this.emit("update")}addStructline(e,t,s){if(this.duplicateEdge(Structline,e,t).length>0)return Structline.getDummy();if(!e||!t||e.isDummy()||t.isDummy())return Structline.getDummy();let i=new Structline(this,e,t);s&&i.setProduct(s);let a=e.getMemento(),r=t.getMemento();return e._addStructline(i),t._addStructline(i),this.structlines.push(i),i.edge_list_index=this.edges.length,this.edges.push(i),this.emit("edge-added",i),this.emit("structline-added",i),this.emit("update"),this.addMutation(i,{delete:!0},i.getMemento()),this.addMutation(e,a,e.getMemento()),this.addMutation(t,r,t.getMemento()),i}addDifferential(e,t,s,i=!0){if("number"==typeof e)return console.log("addDifferential a SseqClass in position 1, got a number. Probably the arguments are in the wrong order."),Differential.getDummy();if("number"!=typeof s)return console.log(`Invalid page ${s} for differential.`),Differential.getDummy();if(!e||!t)return Differential.getDummy();if(e.isDummy()||t.isDummy())return console.log("source or target is dummy"),Differential.getDummy();let a=this.duplicateEdge(Differential,e,t,s);if(a.length>0)return console.log("duplicate edge"),console.log(a),a[0];if(s<=0)return console.log([e,t,s]),console.log("No page <= 0 differentials allowed."),Differential.getDummy();let r=new Differential(this,e,t,s),l=e.getMemento(),n=t.getMemento();return e._addOutgoingDifferential(r,i),t._addIncomingDifferential(r,i),r.edge_list_index=this.edges.length,this.differentials.push(r),this.edges.push(r),this.addPageToPageList(s),this.emit("edge-added",r),this.emit("differential-added",r),this.emit("update"),this.addMutation(r,{delete:!0},r.getMemento()),this.addMutation(e,l,e.getMemento()),this.addMutation(t,n,t.getMemento()),r}addExtension(e,t){if(!e||!t||e.isDummy()||t.isDummy())return Extension.getDummy();if(this.duplicateEdge(Extension,e,t).length)return Extension.getDummy();let s=new Extension(this,e,t);s.edge_list_index=this.edges.length,this.edges.push(s);let i=e.getMemento(),a=t.getMemento();return e._addExtension(s),t._addExtension(s),this.emit("edge-added",s),this.emit("extension-added",s),this.emit("update"),this.addMutation(s,{delete:!0},s.getMemento()),this.addMutation(e,i,e.getMemento()),this.addMutation(t,a,t.getMemento()),s}duplicateEdge(e,t,s,i){return this.edges.filter(a=>!(a.constructor!==e||a.source!==t||a.target!==s||i&&a.page!==i||a.invalid))}addSumDifferential(e,t,s){let i=t.map(e=>e.name).join("+"),a=[];for(let r of t){let t=this.addDifferential(e,r,s);t.target_name=i,a.push(t)}for(let e=0;e<a.length-1;e++)a[e].replaceTarget();return a}getClassString(e){let t=e.name?`[${e.name}]`:"";return`(${e.x}, ${e.y})${t}`}getDifferentialQuery(e,t,s){return void 0===s?`Add differential from ${this.getClassString(e)} to ${this.getClassString(t)}?`:`Add d${s} differential from ${this.getClassString(e)} to ${this.getClassString(t)}?`}getStructlineQuery(e,t,s){return`Add${s=s?" *"+s:""} structline from ${this.getClassString(e)} to ${this.getClassString(t)}?`}getExtensionQuery(e,t,s){return`Add${s=s?" *"+s:""} extension from ${this.getClassString(e)} to ${this.getClassString(t)}?`}getPossibleEdgesToAdd(e,t){if(this.stem_degree(e)>this.stem_degree(t)){let s=t;t=e,e=s}let s=this.stem_degree(e),i=this.stem_degree(t),a=this.filtration_degree(e),r=i-s,l=this.filtration_degree(t)-a;if(1===r&&l<0)return{query:this.getDifferentialQuery(t,e,-l),callback:()=>this.addDifferential(t,e,-l)};for(let s of this.products){if(s.stem===r&&s.filtration===l)return{query:this.getStructlineQuery(e,t,s.name),callback:()=>this.addStructline(e,t).setProduct(s.name).setColor(s.color)};if(s.stem===-r&&s.filtration===l)return{query:this.getStructlineQuery(t,e,s.name),callback:()=>this.addStructline(t,e).setProduct(s.name).setColor(s.color)}}for(let s of this.products){if(s.stem===r&&s.filtration<l)return{query:this.getExtensionQuery(e,t,s.name),callback:()=>this.addExtension(e,t).setProduct(s.name).setColor(s.color)};if(s.stem===-r&&s.filtration<l)return{query:this.getExtensionQuery(t,e,s.name),callback:()=>this.addExtension(t,e).setProduct(s.name).setColor(s.color)}}return!1}decrementClassIndex(e){let t=this.getClassesInDegree(e.x,e.y),s=e.idx;if(0!==s)for(let i of t)if(i.idx===s-1)return e.idx--,void i.idx++}incrementClassIndex(e){let t=this.getClassesInDegree(e.x,e.y),s=e.idx;if(s!==t.length)for(let i of t)if(i.idx===s+1)return e.idx++,void i.idx--}addPageToPageList(e){for(let t=0;t<this.page_list.length;t++){let s;if((s=Array.isArray(this.page_list[t])?this.page_list[t][0]:this.page_list[t])>e&&this.page_list.splice(t,0,e),s>=e&&!Array.isArray(this.page_list[t]))return this}}addPageRangeToPageList(e){let t=e[0];for(let s=0;s<this.page_list.length;s++){let i;if((i=Array.isArray(this.page_list[s])?this.page_list[s][0]:this.page_list[s])>t)return this.page_list.splice(s,0,e),this;if(i==t){if(!Array.isArray(this.page_list[s]))return this.page_list.splice(s,0,e),this;if(this.page_list[s][1]>e[1])return this.page_list.splice(s,0,e),this;if(this.page_list[s][1]==e[1])return this}}}addPolynomialClasses(e,t,s={"":[0,0]}){if(!Array.isArray(t))throw"Second argument of addPolynomialClasses should be an array";return new monomial_basis(this,e,t,s)}deserializePolynomialClasses(e){return new monomial_basis(this,e)}addSliceClasses(e,t,s){if(!Array.isArray(t))throw"Second argument of addPolynomialClasses should be an array";return new slice_basis(this,e,t,s)}getSurvivingClasses(e){return void 0===e&&(e=infinity-1),this.classes.filter(t=>t.page_list[t.page_list.length-1]>=e)}getDrawnElements(e,t,s,i,a){let r;Util.checkArgumentsDefined(Sseq.prototype.getDrawnElements,arguments),Array.isArray(e)?(r=e,e=e[0]):r=[e,e];let l=this.classes.filter(r=>!(!r||r.invalid)&&(r.in_range=Sseq._classInRangeQ(r,t,s,i,a),r.in_range&&Sseq._drawClassOnPageQ(r,e))),n=this.edges.filter(t=>t&&!t.invalid&&Sseq._drawEdgeOnPageQ(t,r)&&Sseq._drawClassOnPageQ(t.source,e)&&Sseq._drawClassOnPageQ(t.target,e)&&(t.source.in_range||t.target.in_range));for(let e of n)e.source.in_range||(l.push(e.source),e.source.in_range=!0),e.target.in_range||(e.target.in_range=!0,l.push(e.target));return[l,n]}static _classInRangeQ(e,t,s,i,a){return t<=e.x&&e.x<=s&&i<=e.y&&e.y<=a}static _drawClassOnPageQ(e,t){return e._drawOnPageQ?e._drawOnPageQ(t):SseqClass.prototype._drawOnPageQ.call(e,t)}static _drawEdgeOnPageQ(e,t){if(e._drawOnPageQ)return e._drawOnPageQ(t);switch(e.type){case"Differential":return Differential.prototype._drawOnPageQ.call(e,t);case"Extension":return Extension.prototype._drawOnPageQ.call(e,t);case"Structline":return Structline.prototype._drawOnPageQ.call(e,t);default:return Edge.prototype._drawOnPageQ.call(e,t)}}_getXOffset(e,t){if(!1!==e.x_offset)return e.x_offset*this.offset_size;let s=this.num_classes_by_degree.get([e.x,e.y]),i=(e.idx-(s-1)/2)*this.offset_size;return isNaN(i)?(console.log("Invalid offset for class:",e),0):i}_getYOffset(e,t){if(!1!==e.y_offset)return e.y_offset*this.offset_size;let s=this.num_classes_by_degree.get([e.x,e.y]),i=-(e.idx-(s-1)/2)*this.offset_size;return isNaN(i)?(console.log("Invalid offset for class:",e),0):i}getClassNode(e,t){return e.node_list[SseqClass.prototype._getPageIndex.call(e,t)]}exportToTex(e,t,s,i,a,r){ExportToTex.DownloadSpectralSequenceTex(e,this,t,s,i,a,r)}static fromJSONObject(e){let t,s=new Sseq;t=e.serializeSseqFields?e.serializeSseqFields:Sseq.serializeSseqFields;for(let i of t)e[i]&&(s[i]=e[i]);s.default_node=new Node(s.default_node),s.default_node.shape=Shapes[s.default_node.shape.name];let i=[],a=e.master_node_list;for(let t of e.classes){let e=s.addClass(t.x,t.y);Object.assign(e,t),e.node_list=e.node_list.map(e=>new Node(a[e]));for(let t of e.node_list)t.shape=Shapes[t.shape.name];i.push(e)}for(let t of e.edges){let e,a=i[t.source],r=i[t.target];switch(a.y>r.y&&([a,r]=[r,a]),t.type){case"Differential":let i=a.page_list.slice(),l=r.page_list.slice();e=s.addDifferential(a,r,t.page),a.page_list=i,r.page_list=l;break;case"Structline":e=s.addStructline(a,r);break;case"Extension":e=s.addExtension(a,r)}Object.assign(e,t),e.source=a,e.target=r}return s}deleteDuplicateEdges(){for(let e of this.getClasses()){let t=[];for(let s of e.getEdges())t.includes(s.otherClass(e))?s.delete():t.push(s.otherClass(e))}}addSseqFieldToSerialize(e){Array.isArray(e)?e.forEach(e=>this.addSseqFieldToSerialize(e)):this.serializeSseqFields.includes(e)||this.serializeSseqFields.push(e)}addClassFieldToSerialize(e){Array.isArray(e)?e.forEach(e=>this.addClassFieldToSerialize(e)):this.serializeClassFields.includes(e)||this.serializeClassFields.push(e)}addEdgeFieldToSerialize(e){Array.isArray(e)?e.forEach(e=>this.addEdgeFieldToSerialize(e)):this.serializeEdgeFields.includes(e)||this.serializeEdgeFields.push(e)}download(e){IO.download(e,JSON.stringify(this))}static upload(){return IO.upload().then(e=>Sseq.fromJSONObject(JSON.parse(e)))}save(){this.save_name?this.saveToLocalStore(name):this.saveAs()}saveAs(){let e=prompt("Save as:",this.save_name||"");e&&(this.save_name=e,this.saveToLocalStore(e))}saveToLocalStore(e){return IO.saveToLocalStore(e,this)}static async loadFromDataStoreOrServer(e){let t;(t=await IO.loadFromLocalStore(e))||(t=await IO.loadFromServer(e));let s=Sseq.fromJSONObject(t);return s.path=e,s}static async loadFromServer(e){let t=await IO.loadFromServer(e);return Sseq.fromJSONObject(t)}static async loadFromLocalStore(e){let t=await IO.loadFromLocalStore(e);return console.log(t),Sseq.fromJSONObject(t)}static _serializeNode(e){let t={};for(let s of this.serializeNodeFields)e[s]&&(t[s]=e[s]);return t}toJSON(){let e={};for(let t of this.serializeSseqFields)e[t]=this[t];let t=new StringifyingMap(e=>JSON.stringify(Sseq._serializeNode(e)));e.master_node_list=[],e.classes=[],e.edges=[];for(let s of this.classes){if(s.invalid)continue;let i={};for(let e of this.serializeClassFields)i[e]=s[e];i.node_list=[];for(let a of s.node_list)t.has(a)||(t.set(a,e.master_node_list.length),e.master_node_list.push(Sseq._serializeNode(a))),i.node_list.push(t.get(a));s.list_index=e.classes.length,e.classes.push(i)}for(let t of this.edges){if(t.invalid)continue;let s={};for(let e of this.serializeEdgeFields)s[e]=t[e];s.source=t.source.list_index,s.target=t.target.list_index,e.edges.push(s)}return e}}Sseq.serializeSseqFields=["min_page_idx","page_list","xRange","yRange","initialxRange","initialyRange","default_node","class_scale","offset_size","serializeSseqFields","serializeClassFields","serializeEdgeFields","serializeNodeFields"],Sseq.serializeClassFields=["x","y","name","extra_info","unique_id","idx","x_offset","y_offset","page_list","visible"],Sseq.serializeEdgeFields=["color","bend","dash","lineWidth","opacity","page_min","page","type","mult","source_name","target_name"],Sseq.serializeNodeFields=["opacity","color","fill","stroke","hcolor","hfill","hstroke","shape","size"],exports.Sseq=Sseq;

},{"./Edges.js":27,"./Interface.js":30,"./SaveLoad":32,"./Shape.js":33,"./SseqClass.js":36,"./StringifyingMap.js":37,"./Util.js":39,"./monomial_basis.js":42,"events":20}],36:[function(require,module,exports){
"use strict";let Util=require("./Util.js"),infinity=Util.infinity;class Node{constructor(t){this.opacity=1,this.color="black",t&&Object.assign(this,t)}copy(){return this.isDummy()?new Node:Object.assign(new Node,this)}getShape(){return this.shape}setShape(t){return this.shape=t,this}getSize(){return this.size}setSize(t){return this.size=t,this}getColor(){return this.color}setColor(t){return this.color=t,this}setFill(t){return this.fill=t,this}setStroke(t){return this.stroke=t,this}setOpacity(t){return this.opacity=t,this}isDummy(){return!1}setPosition(t,e,s){this.x=t,this.y=e,this.scale=s}draw(t){t.save(),this.opacity&&(t.opacity=this.opacity),this.color&&(t.fillStyle=this.color,t.strokeStyle=this.color),this.stroke&&!0!==this.stroke&&(t.strokeStyle=this.stroke),this.fill&&!0!==this.fill&&(t.fillStyle=this.fill),this.highlight&&(this.hcolor&&(t.fillStyle=this.hcolor,t.strokeStyle=this.hcolor),this.hstroke&&(t.strokeStyle=this.hstroke),this.hfill&&(t.fillStyle=this.hfill)),t.lineWidth=2*this.scale,this.path=this.shape.draw(t,this.x,this.y,this.size*this.scale,this),t.restore()}static getDummy(){if(Node._dummy)return Node._dummy;let t=new Node,e=Util.getDummyConstantFunction(t);t.isDummy=function(){return!0},t.setShape=e,t.setColor=e}static merge(...t){let e=new Node;for(var s=0;s<t.length;s++)if(!t[s].isDummy||!t[s].isDummy())for(var i in t[s])e[i]=t[s][i];return e}}let unique_id=0;class SseqClass{constructor(t,e){this.sseq=t,this.degree=e,this.projection=t.projection(this),this.x=this.projection[0],this.y=this.projection[1],this.x_offset=!1,this.y_offset=!1,this.idx=0,this.unique_id=unique_id++,this.edges=[],this.name="",this.last_page_name="",this.extra_info="",this.differential_strings=[],this.page_list=[infinity],this.node_list=[t.default_node.copy()],this.visible=!0,this._last_page=0,this._last_page_idx=0}getMemento(){let t=Util.copyFields({},this);return t.node_list=t.node_list.map(t=>new Node(t)),t.node_list.forEach(t=>t.highlight=!1),t}restoreFromMemento(t){if(t.delete){if(this.invalid)return;return void this.delete()}this.invalid&&this.revive();Util.copyFields(this,t);return this.node_list=this.node_list.map(t=>t.copy()),this}delete(){this.invalid=!0;let t=this.sseq.num_classes_by_degree.get([this.x,this.y]);this.sseq.num_classes_by_degree.set([this.x,this.y],t-1),this.sseq.total_classes--}revive(){this.invalid=!1;let t=this.sseq.num_classes_by_degree.get([this.x,this.y]);this.sseq.num_classes_by_degree.set([this.x,this.y],t+1),this.sseq.total_classes++}static getDummy(){if(SseqClass._dummy)return SseqClass._dummy;let t=Object.create(SseqClass);SseqClass._dummy=t;let e=Util.getDummyConstantFunction(t);t.isDummy=Util.getDummyConstantFunction(!0),t.getName=Util.getDummyConstantFunction("dummy"),t.getColor=Util.getDummyConstantFunction("black"),t.getShape=Util.getDummyConstantFunction(null),t.getTooltip=Util.getDummyConstantFunction(""),t.getPage=Util.getDummyConstantFunction(-1),t.getNode=Util.getDummyConstantFunction(Node.getDummy()),t.toString=t.getName,t.constructor=SseqClass.constructor,t.replace=e,t.addExtraInfo=e,t.isAlive=Util.getDummyConstantFunction(!1);for(let e of["getEdges","getDifferentials","getIncomingDifferentials","getOutgoingDifferentials","getStructlines","getIncomingStructlines","getOutgoingStructlines","getProducts","getDivisors","getExtensions"])t[e]=Util.getDummyConstantFunction([]);return t.getProductIfPresent=Util.getDummyConstantFunction(t),t.getDivisorIfPresent=Util.getDummyConstantFunction(t),t.getStringifyingMapKey=Util.getDummyInvalidOperation(t,"getStringifyingMapKey"),Util.setPrivateMethodsToInvalidOperation(t),Util.setDummyMethods(t,t=>t.startsWith("set"),()=>e),Util.checkAllCommandsDefined(t,SseqClass),t}isDummy(){return!1}getName(){return this.name}setName(t){return this.name=t,this.last_page_name=t,this}getNameCoord(){let t="";return""!==this.name&&(t=`\\(\\large ${this.name}\\)&nbsp;&mdash;&nbsp;`),t+=`(${this.x}, ${this.y})`}getNameCoordHTML(){return Interface.renderLatex(this.getNameCoord())}getPage(){return this.page_list[this.page_list.length-1]}setPage(t){return this.page_list[this.page_list.length-1]=t,this}isAlive(t){return t||(t=infinity-1),this.getPage()>t}getNode(t){const e=this._getPageIndex(t);return this.node_list[e]}setNode(t,e){void 0===t&&(t={});let s=this.getMemento();const i=this._getPageIndex(e);this.node_list[i]=Node.merge(this.node_list[i],t);let n=this.getMemento();return this.sseq.addMutation(this,s,n),this}getColor(t){return this.getNode(t).getColor()}setColor(t,e){let s=this.getMemento();this.getNode(e).setColor(t);let i=this.getMemento();return this.sseq.addMutation(this,s,i),this}getShape(t){return this.getNode(t).getShape()}setShape(t,e){let s=this.getMemento();this.getNode(e).setShape(t);let i=this.getMemento();return this.sseq.addMutation(this,s,i),this}setStructlinePages(t){let e=this.getStructlines();for(let s=0;s<e.length;s++){let i=e[s];if(i.page>t){let e=i.getMemento();i.page=t;let s=i.getMemento();this.sseq.addMutation(i,e,s)}}return this}replace(t,e){let s=this.getMemento();e&&(this.last_page_name="string"==typeof e?e:e(this.name)),this._appendPage(infinity),this.setNode(t);let i=this.getMemento();return this.sseq.addMutation(this,s,i),this}addExtraInfo(t){let e=this.getMemento();this.extra_info+="\n"+t;let s=this.getMemento();return this.sseq.addMutation(this,e,s),this}setPermanentCycleInfo(t){let e=this.getMemento();this.permanent_cycle_info=t,this.addExtraInfo(this.permanent_cycle_info);let s=this.getMemento();return this.sseq.addMutation(this,e,s),this}getEdges(){return this.edges}getDifferentials(){return this.edges.filter(t=>"Differential"===t.type)}getOutgoingDifferentials(){return this.edges.filter(t=>"Differential"===t.type&&this===t.source)}getIncomingDifferentials(){return this.edges.filter(t=>"Differential"===t.type&&this===t.target)}getStructlines(){return this.edges.filter(t=>"Structline"===t.type)}getOutgoingStructlines(){return this.edges.filter(t=>"Structline"===t.type&&this===t.source)}getIncomingStructlines(){return this.edges.filter(t=>"Structline"===t.type&&this===t.target)}getExtensions(){return this.edges.filter(t=>"Extension"===t.type)}getProducts(t){let e=this.edges.filter(t=>"Structline"===t.type&&t.otherClass(this).y>this.y);return t&&(e=e.filter(e=>e.mult===t)),e}getDivisors(t){let e=this.edges.filter(t=>"Structline"===t.type&&t.otherClass(this).y<this.y);return t&&(e=e.filter(e=>e.mult===t)),e}getProductIfPresent(t){let e=this.getProducts(t);return 1===e.length?e[0].otherClass(this):SseqClass.getDummy()}getDivisorIfPresent(t){let e=this.getDivisors(t);return 1===e.length?e[0].otherClass(this):SseqClass.getDummy()}toString(){return this.name}getStringifyingMapKey(){return this.x+","+this.y+","+this.idx}_getPageIndex(t){if(void 0===t)return this.page_list.length-1;if(t===this._last_page)return this._last_page_idx;let e;for(let s=0;s<this.page_list.length;s++)if(this.page_list[s]>=t){e=s;break}return void 0===e&&console.log(new Error("Page too large. This probably shouldn't happen.")),this._last_page=t,this._last_page_idx=e,e}_appendPage(t){return this.page_list.push(t),this.node_list.push(this.node_list[this.node_list.length-1].copy()),this}_addStructline(t){this.edges.push(t)}_addExtension(t){this.edges.push(t)}_addOutgoingDifferential(t,e){this.getPage(),t.page,e&&this.setPage(t.page),this.edges.push(t),this._updateDifferentialStrings()}_addIncomingDifferential(t,e){this.getPage(),t.page,e&&this.setPage(t.page),this.edges.push(t),this._updateDifferentialStrings()}_updateDifferentialStrings(){let t=this.getDifferentials().sort((t,e)=>t.page>e.page);this.differential_strings=t.map(t=>t.toString(t.source===this,t.target===this))}_drawOnPageQ(t){return this.page_list[this.page_list.length-1]>=t&&this.visible}_inRangeQ(t,e,s,i){return t<=this.x&&this.x<=e&&s<=this.y&&this.y<=i}}exports.Node=Node,exports.SseqClass=SseqClass;

},{"./Util.js":39}],37:[function(require,module,exports){
"use strict";function stdCatToString(t){if(void 0!==t)return void 0!==t.getStringifyingMapKey?t.getStringifyingMapKey():t.toString()}var StringifyingMap=function(){function t(t){void 0===t&&(t=stdCatToString),this.catToString=t,this.m=new Map,this.key_string_to_key_object=new Map}return t.prototype.set=function(t,e){let i=this.catToString(t);if(void 0===i)throw new Error("Key encoding undefined.");return this.key_string_to_key_object.set(i,t),this.m.set(i,e)},t.prototype.get=function(t){if(void 0!==this.catToString(t))return this.m.get(this.catToString(t))},t.prototype.delete=function(t){return this.key_string_to_key_object.delete(this.catToString(t)),this.m.delete(this.catToString(t))},t.prototype.has=function(t){return void 0!==t&&this.m.has(this.catToString(t))},t.prototype.getOrElse=function(t,e){return this.has(t)?this.get(t):e},t.prototype[Symbol.iterator]=function*(){for(let t of this.m)yield[this.key_string_to_key_object.get(t[0]),t[1]]},t.prototype.keys=function(){return this.key_string_to_key_object.values()},t.prototype.toJSON=function(){return[...this]},Object.defineProperty(t.prototype,"size",{get:function(){return this.m.size},enumerable:!0,configurable:!0}),t}();module.exports=StringifyingMap;

},{}],38:[function(require,module,exports){
"use strict";const MARGIN=10;class Tooltip{constructor(t){this.display=t,this.div=document.createElement("div"),this.div.style.opacity=0,this.div.style.position="absolute",this.div.style["z-index"]=999999,this.div.className="tooltip",document.body.appendChild(this.div)}setHTML(t){this.div.innerHTML=t}show(t,i){this.div.style.left="0px",this.div.style.top="0px";let s=this.div.getBoundingClientRect();t+MARGIN+s.width<window.innerWidth?t+=MARGIN:t=t-s.width-MARGIN,i-s.height-MARGIN>0?i=i-s.height-MARGIN:i+=MARGIN,this.div.style.left=`${t}px`,this.div.style.top=`${i}px`,this.div.style.transition="opacity 200ms",this.div.style.opacity=.9}hide(){this.div.style.transition="opacity 500ms",this.div.style.opacity=0}}exports.Tooltip=Tooltip;

},{}],39:[function(require,module,exports){
let assert=require("assert");exports.infinity=1e4,exports.limited_logger=function(e){let t=function(e){t.msgs_so_far<t.max_msgs&&(console.log(e),t.msgs_so_far++)};return t.max_msgs=e,t.msgs_so_far=0,t},exports.download=function(e,t){let o=document.createElement("a");o.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),o.setAttribute("download",e),o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o)},exports.getDummyConstantFunction=function(e){return function(){return e}},exports.getDummyInvalidOperation=function(e,t){return function(){throw new ReferenceError(`Invalid operation: cannot use method ${t} on a dummy ${e.prototype.constructor.name}.`)}},exports.setDummyMethods=function(e,t,o){Object.getOwnPropertyNames(e.prototype).filter(t).forEach(function(t){e[t]=o(t)})},exports.setRemainingMethods=function(e,t,o){Object.getOwnPropertyNames(e.prototype).filter(t=>!e.hasOwnProperty(t)).filter(t).forEach(function(t){e[t]=o(t)})},exports.setPrivateMethodsToInvalidOperation=function(e){exports.setDummyMethods(e,e=>"_"===e[0],t=>exports.getDummyInvalidOperation(e,t))},exports.checkAllCommandsDefined=function(e){let t=Object.getOwnPropertyNames(e.prototype).filter(t=>!e.hasOwnProperty(t));if(t.length>0){let o=e.prototype.constructor.name;console.log(`Not all fields of ${o} have been defined in ${o} dummy. The list of undefined fields is:\n${t}`)}},exports.getArguments=function(e){return(e+"").replace(/[\/][\/].*$/gm,"").replace(/\s+/g,"").replace(/[\/][*][^\/*]*[*][\/]/g,"").split("){",1)[0].replace(/^[^(]*[(]/,"").replace(/=[^,]+/g,"").split(",").filter(Boolean)},exports.checkArgumentsDefined=function(e,t){for(let o=0;o<t.length;o++)if(void 0===t[o]){let t=exports.getArguments(e)[o];throw Error(`Argument ${t} of ${e.name} is undefined`)}},exports.getObjectWithFields=function(e,t){let o=new Object;for(let n of t)o[n]=e[n];return o},exports.assignFields=function(e,t,o){for(let n of o)e[n]=t[n];return e},exports.copyFields=function(e,t){for(let o of Object.entries(t)){let t=o[0],n=o[1];Array.isArray(n)&&(n=n.slice()),e[t]=n}return e},Map.prototype.getOrElse=function(e,t){return this.has(e)?this.get(e):t};

},{"assert":1}],40:[function(require,module,exports){
let Sseqjs=require("./Sseq.js"),Sseq=Sseqjs.Sseq,Mousetrap=require("mousetrap");function variablePowerString(e,s){return 1===s?e:`${e}^{${s}}`}exports.getClassExpression=function(e){let s=`(${e.x}, ${e.y})`;return e.name&&(s+=` [${e.name}]`),s},exports.multiply_monomial=function(e,s,t){let o=new RegExp(`${e}(\\^{?(.)}?)?`.replace("\\","\\\\").replace(/\{/g,"\\{").replace(/\}/g,"\\}")),r=o.exec(t);if(!o.test(t))return console.log(t),variablePowerString(e,s)+t;console.log(o),console.log(r[2]);let n=Number.parseInt(r[2]||1)+s;return t.replace(o,`${e}^{${n}}`)},exports.straightenTowers=function(e){exports.markTowers(e);for(let s=1;s<xmax;s++){if(!e.longest_tower_map.has(s))continue;let t=e.longest_tower_map.get(s);if(t.length>3)for(let s=t.base;s;s=s.h0mult[0]){s.x_offset=0;for(let t of e.getClassesInDegree(s.x,s.y))t.has_fixed_class=!0}}},exports.markTowers=function(e){new Map;for(let s of e.classes)s.h0div=[],s.h0mult=[],s.tower={length:0,base:s};for(let s of e.getStructlines()){if(s.source.x!==s.target.x)continue;let e,t;s.source.y<s.target.y?(e=s.source,t=s.target):(e=s.target,t=s.source),e.h0mult.push(t),t.h0div.push(e)}let s=new Map,t=(new Map,0),o=0;for(let r of e.classes)s.has(r.x)||s.set(r.x,new Map),s.get(r.x).has(r.y)||s.get(r.x).set(r.y,[]),s.get(r.x).get(r.y).push(r),r.x>0&&r.y>o&&(o=r.y),r.x>t&&(t=r.x);let r=new Map;for(let e=1;e<t;e++){if(!s.has(e))continue;let t=s.get(e),n={},l=-1;for(let e=1;e<o;e++)if(t.has(e))for(let s of t.get(e)){let e=s.tower;for(let t of s.h0div)t.tower.length>e.length&&(e=t.tower);e.length++,s.tower=e,e.length>l&&(l=e.length,n=e)}r.set(e,n)}e.columns=s,e.longest_tower_map=r},exports.minimizeCrossings=function(e){new StringifyingMap;for(let s of e.getOccupiedStems()){e.getStem(s);let t=new Map;for(let s of e.getClasses())t.has(s.y)||t.set(s.y,[]),t.get(s.y).push(s);for(let e of t.values())if(1!==e.length){for(let s of e){s.crossing_score=0;for(let e of s.structlines){let t=otherClass(e,s);t.x<s.x?s.crossing_score--:t.x>s.x&&s.crossing_score++}}e.sort(e=>e.crossing_score);for(let s=0;s<e.length;s++)e[s].idx=s}}},exports.fixed_tower_xOffset=function(e,s){if(!1!==e.x_offset)return e.x_offset*this.offset_size;let t=this.num_classes_by_degree.get([e.x,e.y]),o=e.idx-(t-1)/2;if(e.has_fixed_class){t%2==0?o>=0?o+=.5:o-=.5:o>=0&&(o+=1)}return o*this.offset_size},exports.install_edit_handlers=function(e,s){Mousetrap.bind("q",()=>{e.mouseover_node&&e.sseq.incrementClassIndex(e.mouseover_node.c)}),Mousetrap.bind("w",()=>{e.mouseover_node&&e.sseq.decrementClassIndex(e.mouseover_node.c)}),Mousetrap.bind("d",()=>{e.sseq.download(s+".json")}),Mousetrap.bind("s",()=>{e.mouseover_node&&(e.temp_source_class=e.mouseover_node.c)}),Mousetrap.bind("t",()=>{if(e.mouseover_node&&e.temp_source_class){console.log("t");let s=e.temp_source_class,t=e.mouseover_node.c;if(console.log(s),console.log(t),s.x!==t.x+1)return;let o=t.y-s.y;if(confirm(`Add d${o} differential from ${exports.getClassExpression(s)} to ${exports.getClassExpression(t)}`)){e.sseq.addDifferential(s,t,o);e.sseq.emit("update")}}}),Mousetrap.bind("n",()=>{if(e.mouseover_node&&e.temp_source_class){let s=e.temp_source_class,t=e.mouseover_node.c;confirm(`Delete edges ${exports.getClassExpression(s)} to ${exports.getClassExpression(t)}`)&&(source.getEdges().filter(e=>e.otherClass(s)===t).forEach(e=>e.delete()),e.sseq.emit("update"))}}),e.on("click",s=>{if(!s)return;let t=s.c,o="";t.name&&(o=t.name);let r=prompt(`Enter new name for class at position (${t.x},${t.y})`,o);(r||""===r)&&(t.name=r,t.setColor("black"),e.sseq.emit("update")),t.tooltip_html=void 0}),Mousetrap.bind("p",()=>{e.mouseover_node&&(e.mouseover_node.c.problem=!0)})},exports.addProductNames=function(e,s){let t=e.classes.filter(e=>!e.structlines.some(s=>otherClass(s,e).y<e.y&&s.visible));for(let o of t){let t=o.name;if(!t)continue;let r=1;for(;o;){let n=o.getProducts(s);if(1!==n.length)break;if((o=otherClass(n[0],o)).name)break;o.name=tools.multiply_monomial(s,r,t),e.emit("update"),r++}}};

},{"./Sseq.js":35,"mousetrap":22}],41:[function(require,module,exports){
window.infinity=1e4,window.mod=function(i,e){return(i%e+e)%e},window.Util=require("./Util.js"),window.IO=require("./SaveLoad"),window.Interface=require("./Interface"),window.sseqDatabase=IO.sseqDatabase,window.Shapes=require("./Shape.js"),window.Display=require("./Display.js").Display,window.BasicDisplay=require("./BasicDisplay.js").BasicDisplay,window.SidebarDisplay=require("./SidebarDisplay.js").SidebarDisplay,window.EditorDisplay=require("./EditorDisplay.js").EditorDisplay,window.Tooltip=require("./Tooltip.js").Tooltip,window.Panel=require("./Panel.js"),window.C2S=require("canvas2svg"),window.ExportToTex=require("./ExportToTex.js");let Sseqjs=require("./Sseq.js");window.Sseq=Sseqjs.Sseq,window.SseqClass=Sseqjs.SseqClass,window.Node=Sseqjs.Node,window.Edge=Sseqjs.Edge,window.Differential=Sseqjs.Differential,window.Structline=Sseqjs.Structline,window.Extension=Sseqjs.Extension,window.tools=require("./ass_tools.js"),window.d3=require("d3-selection"),window.Mousetrap=require("mousetrap"),window.range=Sseqjs.range,window.monomialString=Sseqjs.monomialString,window.StringifyingMap=require("./StringifyingMap.js"),window.product=Sseqjs.product,window.vectorSum=Sseqjs.vectorSum,window.vectorScale=Sseqjs.vectorScale,window.vectorLinearCombination=Sseqjs.vectorLinearCombination,window.dictionaryVectorSum=Sseqjs.dictionaryVectorSum,window.dictionaryVectorScale=Sseqjs.dictionaryVectorScale,window.dictionaryVectorLinearCombination=Sseqjs.dictionaryVectorLinearCombination,window.on_public_website="math.mit.edu"===new URL(document.location).hostname,window.getJSONFilename=function(i){return i=`json/${i}.json`,on_public_website&&(i="js_spectralsequences/"+i),i};

},{"./BasicDisplay.js":25,"./Display.js":26,"./EditorDisplay.js":28,"./ExportToTex.js":29,"./Interface":30,"./Panel.js":31,"./SaveLoad":32,"./Shape.js":33,"./SidebarDisplay.js":34,"./Sseq.js":35,"./StringifyingMap.js":37,"./Tooltip.js":38,"./Util.js":39,"./ass_tools.js":40,"canvas2svg":5,"d3-selection":14,"mousetrap":22}],42:[function(require,module,exports){
"use strict";let StringifyingMap=require("./StringifyingMap.js");function range(e,t,s=1){return 1===arguments.length&&(e=1,t=arguments[0],s=1),Array(Math.ceil((t-e+s)/s)).fill(e).map((e,t)=>e+t*s)}function product(){return Array.prototype.slice.call(arguments).reduce(function(e,t){const s=[];return e.forEach(function(e){t.forEach(function(t){s.push(e.concat(t))})}),s},[[]])}function convert_exponent_map_to_vector(e,t){return e.map(e=>t.hasOwnProperty(e)?t[e]:0)}function monomialString(e,t,s=""){let i=[];i[0]=s,Array.isArray(t)||(t=convert_exponent_map_to_vector(e,t));for(let s=0;s<e.length;s++){let r=t[s];i[s+1]=0===r?"":1===r?e[s]:`${e[s]}^{${r}}`}let r=i.filter(e=>""!==e).join(" ");return""===r&&(r="1"),r}function vectorSum(e){let t=[];for(let s=0;s<e.length;s++){let e=0;for(let t of arguments)e+=t[s];t.push(e)}return t}function dictionaryVectorSum(){let e={};for(let t of arguments)for(let[s,i]of Object.entries(t)){let t=e[s]||0;t+=i,e[s]=t}return e}function vectorScale(e,t){return t.map(t=>e*t)}function dictionaryVectorScale(e,t){let s={};for(let[i,r]of Object.entries(t))s[i]=e*r;return s}function vectorLinearCombination(e,t){let s=[];for(let i=0;i<e.length;i++)s.push(vectorScale(t[i],e[i]));return vectorSum(...s)}function dictionaryVectorLinearCombination(e,t){let s=[];for(let i=0;i<e.length;i++)s.push(dictionaryVectorScale(t[i],e[i]));return dictionaryVectorSum(...s)}exports.range=range,exports.product=product,exports.monomialString=monomialString,exports.vectorSum=vectorSum,exports.dictionaryVectorSum=dictionaryVectorSum,exports.vectorScale=vectorScale,exports.dictionaryVectorScale=dictionaryVectorScale,exports.vectorLinearCombination=vectorLinearCombination,exports.dictionaryVectorLinearCombination=dictionaryVectorLinearCombination;class monomial_ring{constructor(e,t,s,i){this._var_degree_dict=s,this._var_list=e,this._var_name_list=t,this._var_degree_list=this._var_list.map(e=>this._var_degree_dict[e]),this._module_generators_dict=i}addModuleGenerator(e,t){this._module_generators_dict[e]=t}_exponent_map_to_vector(e){return convert_exponent_map_to_vector(this._var_list,e)}getElement(e,t=""){let s;if(Array.isArray(e))s=e;else if("string"==typeof e){let t=new Object;t[e]=1,s=convert_exponent_map_to_vector(this._var_name_list,t)}else{let t=Object.keys(e);for(let e of t)if(!this._var_degree_dict.hasOwnProperty(e))throw new Error(`Invalid variable ${e}`);s=convert_exponent_map_to_vector(this._var_name_list,e)}return this.getElementFromVector(s,t)}getElementFromVector(e,t=""){if(""!==t&&!this._module_generators_dict.hasOwnProperty(t))throw new Error(`Invalid module generator ${t}`);if(e.length!=this._var_name_list.length)throw new Error(`Exponent vector ${e} should have length ${this._var_name_list.length}, has length ${e.length}`);return new monomial_element(this,e,t)}}class monomial_element{constructor(e,t,s=""){this._ring=e,this.exponent_vector=t,this._module_generator=s;for(let e=0;e<t.length;e++)this[e]=t[e]}_initializeDegree(){let e=0,t=0;""!==this._module_generator&&(e+=this._ring._module_generators_dict[this._module_generator][0],t+=this._ring._module_generators_dict[this._module_generator][1]);for(let s=0;s<this.exponent_vector.length;s++)e+=this._ring._var_degree_list[s][0]*this.exponent_vector[s],t+=this._ring._var_degree_list[s][1]*this.exponent_vector[s];this._degree=[e,t]}getName(){return this._name||(this._name=monomialString(this._ring._var_name_list,this.exponent_vector,this._module_generator)),this._name}getDegree(){return this._degree||this._initializeDegree(),this._degree}multiply(e){if(this._ring!==e._ring)throw new Error("Cannot multiply elements from different rings.");if(""!==this._module_generator&&""!==e._module_generator)throw new Error("Cannot multiply two module elements, only a module element by a ring element.");let t=this._module_generator||e._module_generator,s=vectorSum(this.exponent_vector,e.exponent_vector);return new monomial_element(this._ring,s,t)}getStringifyingMapKey(){return this._module_generator+this.exponent_vector.toString()}toJSON(){let e=Object.assign({},this);return e._ring=void 0,e}toString(){return this.getName()}}class monomial_basis{constructor(e,t,s,i){if(this.sseq=e,this._tuples_to_classes=new StringifyingMap,this._tuples_to_ids=new StringifyingMap,this._strings_to_classes=new Map,this._tuples_to_strings=new StringifyingMap,this._strings_to_tuples=new Map,this._structlines=[],this.length=0,!s)return void this._fromSerializedMonomialBasis(e,t);this.var_degree_dict=t,this.var_spec_list=s,this.module_generators_dict={},this.module_generators=[];let r=[],n=[],o=[],_=[];for(let e=0;e<s.length;e++){let i=s[e],l=i[0];monomial_basis._validateVarSpec(i,t,e),r.push(l),n.push(t[l][0]),o.push(t[l][1]),_.push(range(...i.slice(1)))}this._stem_list=n,this._filtration_list=o,this._range_list=_,this._ring=new monomial_ring(r,r,t,{});for(let e of Object.entries(i)){let t=e[0],s=e[1];this.addModuleGenerator(t,s)}this.sseq.emit("update")}addModuleGenerator(e,t,s){this.module_generators_dict[e]=t,this.module_generators.push(e),this._ring.addModuleGenerator(e,t);let i=product(...this._range_list);for(let t=0;t<i.length;t++){let r=i[t],n=this._ring.getElementFromVector(r,e),o=n.getDegree(),_=o[0],l=o[1],a=n.getName();if(sseq.xRange&&sseq.drop_out_of_range_classes&&(_<sseq.xRange[0]-10||_>sseq.xRange[1]+10)){console.log("dropped");continue}if(sseq.yRange&&sseq.drop_out_of_range_classes&&(_<sseq.yRange[0]-10||_>sseq.yRange[1]+10))continue;if(sseq.yRange&&sseq.max_differential_length&&(l>sseq.yRange[1]+sseq.max_differential_length||l<sseq.yRange[0]))continue;let h=sseq.addClass(_,l).setName(a);this._add_class(n,h),h.module_generator=e,s&&s(h)}for(let t of this._structlines)for(let s=0;s<i.length;s++){let r=i[s],n=this._ring.getElementFromVector(r,e),o=this.get(n),_=this.get(n.multiply(t.offset));if(void 0!==_){let e=this.sseq.addStructline(o,_);t.callback&&t.callback(e)}}this.sseq.emit("update")}_fromSerializedMonomialBasis(e,t){let s=new Map;for(let t of e.getClasses())s.set(t.unique_id,t);this.var_degree_dict=t.var_degree_dict,this.var_spec_list=t.var_spec_list,this.module_generators_dict=t.module_generators_dict,this.module_generators=Object.keys(t.module_generators_dict);let i=this.var_spec_list.map(e=>e[0]);this._ring=new monomial_ring(i,i,this.var_degree_dict,this.module_generators_dict);for(let e of t._tuples_to_ids){let t=e[0],i=e[1],r=this._ring.getElementFromVector(t.exponent_vector,t._module_generator);this._add_class(r,s.get(i))}}toJSON(){let e={};return e.var_degree_dict=this.var_degree_dict,e.var_spec_list=this.var_spec_list,e.module_generators_dict=this.module_generators_dict,e._tuples_to_ids=this._tuples_to_ids,e}_add_class(e,t){this.length++;let s=e.getName();this._tuples_to_classes.set(e,t),this._strings_to_classes.set(s,t),this._tuples_to_strings.set(e,s),this._strings_to_tuples.set(s,e),this._tuples_to_ids.set(e,t.unique_id),t.vector=e,t.vector.length=this.var_spec_list.length}_ensure_vect(e){if(!Array.isArray(e))if("string"==typeof e){if(!this._strings_to_classes.has(e))throw new Error("Invalid variable name");e=this._strings_to_tuples.get(e)}else e=this._ring._exponent_map_to_vector(e);return e}addStructline(e,t){e=this._ring.getElement(e);for(let s of this){let i=s[1],r=this.get(s[0].multiply(e));if(void 0!==r){let e=this.sseq.addStructline(i,r);t&&t(e)}}return this._structlines.push({offset:e,callback:t}),this.sseq.emit("update"),this}addDifferential(e,t,s,i){t=this._ring.getElement(t);for(let r of this){let n=r[0],o=r[1],_=this.get(r[0].multiply(t));if(s(n))if(_){let t=this.sseq.addDifferential(o,_,e);void 0!==i&&i(t,n)}else o.getPage()>e&&o.setPage(e)}return this}has(e){return!!this._strings_to_classes.has(e)||(e=this._ensure_vect(e),this._tuples_to_classes.has(e))}get(e,t){if(this._strings_to_classes.has(e))return this._strings_to_classes.get(e);if(this._tuples_to_classes.has(e))return this._tuples_to_classes.get(e);try{if(e=this._ring.getElement(e),this._tuples_to_classes.has(e))return this._tuples_to_classes.get(e)}catch(e){}return t}static _validateVarSpec(e,t,s){let i="Invalid variable specification '"+e+"' at position "+s+".";if(!Array.isArray(e))throw i+" Variable specification must be a list.";if(e.length<2||e.length>4)throw i+" Variable specification should be of length at least 2 and at most 4.";if("string"!=typeof e[0])throw i+" First entry of variable specification should be a string, the name of a variable.";if(!t.hasOwnProperty(e[0]))throw i+" Variable '"+e[0]+"' does not have an entry in the degree dictionary";for(let t=1;t<e.length;t++)if(!Number.isInteger(e[t]))throw i+" Expecting an integer in position '"+t+"'."}}monomial_basis.prototype[Symbol.iterator]=function*(){for(let e of this._tuples_to_classes)yield e},exports.monomial_basis=monomial_basis;class slice_basis{constructor(e,t,s,i){this.sseq=e,this._tuples_to_slices=new StringifyingMap,this.length=0,this.var_degree_dict=t,this.var_spec_list=s;let r=[],n=[],o=[],_=[];for(let e=0;e<s.length;e++){let i=s[e],l=i[0];monomial_basis._validateVarSpec(i,t,e),r.push(l),t[l].name?n.push(t[l].name):n.push(l),o.push(t[l].degree),_.push(range(...i.slice(1)))}this._stem_list=o,this._range_list=_;let l=Object.assign({},...Object.keys(t).map(e=>({[e]:[t[e],0]})));this._ring=new monomial_ring(r,n,l);for(let e of product(..._)){let t=this._ring.getElementFromVector(e);t.getDegree()[0],t.getName();this._add_slice(t,i)}}_add_slice(e,t){this.length++;e.exponent_vector,e.getName();this._tuples_to_slices.set(e,t(this.sseq,e))}addStructline(e,t,s){e=this._ring.getElement(e);for(let i of this){let r=i[1],n=this.get(i[0].multiply(e));if(void 0!==n)for(let e of Object.keys(r))if(n.hasOwnProperty(e+t)){let i=this.sseq.addStructline(r.get(e),n.get(e+t));s&&s(i)}}return this}addDifferential(e,t,s,i){let r=this._ring.getElement(t);for(let t of this){let n=t[0],o=t[1],_=this.get(n.multiply(r));for(let t of o){let r=t[0];if(s(n,r,o.get(r).y)){let t=o.get(r);if(_&&_.has(r-1)){let s=this.sseq.addDifferential(t,_.get(r-1),e);void 0!==i&&i(s,n)}else!_&&t.getPage()>e&&t.setPage(e)}}}return this}addDifferentialLeibniz(e,t,s,i,r,n,o){t=this._ensure_vect(t),i=this._ensure_vect(i);for(let _ of product(...n.map(e=>range(...e)))){let n=vectorLinearCombination(r,_),l=n.pop()+s,a=vectorSum(t,n);if(!this.has(a)||!this.get(a).has(l))continue;let h=this.get(a).get(l),c=vectorSum(i,n);if(this.has(c)&&this.get(c).has(l-1)){let t=this.get(c).get(l-1),s=this.sseq.addDifferential(h,t,e);void 0!==o&&o(s)}else!this.has(c)&&h.getPage()>e&&h.setPage(e)}}has(e){return e=this._ensure_vect(e),this._tuples_to_slices.has(e)}get(e,t){if(this._tuples_to_slices.has(e))return this._tuples_to_slices.get(e);try{if(e=this._ring.getElement(e),this._tuples_to_slices.has(e))return this._tuples_to_slices.get(e)}catch(e){}return t}}slice_basis.prototype[Symbol.iterator]=function*(){for(let e of this._tuples_to_slices)yield e},slice_basis.prototype._ensure_vect=monomial_basis.prototype._ensure_vect,exports.slice_basis=slice_basis;

},{"./StringifyingMap.js":37}]},{},[41]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/d3-array/src/ascending.js
/* harmony default export */ var ascending = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/bisector.js


/* harmony default export */ var bisector = (function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function(d, x) {
    return ascending(f(d), x);
  };
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/bisect.js



var ascendingBisect = bisector(ascending);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ var bisect = (bisectRight);

// CONCATENATED MODULE: ./node_modules/d3-array/src/count.js
function count(values, valueof) {
  let count = 0;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null && value >= value) {
        ++count;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && value >= value) {
        ++count;
      }
    }
  }
  return count;
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/cross.js
function cross_length(array) {
  return array.length | 0;
}

function empty(length) {
  return !(length > 0);
}

function arrayify(values) {
  return typeof values !== "object" || "length" in values ? values : Array.from(values);
}

function reducer(reduce) {
  return values => reduce(...values);
}

function cross(...values) {
  const reduce = typeof values[values.length - 1] === "function" && reducer(values.pop());
  values = values.map(arrayify);
  const lengths = values.map(cross_length);
  const j = values.length - 1;
  const index = new Array(j + 1).fill(0);
  const product = [];
  if (j < 0 || lengths.some(empty)) return product;
  while (true) {
    product.push(index.map((j, i) => values[i][j]));
    let i = j;
    while (++index[i] === lengths[i]) {
      if (i === 0) return reduce ? product.map(reduce) : product;
      index[i--] = 0;
    }
  }
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/descending.js
/* harmony default export */ var descending = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/variance.js
function variance(values, valueof) {
  let count = 0;
  let delta;
  let mean = 0;
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        delta = value - mean;
        mean += delta / ++count;
        sum += delta * (value - mean);
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        delta = value - mean;
        mean += delta / ++count;
        sum += delta * (value - mean);
      }
    }
  }
  if (count > 1) return sum / (count - 1);
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/deviation.js


function deviation(values, valueof) {
  const v = variance(values, valueof);
  return v ? Math.sqrt(v) : v;
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/extent.js
/* harmony default export */ var extent = (function(values, valueof) {
  let min;
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  }
  return [min, max];
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/identity.js
/* harmony default export */ var identity = (function(x) {
  return x;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/group.js


function group(values, ...keys) {
  return nest(values, identity, identity, keys);
}

function groups(values, ...keys) {
  return nest(values, Array.from, identity, keys);
}

function rollup(values, reduce, ...keys) {
  return nest(values, identity, reduce, keys);
}

function rollups(values, reduce, ...keys) {
  return nest(values, Array.from, reduce, keys);
}

function nest(values, map, reduce, keys) {
  return (function regroup(values, i) {
    if (i >= keys.length) return reduce(values);
    const groups = new Map();
    const keyof = keys[i++];
    let index = -1;
    for (const value of values) {
      const key = keyof(value, ++index, values);
      const group = groups.get(key);
      if (group) group.push(value);
      else groups.set(key, [value]);
    }
    for (const [key, values] of groups) {
      groups.set(key, regroup(values, i));
    }
    return map(groups);
  })(values, 0);
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/array.js
var array_array = Array.prototype;

var slice = array_array.slice;
var map = array_array.map;

// CONCATENATED MODULE: ./node_modules/d3-array/src/constant.js
/* harmony default export */ var constant = (function(x) {
  return function() {
    return x;
  };
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/range.js
/* harmony default export */ var range = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/ticks.js
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ var ticks = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/threshold/sturges.js
/* harmony default export */ var sturges = (function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/bin.js









/* harmony default export */ var src_bin = (function() {
  var value = identity,
      domain = extent,
      threshold = sturges;

  function histogram(data) {
    if (!Array.isArray(data)) data = Array.from(data);

    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = tickStep(x0, x1, tz);
      tz = range(Math.ceil(x0 / tz) * tz, x1, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[bisect(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : constant([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? constant(slice.call(_)) : constant(_), histogram) : threshold;
  };

  return histogram;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/number.js
/* harmony default export */ var number = (function(x) {
  return x === null ? NaN : +x;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/quantile.js


function quantile(values, p, valueof = number) {
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/threshold/freedmanDiaconis.js





/* harmony default export */ var freedmanDiaconis = (function(values, min, max) {
  values = map.call(values, number).sort(ascending);
  return Math.ceil((max - min) / (2 * (quantile(values, 0.75) - quantile(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/threshold/scott.js


/* harmony default export */ var scott = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * deviation(values) * Math.pow(values.length, -1 / 3)));
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/max.js
function max_max(values, valueof) {
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  }
  return max;
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/maxIndex.js
function maxIndex(values, valueof) {
  let max;
  let maxIndex = -1;
  let index = -1;
  if (valueof === undefined) {
    for (const value of values) {
      ++index;
      if (value != null
          && (max < value || (max === undefined && value >= value))) {
        max = value, maxIndex = index;
      }
    }
  } else {
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (max < value || (max === undefined && value >= value))) {
        max = value, maxIndex = index;
      }
    }
  }
  return maxIndex;
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/mean.js
function mean(values, valueof) {
  let count = 0;
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        ++count, sum += value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        ++count, sum += value;
      }
    }
  }
  if (count) return sum / count;
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/quickselect.js


// Based on https://github.com/mourner/quickselect
// ISC license, Copyright 2018 Vladimir Agafonkin.
function quickselect(array, k, left = 0, right = array.length - 1, compare = ascending) {
  while (right > left) {
    if (right - left > 600) {
      const n = right - left + 1;
      const m = k - left + 1;
      const z = Math.log(n);
      const s = 0.5 * Math.exp(2 * z / 3);
      const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
      const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
      const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
      quickselect(array, k, newLeft, newRight, compare);
    }

    const t = array[k];
    let i = left;
    let j = right;

    swap(array, left, k);
    if (compare(array[right], t) > 0) swap(array, left, right);

    while (i < j) {
      swap(array, i, j), ++i, --j;
      while (compare(array[i], t) < 0) ++i;
      while (compare(array[j], t) > 0) --j;
    }

    if (compare(array[left], t) === 0) swap(array, left, j);
    else ++j, swap(array, j, right);

    if (j <= k) left = j + 1;
    if (k <= j) right = j - 1;
  }
  return array;
}

function swap(array, i, j) {
  const t = array[i];
  array[i] = array[j];
  array[j] = t;
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/median.js



function* numbers(values, valueof) {
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}

/* harmony default export */ var median = (function(values, valueof) {
  values = Float64Array.from(numbers(values, valueof));
  if (!values.length) return;
  const n = values.length;
  const i = n >> 1;
  quickselect(values, i - 1, 0);
  if ((n & 1) === 0) quickselect(values, i, i);
  return quantile(values, 0.5);
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/merge.js
function* flatten(arrays) {
  for (const array of arrays) {
    yield* array;
  }
}

function merge(arrays) {
  return Array.from(flatten(arrays));
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/min.js
function min_min(values, valueof) {
  let min;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  }
  return min;
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/minIndex.js
function minIndex_minIndex(values, valueof) {
  let min;
  let minIndex = -1;
  let index = -1;
  if (valueof === undefined) {
    for (const value of values) {
      ++index;
      if (value != null
          && (min > value || (min === undefined && value >= value))) {
        min = value, minIndex = index;
      }
    }
  } else {
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (min > value || (min === undefined && value >= value))) {
        min = value, minIndex = index;
      }
    }
  }
  return minIndex;
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/pairs.js
function pairs(values, pairof = pair) {
  const pairs = [];
  let previous;
  let first = false;
  for (const value of values) {
    if (first) pairs.push(pairof(previous, value));
    previous = value;
    first = true;
  }
  return pairs;
}

function pair(a, b) {
  return [a, b];
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/permute.js
/* harmony default export */ var permute = (function(source, keys) {
  return Array.from(keys, key => source[key]);
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/least.js


function least(values, compare = ascending) {
  let min;
  let defined = false;
  if (compare.length === 1) {
    let minValue;
    for (const element of values) {
      const value = compare(element);
      if (defined
          ? ascending(value, minValue) < 0
          : ascending(value, value) === 0) {
        min = element;
        minValue = value;
        defined = true;
      }
    }
  } else {
    for (const value of values) {
      if (defined
          ? compare(value, min) < 0
          : compare(value, value) === 0) {
        min = value;
        defined = true;
      }
    }
  }
  return min;
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/leastIndex.js


function leastIndex(values, compare = ascending) {
  let min;
  let minIndex = -1;
  let index = -1;
  if (compare.length === 1) {
    for (const element of values) {
      ++index;
      const value = compare(element);
      if (minIndex < 0
          ? ascending(value, value) === 0
          : ascending(value, min) < 0) {
        min = value;
        minIndex = index;
      }
    }
  } else {
    for (const value of values) {
      ++index;
      if (minIndex < 0
          ? compare(value, value) === 0
          : compare(value, min) < 0) {
        min = value;
        minIndex = index;
      }
    }
  }
  return minIndex;
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/scan.js


function scan(values, compare) {
  const index = leastIndex(values, compare);
  return index < 0 ? undefined : index;
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/shuffle.js
function shuffle(array, i0 = 0, i1 = array.length) {
  var m = i1 - (i0 = +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/sum.js
function sum(values, valueof) {
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value = +value) {
        sum += value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if (value = +valueof(value, ++index, values)) {
        sum += value;
      }
    }
  }
  return sum;
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/transpose.js


/* harmony default export */ var src_transpose = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = min_min(matrix, transpose_length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function transpose_length(d) {
  return d.length;
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/zip.js


/* harmony default export */ var zip = (function() {
  return src_transpose(arguments);
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/index.js
/* concated harmony reexport bisect */__webpack_require__.d(__webpack_exports__, "bisect", function() { return bisect; });
/* concated harmony reexport bisectRight */__webpack_require__.d(__webpack_exports__, "bisectRight", function() { return bisectRight; });
/* concated harmony reexport bisectLeft */__webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return bisectLeft; });
/* concated harmony reexport ascending */__webpack_require__.d(__webpack_exports__, "ascending", function() { return ascending; });
/* concated harmony reexport bisector */__webpack_require__.d(__webpack_exports__, "bisector", function() { return bisector; });
/* concated harmony reexport count */__webpack_require__.d(__webpack_exports__, "count", function() { return count; });
/* concated harmony reexport cross */__webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* concated harmony reexport descending */__webpack_require__.d(__webpack_exports__, "descending", function() { return descending; });
/* concated harmony reexport deviation */__webpack_require__.d(__webpack_exports__, "deviation", function() { return deviation; });
/* concated harmony reexport extent */__webpack_require__.d(__webpack_exports__, "extent", function() { return extent; });
/* concated harmony reexport group */__webpack_require__.d(__webpack_exports__, "group", function() { return group; });
/* concated harmony reexport groups */__webpack_require__.d(__webpack_exports__, "groups", function() { return groups; });
/* concated harmony reexport rollup */__webpack_require__.d(__webpack_exports__, "rollup", function() { return rollup; });
/* concated harmony reexport rollups */__webpack_require__.d(__webpack_exports__, "rollups", function() { return rollups; });
/* concated harmony reexport bin */__webpack_require__.d(__webpack_exports__, "bin", function() { return src_bin; });
/* concated harmony reexport histogram */__webpack_require__.d(__webpack_exports__, "histogram", function() { return src_bin; });
/* concated harmony reexport thresholdFreedmanDiaconis */__webpack_require__.d(__webpack_exports__, "thresholdFreedmanDiaconis", function() { return freedmanDiaconis; });
/* concated harmony reexport thresholdScott */__webpack_require__.d(__webpack_exports__, "thresholdScott", function() { return scott; });
/* concated harmony reexport thresholdSturges */__webpack_require__.d(__webpack_exports__, "thresholdSturges", function() { return sturges; });
/* concated harmony reexport max */__webpack_require__.d(__webpack_exports__, "max", function() { return max_max; });
/* concated harmony reexport maxIndex */__webpack_require__.d(__webpack_exports__, "maxIndex", function() { return maxIndex; });
/* concated harmony reexport mean */__webpack_require__.d(__webpack_exports__, "mean", function() { return mean; });
/* concated harmony reexport median */__webpack_require__.d(__webpack_exports__, "median", function() { return median; });
/* concated harmony reexport merge */__webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* concated harmony reexport min */__webpack_require__.d(__webpack_exports__, "min", function() { return min_min; });
/* concated harmony reexport minIndex */__webpack_require__.d(__webpack_exports__, "minIndex", function() { return minIndex_minIndex; });
/* concated harmony reexport pairs */__webpack_require__.d(__webpack_exports__, "pairs", function() { return pairs; });
/* concated harmony reexport permute */__webpack_require__.d(__webpack_exports__, "permute", function() { return permute; });
/* concated harmony reexport quantile */__webpack_require__.d(__webpack_exports__, "quantile", function() { return quantile; });
/* concated harmony reexport quickselect */__webpack_require__.d(__webpack_exports__, "quickselect", function() { return quickselect; });
/* concated harmony reexport range */__webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* concated harmony reexport least */__webpack_require__.d(__webpack_exports__, "least", function() { return least; });
/* concated harmony reexport leastIndex */__webpack_require__.d(__webpack_exports__, "leastIndex", function() { return leastIndex; });
/* concated harmony reexport scan */__webpack_require__.d(__webpack_exports__, "scan", function() { return scan; });
/* concated harmony reexport shuffle */__webpack_require__.d(__webpack_exports__, "shuffle", function() { return shuffle; });
/* concated harmony reexport sum */__webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
/* concated harmony reexport ticks */__webpack_require__.d(__webpack_exports__, "ticks", function() { return ticks; });
/* concated harmony reexport tickIncrement */__webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return tickIncrement; });
/* concated harmony reexport tickStep */__webpack_require__.d(__webpack_exports__, "tickStep", function() { return tickStep; });
/* concated harmony reexport transpose */__webpack_require__.d(__webpack_exports__, "transpose", function() { return src_transpose; });
/* concated harmony reexport variance */__webpack_require__.d(__webpack_exports__, "variance", function() { return variance; });
/* concated harmony reexport zip */__webpack_require__.d(__webpack_exports__, "zip", function() { return zip; });









 // Deprecated; use bin.

















 // Deprecated; use leastIndex.








/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/d3-selection/src/index.js + 50 modules
var src = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/d3-dispatch/src/index.js + 1 modules
var d3_dispatch_src = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/d3-timer/src/index.js + 3 modules
var d3_timer_src = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/schedule.js



var emptyOn = Object(d3_dispatch_src["dispatch"])("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

/* harmony default export */ var transition_schedule = (function(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
});

function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = Object(d3_timer_src["timer"])(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return Object(d3_timer_src["timeout"])(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    Object(d3_timer_src["timeout"])(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}

// CONCATENATED MODULE: ./node_modules/d3-transition/src/interrupt.js


/* harmony default export */ var interrupt = (function(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/selection/interrupt.js


/* harmony default export */ var selection_interrupt = (function(name) {
  return this.each(function() {
    interrupt(this, name);
  });
});

// EXTERNAL MODULE: ./node_modules/d3-interpolate/src/index.js + 24 modules
var d3_interpolate_src = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/tween.js


function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = set(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = set(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

/* harmony default export */ var transition_tween = (function(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = get(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
});

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = set(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return get(node, id).value[name];
  };
}

// EXTERNAL MODULE: ./node_modules/d3-color/src/index.js + 5 modules
var d3_color_src = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/interpolate.js



/* harmony default export */ var transition_interpolate = (function(a, b) {
  var c;
  return (typeof b === "number" ? d3_interpolate_src["interpolateNumber"]
      : b instanceof d3_color_src["color"] ? d3_interpolate_src["interpolateRgb"]
      : (c = Object(d3_color_src["color"])(b)) ? (b = c, d3_interpolate_src["interpolateRgb"])
      : d3_interpolate_src["interpolateString"])(a, b);
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/attr.js





function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

/* harmony default export */ var attr = (function(name, value) {
  var fullname = Object(src["namespace"])(name), i = fullname === "transform" ? d3_interpolate_src["interpolateTransformSvg"] : transition_interpolate;
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/attrTween.js


function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i(t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i(t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ var transition_attrTween = (function(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = Object(src["namespace"])(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/delay.js


function delayFunction(id, value) {
  return function() {
    init(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    init(this, id).delay = value;
  };
}

/* harmony default export */ var delay = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : get(this.node(), id).delay;
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/duration.js


function durationFunction(id, value) {
  return function() {
    set(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    set(this, id).duration = value;
  };
}

/* harmony default export */ var duration = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : get(this.node(), id).duration;
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/ease.js


function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    set(this, id).ease = value;
  };
}

/* harmony default export */ var ease = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : get(this.node(), id).ease;
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/filter.js



/* harmony default export */ var filter = (function(match) {
  if (typeof match !== "function") match = Object(src["matcher"])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Transition(subgroups, this._parents, this._name, this._id);
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/merge.js


/* harmony default export */ var transition_merge = (function(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Transition(merges, this._parents, this._name, this._id);
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/on.js


function on_start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = on_start(name) ? init : set;
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/* harmony default export */ var transition_on = (function(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? get(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/remove.js
function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

/* harmony default export */ var transition_remove = (function() {
  return this.on("end.remove", removeFunction(this._id));
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/select.js




/* harmony default export */ var transition_select = (function(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = Object(src["selector"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        transition_schedule(subgroup[i], name, id, i, subgroup, get(node, id));
      }
    }
  }

  return new Transition(subgroups, this._parents, name, id);
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/selectAll.js




/* harmony default export */ var selectAll = (function(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = Object(src["selectorAll"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = get(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            transition_schedule(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new Transition(subgroups, parents, name, id);
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/selection.js


var Selection = src["selection"].prototype.constructor;

/* harmony default export */ var selection = (function() {
  return new Selection(this._groups, this._parents);
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/style.js






function styleNull(name, interpolate) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = Object(src["style"])(this, name),
        string1 = (this.style.removeProperty(name), Object(src["style"])(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = Object(src["style"])(this, name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = Object(src["style"])(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), Object(src["style"])(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
  return function() {
    var schedule = set(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

/* harmony default export */ var style = (function(name, value, priority) {
  var i = (name += "") === "transform" ? d3_interpolate_src["interpolateTransformCss"] : transition_interpolate;
  return value == null ? this
      .styleTween(name, styleNull(name, i))
      .on("end.style." + name, styleRemove(name))
    : typeof value === "function" ? this
      .styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value)))
      .each(styleMaybeRemove(this._id, name))
    : this
      .styleTween(name, styleConstant(name, i, value), priority)
      .on("end.style." + name, null);
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/styleTween.js
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i(t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ var transition_styleTween = (function(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/text.js


function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/* harmony default export */ var transition_text = (function(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction(tweenValue(this, "text", value))
      : textConstant(value == null ? "" : value + ""));
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/transition.js



/* harmony default export */ var transition_transition = (function() {
  var name = this._name,
      id0 = this._id,
      id1 = newId();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = get(node, id0);
        transition_schedule(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new Transition(groups, this._parents, name, id1);
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/end.js


/* harmony default export */ var transition_end = (function() {
  var on0, on1, that = this, id = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = {value: reject},
        end = {value: function() { if (--size === 0) resolve(); }};

    that.each(function() {
      var schedule = set(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });
  });
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/index.js




















var transition_id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function src_transition_transition(name) {
  return Object(src["selection"])().transition(name);
}

function newId() {
  return ++transition_id;
}

var selection_prototype = src["selection"].prototype;

Transition.prototype = src_transition_transition.prototype = {
  constructor: Transition,
  select: transition_select,
  selectAll: selectAll,
  filter: filter,
  merge: transition_merge,
  selection: selection,
  transition: transition_transition,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: transition_on,
  attr: attr,
  attrTween: transition_attrTween,
  style: style,
  styleTween: transition_styleTween,
  text: transition_text,
  remove: transition_remove,
  tween: transition_tween,
  delay: delay,
  duration: duration,
  ease: ease,
  end: transition_end
};

// EXTERNAL MODULE: ./node_modules/d3-ease/src/index.js + 10 modules
var d3_ease_src = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/d3-transition/src/selection/transition.js





var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: d3_ease_src["easeCubicInOut"]
};

function transition_inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      return defaultTiming.time = Object(d3_timer_src["now"])(), defaultTiming;
    }
  }
  return timing;
}

/* harmony default export */ var selection_transition = (function(name) {
  var id,
      timing;

  if (name instanceof Transition) {
    id = name._id, name = name._name;
  } else {
    id = newId(), (timing = defaultTiming).time = Object(d3_timer_src["now"])(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        transition_schedule(node, name, id, i, group, timing || transition_inherit(node, id));
      }
    }
  }

  return new Transition(groups, this._parents, name, id);
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/selection/index.js




src["selection"].prototype.interrupt = selection_interrupt;
src["selection"].prototype.transition = selection_transition;

// CONCATENATED MODULE: ./node_modules/d3-transition/src/active.js



var root = [null];

/* harmony default export */ var src_active = (function(node, name) {
  var schedules = node.__transition,
      schedule,
      i;

  if (schedules) {
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).state > SCHEDULED && schedule.name === name) {
        return new Transition([[node]], root, name, +i);
      }
    }
  }

  return null;
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/index.js
/* concated harmony reexport transition */__webpack_require__.d(__webpack_exports__, "transition", function() { return src_transition_transition; });
/* concated harmony reexport active */__webpack_require__.d(__webpack_exports__, "active", function() { return src_active; });
/* concated harmony reexport interrupt */__webpack_require__.d(__webpack_exports__, "interrupt", function() { return interrupt; });






/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/d3-format/src/formatDecimal.js
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
/* harmony default export */ var formatDecimal = (function(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
});

// CONCATENATED MODULE: ./node_modules/d3-format/src/exponent.js


/* harmony default export */ var src_exponent = (function(x) {
  return x = formatDecimal(Math.abs(x)), x ? x[1] : NaN;
});

// CONCATENATED MODULE: ./node_modules/d3-format/src/formatGroup.js
/* harmony default export */ var formatGroup = (function(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
});

// CONCATENATED MODULE: ./node_modules/d3-format/src/formatNumerals.js
/* harmony default export */ var formatNumerals = (function(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
});

// CONCATENATED MODULE: ./node_modules/d3-format/src/formatSpecifier.js
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  return new FormatSpecifier(specifier);
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  this.fill = match[1] || " ";
  this.align = match[2] || ">";
  this.sign = match[3] || "-";
  this.symbol = match[4] || "";
  this.zero = !!match[5];
  this.width = match[6] && +match[6];
  this.comma = !!match[7];
  this.precision = match[8] && +match[8].slice(1);
  this.trim = !!match[9];
  this.type = match[10] || "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width == null ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};

// CONCATENATED MODULE: ./node_modules/d3-format/src/formatTrim.js
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
/* harmony default export */ var formatTrim = (function(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (i0 > 0) { if (!+s[i]) break out; i0 = 0; } break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
});

// CONCATENATED MODULE: ./node_modules/d3-format/src/formatPrefixAuto.js


var prefixExponent;

/* harmony default export */ var formatPrefixAuto = (function(x, p) {
  var d = formatDecimal(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + formatDecimal(x, Math.max(0, p + i - 1))[0]; // less than 1y!
});

// CONCATENATED MODULE: ./node_modules/d3-format/src/formatRounded.js


/* harmony default export */ var formatRounded = (function(x, p) {
  var d = formatDecimal(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
});

// CONCATENATED MODULE: ./node_modules/d3-format/src/formatTypes.js



/* harmony default export */ var formatTypes = ({
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": function(x) { return Math.round(x).toString(10); },
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return formatRounded(x * 100, p); },
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
});

// CONCATENATED MODULE: ./node_modules/d3-format/src/identity.js
/* harmony default export */ var identity = (function(x) {
  return x;
});

// CONCATENATED MODULE: ./node_modules/d3-format/src/locale.js









var prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

/* harmony default export */ var src_locale = (function(locale) {
  var group = locale.grouping && locale.thousands ? formatGroup(locale.grouping, locale.thousands) : identity,
      currency = locale.currency,
      decimal = locale.decimal,
      numerals = locale.numerals ? formatNumerals(locale.numerals) : identity,
      percent = locale.percent || "%";

  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!formatTypes[type]) precision == null && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = formatTypes[type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision == null ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Perform the initial formatting.
        var valueNegative = value < 0;
        value = formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = formatTrim(value);

        // If a negative value rounds to zero during formatting, treat as positive.
        if (valueNegative && +value === 0) valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(src_exponent(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
});

// CONCATENATED MODULE: ./node_modules/d3-format/src/defaultLocale.js


var defaultLocale_locale;
var defaultLocale_format;
var defaultLocale_formatPrefix;

defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  defaultLocale_locale = src_locale(definition);
  defaultLocale_format = defaultLocale_locale.format;
  defaultLocale_formatPrefix = defaultLocale_locale.formatPrefix;
  return defaultLocale_locale;
}

// CONCATENATED MODULE: ./node_modules/d3-format/src/precisionFixed.js


/* harmony default export */ var precisionFixed = (function(step) {
  return Math.max(0, -src_exponent(Math.abs(step)));
});

// CONCATENATED MODULE: ./node_modules/d3-format/src/precisionPrefix.js


/* harmony default export */ var precisionPrefix = (function(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(src_exponent(value) / 3))) * 3 - src_exponent(Math.abs(step)));
});

// CONCATENATED MODULE: ./node_modules/d3-format/src/precisionRound.js


/* harmony default export */ var precisionRound = (function(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, src_exponent(max) - src_exponent(step)) + 1;
});

// CONCATENATED MODULE: ./node_modules/d3-format/src/index.js
/* concated harmony reexport formatDefaultLocale */__webpack_require__.d(__webpack_exports__, "formatDefaultLocale", function() { return defaultLocale; });
/* concated harmony reexport format */__webpack_require__.d(__webpack_exports__, "format", function() { return defaultLocale_format; });
/* concated harmony reexport formatPrefix */__webpack_require__.d(__webpack_exports__, "formatPrefix", function() { return defaultLocale_formatPrefix; });
/* concated harmony reexport formatLocale */__webpack_require__.d(__webpack_exports__, "formatLocale", function() { return src_locale; });
/* concated harmony reexport formatSpecifier */__webpack_require__.d(__webpack_exports__, "formatSpecifier", function() { return formatSpecifier; });
/* concated harmony reexport precisionFixed */__webpack_require__.d(__webpack_exports__, "precisionFixed", function() { return precisionFixed; });
/* concated harmony reexport precisionPrefix */__webpack_require__.d(__webpack_exports__, "precisionPrefix", function() { return precisionPrefix; });
/* concated harmony reexport precisionRound */__webpack_require__.d(__webpack_exports__, "precisionRound", function() { return precisionRound; });








/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/d3-dispatch/src/index.js + 1 modules
var src = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/d3-selection/src/index.js + 50 modules
var d3_selection_src = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/d3-drag/src/noevent.js


function nopropagation() {
  d3_selection_src["event"].stopImmediatePropagation();
}

/* harmony default export */ var noevent = (function() {
  d3_selection_src["event"].preventDefault();
  d3_selection_src["event"].stopImmediatePropagation();
});

// CONCATENATED MODULE: ./node_modules/d3-drag/src/nodrag.js



/* harmony default export */ var nodrag = (function(view) {
  var root = view.document.documentElement,
      selection = Object(d3_selection_src["select"])(view).on("dragstart.drag", noevent, true);
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", noevent, true);
  } else {
    root.__noselect = root.style.MozUserSelect;
    root.style.MozUserSelect = "none";
  }
});

function yesdrag(view, noclick) {
  var root = view.document.documentElement,
      selection = Object(d3_selection_src["select"])(view).on("dragstart.drag", null);
  if (noclick) {
    selection.on("click.drag", noevent, true);
    setTimeout(function() { selection.on("click.drag", null); }, 0);
  }
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", null);
  } else {
    root.style.MozUserSelect = root.__noselect;
    delete root.__noselect;
  }
}

// CONCATENATED MODULE: ./node_modules/d3-drag/src/constant.js
/* harmony default export */ var constant = (function(x) {
  return function() {
    return x;
  };
});

// CONCATENATED MODULE: ./node_modules/d3-drag/src/event.js
function DragEvent(target, type, subject, id, active, x, y, dx, dy, dispatch) {
  this.target = target;
  this.type = type;
  this.subject = subject;
  this.identifier = id;
  this.active = active;
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this._ = dispatch;
}

DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};

// CONCATENATED MODULE: ./node_modules/d3-drag/src/drag.js







// Ignore right-click, since that should open the context menu.
function defaultFilter() {
  return !d3_selection_src["event"].button;
}

function defaultContainer() {
  return this.parentNode;
}

function defaultSubject(d) {
  return d == null ? {x: d3_selection_src["event"].x, y: d3_selection_src["event"].y} : d;
}

function defaultTouchable() {
  return "ontouchstart" in this;
}

/* harmony default export */ var src_drag = (function() {
  var filter = defaultFilter,
      container = defaultContainer,
      subject = defaultSubject,
      touchable = defaultTouchable,
      gestures = {},
      listeners = Object(src["dispatch"])("start", "drag", "end"),
      active = 0,
      mousedownx,
      mousedowny,
      mousemoving,
      touchending,
      clickDistance2 = 0;

  function drag(selection) {
    selection
        .on("mousedown.drag", mousedowned)
      .filter(touchable)
        .on("touchstart.drag", touchstarted)
        .on("touchmove.drag", touchmoved)
        .on("touchend.drag touchcancel.drag", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  function mousedowned() {
    if (touchending || !filter.apply(this, arguments)) return;
    var gesture = beforestart("mouse", container.apply(this, arguments), d3_selection_src["mouse"], this, arguments);
    if (!gesture) return;
    Object(d3_selection_src["select"])(d3_selection_src["event"].view).on("mousemove.drag", mousemoved, true).on("mouseup.drag", mouseupped, true);
    nodrag(d3_selection_src["event"].view);
    nopropagation();
    mousemoving = false;
    mousedownx = d3_selection_src["event"].clientX;
    mousedowny = d3_selection_src["event"].clientY;
    gesture("start");
  }

  function mousemoved() {
    noevent();
    if (!mousemoving) {
      var dx = d3_selection_src["event"].clientX - mousedownx, dy = d3_selection_src["event"].clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag");
  }

  function mouseupped() {
    Object(d3_selection_src["select"])(d3_selection_src["event"].view).on("mousemove.drag mouseup.drag", null);
    yesdrag(d3_selection_src["event"].view, mousemoving);
    noevent();
    gestures.mouse("end");
  }

  function touchstarted() {
    if (!filter.apply(this, arguments)) return;
    var touches = d3_selection_src["event"].changedTouches,
        c = container.apply(this, arguments),
        n = touches.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(touches[i].identifier, c, d3_selection_src["touch"], this, arguments)) {
        nopropagation();
        gesture("start");
      }
    }
  }

  function touchmoved() {
    var touches = d3_selection_src["event"].changedTouches,
        n = touches.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        noevent();
        gesture("drag");
      }
    }
  }

  function touchended() {
    var touches = d3_selection_src["event"].changedTouches,
        n = touches.length, i, gesture;

    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        nopropagation();
        gesture("end");
      }
    }
  }

  function beforestart(id, container, point, that, args) {
    var p = point(container, id), s, dx, dy,
        sublisteners = listeners.copy();

    if (!Object(d3_selection_src["customEvent"])(new DragEvent(drag, "beforestart", s, id, active, p[0], p[1], 0, 0, sublisteners), function() {
      if ((d3_selection_src["event"].subject = s = subject.apply(that, args)) == null) return false;
      dx = s.x - p[0] || 0;
      dy = s.y - p[1] || 0;
      return true;
    })) return;

    return function gesture(type) {
      var p0 = p, n;
      switch (type) {
        case "start": gestures[id] = gesture, n = active++; break;
        case "end": delete gestures[id], --active; // nobreak
        case "drag": p = point(container, id), n = active; break;
      }
      Object(d3_selection_src["customEvent"])(new DragEvent(drag, type, s, id, n, p[0] + dx, p[1] + dy, p[0] - p0[0], p[1] - p0[1], sublisteners), sublisteners.apply, sublisteners, [type, that, args]);
    };
  }

  drag.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant(!!_), drag) : filter;
  };

  drag.container = function(_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : constant(_), drag) : container;
  };

  drag.subject = function(_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : constant(_), drag) : subject;
  };

  drag.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), drag) : touchable;
  };

  drag.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };

  drag.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
  };

  return drag;
});

// CONCATENATED MODULE: ./node_modules/d3-drag/src/index.js
/* concated harmony reexport drag */__webpack_require__.d(__webpack_exports__, "drag", function() { return src_drag; });
/* concated harmony reexport dragDisable */__webpack_require__.d(__webpack_exports__, "dragDisable", function() { return nodrag; });
/* concated harmony reexport dragEnable */__webpack_require__.d(__webpack_exports__, "dragEnable", function() { return yesdrag; });




/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/d3-time/src/index.js + 16 modules
var src = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/d3-time-format/src/locale.js


function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newYear(y) {
  return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, newDate) {
    return function(string) {
      var d = newYear(1900),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newYear(d.y)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? src["utcMonday"].ceil(week) : Object(src["utcMonday"])(week);
          week = src["utcDay"].offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = newDate(newYear(d.y)), day = week.getDay();
          week = day > 4 || day === 0 ? src["timeMonday"].ceil(week) : Object(src["timeMonday"])(week);
          week = src["timeDay"].offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return newDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", localDate);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier, utcDate);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  var map = {}, i = -1, n = names.length;
  while (++i < n) map[names[i].toLowerCase()] = i;
  return map;
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = (+n[0]) * 1000, i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + src["timeDay"].count(Object(src["timeYear"])(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(src["timeSunday"].count(Object(src["timeYear"])(d), d), p, 2);
}

function formatWeekNumberISO(d, p) {
  var day = d.getDay();
  d = (day >= 4 || day === 0) ? Object(src["timeThursday"])(d) : src["timeThursday"].ceil(d);
  return pad(src["timeThursday"].count(Object(src["timeYear"])(d), d) + (Object(src["timeYear"])(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(src["timeMonday"].count(Object(src["timeYear"])(d), d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + src["utcDay"].count(Object(src["utcYear"])(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(src["utcSunday"].count(Object(src["utcYear"])(d), d), p, 2);
}

function formatUTCWeekNumberISO(d, p) {
  var day = d.getUTCDay();
  d = (day >= 4 || day === 0) ? Object(src["utcThursday"])(d) : src["utcThursday"].ceil(d);
  return pad(src["utcThursday"].count(Object(src["utcYear"])(d), d) + (Object(src["utcYear"])(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(src["utcMonday"].count(Object(src["utcYear"])(d), d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}

// CONCATENATED MODULE: ./node_modules/d3-time-format/src/defaultLocale.js


var defaultLocale_locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  defaultLocale_locale = formatLocale(definition);
  timeFormat = defaultLocale_locale.format;
  timeParse = defaultLocale_locale.parse;
  utcFormat = defaultLocale_locale.utcFormat;
  utcParse = defaultLocale_locale.utcParse;
  return defaultLocale_locale;
}

// CONCATENATED MODULE: ./node_modules/d3-time-format/src/isoFormat.js


var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

function formatIsoNative(date) {
  return date.toISOString();
}

var formatIso = Date.prototype.toISOString
    ? formatIsoNative
    : utcFormat(isoSpecifier);

/* harmony default export */ var isoFormat = (formatIso);

// CONCATENATED MODULE: ./node_modules/d3-time-format/src/isoParse.js



function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}

var parseIso = +new Date("2000-01-01T00:00:00.000Z")
    ? parseIsoNative
    : utcParse(isoSpecifier);

/* harmony default export */ var isoParse = (parseIso);

// CONCATENATED MODULE: ./node_modules/d3-time-format/src/index.js
/* concated harmony reexport timeFormatDefaultLocale */__webpack_require__.d(__webpack_exports__, "timeFormatDefaultLocale", function() { return defaultLocale; });
/* concated harmony reexport timeFormat */__webpack_require__.d(__webpack_exports__, "timeFormat", function() { return timeFormat; });
/* concated harmony reexport timeParse */__webpack_require__.d(__webpack_exports__, "timeParse", function() { return timeParse; });
/* concated harmony reexport utcFormat */__webpack_require__.d(__webpack_exports__, "utcFormat", function() { return utcFormat; });
/* concated harmony reexport utcParse */__webpack_require__.d(__webpack_exports__, "utcParse", function() { return utcParse; });
/* concated harmony reexport timeFormatLocale */__webpack_require__.d(__webpack_exports__, "timeFormatLocale", function() { return formatLocale; });
/* concated harmony reexport isoFormat */__webpack_require__.d(__webpack_exports__, "isoFormat", function() { return isoFormat; });
/* concated harmony reexport isoParse */__webpack_require__.d(__webpack_exports__, "isoParse", function() { return isoParse; });






/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/spectral-sequences/bundle.js
var bundle = __webpack_require__(7);

// CONCATENATED MODULE: ./js/display.js


class StructlinePanel extends Panel.Panel {
    constructor(parentContainer, display) {
        super(parentContainer, display);
    }

    show() {
        this.container.style.removeProperty("display");
        this.clear();

        this.newGroup();

        let types = Array.from(this.display.sseq.getStructlineTypes()).sort();
        for (let type of types) {
            let o = document.createElement("div");
            o.className = "form-row mb-2";
            o.style.width = "100%";
            this.currentGroup.appendChild(o);

            let l = document.createElement("label");
            l.className = "col-form-label mr-sm-2";
            l.innerHTML = Interface.renderMath(type);
            o.appendChild(l);

            let s = document.createElement("span");
            s.style.flexGrow = 1;
            o.appendChild(s);

            let i = document.createElement("input");
            i.setAttribute("type", "checkbox");
            i.checked = true;
            o.appendChild(i);

            i.addEventListener("change", (e) => {
                if (i.checked) {
                    if (this.display.hiddenStructlines.has(type))
                        this.display.hiddenStructlines.delete(type)
                } else {
                    this.display.hiddenStructlines.add(type)
                }
                this.display.update();
            });
        }
    }
}

class MyDisplay extends SidebarDisplay {
    constructor(container, sseq) {
        super(container, sseq);

        this.tooltip = new Tooltip(this);
        this.on("mouseover", (node) => {
            this.tooltip.setHTML(`(${node.c.x}, ${node.c.y})`);
            this.tooltip.show(node.x, node.y);
        });

        this.structlinePanel = new StructlinePanel(this.sidebar.main_div, this);
        this.sidebar.addPanel(this.structlinePanel);
        this.sidebar.currentPanel = this.structlinePanel;

        this.sidebar.footer.newGroup();

        this.sidebar.footer.currentGroup.style.textAlign = "center";
        this.runningSign = document.createElement("p");
        this.runningSign.className = "card-text"
        this.runningSign.innerHTML = "Running...";
        this.sidebar.footer.addObject(this.runningSign);

        this.sidebar.footer.addButton("Download SVG", () => this.downloadSVG("sseq.svg"));
        this.sidebar.footer.addButton("Save", () => this.sseq.download("sseq.json"));
    }
}

// CONCATENATED MODULE: ./js/index.js



// Read URL to see if module is specified.
let url = new URL(document.location);
let params = {};
for(let [k,v] of url.searchParams.entries()){
    params[k] = v;
}

if (!params.module) {
    console.log("Displaying homepage");
    console.log(document.querySelector("#home"));
    document.querySelector("#home").style.removeProperty("display");

    HTMLCollection.prototype.forEach = Array.prototype.forEach;
    let sections = document.querySelector("#home").getElementsByTagName("section");

    sections.forEach(n => {
        n.children[1].children.forEach(a => {
            a.innerHTML = Interface.renderLaTeX(a.innerHTML);
            a.href = `?module=${a.getAttribute("data")}&degree=50`;
        });
    });
} else {
    window.worker = new Worker("./worker.js");
    self.structlineTypes = new Set();

    worker.addEventListener("message", ev => {
        let m = ev.data;
        if(!(m.cmd in message_handlers)){
            console.error(`Unknown command '${m.cmd}'`);
            return;
        }        
        message_handlers[m.cmd](m);
    });

    let maxDegree = parseInt(params.degree ? params.degree : 50);
    displayFile(params.module, maxDegree);
}

async function displayFile(filename, degree=50) {
    try {
        let module = await IO.loadFromServer(`modules/${filename}.json`);
        let min_degree = Math.min(...Object.values(module.gens));

        window.sseq = new Sseq();
        sseq.xRange = [min_degree, degree];
        sseq.yRange = [0, (degree - min_degree)/3];
        sseq.initialxRange = [min_degree, degree];
        sseq.initialyRange = [0, (degree - min_degree)/3];
        sseq.offset_size = 0.1;
        sseq.class_scale = 0.5;
        window.display = new MyDisplay("#main", sseq);
        display.on("click", (node) => {
            if(!node) {
                return;
            }
            let c = node.c;
            worker.postMessage({
                "cmd" : "getCocycle",//'get_eta_map',//"get_eta_map",
                "class" : {
                    "x" : c.x,
                    "y" : c.y,
                    "idx" : c.idx
                }
            });
        })
        worker.postMessage({
            cmd: "resolve",
            p: module.p,
            module: JSON.stringify(module),
            maxDegree: degree
        });
    } catch (e) {
        console.error(e);
        alert(`Failed to load file ${filename}.json`);
    }
}

let message_handlers = {};

message_handlers.addClass = function addClass(m) {
    sseq.addClass(m.x, m.y);
}

message_handlers.addStructline = function addStructline(m) {
    let source = sseq.getClassesInDegree(m.source.x, m.source.y)[m.source.idx];
    let target = sseq.getClassesInDegree(m.target.x, m.target.y)[m.target.idx];
    sseq.addStructline(source, target, m.mult);
    if (!structlineTypes.has(m.mult)) {
        self.structlineTypes.add(m.mult);
        display.sidebar.showPanel();
    }
}
    
message_handlers.complete = function complete(m){
    display.runningSign.style.display = "none";
}

message_handlers.cocycleResult = function cocycleResult(m){
    console.log(`class : (${m.class.x}, ${m.class.y}, ${m.class.idx}), cocycle : ${m.cocycle}`);
}



/***/ })
/******/ ]);