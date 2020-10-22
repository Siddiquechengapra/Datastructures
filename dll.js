class node{
    constructor(value){
        this.val=value
        this.next=null
        this.prev=null
    }
}

class dll{
    constructor(){
        this.length=0
        this.head=null
        this.tail=null
    }

    push(val){
        var newnode=new node(val)
        if(!this.head){
            this.head=newnode
            this.tail=newnode
            this.length++
        }
        else{
            this.tail.next=newnode
            newnode.prev=this.tail
            this.tail=newnode
            this.length++

        }
        return this
    }
    pop(){
        if(!this.head) return undefined 

        else{
            var newtail=this.tail.prev
            newtail.next=null
            this.tail=newtail
            this.length--
        }
        return this
    }
    get(index){
        var count=0
        var currvalue=this.head
        if(index===0) return this.head
        else if(index<0){
                    return null
        }
        else if(index===this.length) return this.tail
        else{
            while(currvalue.next && count!=index && index>0){
                currvalue=currvalue.next
                count++
            }
            return currvalue
        }
    }
    set(index,value){
        var settable =this.get(index)
        if(settable){
            settable.val=value
            console.log("value changed")
        }
        return settable
    }
    unshift(value){
        var newnode=new node(value)
        this.head.prev=newnode
        newnode.next=this.head
        this.head=newnode
        this.lenght++
        return this
    }
    insert(index,value){
        if(index===this.length){
            this.push(value)
        }
        else if(index===0){
            this.unshift(value)
        }
        var newnode=new node(value)
        var currval=this.get(index)
        if(currval){
                var oldprev=currval.prev
                var oldnext=currval.next
                oldprev.next=newnode
                newnode.prev=oldprev
                newnode.next=currval
                currval.prev=newnode
                this.length++
                return currval
        }else{
            return null
        }
        
    }
    remove(index){
        if(index===0){
            var newhead=this.head.next
            this.head=newhead
            newhead.prev=null
            this.length--
        }
        else{
            var currval=this.get(index)
            if(currval){
                var prevnode=currval.prev
                var nextnode=currval.next
                prevnode.next=nextnode
                nextnode.prev=prevnode
                currval.next=null
                currval.prev=null
                this.length-- 
            }
        }
        return this
    }
}

const dl=new dll()
dl.push(0)
dl.push(1)
dl.push(2)
dl.push(3)
dl.push(4)
dl.push(5)
dl.push(6)
dl.pop()
dl.insert(3,"inserted at 3")
dl.unshift("newhead") 
console.log(dl.remove(0))