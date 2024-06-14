class TreeNode {
    constructor(userStories, hours) {
        this.userStories = userStories;
        this.hours = hours;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(userStories, hours) {
        const newNode = new TreeNode(userStories, hours);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (userStories < current.userStories) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    findClosestHours(newUserStories) {
        let current = this.root;

        let closest = current;
        while (current) {
            if (Math.abs(newUserStories - current.userStories) < Math.abs(newUserStories - closest.userStories)) {
                closest = current;
            }
            if (newUserStories < current.userStories) {
                current = current.left;
            } else if (newUserStories > current.userStories) {
                current = current.right;
            } else {
                break; // Exact match found
            }
        }
        return closest.hours;
    }
}

module.exports = BST;
