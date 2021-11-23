function reverseString(message){
    var newString = "";
      for (var i = message.length - 1; i >= 0; i--) {
          newString += message[i];
      }
      return newString;
  }
reverseString('hello'); // should return 'olleh'