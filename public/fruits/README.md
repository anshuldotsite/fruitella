# Fruits Directory

Place your high-quality fruit images here. 

**Supported formats:** PNG, JPG, WebP (WebP recommended for best performance)

**Recommended naming:**
- strawberry.png
- mango.png
- orange.png
- grapes.png
- watermelon.png
- banana.png
- peach.png
- kiwi.png

**Image specs:**
- Size: 200-400px width/height is ideal
- Background: Transparent PNGs work best
- File size: Keep under 100KB for fast loading

Once you add images, uncomment the `image:` property in `app/components/hero/page.tsx` for the corresponding fruit.

Example:
```tsx
{
  emoji: "🍓",
  image: "strawberry.png", // Uncomment this line
  size: "w-20 h-20",
  // ...
}
```

