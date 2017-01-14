var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Andrew';
    var text = 'It works';
    var message = generateMessage(from, text);

    expect(message.from).toBe('Andrew');
    expect(message.text).toBe('It works');
    expect(message).toInclude({from, text});
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Admin';
    var latitude = 32.9382369;
    var longitude = -96.9661794;
    var url = 'https://www.google.com/maps?q=32.9382369,-96.9661794';
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message).toInclude({from, url});
    expect(message.createdAt).toBeA('number');
  });
});
