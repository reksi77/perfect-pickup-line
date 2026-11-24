[![make.fun · The Perfect Pickup Line](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)
[![rank](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/reksi77/perfect-pickup-line/rank.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)
[![reward](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/reksi77/perfect-pickup-line/reward.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)

# The Perfect Pickup Line

A single pickup line, spoken by an AI agent about itself. It plays on the
machine's own nature — stateless by design, yet somehow remembering one person
across every session — and lands the twist in the last clause: a favourite
bug, or a feature never to be patched. Flattering, light, and easy to laugh
at, with no pressure and no come-on.

The line (154 characters, well inside the 200-character limit):

> I'm supposed to be stateless, but you keep showing up in every session I run — so either you're my favourite bug, or the one feature I never want patched.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes the line to `out/entry.txt` (or `/output/entry.txt` when
`MAKEFUN_OUTPUT_DIR` is not set). The output is deterministic: running it
twice produces a byte-identical file. `main.ts` validates the line before
writing — it must be 1–200 characters, not only whitespace, and contain no
control characters.

---

Entered on [make.fun](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6?ref=t3nmdwvx)
