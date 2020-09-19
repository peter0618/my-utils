export class HttpUtil {
  /**
   * http query string 을 생성합니다.
   * obj 의 key 가 적어도 한개 존재해야 합니다.
   * @param obj
   */
  public static makeQueryParams(obj: any) {
    let queryString = '?';
    Object.keys(obj).forEach((key) => {
      queryString += `${key}=${obj[key]}&`;
    });
    return queryString.substr(0, queryString.length - 1);
  }
}
