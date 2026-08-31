"""
One-off migration that separates the two colour tokens doing double duty, so
every other token can simply flip per theme.

  --color-paper  was a light ground *and* the text colour on dark panels
  --color-forest was a dark panel *and* the text colour on lime

Run once: python scripts/theme-migrate.py
"""
import glob
import io

SEP = chr(92)  # backslash, for normalising Windows paths

GLOBAL = [
    ("text-paper", "text-ink-invert"),
    ("bg-white", "bg-field"),
]

SPECIFIC = {
    "src/app/not-found.tsx": [
        (
            "bg-lime px-6 text-body font-semibold text-forest",
            "bg-lime px-6 text-body font-semibold text-on-accent",
        )
    ],
    "src/components/forms/NewsletterSignup.tsx": [
        (
            "bg-lime px-5 text-small font-semibold text-forest",
            "bg-lime px-5 text-small font-semibold text-on-accent",
        )
    ],
    "src/components/ui/primitives.tsx": [
        (
            'primary: "bg-lime text-forest hover:bg-lime-bright"',
            'primary: "bg-lime text-on-accent hover:bg-lime-bright"',
        ),
        (
            '"border border-forest/20 bg-transparent text-forest hover:border-forest/60',
            '"border border-graphite/25 bg-transparent text-graphite hover:border-graphite/60',
        ),
        ('ghost: "px-0 text-forest underline', 'ghost: "px-0 text-graphite underline'),
    ],
    "src/components/brand/Logo.tsx": [
        (
            'tone === "light" ? "text-ink-invert" : "text-forest"',
            'tone === "light" ? "text-ink-invert" : "text-graphite"',
        )
    ],
    "src/components/layout/Header.tsx": [
        (
            "border border-forest/20 px-6 text-body font-semibold text-forest",
            "border border-graphite/25 px-6 text-body font-semibold text-graphite",
        )
    ],
}


def main():
    changed = 0
    for path in glob.glob("src/**/*.tsx", recursive=True):
        key = path.replace(SEP, "/")
        source = io.open(path, encoding="utf-8").read()
        updated = source
        for old, new in GLOBAL:
            updated = updated.replace(old, new)
        for old, new in SPECIFIC.get(key, []):
            if old in updated:
                updated = updated.replace(old, new)
            else:
                print("  MISS: " + key + " :: " + old[:55])
        if updated != source:
            io.open(path, "w", encoding="utf-8").write(updated)
            changed += 1
    print("files updated: " + str(changed))


if __name__ == "__main__":
    main()
