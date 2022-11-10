/*
Написать функцию createDebounceFunction. Она должна принимать два аргумента: callback-функцию и задержку в миллисекундах. Данная функция должна возвращать новую функцию, вызывающую callback-функцию с задержкой в переданное количество миллисекунд. ПРИ ЭТОМ! Если за то время, пока внутрення callback-функция ждёт своего вызова, наша созданная функция вызывается ещё раз, то "счётчик" времени должен сбрасываться и начинаться заново (т.е. вызова внутренней функции произойти не должно).

*/

function createDebounceFunction(func, timeout = 300){
  if(typeof func !== 'function' || timeout < 0) {
    throw new Error()
  }
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {func.apply(this, args)}, timeout)
  }
}