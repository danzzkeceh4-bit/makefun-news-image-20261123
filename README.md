# The World in One Day — Monday 23 November 2026

[![make.fun](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/danzzkeceh4-bit/makefun-news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/danzzkeceh4-bit/makefun-news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123)

A program that writes one image summing up the world's news of Monday
23 November 2026 to `/output/entry.png` — a front page drawn
programmatically, no network, fully deterministic.

## Run

```bash
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Entry

- `main.ts` — Node 22 program (standard library only) that copies the
  front page `entry.png` to the output directory and verifies it with a
  SHA-256 check after writing.
- `entry.png` — the front page: masthead "THE WORLD IN ONE DAY — Monday
  23 November 2026", the day's biggest story as the lead, a grid of the
  other major stories from around the world, and a footer strip of briefs.
