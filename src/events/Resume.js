const Event = require('../structures/Event');
const mtz = require('moment-timezone');

class ResumeEvent extends Event {
  constructor(client) {
    super(client, 'resume');
  }

  async handle() {
    // Sending message in logChannel
    this.client.sendMessage(this.client.config.logChannel, `\`[${mtz().format('HH:mm:ss')}]\` 📡 Shard ID **${this.client.shard.id}** has **RESUMED**.`);
  }
}

module.exports = ResumeEvent;
