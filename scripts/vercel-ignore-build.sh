#!/usr/bin/env bash
#
# Vercel "Ignored Build Step". Wired from vercel.json as `ignoreCommand`.
#
#   exit 0 -> SKIP the build
#   exit 1 -> RUN the build
#
# Why this exists: 351 of the 1,380 commits made between 2026-10-10 and
# 2026-10-20 touched only documentation, and each one still produced a full
# build of a 212-page site. Nothing under app/, lib/ or components/ imports
# docs/, knowledge/ or seo-agent/, and nothing reads them from disk at build
# time, so those builds were byte-identical to the one before them.
#
# The bias is deliberate and must stay: every uncertain path exits 1. A build
# that did not need to happen costs storage; a build that was skipped when it
# was needed silently withholds a content change, which is the failure mode
# this repo has been bitten by before (see "Sitemap lastmod is generated, not
# written" in CLAUDE.md).

set -u

REF="${VERCEL_GIT_COMMIT_REF:-}"

# Production always builds. A wrong skip here would hold a real content change
# back from www.accounstone.com with nothing to show that it happened.
if [ "$REF" = "main" ] || [ -z "$REF" ]; then
  echo "build: production branch or unknown ref ('$REF')"
  exit 1
fi

# Needs a parent commit to compare against. A clone shallow enough to lack one
# builds rather than guesses.
if ! git rev-parse --verify --quiet "HEAD^" >/dev/null 2>&1; then
  echo "build: no parent commit to compare against"
  exit 1
fi

CHANGED="$(git diff --name-only "HEAD^" HEAD 2>/dev/null)" || {
  echo "build: git diff failed"
  exit 1
}

if [ -z "$CHANGED" ]; then
  echo "build: could not determine which files changed"
  exit 1
fi

# Paths that cannot alter rendered output. Verified 2026-10-20: no import of
# docs/, knowledge/ or seo-agent/ exists anywhere in app/, lib/ or components/,
# and none of those directories is read from disk during the build.
# Re-verify before adding an entry here.
RENDERING="$(printf '%s\n' "$CHANGED" \
  | grep -vE '^(docs/|knowledge/|seo-agent/|\.claude/|[A-Za-z0-9._-]+\.md$)' || true)"

if [ -n "$RENDERING" ]; then
  COUNT="$(printf '%s\n' "$RENDERING" | grep -c . || true)"
  FIRST="$(printf '%s\n' "$RENDERING" | head -1)"
  echo "build: $COUNT path(s) affect rendered output, first: $FIRST"
  exit 1
fi

TOTAL="$(printf '%s\n' "$CHANGED" | grep -c . || true)"
echo "skip: $TOTAL path(s) changed on '$REF', none of them rendered"
exit 0
