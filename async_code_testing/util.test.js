jest.mock('./http');
const {loadTitle}=require('./util');

test('Should print in upper case.',()=>{
    loadTitle().then(title=>{
        expect(title).toBe('DELECTUS AUT AUTEM');
    });
});