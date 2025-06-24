# Pasang Yangji Portfolio

This is a React single-page portfolio website for Pasang Yangji, ready to deploy on Firebase Hosting.

---

## Setup

1. Clone this repository (or download the folder):

```bash
git clone <your-repo-url>
cd portfolio-react-firebase
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## Build & Deploy

To build the app for production:

```bash
npm run build
```

This creates a \`build\` folder with static assets ready to deploy.

---

## Deploying to Firebase Hosting

1. Install Firebase CLI if you haven't:

```bash
npm install -g firebase-tools
```

2. Login to Firebase:

```bash
firebase login
```

3. Initialize Firebase Hosting in this project folder:

```bash
firebase init hosting
```

- Select your existing Firebase project.
- For the public directory, enter \`build\`.
- Choose \`Yes\` to configure as a single-page app (this will set rewrite rules).
- Choose \`No\` to overwrite \`index.html\`.

4. Deploy your app:

```bash
firebase deploy
```

---

## Custom Domain Setup (pasangyangji.com.np)

- Configure your DNS records to point to Firebase Hosting (check Firebase docs for instructions).
- Add your custom domain in Firebase Hosting settings.
- Verify ownership and deploy.

---

## Customize

- Edit \`src/components/Portfolio.js\` to update About Me, Portfolio projects, and Contact info.
- Update styles in \`src/styles.css\`.
