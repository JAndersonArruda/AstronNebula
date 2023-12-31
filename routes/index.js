import { Router, static as expressStatic } from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from "path";

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.use(expressStatic(join(__dirname, '..', 'src', 'app', 'templates')));
router.use(expressStatic(join(__dirname, '..', 'public')));


router.get("/", async (req, res) => {
    router.get("/api-key/", async (req, res) => {
        res.json({ api_key: process.env.NASA_API_KEY });
    });

    res.sendFile(join(__dirname, '..', 'src', 'app', 'templates', 'base.html'));
});

router.get("/signup/", (req, res) => {
    res.sendFile(join(__dirname, '..', 'src', 'app', 'templates', 'signUp.html'));
});

router.get("/signin/", (req, res) => {
    res.sendFile(join(__dirname, '..', 'src', 'app', 'templates', 'signIn.html'));
});

router.get("/gallery/", (req, res) => {
    res.sendFile(join(__dirname, '..', 'src', 'app', 'templates', 'gallery.html'));
});

router.get("/profile/", (req, res) => {
    res.sendFile(join(__dirname, '..', 'src', 'app', 'templates', 'profile.html'));
});

router.get("/about/", (req, res) => {
    res.sendFile(join(__dirname, '..', 'src', 'app', 'templates', 'about.html'));
});

export default router;