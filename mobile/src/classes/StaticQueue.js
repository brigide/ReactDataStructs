
class StaticQueue {
    constructor(){
        this.max = 10;
        this.v = [];
        this.begin = 0;
        this.end = 0;
    }

    enqueue (value) {
        if ((this.end + 1) % this.max === this.begin)
            return false;

        this.v[this.end] = value;
        this.end = (this.end + 1) % this.max;

        return true;
    }

    dequeue () {
        if (this.begin === this.end) 
            return false;

        this.begin = (this.begin + 1) % this.max;

        return true;
    }

    search(value){
        for(let i = this.begin; i < this.end; i++){
            if (this.v[i] === value)
                return true 
        }

        return false;
    }


    values(){
        const queueValues = []

        for(let i = this.begin, j = 0; i < this.end; i++, j++)
            queueValues[j] = this.v[i];
        
        return queueValues;
    }

    clear () {
        this.begin = this.end;
    }

};


export default new StaticQueue();
