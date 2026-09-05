# 🎞️ Modern Glassmorphism Slider

A modern image slider built with **HTML, CSS, and JavaScript**, featuring glassmorphism styling, circular images, smooth animations, navigation arrows, pagination dots, and automatic slide changes.

## 🌐 Live Demo

### ▶️ Open the Demo Locally

(https://negarlmd.github.io/slider/)
> For a real online demo, deploy this repository with **GitHub Pages**, **Netlify**, or **Vercel**, then replace the link below with your deployed URL.

### 🚀 GitHub Pages
After enabling GitHub Pages, use:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
```

Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` with your GitHub username and repository name.

---

## 📸 Preview

![Modern Glassmorphism Slider](./img.slider.png)

---

## ✨ Features

- 🎨 Glassmorphism UI
- 🖼️ Circular image design
- 🔄 Smooth slide animation
- ⬅️ Previous / Next navigation
- ⚪ Clickable pagination dots
- ⏱️ Auto-play every 2 seconds
- ✨ Hover effects
- 🌈 Gradient and glow effects
- 📱 Responsive layout
- ⌨️ Keyboard navigation with Arrow keys

---

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript
- SVG

---

## 📂 Project Structure

```text
modern-slider/
├── index.html
├── stylesheet.css
├── script.js
└── img/
    ├── images-3.jpg
    ├── images-4.jpg
    ├── images-5.jpg
    ├── images-6.jpg
    └── slider-preview.png
```

---

## ⚙️ How It Works

Only the slide with the `active` class is displayed:

```css
.slide {
  display: none;
}

.slide.active {
  display: flex;
  animation: showSlide 0.6s ease forwards;
}
```

JavaScript updates the current slide using `currentIndex`:

```js
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide();
}
```

The slider automatically moves every two seconds:

```js
setInterval(nextSlide, 2000);
```

---

## 🎯 Navigation

Users can control the slider with:

- Previous / Next buttons
- Pagination dots
- `ArrowLeft` / `ArrowRight` keyboard keys
- Automatic playback

---

## 🎨 Customization

### Change Auto-Play Speed

```js
setInterval(nextSlide, 4000);
```

### Change Image Size

```css
.slide > img {
  width: 260px;
  height: 260px;
}
```

### Change the Main Gradient

```css
background: linear-gradient(90deg, #ff5e62, #ff9966);
```

---

## ▶️ Run Locally

No npm package or framework is required.

```bash
git clone https://github.com/negarlmd/modern-slider.git
cd modern-slider
```

Then open `index.html` in your browser.

For development, use the **Live Server** extension in VS Code.

---

## 👩‍💻 Author

**Negar Mohammad**

- GitHub: [@negarlmd](https://github.com/negarlmd)
- Instagram: [@negar_developer](https://instagram.com/negar_developer)

---

## ⭐ Support

If you like this project, give the repository a ⭐ on GitHub.

---

## 📄 License

Created for learning and portfolio purposes.
