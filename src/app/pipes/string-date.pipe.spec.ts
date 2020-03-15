import { StringToDate } from "./string-date.pipe";

describe('StringToDatePipe', () => {
    let pipe = new StringToDate();

    it('transform "2020-01-11T09:22:52Z" to date obj 20:22 11/01/2020', () => {
        let date = pipe.transform("2020-01-11T09:22:52Z");
        expect(date.getFullYear()).toBe(2020);
        expect(date.getMonth()).toBe(0);
        expect(date.getDate()).toBe(11);
        expect(date.getHours()).toBe(20);
        expect(date.getMinutes()).toBe(22);
    });

    it('transform "2020-03-11T18:22:55Z" to date obj 5:22 12/03/2020', () => {
        let date = pipe.transform("2020-03-11T18:22:52Z");
        expect(date.getFullYear()).toBe(2020);
        expect(date.getMonth()).toBe(2);
        expect(date.getDate()).toBe(12);
        expect(date.getHours()).toBe(5);
        expect(date.getMinutes()).toBe(22);
    });
});