import Sorter from './Sorter';
import NumbersCollection from './NumbersCollection';
import CharactersCollection from './CharactersCollection';
import LinkedList from './LinkedList';

test('should sort number[]', () => {
  const numbersCollection = new NumbersCollection([10, 3, -5, 7]);
  numbersCollection.sort();
  expect(numbersCollection.data).toEqual([-5, 3, 7, 10]);
});

test('should sort string', () => {
  const stringCollection = new CharactersCollection('hello');
  stringCollection.sort();
  expect(stringCollection.data).toEqual('ehllo');
});

test('should sort mixed case string', () => {
  const stringCollection = new CharactersCollection('XaaB');
  stringCollection.sort();
  expect(stringCollection.data).toEqual('aaBX');
});

test('should sort Linked List', () => {
  const sortedLinkedList = {
    head: {
      data: -40,
      next: {
        data: 6,
        next: {
          data: 10,
          next: {
            data: 400,
            next: null
          }
        }
      }
    }
  };

  const linkedList = new LinkedList();
  linkedList.add(400);
  linkedList.add(-40);
  linkedList.add(10);
  linkedList.add(6);
  linkedList.sort();
  expect(linkedList).toEqual(sortedLinkedList);
});
