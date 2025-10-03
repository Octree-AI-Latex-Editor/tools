export interface OpenInOctreeOptions {
  latex: string;
  title?: string;
  source?: string;
}

export async function openInOctree({ latex, title, source }: OpenInOctreeOptions) {
  const nextPath = '/import';

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

  try {
    // Dynamically import Supabase to avoid adding it globally if unused
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL as string,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
    );

    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData.session) {
      // Persist draft intent so we can resume after OAuth
      try {
        localStorage.setItem(
          'octree_draft_intent',
          JSON.stringify({ latex, title: title || 'Imported from Tools', source: source || '' })
        );
      } catch {}

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.href,
        },
      });
      if (error) throw error;
      if (data?.url) {
        window.location.href = data.url;
        return;
      }
      return;
    }

    // Exchange tokens with app to ensure app has session
    const { access_token, refresh_token } = sessionData.session;
    await fetch('https://app.useoctree.com/api/sso', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ access_token, refresh_token, next: nextPath }),
    });

    // After session handoff, post draft which will redirect to /import
    postDraft();
  } catch {
    // Fallback: just try posting the draft (app will redirect to login/oauth)
    postDraft();
  }
} 