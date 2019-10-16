// const  identity  = (value: string) => value;

function classNames (...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ');
}

function scopeClassMaker (prefix: string) {
    return function (name?: string) {
        return [prefix, name].filter(Boolean).join('-')
    }
}

export {
    classNames,
    scopeClassMaker
};