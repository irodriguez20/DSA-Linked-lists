class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

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

    insertBefore(item, item2) {
        let currNode = this.head;
        let prevNode = null;
        while (currNode.next !== null) {

            if (item2 === currNode.value) {
                // console.log(currNode.value);
                // console.log(prevNode.value);
                const newNode = new _Node(item, currNode);
                prevNode.next = newNode;
                break;
            }

            prevNode = currNode;
            currNode = currNode.next;
        }

    }

    insertAfter(item, item2) {
        let currNode = this.head;
        let nextNode = null;
        while (currNode.next !== null) {
            if (item2 === currNode.value) {
                console.log(currNode.value);
                console.log(nextNode.value);
                const newNode = new _Node(item, nextNode);
                currNode.next = newNode;
                break;
            }
            nextNode = currNode.next.next;
            currNode = currNode.next;
        }
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

    insertAt(item, position) {
        let currNode = this.head;
        let count = null;
        let nextNode = null;
        console.log(count)
        while (currNode.next !== null) {
            count = position
            if (count === 0) {
                this.insertFirst(item)
            }
            else {
                currNode.next.next = new _Node(item, currNode.next.next)
                break;
            }

            nextNode = currNode.next.next;
            currNode = currNode.next;
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

function main() {
    const SLL = new LinkedList();
    SLL.insertLast("Apollo");
    SLL.insertLast("Boomer");
    SLL.insertLast("Helo");
    SLL.insertLast("Husker");
    SLL.insertLast('Starbuck');
    SLL.insertLast("Tauhida");
    SLL.remove("Husker");
    SLL.insertBefore("Athena", "Boomer");
    SLL.insertAfter("Hotdog", "Helo");
    SLL.insertAt("Kat", 3);
    SLL.remove("Tauhida");
    console.log(SLL);

}




console.log(main())


