# Cutset

Public site for [cutset.io](https://cutset.io).

Cutset is the residual-frontier instrument inside [OSMM](https://osmm.ai).

## What is live here

- Read-only RH dogfood snapshot: `evidence/rh-residual-latest.json`
- Page renders the registered residual frontier from that snapshot
- Status upgrades never happen in the UI; lake/CI alone may promote OPEN → THEOREM

## Refresh (private reality repo)

```bash
python3 OS-Machine-Mathematics/cutset-site/export_rh_snapshot.py
# then copy cutset-site/{index.html,evidence/*} into this repo
```

## Domain note

GitHub Pages serves this repo. Custom domain `cutset.io` needs Pages custom-domain HTTPS issued (DNS already points at GitHub).
