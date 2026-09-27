<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- Keep the media archive as a single route with in-page filtering and modal inspection because it is one cohesive gallery experience.
- Load the large historical photo collection from eager asset-pointer discovery in `src/lib/archive-photos.ts` to keep the single gallery route maintainable.
