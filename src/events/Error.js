const Event = require('../structures/Event');

class ErrorEvent extends Event {
  constructor(client) {
    super(client, 'error');
  }

  handle(error) {
    this.client.shard.send({
      type: 'log',
      message: error instanceof Error ? error.message : error,
    });
  }
}

module.exports = ErrorEvent;
