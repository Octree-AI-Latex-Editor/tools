'use client';

import '@/lib/promise-polyfill';
import { useEffect } from 'react';

export default function ClientBootstrap() {
  useEffect(() => {
    // If we have a pending draft intent and are now authenticated on tools, complete SSO and post
    (async () => {
      try {
        const { createClient } = await import('@supabase/supabase-js');
        const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL as string,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
        );
        const { data: sessionData } = await supabase.auth.getSession();
        const intentRaw = localStorage.getItem('octree_draft_intent');
        if (sessionData.session && intentRaw) {
          const { access_token, refresh_token } = sessionData.session;
          await fetch('https://app.useoctree.com/api/sso', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ access_token, refresh_token, next: '/import' }),
          });

          const intent = JSON.parse(intentRaw) as { latex: string; title: string; source: string };
          // Post the draft via form submit to trigger redirect to /import
          const form = document.createElement('form');
          form.method = 'POST';
          form.action = 'https://app.useoctree.com/api/drafts';
          form.style.display = 'none';

          const contentInput = document.createElement('textarea');
          contentInput.name = 'content';
          contentInput.value = intent.latex;
          form.appendChild(contentInput);

          const titleInput = document.createElement('input');
          titleInput.type = 'hidden';
          titleInput.name = 'title';
          titleInput.value = intent.title;
          form.appendChild(titleInput);

          const sourceInput = document.createElement('input');
          sourceInput.type = 'hidden';
          sourceInput.name = 'source';
          sourceInput.value = intent.source;
          form.appendChild(sourceInput);

          document.body.appendChild(form);
          form.submit();
          document.body.removeChild(form);
          localStorage.removeItem('octree_draft_intent');
        }
      } catch {}
    })();
  }, []);

  return null;
}


