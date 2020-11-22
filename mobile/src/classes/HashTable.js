import {DoublyLinkedList} from './DoublyLinkedList.js';


class HashTable{

    constructor(){
        this.n = 0;
        this.max = 10;
        this.dlls = [];
        for(let i = 0; i < this.max; i++){
            this.dlls.push(new DoublyLinkedList());         
        }
    }

    hash(x){
        return x % this.max;
    }

    expand(){
        this.dllCopy = this.dlls;
        this.max = 2 * this.max;
        this.clear();
        for(let i = 0; i < this.max / 2; i++){
            for(let j = 0; j < this.dllCopy[i].getSize(); j++){
                let value = this.dllCopy[i].getAtIndex(j);
                this.dlls[this.hash(value)].insert(value);
                this.n++;
            }
        }
    }

    insert(value){
        if(this.n === this.max){
            this.expand();
        }
        let key = this.hash(value);
        let ret = this.dlls[key].insert(value);
        if(ret === true){
            this.n++;
        }
        return ret;
    }

    remove(value){
        let key = this.hash(value);
        let ret = this.dlls[key].remove(value);
        if(ret === true){
            if(this.dlls[key].getSize() === 1){
                this.n--;
            }
        }
        return ret;
    }

    values(){
        return this.dlls.map((dlls, bucketIdx) => 
            [`Bucket ${bucketIdx}`, dlls]
        );
    }

    search(value){
        let key = this.hash(value);
        let pos = this.dlls[key].search(value);
        if(pos === -1){
            return -1;
        }
        return [key, pos];
    }

    getSize(){
        return this.n;
    }

    clear(){
        this.dlls = [];
        for(let i = 0; i < this.max; i++){
            this.dlls.push(new DoublyLinkedList());
        }
        this.n = 0;
    }
}

export default new HashTable();