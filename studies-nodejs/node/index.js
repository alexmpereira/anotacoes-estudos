function fizzBuzz() {
	for( let i = 1; i <= 100; i++ ) {
		let fizzBuzz = ( i % 3 === 0 ? 'Fizz' : '') + ( i % 5 === 0 ? 'Buzz' : '' ) || i;
		console.log(fizzBuzz);
		// process.stdout.write(i.toString());
	}
}

fizzBuzz();