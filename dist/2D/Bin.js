"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BestShortSideFit_1 = __importDefault(require("./heuristics/BestShortSideFit"));
const Box_1 = __importDefault(require("./Box"));
const FreeSpaceBox_1 = require("./FreeSpaceBox");
class Bin {
    constructor(width, height, heuristic) {
        this.width = 0;
        this.height = 0;
        this.boxes = [];
        this.heuristic = new BestShortSideFit_1.default();
        this.freeSpaces = [];
        this.width = width;
        this.height = height;
        this.freeSpaces = [new FreeSpaceBox_1.FreeSpaceBox(width, height)];
        if (heuristic)
            this.heuristic = heuristic;
    }
    get area() {
        return this.width * this.height;
    }
    get efficiency() {
        let boxesArea = 0;
        this.boxes.forEach(box => {
            boxesArea += box.area;
        });
        return (boxesArea * 100) / this.area;
    }
    get label() {
        return `${this.width}x${this.height} ${this.efficiency}%`;
    }
    insert(box) {
        if (box.packed)
            return false;
        this.heuristic.findPositionForNewNode(box, this.freeSpaces);
        if (!box.packed)
            return false;
        let numRectanglesToProcess = this.freeSpaces.length;
        let i = 0;
        while (i < numRectanglesToProcess) {
            if (this.splitFreeNode(this.freeSpaces[i], box)) {
                this.freeSpaces.splice(i, 1);
                numRectanglesToProcess--;
            }
            else {
                i++;
            }
        }
        this.pruneFreeList();
        this.boxes.push(box);
        return true;
    }
    scoreFor(box) {
        let copyBox = new Box_1.default(box.width, box.height, box.constrainRotation);
        return this.heuristic.findPositionForNewNode(copyBox, this.freeSpaces);
    }
    isLargerThan(box) {
        return ((this.width >= box.width && this.height >= box.height) ||
            (this.height >= box.width && this.width >= box.height));
    }
    splitFreeNode(freeNode, usedNode) {
        if (usedNode.x >= freeNode.x + freeNode.width ||
            usedNode.x + usedNode.width <= freeNode.x ||
            usedNode.y >= freeNode.y + freeNode.height ||
            usedNode.y + usedNode.height <= freeNode.y) {
            return false;
        }
        this.trySplitFreeNodeVertically(freeNode, usedNode);
        this.trySplitFreeNodeHorizontally(freeNode, usedNode);
        return true;
    }
    trySplitFreeNodeVertically(freeNode, usedNode) {
        if (usedNode.x < freeNode.x + freeNode.width &&
            usedNode.x + usedNode.width > freeNode.x) {
            this.tryLeaveFreeSpaceAtTop(freeNode, usedNode);
            this.tryLeaveFreeSpaceAtBottom(freeNode, usedNode);
        }
    }
    tryLeaveFreeSpaceAtTop(freeNode, usedNode) {
        if (usedNode.y > freeNode.y && usedNode.y < freeNode.y + freeNode.height) {
            let newNode = Object.assign({}, freeNode);
            newNode.height = usedNode.y - newNode.y;
            this.freeSpaces.push(newNode);
        }
    }
    tryLeaveFreeSpaceAtBottom(freeNode, usedNode) {
        if (usedNode.y + usedNode.height < freeNode.y + freeNode.height) {
            let newNode = Object.assign({}, freeNode);
            newNode.y = usedNode.y + usedNode.height;
            newNode.height =
                freeNode.y + freeNode.height - (usedNode.y + usedNode.height);
            this.freeSpaces.push(newNode);
        }
    }
    trySplitFreeNodeHorizontally(freeNode, usedNode) {
        if (usedNode.y < freeNode.y + freeNode.height &&
            usedNode.y + usedNode.height > freeNode.y) {
            this.tryLeaveFreeSpaceOnLeft(freeNode, usedNode);
            this.tryLeaveFreeSpaceOnRight(freeNode, usedNode);
        }
    }
    tryLeaveFreeSpaceOnLeft(freeNode, usedNode) {
        if (usedNode.x > freeNode.x && usedNode.x < freeNode.x + freeNode.width) {
            let newNode = Object.assign({}, freeNode);
            newNode.width = usedNode.x - newNode.x;
            this.freeSpaces.push(newNode);
        }
    }
    tryLeaveFreeSpaceOnRight(freeNode, usedNode) {
        if (usedNode.x + usedNode.width < freeNode.x + freeNode.width) {
            let newNode = Object.assign({}, freeNode);
            newNode.x = usedNode.x + usedNode.width;
            newNode.width =
                freeNode.x + freeNode.width - (usedNode.x + usedNode.width);
            this.freeSpaces.push(newNode);
        }
    }
    pruneFreeList() {
        let i = 0;
        while (i < this.freeSpaces.length) {
            let j = i + 1;
            if (j === this.freeSpaces.length) {
                break;
            }
            while (j < this.freeSpaces.length) {
                if (this.isContainedIn(this.freeSpaces[i], this.freeSpaces[j])) {
                    this.freeSpaces.splice(i, 1);
                    i--;
                    break;
                }
                if (this.isContainedIn(this.freeSpaces[j], this.freeSpaces[i])) {
                    this.freeSpaces.splice(j, 1);
                }
                else {
                    j++;
                }
                i++;
            }
        }
    }
    isContainedIn(rectA, rectB) {
        return (rectA &&
            rectB &&
            rectA.x >= rectB.x &&
            rectA.y >= rectB.y &&
            rectA.x + rectA.width <= rectB.x + rectB.width &&
            rectA.y + rectA.height <= rectB.y + rectB.height);
    }
}
exports.default = Bin;
//# sourceMappingURL=Bin.js.map