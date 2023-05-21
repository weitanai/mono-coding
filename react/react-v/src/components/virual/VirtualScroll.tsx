import { useState, useEffect, useRef, useMemo } from 'react';
import './virtual.css';


interface VirtualScrollProps {
    list: number[];
    itemHeight: number;
}

function VirtualScroll({ list, itemHeight }: VirtualScrollProps) {
    const [start, setStart] = useState(0);
    const [count, setCount] = useState(0);
    const [top, setTop] = useState(0);
    const scrollRef = useRef(null);
    const contentRef = useRef(null);

    const totalHeight = useMemo(() => {
        return itemHeight * list.length;
    }, [list, itemHeight]);
    useEffect(() => {
        setCount(Math.ceil(scrollRef.current.clientHeight / itemHeight));
    }, []);
    const handleScorll = () => {
        const top  = scrollRef.current.scrollTop;
        setTop(top);
        console.log('---top', top);
        const newStart = Math.floor(top / itemHeight);
        setStart(newStart);
    }
    const subList = list.slice(start, start + count-20);

    return (
        <div className="virual-list" ref={scrollRef} onScroll={handleScorll}>
            <div style={{ height: totalHeight + 'px' }} >
                <div ref={contentRef}
                    style={{
                        position: 'absolute',
                        top: top + 'px'
                    }}>
                    {
                        subList.map(item => (
                            <div key={item} style={{
                                height: itemHeight + 'px',
                            }}>
                                {item}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default VirtualScroll