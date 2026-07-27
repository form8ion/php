export default function formatDocumentation({contributing}) {
  return {
    contributing: Object.entries(contributing)
      .map(([heading, content]) => `### ${heading}

${content}`)
      .join('\n\n')
  };
}
