export default class JsonUtil {
  // 改成any类型
  public static deepClone(object: any): any {
    return JSON.parse(JSON.stringify(object))
  }

  public static toJson(object: any): string {
    return JSON.stringify(object)
  }

  public static jsonParse(objJson: string): any {
    return JSON.parse(objJson)
  }

  public static consoleJson(object: any) {
    console.log(JSON.stringify(object))
  }
}
