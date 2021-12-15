const todoItems = [
  { id: 1, title: 'Hi', isCompleted: true },
  { id: 2, title: 'Genc', isCompleted: false },
  { id: 3, title: 'Nur', isCompleted: false },
  { id: 4, title: 'Frontend', isCompleted: false },
  { id: 5, title: 'Javascript', isCompleted: false },
];

export default todoItems;
export { todoItems }; // obje olarak gönderiliyor, app içinde import ederken {todoItems} şeklinde import edilir. farklı bir isimle çağrılamaz.
