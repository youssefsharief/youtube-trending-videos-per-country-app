/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContextService } from './context.service';

describe('ContextService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ContextService]
        });
    });

    it('should set country', inject([ContextService], (service: ContextService) => {
        service.setCountry('Egy')
        expect(service.country).toBe('Egy')
        expect(service.getCountry()).toBe('Egy')
    }));
});
