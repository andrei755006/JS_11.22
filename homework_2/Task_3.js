/*
Написать функцию, которая принимает два значения, начало и конец интервала. Вернуть она должна итерируемый! объект, который можно будет использовать в цикле for … of. Итерация должна идти от from до значения to. 
Если to / from не указаны, не являются числами или to меньше чем либо равен from  должна выбрасываться ошибка (throw new Error()). Функция должна называться createIterable. 
*/

function* createIterable(from, to){

  if(isNaN(from) || isNaN(to) || to <= from){
    throw new Error()
  }

  for(let i = from; i <= to; i++){
    yield i
  }
}