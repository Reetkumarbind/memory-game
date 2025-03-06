D:\memory-game>git config --global user.name "Reet Kumar Bind"

D:\memory-game>git config --global user.email "your-email@example.com"

D:\memory-game>git config --global user.name "Reet Kumar Bind"

D:\memory-game>git config --global user.email "reetkumarbind@gmail.com"

D:\memory-game>git init
Reinitialized existing Git repository in D:/memory-game/.git/

D:\memory-game>git remote -v
origin  https://github.com/Reetkumarbind/memory-game.git (fetch)
origin  https://github.com/Reetkumarbind/memory-game.git (push)

D:\memory-game>git remote remove origin

D:\memory-game>git remote add origin https://github.com/Reetkumarbind/memory-game.git

D:\memory-game>git add .

D:\memory-game>git commit -m "Initial commit"
[main (root-commit) acbf766] Initial commit
 74 files changed, 10373 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 app/globals.css
 create mode 100644 app/layout.tsx
 create mode 100644 app/page.tsx
 create mode 100644 components.json
 create mode 100644 components/theme-provider.tsx
 create mode 100644 components/ui/accordion.tsx
 create mode 100644 components/ui/alert-dialog.tsx
 create mode 100644 components/ui/alert.tsx
 create mode 100644 components/ui/aspect-ratio.tsx
 create mode 100644 components/ui/avatar.tsx
 create mode 100644 components/ui/badge.tsx
 create mode 100644 components/ui/breadcrumb.tsx
 create mode 100644 components/ui/button.tsx
 create mode 100644 components/ui/calendar.tsx
 create mode 100644 components/ui/card.tsx
 create mode 100644 components/ui/carousel.tsx
 create mode 100644 components/ui/chart.tsx
 create mode 100644 components/ui/checkbox.tsx
 create mode 100644 components/ui/collapsible.tsx
 create mode 100644 components/ui/command.tsx
 create mode 100644 components/ui/context-menu.tsx
 create mode 100644 components/ui/dialog.tsx
 create mode 100644 components/ui/drawer.tsx
 create mode 100644 components/ui/dropdown-menu.tsx
 create mode 100644 components/ui/form.tsx
 create mode 100644 components/ui/hover-card.tsx
 create mode 100644 components/ui/input-otp.tsx
 create mode 100644 components/ui/input.tsx
 create mode 100644 components/ui/label.tsx
 create mode 100644 components/ui/menubar.tsx
 create mode 100644 components/ui/navigation-menu.tsx
 create mode 100644 components/ui/pagination.tsx
 create mode 100644 components/ui/popover.tsx
 create mode 100644 components/ui/progress.tsx
 create mode 100644 components/ui/radio-group.tsx
 create mode 100644 components/ui/resizable.tsx
 create mode 100644 components/ui/scroll-area.tsx
 create mode 100644 components/ui/select.tsx
 create mode 100644 components/ui/separator.tsx
 create mode 100644 components/ui/sheet.tsx
 create mode 100644 components/ui/sidebar.tsx
 create mode 100644 components/ui/skeleton.tsx
 create mode 100644 components/ui/slider.tsx
 create mode 100644 components/ui/sonner.tsx
 create mode 100644 components/ui/switch.tsx
 create mode 100644 components/ui/table.tsx
 create mode 100644 components/ui/tabs.tsx
 create mode 100644 components/ui/textarea.tsx
 create mode 100644 components/ui/toast.tsx
 create mode 100644 components/ui/toaster.tsx
 create mode 100644 components/ui/toggle-group.tsx
 create mode 100644 components/ui/toggle.tsx
 create mode 100644 components/ui/tooltip.tsx
 create mode 100644 components/ui/use-mobile.tsx
 create mode 100644 components/ui/use-toast.ts
 create mode 100644 global.css
 create mode 100644 hooks/use-mobile.tsx
 create mode 100644 hooks/use-toast.ts
 create mode 100644 lib/utils.ts
 create mode 100644 memory-game.tsx
 create mode 100644 next.config.mjs
 create mode 100644 package-lock.json
 create mode 100644 package.json
 create mode 100644 postcss.config.mjs
 create mode 100644 public/placeholder-logo.png
 create mode 100644 public/placeholder-logo.svg
 create mode 100644 public/placeholder-user.jpg
 create mode 100644 public/placeholder.jpg
 create mode 100644 public/placeholder.svg
 create mode 100644 src/App.css
 create mode 100644 styles/globals.css
 create mode 100644 tailwind.config.ts
 create mode 100644 tsconfig.json

D:\memory-game>git branch -M main

D:\memory-game>git push --set-upstream origin main
Enumerating objects: 81, done.
Counting objects: 100% (81/81), done.
Delta compression using up to 12 threads
Compressing objects: 100% (78/78), done.
Writing objects: 100% (81/81), 85.83 KiB | 3.90 MiB/s, done.
Total 81 (delta 7), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (7/7), done.
To https://github.com/Reetkumarbind/memory-game.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
