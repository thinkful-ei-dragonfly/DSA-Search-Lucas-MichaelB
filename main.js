class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key
    this.value = value
    this.parent = parent
    this.left = null
    this.right = null
  }

  insert(key, value) {
    // if the tree is empty, this new key being inserted will be the root
    if (!this.key) {
      this.key = key
      this.value = value
    }
    // If the tree already exists, then start traversing from the root
    // and compare it to the key we're inserting.
    // If the new key is less than the node's key, we'll traverse left
    else if (key <= this.key) {
      // What do we do if it's equal? In the previous exercises I defaulted by traversing left

      // if the existing node doesn't have a left child, this will be the left child
      if (!this.left) {
        this.left = new BinarySearchTree(key, value, this)
      }
      // if this nose has a left, then we'll traverse through it's left child down the tree
      else {
        this.left.insert(key, value)
      }
    }
    // if the new key is greater than the node, we'll traverse on the right
    else {
      if (!this.right) {
        this.right = new BinarySearchTree(key, value, this)
      }
      else {
        // keep searching
        this.right.insert(key, value)
      }
    }
  }

  find(key) {
    if (this.key == key) {
      return this.value
    }
    else if (key < this.key && this.left) {
      return this.left.find(key)
    }
    else if (key > this.key && this.right) {
      return this.right.find(key)
    }
    else {
      throw new Error('Key Error')
    }
  }
  remove(key){
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin()
        this.key = successor.key
        this.value = successor.value
        successor.remove(successor.key)
      }
      else if (this.left) {
        this._replaceWith(this.left)
      }
      else if (this.right) {
        this._replaceWith(this.right)
      }
      else {
        this._replaceWith(null)
      }
    }
    else if (key < this.key && this.left) {
      this.left.remove(key)
    }
    else if (key > this.key && this.right) {
      this.right.remove(key)
    }
    else {
      throw new Error('Key Error')
    }
  }
  _replaceWith(node){
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node
      }
      else if (this == this.parent.right) {
        this.parent.right = node
      }
      if (node) {
        node.parent = this.parent
      }
    }
    else {
      if (node) {
        this.key = node.key
        this.value = node.value
        this.left = node.left
        this.right = node.right
      }
      else {
        this.key = null
        this.value = null
        this.left = null
        this.right = null
      }
    }
  }
  inOrder(inOrderValues=[]) {
        if (this.left) {
            inOrderValues = this.left.inOrder(inOrderValues);
        }
        inOrderValues.push(this.value);

        if (this.right) {
            inOrderValues = this.right.inOrder(inOrderValues);
        }
        return inOrderValues;
    }
  preOrder(preOrderValues=[]) {
      preOrderValues.push(this.value);

      if (this.left) {
          preOrderValues = this.left.preOrder(preOrderValues);
      }

      if (this.right) {
          preOrderValues = this.right.preOrder(preOrderValues);
      }
      return preOrderValues;
  }

  postOrder(postOrderValues=[]) {
    if (this.left) {
        postOrderValues = this.left.postOrder(postOrderValues);
    }
    if (this.right) {
      postOrderValues = this.right.postOrder(postOrderValues)
    }
    postOrderValues.push(this.value)
    return postOrderValues
  }
  _findMin(){
    if (!this.left) {
      return this
    }
    return this.left._findMin()
  }
  // This helps find the largest number
  _findMax(){
    if (!this.right) {
      return this
    }
    return this.right._findMax()
  }
}

function main() {
  const LucasMichaelBST = new BinarySearchTree()
  LucasMichaelBST.insert(25, 25)
  LucasMichaelBST.insert(15, 15)
  LucasMichaelBST.insert(50, 50)
  LucasMichaelBST.insert(10, 10)
  LucasMichaelBST.insert(24, 24)
  LucasMichaelBST.insert(35, 35)
  LucasMichaelBST.insert(70, 70)
  LucasMichaelBST.insert(4, 4)
  LucasMichaelBST.insert(12, 12)
  LucasMichaelBST.insert(18, 18)
  LucasMichaelBST.insert(31, 31)
  LucasMichaelBST.insert(44, 44)
  LucasMichaelBST.insert(66, 66)
  LucasMichaelBST.insert(90, 90)
  LucasMichaelBST.insert(22, 22)

  // console.log(LucasMichaelBST.inOrder())
  // console.log(LucasMichaelBST.preOrder());
  console.log(LucasMichaelBST.postOrder())
}

main()
