function numberToWords(number) {
  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number === 0) {
    return 'zero';
  } else if (number < 0) {
    return 'minus ' + numberToWords(Math.abs(number));
  }

  let words = '';

  if (number >= 1000) {
    words += numberToWords(Math.floor(number / 1000)) + ' thousand ';
    number %= 1000;
  }

  if (number >= 100) {
    words += numberToWords(Math.floor(number / 100)) + ' hundred ';
    number %= 100;
  }

  if (number > 0) {
    if (words !== '') {
      words += 'and ';
    }

    if (number < 10) {
      words += units[number];
    } else if (number >= 11 && number <= 19) {
      words += teens[number - 10];
    } else {
      words += tens[Math.floor(number / 10)];
      if (number % 10 !== 0) {
        words += '-' + units[number % 10];
      }
    }
  }

  return words.trim();
}

function numberLetterCounts(limit) {
  let sum = 0;
  let i = 1;
  for (i; i <= limit; i++) {
    const numberInWords = numberToWords(i);
    let len = numberInWords.replace(/[\s-]+/g, '').length; 
    sum += len;
  }
  return sum
}
numberLetterCounts(1000);
