// TypeError 


/**
 * 
 * trigger way  
 * 传递给运算符的操作数或传递给函数的参数与预期的类型不兼容；
 * 或尝试修改无法更改的值；
 * 或尝试以不适当的方法使用一个值。
 * 
*/

function TestType(obj) {
    console.log(obj.name());
}

TestType('notObj---')

/**
 * SyntaxErrorSyntaxError（语法错误）
 * 对象代表尝试解析不符合语法的代码的错误,当 Javascript 引擎解析代码时，
 * 遇到了不符合语法规范的标记（token）或标记顺序，则会抛出 SyntaxError。
 */

