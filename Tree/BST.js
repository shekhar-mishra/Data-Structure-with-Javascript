//  TREE NODE CLASS === contain Value,left,rigt================
class TreeNode {
    constructor(value){
        this.value = value;
        this.left=null;
        this.right=null
    }
}

class BinaryTree {
    constructor(){
        this.root=null
    }
//============================     INSERT NODE============================
    insert(value) {
        const treeNode= new TreeNode(value)
            if(this.root===null) {
                this.root=treeNode;
            }
        else {
            let currentNode=this.root
            while(true){
                if(value<currentNode.value){
                    if(!currentNode.left){
                        currentNode.left=treeNode
                        return this;
                    }
                    currentNode=currentNode.left
                }
                else {
                   if(!currentNode.right) {
                       currentNode.right=treeNode
                            return this;
                   }
                    currentNode=currentNode.right
                }
            }
        }
    }
// LOOKUP TREE================Traverse===============
    lookup(value) {
        if(!this.root){
            return false
        }else{
            let currentNode=this.root
            while(currentNode){
               if(value<currentNode.value){
                currentNode=currentNode.left
             }
                else if(value>currentNode.value){
                    currentNode=currentNode.right
                } 
                else if(value===currentNode.value) {
                    return currentNode
                }
            }
            return false
            
        }
    }
}

let tree= new BinaryTree();
tree.insert(6)
tree.insert(7)
tree.insert(1)
tree.insert(4)
tree.insert(9)
tree.insert(5)
console.log(tree.lookup(7))
console.log(JSON.stringify(tree))