// const  identity  = (value: string) => value;

function classNames (...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ');
}

export default classNames;