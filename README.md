# Ronnie Saba — Digital Portfolio

A static portfolio for GitHub Pages. Open `index.html`, or serve this directory with:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Visit `http://127.0.0.1:4173/`. No build or installation is required.

## Structure

- `index.html`: one page containing About, Experience, FYP, Projects, Education & Skills, Highlights & Growth, and Contact. Supporting methods and case notes expand beneath each relevant experience or project.
- `styles.css`: shared styling and responsive layouts.
- `script.js`: accessible mobile navigation and automatic opening of linked detail panels.
- `artifacts/index.html`: a compatibility redirect for old evidence links. All content now lives in `index.html`.
- `artifacts/*.pdf`: FYP and MRI report copies prepared for the portfolio.
- `assets/fyp/`: original analysis figures using CALLIAR reference data.
- `assets/internship/`: LockAPI diagrams extracted from the internship report and displayed in the Experience section.

Keep relative paths intact when publishing. Deploy the HTML, CSS, JavaScript, `assets/`, and `artifacts/` together. The updated site has not been pushed or deployed by this edit.

See `PORTFOLIO_REVIEW.md` for the rubric mapping and remaining submission checks.
