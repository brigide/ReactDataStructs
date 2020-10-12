function Node(){
    this.value = null;
    this.previous = null;
    this.next = null;
}

class DoubleLinkedList{

    constructor(){
        this.first = null;
        this.last = null;
        this.n = 0;
    }

    insert(value){
        let newNode = new Node();
        newNode.value = value;
        
        let prevNode = null;
        let currentNode = this.first;

        while (currentNode != null && currentNode.value < value) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }

        if(prevNode)
            prevNode.next = newNode; 
        else
            this.first = newNode;
        

        if (currentNode)
            prevNode = newNode;
        else
            this.last = newNode;

        newNode.next = currentNode;
        newNode.previous = prevNode;

        this.n++;

        return true;
    }

    remove(value){
        let prevNode = null;
        let currentNode = this.first;

        while (currentNode != null && currentNode.value < value) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }

        if(currentNode.value === value){
            if(prevNode){
                prevNode.next = currentNode.next;
                if (currentNode.next) 
                    currentNode.next.previous = prevNode;
                else 
                    this.last = prevNode;
            } else{
                this.first = currentNode.next;
                if (currentNode.next) 
                    this.first.previous = null;
                else 
                    this.last = null;
            }

            this.n--;
            return true;
        }

        return false;

    }

    search (value) {
        if (this.n === 0) 
            return false;

        let currentNode = this.first;
        let i = 0;
        while (currentNode != null && currentNode.value < value){ 
            currentNode = currentNode.next;
            i++;
        }
        

        if (currentNode)
         return currentNode.value === value ? i : -1;
        return -1; 
    }

    getSize(){
        let tmp = this.first;
        let i;
        for (i = 0; tmp != null; i++)
          tmp = tmp.next;


        return i; 
    }

    getAtIndex(index){
        let tmp = this.first;
        for (let i = 0; tmp != null && i < index; i++)
          tmp = tmp.next;

        if (tmp != null)
          return tmp.value;
        else
          return -1;
    }

    values(){
        let valuesList = [];
        for(let i = 0; i < this.getSize(); i++)
            valuesList.push(this.getAtIndex(i));
        

        console.log(valuesList)
        
        return valuesList;
    
    }

    print(){
        let tmp = this.first;
        while (tmp) {
          console.log(`${tmp.value} `);
          tmp = tmp.next;
        }
    }

    clear(){
        this.first = null;
        this.last  = null;
    } 
}

export default new DoubleLinkedList();
