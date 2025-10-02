export interface OpenInOctreeOptions {
  latex: string;
  title?: string;
  source?: string;
}

export async function openInOctree({ latex, title, source }: OpenInOctreeOptions) {
  try {
    const response = await fetch('https://app.useoctree.com/api/import-latex', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: latex, title, source }),
    });

    if (response.status === 401) {
      const loginUrl = new URL('https://app.useoctree.com/auth/login');
      loginUrl.searchParams.set('next', '/');
      window.location.href = loginUrl.toString();
      return;
    }

    if (!response.ok) {
      console.error('OpenInOctree error:', await response.text());
      alert('Failed to open in Octree. Please try again.');
      return;
    }

    const data = await response.json();
    const projectUrl = data.projectUrl ? `https://app.useoctree.com${data.projectUrl}` : 'https://app.useoctree.com';
    window.location.href = projectUrl;
  } catch (err) {
    console.error('Open In Octree exception:', err);
    alert('Failed to open in Octree. Please try again.');
  }
} 