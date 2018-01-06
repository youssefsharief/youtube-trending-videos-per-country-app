
import { TestBed, async } from '@angular/core/testing';
import { LimitToPipe } from './limit-to.pipe';

describe('LimitToPipe', () => {
    it('create an instance', () => {
        let pipe = new LimitToPipe();
        expect(pipe).toBeTruthy();
    });

    it('should remove extra characters', () => {
        let pipe = new LimitToPipe();
        expect(pipe.transform('Big Huge title', "5")).toBe('Big H....');
    });

    it('should return original in case length is lower than limit', () => {
        let pipe = new LimitToPipe();
        expect(pipe.transform('Big', "5")).toBe('Big');
    });

    it('should set limit to 10 if no args inputted', () => {
        let pipe = new LimitToPipe();
        expect(pipe.transform('Big', null)).toBe('Big');
    });




});
