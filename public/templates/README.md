# LaTeX Template Previews

This directory contains pre-compiled PDF previews of LaTeX templates.

## Generating Previews

To regenerate these template previews:

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Run the compilation script:
   ```bash
   node scripts/compile-templates.mjs
   ```

## Template Files

The following PDF files should be in this directory:

- `research-paper.pdf` - IEEE/ACM conference paper template
- `beamer-presentation.pdf` - Beamer presentation template
- `academic-cv.pdf` - Academic CV template
- `mathematical-document.pdf` - Mathematical document template
- `lab-report.pdf` - Lab report template
- `letter.pdf` - Formal letter template
- `book-chapter.pdf` - Book chapter template
- `algorithm-pseudocode.pdf` - Algorithm pseudocode template
- `grading-rubric.pdf` - Assessment criteria and grading template

## Manual Generation

If the script doesn't work, you can manually generate PDFs by:

1. Going to any LaTeX tool in the app
2. Pasting the template code
3. Compiling it
4. Downloading the PDF
5. Saving it to this directory with the correct filename

## Alternative: Using Command Line

You can also use `pdflatex` directly if you have LaTeX installed:

```bash
# For each template:
pdflatex -output-directory=public/templates template-name.tex
```

