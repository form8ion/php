export default function ({contributing}) {
  return {
    contributing: Object.entries(contributing)
      .map(([heading, content]) => `### ${heading}

${content}`)
      .join('\n\n')
  };
}
