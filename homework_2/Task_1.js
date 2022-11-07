/*
Написать свою функцию для глубокого копирования объектов.

При этом алгоритм должен осуществляться вручную (никаких вариантов с использованием готовых библиотек или JSON.stringify() + JSON.parse(), за это сразу 0 баллов за первую задачу).

Функция должна называться makeDeepCopy. Это важно, т.к. проверять буду тестами. 

Принимать функция должна один параметр - объект, копию которого нужно сделать и возвращать копию.

Если отправляемый параметр не является объектом или его нет, функция должна выбрасывать ошибку (throw new Error()). Проверяться будут все типы кроме ‘function’, его можно не учитывать. Глубина вложенности может быть любой.
*/


const makeDeepCopy = (obj) => {
  if(typeof obj !== 'object' || obj === null) {
    throw new Error()   
  }

  const NEW_OBJECT = Array.isArray(obj) ? [] : {}
  
  for(let key in obj){
    const VALUE = obj[key]
    if(typeof VALUE === 'object' && VALUE !== null) {
      NEW_OBJECT[key] = makeDeepCopy(VALUE)
    } else {
      NEW_OBJECT[key] = VALUE
    }
  } 
  return NEW_OBJECT
}