
class Stack {
    constructor() {
        this.items = [];
    }

    // add element to the stack
    add(element) {
        return this.items.push(element);
    }

    // remove element from the stack
    remove() {
        if (this.items.length > 0) {
            return this.items.pop();
        }
    }

    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }

    // check if the stack is empty
    isEmpty() {
        return this.items.length == 0;
    }

    // the size of the stack
    size() {
        return this.items.length;
    }

    // empty the stack
    clear() {
        this.items = [];
    }
}

// const MATRIX = [
//     [[0, 1, 0, 0, 1], [0, 1, 0, 1, 0], [0, 1, 0, 1, 0], [0, 1, 0, 1, 0], [0, 1, 0, 1, 0], [0, 1, 1, 0, 0], [0, 0, 1, 0, 1]],
//     [[0, 0, 0, 0, 1], [0, 1, 0, 1, 0], [0, 1, 1, 0, 0], [0, 1, 0, 0, 1], [0, 1, 1, 0, 0], [0, 0, 1, 0, 1], [0, 0, 1, 0, 1]],
//     [[0, 0, 1, 0, 1], [0, 1, 1, 0, 1], [0, 0, 0, 1, 1], [0, 0, 1, 1, 0], [0, 0, 1, 0, 1], [0, 0, 1, 1, 1], [0, 0, 1, 0, 1]],
//     [[0, 0, 0, 0, 1], [0, 0, 0, 1, 0], [0, 1, 0, 1, 0], [0, 1, 1, 0, 0], [0, 0, 0, 1, 1], [0, 1, 0, 1, 0], [0, 0, 1, 0, 0]],
//     [[0, 0, 0, 1, 1], [0, 1, 0, 1, 0], [0, 1, 0, 1, 0], [0, 0, 0, 1, 0], [0, 1, 1, 1, 0], [0, 1, 0, 1, 1], [0, 0, 1, 1, 0]],
// ];



const startNode_i = 1, startNode_j = 0;
const endNode_i = 0, endNode_j = 6;
const ids = new Stack();
let F_limit = 0, counter = 0;
let flag = new Boolean(false);


for (let i = 0; i <= F_limit; i++) {
    let Tree = [];
    if (flag == true) {
        // break;
        return;
    }
    counter = 0;
    ids.add([startNode_i, startNode_j]);

    // Tree.push([startNode_i], [startNode_j], [Root]);
    
    IDS([startNode_i, startNode_j]
        , [
            [[0, 1, 0, 0, 1], [0, 1, 0, 1, 0], [0, 1, 0, 1, 0], [0, 1, 0, 1, 0], [0, 1, 0, 1, 0], [0, 1, 1, 0, 0], [0, 0, 1, 0, 1]],
            [[0, 0, 0, 0, 1], [0, 1, 0, 1, 0], [0, 1, 1, 0, 0], [0, 1, 0, 0, 1], [0, 1, 1, 0, 0], [0, 0, 1, 0, 1], [0, 0, 1, 0, 1]],
            [[0, 0, 1, 0, 1], [0, 1, 1, 0, 1], [0, 0, 0, 1, 1], [0, 0, 1, 1, 0], [0, 0, 1, 0, 1], [0, 0, 1, 1, 1], [0, 0, 1, 0, 1]],
            [[0, 0, 0, 0, 1], [0, 0, 0, 1, 0], [0, 1, 0, 1, 0], [0, 1, 1, 0, 0], [0, 0, 0, 1, 1], [0, 1, 0, 1, 0], [0, 0, 1, 0, 0]],
            [[0, 0, 0, 1, 1], [0, 1, 0, 1, 0], [0, 1, 0, 1, 0], [0, 0, 0, 1, 0], [0, 1, 1, 1, 0], [0, 1, 0, 1, 1], [0, 0, 1, 1, 0]],
        ], Tree);
    F_limit++;
    console.log("------" + counter + "------");
    ids.clear();
}
function IDS(node, matrix, Tree) {
    // console.log(matrix);
    let currentNode_i = node[0], currentNode_j = node[1];

    if (currentNode_i == endNode_i && currentNode_j == endNode_j) {
        console.log("Search DONE");
        flag = true;
        return;
    }

    const currentNodeValue = matrix[node[0]][node[1]];
    let nextNodeValue;

    if (counter < F_limit) {
        counter++;

        //check RIGHT
        if (currentNodeValue[2] == 0 && flag !== true) {
            nextNodeValue = matrix[currentNode_i][currentNode_j + 1];
            if (nextNodeValue[0] == 0) {
                ids.add([currentNode_i, currentNode_j + 1]);
                currentNodeValue[0] = 1;
                IDS([currentNode_i, currentNode_j + 1], matrix);

            }
        }

        //check TOP
        if (currentNodeValue[1] == 0 && flag !== true) {
            nextNodeValue = matrix[currentNode_i - 1][currentNode_j];
            if (nextNodeValue[0] == 0) {
                ids.add([currentNode_i - 1, currentNode_j]);
                currentNodeValue[0] = 1;
                IDS([currentNode_i - 1, currentNode_j], matrix);
            }

        }

        //check BOTTOM
        if (currentNodeValue[3] == 0 && flag !== true) {
            nextNodeValue = matrix[currentNode_i + 1][currentNode_j];
            if (nextNodeValue[0] == 0) {
                ids.add([currentNode_i + 1, currentNode_j]);
                currentNodeValue[0] = 1;
                IDS([currentNode_i + 1, currentNode_j], matrix);
            }
        }
    }
    console.log(ids.remove());
    // console.log(ids.items);

}
