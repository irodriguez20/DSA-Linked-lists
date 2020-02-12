class LinkedList {
    constructor() {
        this.head = null;
    }
    /* An item can be inserted, at the beginning of the list(insertFirst)
    at the end of the list(insertLast)
    or anywhere in the list, between 2 nodes (insert, insertAt)
    */

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    find(item) {
        //start at the head
        let currNode = this.head;
        //if the list is empty
        if (!this.head) {
            return null;
        }
        //check for the item
        while (currNode.value !== item) {
            /*return null if it's the end of the list 
            and the item is not on the list */
            if (currNode.value === null) {
                return null;
            }
            else {
                //Otherwise, keep looking
                currNode = currNode.next;
            }
        }
        return currNode;
    }

    remove(item) {
        //if the list is empty
        if (!this.head) {
            return null;
        }
        //if the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        //start at the head
        let currNode = this.head;
        //keep track of previous node
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            //save the previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}