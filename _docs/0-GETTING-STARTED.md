# Getting Started

If you wish to use Pinguino, you have two options:

- Use the hosted instance of Pinguino.
- Host your own instance of Pinguino.

## Using the Hosted Instance

The hosted instance of Pinguino is a bot run 24/7 by the developers of
Pinguino - it is the most reliable and easy way to use the bot and is
recommended for all but the most advanced users that need ultimate control.

To use the hosted instance of Pinguino, simply invite it using the link
[on the home page](/) - and make sure to give all the permissions it requests to
ensure the bot functions correctly.

## Self Hosting

Compiled JAR files of Pinguino can be found at
[the builds repository](https://github.com/JamCoreDiscord/builds). If you wish
you can compile your own JAR by cloning the repository and running
`./gradlew build`.

The bot needs to be configured with a `config.yml` file that is in the same
directory as the JAR:

```yml
```

To run the bot, use `java -jar Pinguino-[VERSION].jar`
