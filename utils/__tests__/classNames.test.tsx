import classNames from "../classNames";

describe('classNames', () => {
   it ('接收一个参数时', () =>{
       const result = classNames('a');
       expect(result).toEqual('a');
   });
    it ('接收两个参数时', () => {
        const result = classNames('a', 'b');
        expect(result).toEqual('a b');
    });
    it ('接收两个以上参数时', () => {
        const result = classNames('a', 'b', 'c');
        expect(result).toEqual('a b c');
    });
    it ('参数包含undefined', () => {
        const result = classNames('a', 'b', undefined, 'c');
        expect(result).toEqual('a b c');
    });
});