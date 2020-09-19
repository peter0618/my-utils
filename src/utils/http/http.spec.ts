import { HttpUtil } from './http.util';

describe('HttpUtil', () => {

  it('makeQueryParams', () =>{
    const result = HttpUtil.makeQueryParams({
      userId: 'peter123',
      class: '1',
      role: 'admin'
    });
    console.log(result);
    expect(result).toMatch('?userId=peter123&class=1&role=admin');
  })
});
