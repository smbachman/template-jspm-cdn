import {check, property, Generator, Options} from 'testcheck';

export default function assertCheck(property, options) {
    let result = check(property, options);
    if (!result.result) {
        throw new Error("test failed: " + JSON.stringify(result, null, 2));
    }
    return result;
}