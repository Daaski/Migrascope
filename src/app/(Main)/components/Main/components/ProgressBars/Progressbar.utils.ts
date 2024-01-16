export const drawSettings = (percentage: number) => {
    return {
        hidden: {
            pathLength: 0,
            opacity: 0,
        },
        visible: (i: number) => {
            const delay = i * 0.1;
            return {
                pathLength: 0.01 * percentage,
                opacity: 1,
                transition: {
                    pathLength: {
                        delay,
                        type: 'spring',
                        duration: 1.5,
                        bounce: 0,
                    },
                    opacity: { delay, duration: 0.01 },
                },
            };
        },
        initialBg: {
            opacity: 0,
        },
        visibleBg: (i: number) => {
            const delay = i * 0.1;
            return {
                opacity: 1,
                transition: {
                    opacity: { delay },
                },
            };
        },
    };
};
