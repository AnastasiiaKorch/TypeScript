import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add', () => {
  const cart = new Cart();
  cart.add(new Movie(1009, 'The Avengers', 400, 2012, 'США', 'Avengers Assemble!', 'фантастика', 137));
  expect(cart.items).toEqual([{
    id: 1009,
    name: 'The Avengers',
    price: 400,
    year: 2012,
    country: 'США',
    slogan: 'Avengers Assemble!',
    genre: 'фантастика',
    time: 137
  }]);
});

test('sum', () => {
  const cart = new Cart();
  cart.add(new Movie(1009, 'The Avengers', 400, 2012, 'США', 'Avengers Assemble!', 'фантастика', 137));
  cart.add(new Movie(1010, 'Avengers', 200, 2012, 'США', 'Avengers Assemble!', 'фантастика', 137));
  expect(cart.sum()).toBe(600);
});

test('discount', () => {
  const cart = new Cart();
  cart.add(new Movie(1009, 'The Avengers', 400, 2012, 'США', 'Avengers Assemble!', 'фантастика', 137));
  expect(cart.discount(3)).toBe(388);
});

test('delete', () => {
  const cart = new Cart();
  cart.add(new Movie(1009, 'The Avengers', 400, 2012, 'США', 'Avengers Assemble!', 'фантастика', 137));
  cart.add(new Movie(1010, 'Avengers', 200, 2012, 'США', 'Avengers Assemble!', 'фантастика', 137));
  cart.delete(1010);
  expect(cart.items).toEqual([{
    id: 1009,
    name: 'The Avengers',
    price: 400,
    year: 2012,
    country: 'США',
    slogan: 'Avengers Assemble!',
    genre: 'фантастика',
    time: 137
  }]);
});