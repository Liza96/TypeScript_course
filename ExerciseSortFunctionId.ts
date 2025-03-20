/* Блок7_7.7
 Код к упражнению:

Необходимо написать функцию сортировки любых
объектов, которые имеют id по убыванию и по возрастанию
const data = [
{ id: 2, name: 'Петя' },
{ id: 1, name: 'Вася' },
{ id: 3, name: 'Надя' },
];*/

const data = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
  ];
  
  function sortObjects<T extends { id: number }>(objects: T[], order: 'asc' | 'desc'): T[] {
    return objects.sort((a, b) => {
      if (order === 'asc') {
        return a.id - b.id;
      } else if (order === 'desc') {
        return b.id - a.id;
      }
      return 0;
    });
  }
  
  const sortedAscending = sortObjects(data, 'asc');
  console.log('Сортировка по возрастанию:', sortedAscending);
  
  const sortedDescending = sortObjects(data, 'desc');
  console.log('Сортировка по убыванию:', sortedDescending);