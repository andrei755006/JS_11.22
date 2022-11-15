/*
Создать класс Calculator. Конструктор класса должен принимать два валидных числа, иначе (если параметра не два или хотя бы один из них невалидный number) бросать ошибку (throw new Error('')). Данный класс должен иметь методы setX, setY, getSum, getMul, getSub, getDiv.
- setX(num) - задаёт первому из чисел новое значение. Кидать ошибку если параметр не передан или является невалидным числом;
- setY(num) - задаёт второму из чисел новое значение. Кидать ошибку если параметр не передан или является невалидным числом;
- getSum() - возвращает сумму двух наших чисел внутри класса;
- getMul() - возвращает  произведение двух наших чисел внутри класса;
- getSub() - возвращает  разность двух наших чисел внутри класса;
- getDiv() - возвращает  частное двух наших чисел внутри класса ИЛИ кидает ошибку, если второе число (Y) равняется нулю.
!ВАЖНО! Все методы класса должны отрабатывать корректно ДАЖЕ в случае копирования функций в отдельные переменные.
Примеры:
const calculator = new Calculator(12, 3);
calculator.getSum(); // 15
calculator.getDiv(); // 4
calculator.setX(15);
calculator.getDiv(); // 5
const getCalculatorDiv = calculator.getDiv;
getCalculatorDiv(); // 5
calculator.setY(444n); // Ошибка!
P.S. Infinity, -Infinity и NaN - это невалидные числа
*/

class Calculator {

  constructor(num_1, num_2) {
    if(typeof num_1 !== 'number' || typeof num_2 !== 'number' || Number.isFinite(num_1) === false || Number.isFinite(num_2) === false) {
      throw new Error('Input-Error')
    }
    this.num_1 = num_1
    this.num_2 = num_2
  }

  setX = (num) => {
    if(typeof num !== 'number' || Number.isFinite(num) === false) {
      throw new Error('num is FALSE')
    }
    this.num_1 = num
  }
  setY = (num) => {
    if(typeof num !== 'number' || Number.isFinite(num) === false) {
      throw new Error('num is FALSE')
    }
    this.num_2 = num
  }
  getSum = () => {
    this.num_1 + this.num_2
  }
  getMul = () => {
    this.num_1 * this.num_2
  }
  getSub = () => {
    this.num_1 - this.num_2
  }
  getDiv = () => {
    if(this.num_2 === 0) {
      throw new Error('ZERO_dividing')
    }
    return this.num_1 / this.num_2
  }
}