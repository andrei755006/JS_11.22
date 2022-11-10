/*
Написать свою реализацию встроенной функции массивов filter. Функция должна называться customFilter. Это важно, проверяться будет тестами! В качестве параметров она должна принимать callback-функцию и как необязательный параметр объект, который будет использован в качестве this в рамках внутренних вызовов данной callback-функции. В конечном итоге ваша реализация customFilter должна работать точно также как и встроенный метод filter. Callback-функция, переданная в качестве параметра, также должна вызываться с теми же параметрами, что и оригинал (элемент, индекс, массив). Функция должна вызываться, как родной метод массива.
*/

Array.prototype.filter = null
Array.prototype.customFilter = function (cb, arg) {

  if(typeof cb !== 'function' || cb === null) {
    throw new Error()
  }
  else if(arg && typeof arg !== 'object') {
    throw new Error()
  }
  
  const FILTERED_ARR = []

  for(let key of this) {
    if(cb.call(arg, this[key], key, this)) {
      FILTERED_ARR.push(this[key])
    }
  }

  return FILTERED_ARR
}