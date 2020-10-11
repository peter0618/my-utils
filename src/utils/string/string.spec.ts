import { StringUtil } from './string.util';

describe('StringUtil', () => {
  it('maskName', () => {
    let result = StringUtil.maskName('최피터');
    expect(result).toMatch('최*터');
    console.log(result);

    result = StringUtil.maskName('최피터', '#');
    expect(result).toMatch('최#터');
    console.log(result);
  });

  it('maskPhone', () => {
    let result = StringUtil.maskPhone('01011112222');
    expect(result).toMatch('010****2222');
    console.log(result);

    result = StringUtil.maskPhone('01011112222', '#');
    expect(result).toMatch('010####2222');
    console.log(result);
  });

  it(`trim`, () => {
    const result = StringUtil.trim('1,000,000.000', ',');
    console.log(result);
    expect(result).toMatch('1000000.000');
  });
});
