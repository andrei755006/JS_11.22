/*
Реализовать функцию concatStrings, которая может быть вызвана следующим образом: concatStrings('first')('second')('third')(). Результатом вызова данной функции должна являться новая строка, содержащая все переданные таким образом строки. Если одно из значений является невалидной строкой (пустая строка - это валидная строка), то возвращать результат, полученный до текущего момента (ошибок не бросать!). Кроме этого добавить функции второй необязательный параметр - separator. Он также должен являться валидной строкой, однако в случаях, когда вместо валидной строки на его место передано что-то ещё - запускаем функцию как будто без него вообще (иными словами игнорируем, никаких ошибок кидать не нужно). Если же всё-таки параметр был валидной строкой, то результирующая строка должна содержать все переданные строки, разделённые значением separator.
Примеры:
Вызываем функцию: concatStrings('a')('b')()
Получаем результат: ‘ab’’
Вызываем функцию: concatStrings('a')('b')('c')()
Получаем результат: ‘abc’
Вызываем функцию: concatStrings('a', null)('b')('c')()
Получаем результат: ‘abc’
Вызываем функцию: concatStrings('a', 'null')('b')('c')()
Получаем результат: ‘anullbnullc’
Вызываем функцию: concatStrings('a')(null)('c')()
Получаем результат: ‘a’
*/

function concatStrings(item, separator) {
  let resultStr = ''
  let separator_temp = ''
  let isTrue = true

  if(item || typeof item === 'string') {
    resultStr += item
  } else {
    isTrue = false
  }
  if(separator || typeof separator === 'string') {
    separator_temp = separator
  }

  return func

  function func(target) {
    if(!arguments.length) {
      return resultStr
    } else if(typeof target === 'string' && isTrue) {
      resultStr += separator_temp + target
    } else {
      isTrue = false
    }
    return func
  }
}