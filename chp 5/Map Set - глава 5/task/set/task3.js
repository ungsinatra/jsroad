//! Создайте коллекцию Set с начальными значениями 1, 2 и 3. С помощью метода add добавьте в коллекцию еще одно число 2. Выведите содержимое коллекции в консоль, убедитесь, что число 2 не добавилось второй раз. 

let set = new Set([1,2,3]);

console.log(set)
set.add(2);
console.log(set)