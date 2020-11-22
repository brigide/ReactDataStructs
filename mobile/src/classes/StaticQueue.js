
class StaticQueue {
    constructor(){
        this.max = 10;
        this.v = [];
        this.begin = 0;
        this.end = 0;
    }

    enqueue (value) {
        if ((this.end + 1) % this.max == this.begin)
            return false;

        this.v[this.end] = value;
        this.end = (this.end + 1) % this.max;

        return true;
    }

    dequeue () {
        if (this.begin == this.end) 
            return false;

        this.begin = (this.begin + 1) % this.max;

        return true;
    }

    values(){
        for(let i = this.begin; i < this.end; i++){
            console.log(this.v[i]);
        }
    }

    clear () {
        this.begin = this.end;
    }

};


