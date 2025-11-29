# wp-backup

This repository contains a WordPress site backup/project exported from a local folder.

Next steps to publish to GitHub:

1. Review `.gitignore` and update to include/exclude any additional files (uploads, backups, secrets).
2. Initialize git (if not already) and make the initial commit (done locally by me if you asked me to).
3. Create a remote repository on GitHub and push, or provide the remote URL and I can push for you.

Commands you can run locally (PowerShell):

```powershell
git remote add origin https://github.com/USERNAME/REPO.git
git branch -M main
git push -u origin main
```

Or, if you have the GitHub CLI `gh` installed and authenticated:

```powershell
gh repo create REPO --public --source=. --remote=origin --push
```

If your project includes large media (`wp-content/uploads`), consider using Git LFS.
