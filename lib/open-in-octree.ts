export interface OpenInOctreeOptions {
  latex: string;
  title?: string;
  source?: string;
}

export async function openInOctree({ latex, title, source }: OpenInOctreeOptions) {

  // Submit a top-level form POST to avoid CORS and carry large payloads
  const postDraft = () => {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://app.useoctree.com/api/drafts';
    form.style.display = 'none';

    const contentInput = document.createElement('textarea');
    contentInput.name = 'content';
    contentInput.value = latex;
    form.appendChild(contentInput);

    const titleInput = document.createElement('input');
    titleInput.type = 'hidden';
    titleInput.name = 'title';
    titleInput.value = title || 'Imported from Tools';
    form.appendChild(titleInput);

    const sourceInput = document.createElement('input');
    sourceInput.type = 'hidden';
    sourceInput.name = 'source';
    sourceInput.value = source || '';
    form.appendChild(sourceInput);

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };

  // Always use the simple, reliable draft POST; app handles auth/redirects
  postDraft();
} 