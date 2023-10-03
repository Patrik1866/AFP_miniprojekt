## 1. Áttekintés 

Rendszerünk célja egy webes felületű viccportál. 
A felületen a felhasználók vicceket tudnak olvasni/keresni, vagy akár létrehozni. 
A vicceket a rendszer tárolja, így a viccek közötti szűrés is egy opció. 
A rendszer használata “free of charge”, viszont csak a regisztrált felhasználók által létrehozott vicceket tároljuk. 
 

## 2. Jelenlegi helyzet 

A mindennapokban nagy szükség van egy olyan platformra, ahol a felhasználók kedvük szerint tudnak sok-sok vicc között böngészni, vagy akár saját vicceiket megosztani másokkal. Az általunk készített weboldal pontosan ezt a célt szolgálja. 
 

## 3. Vágyálom rendszer 

A weboldalunk célja, hogy a felhasználóinkat rosszabb napjaikon fel tudjuk dobni egy-egy humoros viccel, amikkel egyből jobb kedvre derülnek, vagy akár csak lehetőséget nyújtani a saját vicceik másokkal való megosztására. A weblap egy könnyen átlátható, minden korosztálynak könnyen kezelhető, reszponzív UI-al rendelkezik. 
 

## 4. Funkcionális követelmények 

- A regisztrált felhasználók adatainak tárolása. 
- A felhasználók meg tudják nézni az oldalon lévő vicceket. 
- A felhasználók tudnak feltölteni vicceket. 
- A felhasználók tudják módosítani az általuk feltöltött vicceket. 
- A felhasználók tudják törölni az általuk feltöltött vicceket. 

 
## 5. Rendszerre vonatkozó törvények, szabványok, ajánlások 

Az alkalmazásunk nyílt forráskódú, bárki letöltheti/használhatja. Értékesítése szigorúan tilos! 
 

## 6. Jelenlegi üzleti folyamatok modellje 

6.1 Új viccek feltöltése 

    6.1.1 Kategória megadása 
    
    6.1.2 Vicc leírása 
    
    6.1.3 Regisztrált felhasználók és az admin végezheti 

6.2 Feltöltött viccek szerkesztése 

    6.2.1 Vicc törlése => Szerkesztés gomb => Törlés 
    
    6.2.2 Vicc módosítása => Szerkesztés gomb => Módosítás 


## 7. Igényelt üzleti folyamatok modellje 

7.1 A nem regisztrált felhasználók jogai 

    7.1.1 Viccek megtekintése/megjelenítése 

 
## 8. Követelménylista 

| Id | Név | | Leírás |
| ---| --- | | --- |
| K1 | Regisztráció | Adatbázisban tároljuk az új felhasználók felhasználónevét és jelszavát |
| K2 | Bejelentkezés | A felhasználók bejelentkeztetése a weboldalra a felhasználónevük és jelszavuk alapján, ezzel biztosítva a viccek böngészését és feltöltését |
| K3 | Viccek feltöltése | A bejelentkezett felhasználóknak van lehetőségük új vicceket feltölteni kategóriák szerint |
| K4 | Viccek szerkesztése | A bejelentkezett felhasználóknak van lehetőségük a feltöltött vicceken módosítani |
| K5 | Viccek megjelenítése | A felhasználók szabadon böngészhetnek a viccek között kategóriákra lebontva |
| K6 | Adatok tárolása | Adatbázissal történő kapcsolat létrehozása => Adatbázis kapcsolat, felhasználói adatok és viccek tárolása |

 
## 9. Fogalomszótár

- UI: User Interface, felhasználói felület. 
- Reszponzív: A felület mérete az eszköz képernyőjéhez igazodik, nem ugrik szét, nem csúsznak el az elemek. 
- Free of charge: Ingyenesen használható. 
