
class StaticQueue {
    constructor(){
        this.max = 10;
        this.v = [];
        this.v[0] = null;
        this.begin = 0;
        this.end = -2;
        this.firstIn = false;
    }

    enqueue (value) {
        if ((this.end + 1) % this.max === this.begin)
            return false;

        if(this.end === -2){
            this.end = 0;
        }
        else{
            this.end = (this.end + 1) % this.max;
        }
        this.v[this.end] = value;
        
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
                return true;
        }

        return false;
    }


    values(){
        const queueValues = []

        for(let i = 0; i < this.max; i++){
            if(this.end >= this.begin){
                if(i < this.begin || i > this.end){
                    queueValues[i] = null;
                }
                else{
                    queueValues[i] = this.v[i];
                }
            }
            else{
                if(i <= this.end || i >= this.begin){
                    queueValues[i] = this.v[i];
                }
                else{
                    queueValues[i] = null;
                }
            }
        }
        return queueValues;
    }

    getBegin(){
        return this.begin;
    }

    getEnd(){
        return this.end;
    }

    clear () {
        this.end = -2;
        this.begin = 0;
        this.v = [];
        this.v[0] = null;
        this.firstIn = false;
    }

};


export default new StaticQueue();
