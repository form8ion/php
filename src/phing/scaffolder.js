export default function () {
  return {
    dependencies: {php: {development: ['phing/phing']}},
    documentation: {
      contributing: {
        Verification: `\`\`\`sh
vendor/bin/phing
\`\`\``
      }
    }
  };
}
