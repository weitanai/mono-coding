function findIndexOverHeight(list, offset) {
    let currentHeight = 0;
    for (let i = 0; i < list.length; i++) {
        const {height} = list[i];
        currentHeight += height;
        if (currentHeight > offset) {
            return i;
        }
    }
    return list.length - 1;
}
function sumHeight (list, start = 0, end = list.length) {
    let height = 0;
    for (let i = start; i < end; i++) {
        height += list[i].height;

    }
    return height;
}

class VirtualScroll {
    constructor({el, list, itemGen, itemHight}){ 
        this.$list = el;
        this.list = list;
        this.itemHight = itemHight;
        this.itemGen =  itemGen;

        //
        this.mapList();
        this.initContainer();
        this.bindEvents();
        this.render();
    }
    initContainer(){
        this.containerHight = this.$list.clientHeight;
        this.contentHeight = sumHeight(this._list);
    }
    mapList() {
        this._list = this.list.map((item, i)=> ({
            height: this.itemHight,
            index: i,
            item: item,
        }));
    }
    bindEvents() {
        let y = 0;
        const scrollSpace = this.contentHeight - this.containerHight;

        const updateOffset = (e)=> {
            this.$list.innerHtml = "";
            console.log("scroll----", this.$list.scrollTop);
            e.preventDefault();
            y = this.$list.scrollTop;
            y = Math.max(y, 0);
            y = Math.min(y, scrollSpace);
            this.virtualOffset = y;
            this.render(y);
        };
        this.$list.addEventListener("scroll", updateOffset);
    }
    render(virtualOffset = 0) {
        const headIndex = findIndexOverHeight(this._list, virtualOffset);
        const tailIndex = findIndexOverHeight(this._list, virtualOffset + this.containerHight + 40);
        console.log(virtualOffset, this.tailIndex, tailIndex);
        if ( this.tailIndex === tailIndex && virtualOffset ) return;
        this.tailIndex = tailIndex;
        console.log("headIndex", headIndex, tailIndex);
        this.renderOffset = virtualOffset - sumHeight(this._list, 0, headIndex);
        this.renderList = this._list.slice(headIndex, tailIndex + 1);
        
        const $listWp = document.createElement("div");
        // $listWp.style.height = this._list.length * this.itemHight + 'px';
        this.renderList.forEach((item)=> {
            const $el = this.itemGen(item);
            $listWp.appendChild($el);
        });
        
        $listWp.style.transform = `translateY (- ${this.renderOffset}px)`;
        console.log(this.$list);
        this.$list.innerHtml = "";
        this.$list.appendChild($listWp);
    }
}
