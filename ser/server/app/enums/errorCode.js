const port = 14030;

const errorType = {
    parameter: 10,
    signature: 11, // 在validator.ts中调用
    login: 12,
    business: 13, // 业务错误
};

function getCode(type, code) {
    return Number(`${port}${errorType[type]}${code}`);
}

const errorCode = {
    Parameter: getCode("parameter", "0000"), // 参数错误
    Login: getCode("login", "0000"),
    NotFound: getCode("business", "0000"), //api不存在
    NotAllowed: getCode("business", "0001"),
    NotExist: getCode("business", "0002"),
    HasExist: getCode("business", "0003"),
    ExceedLimit: getCode("business", "0004"),
    Internal: getCode("business", "0005"),
    External: getCode("business", "0006"), // 外部错误
    System_Invalid: getCode("business", "0007"), // 系统权限无效
    Permission_Invalid: getCode("business", "0008"), // 接口权限无效
    Bad_Request: getCode("business", "0009"), // 请求失败
    NoCOMPETITION: getCode("business", "0010"), // 当前不在赛季中
    NoRights: getCode("business", "0011"), // 没有权限
};

export default errorCode;
