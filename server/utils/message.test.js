var expect = require('expect');

var {generateMessage} = require('./message');

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
