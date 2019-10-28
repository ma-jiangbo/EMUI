import {classNames as cln, scopeClassMaker} from "../classNames";

describe('util', () => {
    it('classNames', () => {
        const sc = scopeClassMaker('test-class');
        expect(sc('name1')).toEqual('test-class-name1');
        expect(cln('name1', 'name2', sc('name3'))).toEqual('name1 name2 test-class-name3');
    })
});