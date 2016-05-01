/**
 * Created by jinsihou on 16/3/26.
 */
//定时调度的id;
var intervalID;
var tree;

window.onload = function () {
    initBST();
};

/**
 * 初始化,为二叉树添加数据,为按钮绑定监听事件
 */
function initBST() {
    tree = new Tree(8);
    tree.add(1, 8, tree.traverseDF);
    tree.add(5, 8, tree.traverseDF);
    tree.add(4, 8, tree.traverseDF);
    tree.add(2, 1, tree.traverseDF);
    tree.add(3, 1, tree.traverseDF);
    tree.add(6, 1, tree.traverseDF);
    tree.add(12, 1, tree.traverseDF);
    tree.add(14, 1, tree.traverseDF);
    tree.add(7, 5, tree.traverseDF);
    tree.add(9, 5, tree.traverseDF);
    tree.add(11, 5, tree.traverseDF);
    tree.add(10, 4, tree.traverseDF);
    tree.add(13, 4, tree.traverseDF);
    tree.add(15, 8, tree.traverseDF);
    createDOM(tree);
    showTraverse(tree);
}

/**
 * 根据树建立相应的dom结构
 * @param tree
 */
function createDOM(tree) {
    var currentDOM = $('container');
    tree.traverseBF(function (node) {
        if (!node.parent) {
            currentDOM.innerHTML = '<div class="box" id="box' + node.value + '">' + node.value + '</div>';
        } else {
            currentDOM = $('box' + node.parent.value);
            currentDOM.innerHTML += '<div class="box" id="box' + node.value + '">' + node.value + '</div>'
        }
    })
}

/**
 * 绑定按钮的监听
 * @param tree 二叉树对象
 */
function showTraverse(tree) {
    $('btnGroup').addEventListener('click', function (e) {
        if (e.target.nodeName.toUpperCase() == 'BUTTON') {
            animation(e, tree);
        }
    });
}
/**
 * 使用Interval进行动画展示
 * @param tree 二叉树对象
 * @param e   事件
 */
function animation(e, tree) {
    clearInterval(intervalID);
    clearAll();
    var i = 0;
    var data = [];
    var aniProcess = function () {
        clearAll();
        $('box' + data[i++]).style.backgroundColor = 'blue';
    };
    var searchProcess = function () {
        clearAll();
        $('box' + data[i]).style.backgroundColor = 'blue';
        if(data[i++] == keyWord){
            clearInterval(intervalID);
        }
    };
    if (e.target.id == 'DF') {
        data = tree.toArray(tree.traverseDF);
        intervalID = setInterval(aniProcess, 800);
    } else if (e.target.id == 'BF') {
        data = tree.toArray(tree.traverseBF);
        intervalID = setInterval(aniProcess, 800);
    } else if (e.target.id == 'search') {
        data = tree.toArray(tree.traverseBF);
        var keyWord = $('searchKey').value;
        intervalID = setInterval(searchProcess, 800);
    }
}

/**
 * 清除所有颜色标示
 */
function clearAll() {
    for (var i = 1; i < 16; i++) {
        $('box' + i).style.backgroundColor = 'white';
    }
}

/**
 * 定义一棵二叉树
 * @param rootValue 根的值
 * @constructor
 */
function Tree(rootValue) {
    this._root = null;
    if (rootValue) {
        this._root = {
            value: rootValue,
            parent: null,
            children: []
        };
    }
}

/**
 * 为多叉树添加方法
 * @type {{_root: null, constructor: BinarySearchTree, add: BinarySearchTree.add, contains: BinarySearchTree.contains, traverseLRD: BinarySearchTree.traverseLRD, traverseDLR: BinarySearchTree.traverseDLR, traverseLDR: BinarySearchTree.traverseLDR, remove: BinarySearchTree.remove, size: BinarySearchTree.size, toArray: BinarySearchTree.toArray, toString: BinarySearchTree.toString}}
 */
Tree.prototype = {

    constructor: Tree,

    add: function (value, parent, traversal) {
        var addNode = {
            value: value,
            parent: null,
            children: []
        };

        if (this._root == null) {
            this._root = addNode;
        } else {
            traversal.call(this, function (node) {
                if (node.value === parent) {
                    node.children.push(addNode);
                    addNode.parent = node;
                }
            });
        }
    },

    contains: function (value, traversal) {
        var isContains = false;
        traversal(this, function (node) {
            if (node.value == value) {
                isContains = true;
            }
        });
        return isContains;
    },

    traverseDF: function (process) {
        (function inOrder(node) {
            for (var i = 0; i < node.children.length; i++) {
                inOrder(node.children[i]);
            }
            process(node);
        })(this._root)
    },

    traverseBF: function (process) {
        var cache = [];
        var currentNode = this._root;
        while (currentNode) {
            for (var i = 0; i < currentNode.children.length; i++) {
                cache.push(currentNode.children[i]);
            }
            process(currentNode);
            currentNode = cache.shift();
        }
    },

    size: function () {
        var length = 0;
        this.traverseLRD(function (node) {
            length++;
        });
        return length;
    },

    toArray: function (process) {
        var showArray = [];
        process.call(this, function (node) {
            showArray.push(node.value);
        });
        return showArray;
    },

    toString: function (process) {
        return this.toArray(process).toString();
    }
};

function $(id) {
    return document.getElementById(id);
}
