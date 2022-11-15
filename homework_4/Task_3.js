/*
Создать класс RickAndMorty. Конструктор класса не должен принимать никаких параметров. Данный класс будет иметь два метода: getCharacter, getEpisode
- getCharacter() - принимает id персонажа (число, если невалидное или его нет, то кидать ошибку), делать запрос за этим персонажем и возвращать его. Если персонаж не найден, то нужно вернуть null. Реализовать при помощи then / catch
- getEpisode() - принимает id эпизода (число, если невалидное или его нет, то кидать ошибку), делать запрос за этим эпизодом и возвращать его. Если эпизод не найден, то нужно вернуть null. Реализовать при помощи async / await
*/

class RickAndMorty {

  getCharacter(id) {
    if(!id || typeof id !== 'number' || isNaN(id) || !isFinite(id)) {
      throw new Error(`Bad Input on getCharacter method`)
    } 

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      if(response.status === 404) {
        return null
      } else {       
        return response.json()
      }
    }) 
    .then(data => data)
    .catch(err => err)    
  }
   
  async getEpisode(id) {
    if(!id || typeof id !== 'number' || isNaN(id) || !isFinite(id)) {
      throw new Error(`Bad Input on getEpisode method`) 
    } 
    
    try{
      const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)   
      if(res.status === 404) {
        return null      
      }

      const data = await res.json()
      return data
      
    } catch (err) {
      return err
    }
  }
}