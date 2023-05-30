import VirtualScroll from "./VirtualScroll";

function Index() {
    const list = [];
    for (let i = 0; i<10000; i++) {
        list.push(i);
    }
    return (
        <div> 
            <VirtualScroll  list={list} itemHeight={20}  />
        </div>
    );
}
export default Index;