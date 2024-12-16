import { createBoard } from '@wixc3/react-board';
import React from 'react';

function Foo({c, el}:{c: number, el: React.ReactNode}) {
    if (c === 0) {
        return 'done';
    }
    return (
        <>
            <Goo c={c - 1} el={el} />
            {el}
        </>
    );
}

function Goo({c, el}: {c: number, el?: React.ReactNode}) {
    if(c % 2 === 0){
        return <div><Foo c={c} el={el} /></div>
    }
    return <div><Foo c={c} el={<p>aaa</p>} /></div>;
}

export default createBoard({
    name: 'double call recursion comp',
    Board: () => <div><Goo c={5}/></div>,
});
