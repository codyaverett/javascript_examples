import React, { useCallback, useEffect } from 'react';
import { InvalidRenderTypeError } from '../error';

interface Props {
    type: 'null' | 'fragment' | 'children';
}

export const Render: React.FC<Props> = (props) => {
    // example function that take a while to run
    // return how long it took to run in seconds
    function longRunningFunction(seconds: IntRange<0x1, 0xA>) {
        const start = Date.now();
        console.log('start', start);
        while (Date.now() - start < seconds * 1000) {
            // do nothing for some time
        }
        console.log('end', Date.now());
        return seconds;
    }

    //* useCallback is used to memoize the function
    const run = useCallback((seconds: IntRange<1, 10>) => {
        longRunningFunction(seconds);
    }, []);

    useEffect(() => {
        run(1);
    }, [run, props.type])

    switch(props.type) {
        case 'null':
            return null;
        case 'fragment':
            return <></>;
        case 'children':
            return null;
        // default:
        //     throw new InvalidRenderTypeError(props.type);
    }
}
