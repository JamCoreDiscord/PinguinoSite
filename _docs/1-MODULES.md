# Modules

Pinguino's functionality is organised into modules. Each module is disabled by
default, and can be enabled and configured using the [dashboard](/dashboard).

Pinguino has the following modules, each of which has their own documentation
page:

- `Fun` - provides a variety of fun commands.

- `Quote` - provides starboard-like functionality.

- `Moderation` - provides moderation commands like `ban` and `kick`.

- `Moderator Utility` - provides useful commands to be used by moderators.

- `User Utility` - provides useful commands to be used by users.

- `Role` - provides a role management system so users can give themselves
  configured roles.

- `Tags` - provides a system for users to use tags created by moderators.

- `Phishing` - automatically scans links and flags them if a phishing link is
  detected.

- `File Paste` - checks for files uploaded to messages and gives the option to
  upload the file to [Hastebin](https://hastebin.com/), so they can be viewed by
  mobile users.

- `Logging` - provides a system that logs important events to a configured
  channel.

The modules listed above are all controlled by the admin of the server, but
there are some modules built into Pinguino that cannot be disabled. These are
listed below, and they won't affect the running of your server by being enabled.

- `Announcements` - provides a system for important updates about Pinguino to be
  delivered to subscribers.

- `Core` - core functionality such as `/invite` and `/help`.
