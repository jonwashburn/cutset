# Cutset

Public site for [cutset.io](https://cutset.io).

Cutset is the residual-frontier instrument inside [OSMM](https://osmm.ai).

## Surfaces

- `/` — public read-only RH residual frontier
- `/login.html` — single-user sign-in (dogfood)
- `/app.html` — private RH campaign console (frontier, walls, graph roster)

## Auth note

Login is a client-side session gate for one human + one campaign (RH) on static GitHub Pages.
It is not multi-user production auth. Lake/CI alone may promote OPEN → THEOREM.

## Refresh snapshot (private reality repo)

```bash
python3 OS-Machine-Mathematics/cutset-site/export_rh_snapshot.py
# copy cutset-site/{index,login,app,auth.js,evidence/*} into this repo
```
