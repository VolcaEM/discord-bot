exports.roles = ['Admins', 'Moderators'];
exports.command = function (message) {
  var role = '345247291843805185';
  message.mentions.users.map((user) => {
    let member = message.guild.member(user);
    let alreadyJoined = member.roles.has(role);

    if (alreadyJoined) {
      member.removeRole(role);
      message.channel.send(`${user}'s speech has been revoked in the #development channel.`);
    } else {
      member.addRole(role);
      message.channel.send(`${user} has been granted speech in the #development channel.`);
    }
  });
}