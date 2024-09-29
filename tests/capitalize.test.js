import { capitalize } from '../src/capitalize.js';
import assert from 'assert';

assert.strictEqual(capitalize('hello'), 'Hello', 'Функция работает неверно!');

assert.strictEqual(capitalize(''), '', 'Функция работает неверно!');

console.log('Все тесты пройдены!');