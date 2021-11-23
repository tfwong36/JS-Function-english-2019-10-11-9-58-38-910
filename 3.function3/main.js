function alphabetSort(message){
    return message.split('').sort((a, b) => a.localeCompare(b)).join('');
}
alphabetSort('hello'); // should return 'ehllo'