import { Router, static as expressStatic } from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from "path";

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.use(expressStatic(join(__dirname, '..', 'src', 'apps', 'templates')));
router.use(expressStatic(join(__dirname, '..', 'public')));


router.get("/", (req, res) => {
    res.sendFile(join(__dirname, '..', 'src', 'apps', 'templates', 'base.html'));
});

router.get("/signup/", (req, res) => {
    res.sendFile(join(__dirname, '..', 'src', 'apps', 'templates', 'signUp.html'));
});

router.get("/signin/", (req, res) => {
    res.sendFile(join(__dirname, '..', 'src', 'apps', 'templates', 'signIn.html'));
});

router.get("/calendary/", (req, res) => {
    res.sendFile(join(__dirname, '..', 'src', 'apps', 'templates', 'calendary.html'));
});

router.get("/galery/", (req, res) => {
    res.sendFile(join(__dirname, '..', 'src', 'apps', 'templates', 'galery.html'));
});

router.get("/about/", (req, res) => {
    res.sendFile(join(__dirname, '..', 'src', 'apps', 'templates', 'about.html'));
});

export default router;