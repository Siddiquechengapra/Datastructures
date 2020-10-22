class  node{
    constructor(val){
        this.val=val
        this.next=null
        
    }
}

class singlyll{
    constructor(){
        this.head=null
        this.tail=null
        this.length=0
    }

    push(val){
        var newnode=new node(val)
        if(!this.head){
            
            this.head=newnode
            this.tail=this.head
            this.length++
            
        }else{
            this.tail.next=newnode
            this.tail=newnode
            this.length++
        }
        return this
    }
    pop(){
        if(!this.head) return undefined
        var currval=this.head
        var newtail=currval

        while(currval.next){
            newtail=currval
            currval=currval.next
        }
        this.tail=newtail
        this.tail.next=null
    }

    get(index){
        if(index < 0 || index >=this.length) return undefined
        else{
        var x=0
        var currval=this.head
        while(x!=index){
            currval=currval.next
            x++
        }
      
        return currval
    }
    }

    set(index,value){
        var checked=this.get(index)
        if(!checked) return undefined 
        else{
            checked.val=value
        }
        return checked
         
    }
    shift(){
        if(!this.head) return undefined
        else{
        var newhead=this.head.next
        this.head=newhead
        this.length--
        }
    }
    unshift(value){
        var newnode=new node(value)
        if(!this.head){
            this.head=newnode
            this.tail=this.head
        }
        else{
            var newhead=newnode
            var oldhead=this.head
            this.head=newhead
            newhead.next=oldhead
            this.length++
            
        }
    }
    insert(index,value){
        if(index < 0 || index>this.length) return null
        else if(index===this.length){
            this.push(value)
            return this
        }
        else if(index===0){
            this.unshift(value)
            return this
        }
        else{
            var newnode= new node(value)
            var previous=this.get(index-1)
            var temp=previous.next
            previous.next=newnode
            newnode.next=temp
            return newnode
        }
    }
    remove(index){
        if(index===0){
            this.shift()
            return this
        }
        else if(index===this.lenght){
            this.pop()
            return this
        }
        else{
            var x= this.get(index-1)
            var y=x.next
            var temp=y.next
            x.next=temp
            this.lenght--
            return this
        }
    }
    reverse(){
        var arr=[]
        for(var i=0;i<this.length;i++){
            let values=this.get(i)
            arr.push(values)
        }
        var rdarr= arr.reverse()
        this.head=arr[0]
        for(var j=1;j<rdarr.length && rdarr[j].next!=null;j++){
            rdarr[i+1]=rdarr[i].next
        }
        return this
    }
}

var sll= new singlyll()
sll.push(12)
sll.push(13)
sll.push(14)
sll.push(15)
sll.push(16)
sll.push(17)
sll.push(18)
sll.push(19)
sll.pop()
console.log(sll)
console.log(sll.reverse())

