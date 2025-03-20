/* Блок8_8.3
Необходимо написать функцию группировки, которая принимает массив объектов и его ключ, производит группировку по указанному ключу и возвращает сгруппированный объект.

Пример:
[
{ group: 1, name: 'a' },
{ group: 1, name: 'b' },
{ group: 2, name: 'c' },
];

При группировке по 'group' ---->
{
'1': [ { group: 1, name: 'a' }, { group: 1, name: 'b' } ],
'2': [ { group: 2, name: 'c' } ]
}
*/

type Groupable = Record<string, any>; 

function groupBy<T extends Groupable>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((accumulator: Record<string, T[]>, item: T) => {
    const groupKey = String(item[key]); 
    if (!accumulator[groupKey]) {
      accumulator[groupKey] = [];
    }
    accumulator[groupKey].push(item);
    return accumulator;
  }, {} as Record<string, T[]>);
}