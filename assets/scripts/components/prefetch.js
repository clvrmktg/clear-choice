function prefetch(url) {
  if (!document.querySelector(`link[href="${url}"]`)) {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  }
}

document.querySelectorAll('a[data-prefetch]').forEach(link => {
  const prefetchHandler = () => prefetch(link.href);

  link.addEventListener('mouseenter', prefetchHandler);
  link.addEventListener('mousedown', prefetchHandler);
  link.addEventListener('touchstart', prefetchHandler, { passive: true }); // Mark as passive
});

// function normalizePath(path) {
//   // Ensure leading slash and remove trailing slashes
//   return path.replace(/\/+$/, '') || '/';
// }

// function setAnimationDirection(oldPage, newPage) {
//   const oldPath = normalizePath(new URL(oldPage).pathname);
//   const targetPath = normalizePath(new URL(newPage).pathname);

//   const oldIndex = pages.indexOf(oldPath);
//   const targetIndex = pages.indexOf(targetPath);

//   console.log(`Old Path: ${oldPath}, Target Path: ${targetPath}`);
//   console.log(`Old Index: ${oldIndex}, Target Index: ${targetIndex}`);

//   if (oldIndex === -1 || targetIndex === -1) {
//     console.warn(`Unknown path(s): oldPath=${oldPath}, targetPath=${targetPath}`);
//     return 'forward'; // Default fallback for unknown paths
//   }

//   if (oldIndex === targetIndex) {
//     console.log(`Same page navigation detected: ${oldPath} -> ${targetPath}`);
//     return 'forward'; // Or 'none'
//   }
//   console.log(`Normalized Old Path: ${oldPath}`);
//   console.log(`Normalized Target Path: ${targetPath}`);
//   console.log(`Old Index: ${oldIndex}, Target Index: ${targetIndex}`);

//   return oldIndex < targetIndex ? 'forward' : 'backward';

// }

// window.addEventListener('pagereveal', async (event) => {
//   if (!event.viewTransition) return;

//   const oldUrl = navigation.activation.from.url;
//   const targetUrl = navigation.activation.entry.url;

//   console.log(`Old URL: ${oldUrl}`);
//   console.log(`Target URL: ${targetUrl}`);

//   const direction = setAnimationDirection(oldUrl, targetUrl);
//   console.log(`Direction: ${direction}`);

//   document.documentElement.dataset.direction = direction;

//   await event.viewTransition.finished;

//   delete document.documentElement.dataset.direction;

// });