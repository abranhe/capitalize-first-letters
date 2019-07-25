import test from 'ava';
import capitalizeFirstLetters from '.';

test('title', t => {
	t.throws(() => {
		capitalizeFirstLetters(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number'
	});

	t.is(capitalizeFirstLetters('foo bar'), 'Foo Bar');
	t.is(capitalizeFirstLetters('hello world'), 'Hello World');
	t.is(capitalizeFirstLetters(''), '');
});
