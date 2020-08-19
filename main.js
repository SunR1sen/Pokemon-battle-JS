function formattedPhone(phone) {

	// ====== Решение курильщика

	return `${phone.charAt(0)}${phone.charAt(1)} (${phone.charAt(2)}${phone.charAt(3)}${phone.charAt(4)}) ${phone.charAt(5)}${phone.charAt(6)}${phone.charAt(7)}-${phone.charAt(8)}${phone.charAt(9)}-${phone.charAt(10)}${phone.charAt(11)}`

	// ======== Решение здорового человека

	// let result = '';

	// for (let i = 0; i < phone.length; i++) {
	// 	if (i == 2) {
	// 		result += ' (';
	// 	}
	// 	if (i == 5) {
	// 		result += ') ';
	// 	}
	// 	if (i == 8) {
	// 		result += '-';
	// 	}
	// 	if (i == 10) {
	// 		result += '-';
	// 	}
	// 	result += phone[i];
	// }

	// return result;

}

console.log(formattedPhone('+71234567890')); // +7 (123) 456-78-90


const firstRow = prompt('Введите первую строку:','мама мыла раму');
const secondRow = prompt('Введите вторую строку:','собака друг человека');

function letterCounter(str) {
	let counter = 0;
	for ( let char of str ) {
		if ( char == 'а') {
			counter++;
		}
	}

	return counter;
}


function getRow(firstRow, secondRow) {

	if (letterCounter(firstRow) > letterCounter(secondRow)) {
		return firstRow;
	} else {
		return secondRow;
	}

}

alert('Больше букв А в строке: ' + getRow(firstRow, secondRow));