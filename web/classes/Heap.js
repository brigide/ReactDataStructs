function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

class Heap{
    constructor(){
        this.v = [];
    }

    getParentIndex(i){
        return Math.floor((i-1)/2);
    }

    getLeftChildIndex(i){
        return i*2 + 1;
    }

    getRightChildIndex(i){
        return i*2 + 2
    }

    getLastParentIndex(){
        return this.getParentIndex(this.v.length-1);
    }

    swap(a, b){
        const tmp = this.v[a];
        this.v[a] = this.v[b];
        this.v[b] = tmp;
    }



    insert(value){
        if(value && value !== undefined){

            let newNode = new Node(value);



            this.v.push(newNode);


            this.siftUp()
        }
    }

    siftUp(){
        let currentNodeIndex = this.v.length - 1;

        while(this.v[this.getParentIndex(currentNodeIndex)]
              && this.v[currentNodeIndex].value > this.v[this.getParentIndex(currentNodeIndex)].value){
            this.swap(currentNodeIndex, this.getParentIndex(currentNodeIndex));
            currentNodeIndex = this.getParentIndex(currentNodeIndex);
        }

        if (this.v[this.getLeftChildIndex(currentNodeIndex)])
            this.v[currentNodeIndex].left = this.v[this.getLeftChildIndex(currentNodeIndex)];

        if (this.v[this.getRightChildIndex(currentNodeIndex)])
            this.v[currentNodeIndex].right = this.v[this.getRightChildIndex(currentNodeIndex)];

    }
    

    remove(){
        if (this.v.length === 0)
            return;

        const removedValue = this.v[0].value;

        this.v[0] = this.v[this.v.length - 1];
        this.v.length--;

        this.siftDown();

        return removedValue;
    }



    siftDown(){
        let currentNodeIndex = 0;

        while (this.v[this.getLeftChildIndex(currentNodeIndex)] !== undefined){
            let biggestChildNodeIndex = this.getLeftChildIndex(currentNodeIndex);

            if (this.v[this.getRightChildIndex(currentNodeIndex)] !== undefined &&
                this.v[this.getRightChildIndex(currentNodeIndex)].value > this.v[biggestChildNodeIndex].value){
                biggestChildNodeIndex = this.getRightChildIndex(currentNodeIndex);
            }

            if(this.v[currentNodeIndex].value < this.v[biggestChildNodeIndex].value){
                this.swap(currentNodeIndex, biggestChildNodeIndex);
                currentNodeIndex = biggestChildNodeIndex;
            } else
                return;
        }
    }

    search(value){
        return this.values(value);
    }

    clear(){
        this.v = [];
    }
    


    values(desiredValue){


        let v = this.v.map(node => {
            return {
                name: String(node.value), 
                //if the user is searching a value, apply the nodeSvgShape property
                nodeSvgShape: (desiredValue !== undefined && node.value === desiredValue) ? {
                    shape: 'circle',
                    shapeProps:{
                        r: 12,
                        stroke: '#ad3603',
                        strokeWidth: '6px',
                        fill: '#ff5005'
                    }
                } : null
            }
        })

        v.forEach( (el, idx) => {
            const parent = v[this.getParentIndex(idx)];
            const leftChild = v[this.getLeftChildIndex(idx)];
            const rightChild = v[this.getRightChildIndex(idx)];

            //checks if node has a parent
            el.parent = parent ? parent.name : null ;

            //if not, deletes the object parent property (the node is the root)
            if(!el.parent)
                delete el.parent;
            
            //if user is not searching a value or the value was not found, remove the nodeSvgProperty
            if(!el.nodeSvgShape)
                delete el.nodeSvgShape;

            
            //checks if node has children
            el.children = (leftChild === undefined && rightChild === undefined) ? null : [
                v[this.getLeftChildIndex(idx)], 
                v[this.getRightChildIndex(idx)]
            ]



            // if it has, filter the filled children, otherwise deletes the object children property (the node is a leaf)
            if (el.children)
                el.children = el.children.filter(ch => ch)
            else 
                delete el.children
            
        })

        const hierarchicalObject = v[0];

        return hierarchicalObject;

    }


}


export default new Heap();