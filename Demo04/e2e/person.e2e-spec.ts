import * as fs from 'fs';

import { browser, by, element } from 'protractor/built';

describe('Person update', () => {
    beforeEach(() => {
        browser.get('/');
    });

    it('should show three person when we first load the app', () => {
        const persons = element.all(by.css('.person-table .person'));
        expect(persons.count()).toBe(6);
    });

    xit('should show the first persons detail page', () => {
        const person = element.all(by.css('.person-table .person')).first();
        person.click();
        expect(browser.getCurrentUrl()).toContain('/person/1');

        const inputFieldText = element(by.id('inputFirstname')).getAttribute('value');

        expect(inputFieldText).toBe('Max');
    });

    it('should update the first persons firstname', () => {
        const person = element.all(by.css('.person-table .person')).first();
        person.click();

        const inputField = element(by.id('inputFirstname'));
        const btnSubmit = element(by.css('button[type=submit]'));

        inputField.clear();

        browser.takeScreenshot().then((png) => {
            const stream = fs.createWriteStream('screenshot-1.png');
            stream.write(new Buffer(png, 'base64'));
            stream.end();
        });

        inputField.sendKeys('Hans');

        browser.takeScreenshot().then((png) => {
            const stream = fs.createWriteStream('screenshot-2.png');
            stream.write(new Buffer(png, 'base64'));
            stream.end();
        });
        btnSubmit.click();

        const personFirstname = element.all(by.css('.person-table .person td')).first();
        expect(personFirstname.getText()).toBe('Hans');
    });

});
