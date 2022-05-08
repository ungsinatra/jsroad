let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

let [name,surname,...slice] = arr;
console.log(slice)