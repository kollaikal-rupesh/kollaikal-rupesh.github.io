// Optional enhancement: publication text and citations work without JavaScript.
for (const button of document.querySelectorAll('[data-copy-citation]')) {
  const section = button.closest('section');
  const citation = section?.querySelector('pre code');
  const status = section?.querySelector('[role="status"]');
  if (!citation || !status) continue;
  button.hidden = false;
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(citation.textContent || '');
      status.textContent = 'Copied';
    } catch {
      status.textContent = 'Select and copy the citation below.';
    }
  });
}
