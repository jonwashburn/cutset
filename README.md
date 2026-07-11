# Cutset

Public site for [cutset.io](https://cutset.io).

Cutset is the residual-frontier instrument inside [OSMM](https://osmm.ai).

## Surfaces

- `/` — public read-only RH residual frontier
- `/app.html` — public read-only RH campaign console (frontier, walls, graph roster)

## Trust boundary

Static GitHub Pages cannot protect secrets or private campaign state. The public
console renders only sanitized, sealed projections. Provider keys, signing keys,
candidate proofs, launch authority, and canonical writes remain in the private
backend. Lake/CI alone may promote OPEN → THEOREM.

## Refresh snapshot (private reality repo)

```bash
python3 OS-Machine-Mathematics/cutset-site/export_rh_snapshot.py
# copy cutset-site/{index,app,evidence/*} into this repo
```
