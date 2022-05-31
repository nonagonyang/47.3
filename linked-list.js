/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */
  //how to add a node to the end of a linked list
  // 1. make new node 
  // 2. make previous_tail_node.next a reference to the new node
  // 3. make list.tail a reference to the added new node
  // 4. update the length of this linked list 

  // in the case of an empty list!
  // make new node 
  // make list.head a reference to the new node
  // make list.tail a reference to the new node

  push(val) {
    let newNode= new Node(val)
    if(this.length===0){
      this.head=newNode
      this.tail=newNode
    } else{
      this.tail.next=newNode
      this.tail=newNode
    }
    this.length += 1;
    
  }

  /** unshift(val): add new value to start of list. */
  //how to add a node to the start of a linked list
  // 1. make new node newNode
  // 2. make newNode.next a reference to the previous head
  // 3. make list.head a reference to the added new node

  unshift(val) {
    let newNode=new Node(val)
    if(this.length===0){
      this.head=newNode
      this.tail=newNode
    } else{
      newNode.next=this.head
      this.head=newNode

    }
    this.length += 1;
    
  }

  /** _get(idx): retrieve node at idx. */

  _get(idx) {
    let cur = this.head;
    let count = 0;

    while (cur !== null && count != idx) {
      count += 1;
      cur = cur.next;
    }

    return cur;
  }

  /** pop(): return & remove last item. */
    //removing the last item:
    //make list.tail refer to null
    //Don’t forget to update the tail!: update the new list.tail 
    //removing only item in linked list

  pop() {
    return this.removeAt(this.length - 1);
     

  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    return this._get(idx).val;

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    let cur = this._get(idx);
    cur.val = val;

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    // get the one before it
    let prev = this._get(idx - 1);

    let newNode = new Node(val);
    newNode.next = prev.next;
    prev.next = newNode;

    this.length += 1;

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    // special case: remove first item

    if (idx === 0) {
      let val = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      if (this.length < 2) this.tail = this.head;
      return val;
    }

    let prev = this._get(idx - 1);

    // special case: remove tail

    if (idx === this.length - 1) {
      let val = prev.next.val;
      prev.next = null;
      this.tail = prev;
      this.length -= 1;
      return val;
    }

    // normal case: remove in middle

    let val = prev.next.val;
    prev.next = prev.next.next;
    this.length -= 1;
    return val;
  }



  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let total = 0;
    let current = this.head;

    while (current) {
      total += current.val;
      current = current.next;
    }

    return total / this.length;
    
  }
}

module.exports = LinkedList;
