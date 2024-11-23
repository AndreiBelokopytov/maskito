import {maskitoNumberOptionsGenerator} from '@maskito/kit';

import {TestInput} from '../utils';

describe('Number | multi-character prefix " EUR" (no initial value & no caret guard)', () => {
    beforeEach(() => {
        cy.mount(TestInput, {
            componentProperties: {
                initialValue: '',
                maskitoOptions: maskitoNumberOptionsGenerator({
                    postfix: ' EUR',
                    precision: 2,
                }),
            },
        });
        cy.get('input').focus().should('have.value', '').as('input');
    });

    it('Empty input => Paste "11.22 " => Textfield\'s value is "11.22 EUR"', () => {
        cy.get('input').paste('11.22 ').should('have.value', '11.22 EUR');
    });
});
