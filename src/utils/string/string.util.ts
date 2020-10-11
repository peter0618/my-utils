/**
 * String 을 다루는 유틸리티 클래스 입니다.
 */
export class StringUtil {
  /**
   * 이름의 두번째 글자를 마스킹하는 함수입니다.
   * @param name
   * @param maskChar
   */
  static maskName(name: string, maskChar?: string) {
    return name.substr(0, 1) + `${maskChar ? maskChar : '*'}` + name.substr(2);
  }

  /**
   * 전화번호의 4~7번째 숫자를 마스킹하는 함수입니다.
   * @param phone
   * @param maskChar
   */
  static maskPhone(phone: string, maskChar?: string) {
    let maskString = '****';
    if (maskChar) {
      maskString = maskString.replace(/\*/g, maskChar);
    }
    return phone.substr(0, 3) + maskString + phone.substr(7);
  }

  /**
   * 문자열에서 특정 문자를 제거해주는 함수입니다.
   * @param plainText
   * @param char
   */
  static trim(plainText: string, char: string){
    const regExp = new RegExp(`${char}`,'g');
    return plainText.replace(regExp, '');
  }
}
