module.exports = {
  ci: {
    assert: {
      // preset: 'lighthouse:recommended',
      assertions: {
        'categories:performance': ['error', { minScore: 1 }],
        'categories:accessibility': ['error', { minScore: 1 }],
        // 'categories:best-practices': ['error', { minScore: 1 }],
        // 'categories:seo': ['error', { minScore: 1 }],
        // 'first-contentful-paint': ['error', { maxNumericValue: 1000 }],
        // interactive: ['error', { maxNumericValue: 1000 }],
      },
    },
    collect: {
      settings: {
        preset: 'desktop',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
