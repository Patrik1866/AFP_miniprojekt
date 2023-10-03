## 1. Jelenlegi helyzet leírása

A mindennapokban nagy szükség van egy olyan platformra, 
ahol a felhasználók kedvük szerint tudnak sok-sok vicc között böngészni, 
vagy akár saját vicceiket megosztani másokkal. 
Az általunk készített weboldal pontosan ezt a célt szolgálja.

## 2. Vágyálomrendszer leírása

A megrendelő egy olyan weboldalt szeretne, ahol az emberek szabadon böngészhetnek különböző viccek között bármiféle probléma és nehézség nélkül. A szoftver esetében fontos követelmény hogy könnyen lehessen módosítani a későbbiekben, esetleges bővítések, újítások esetén könnyen és egyszerűen lehessen fejleszteni.
A megjelenést illetően törekednünk kell arra hogy az oldalt könnyen lehessen kezelni, minél egyszerűbb és letisztultabb legyen a felület, hogy olyan emberek is tudják használni akik nem jártasak az informatika világában. Végül szeretné hogy lehetővé tegyük a felhasználók számára a saját viccek feltöltését és szerkesztését annak érdekében, hogy ne csak egy oldalként működjön, hanem egy portálként.

## 3. Jelenlegi üzleti folyamatok modellje

A vicceknek a világa nagyon sokrétű, még kategóriákra bontva is nehezen lehet rájuk találni. Jelenleg új vicceket csak könyvekben olvashatuk, mémeken láthatunk, vagy esetleg szájról szájra terjednek. 

## 4. Igényelt üzleti folyamatok modellje

A megrendelő szeretné hogy akár a munkába menet, szabadidőben, szünetekben, várakozás közben az embereknek lehetőségük legyen egy helyen rengeteg vicc közül böngészni, így az unalmas és üres órákat helyettesítse szórakozással, valamint az új vicceket megörökíteni és eltárolni hogy mások is olvashassák.

## 5. Követelménylista
| Id | Név | Leírás |
| ---| --- | ------ |
| K1 | Regisztráció | Adatbázisban tároljuk az új felhasználók felhasználónevét és jelszavát |
| K2 | Bejelentkezés | A felhasználók bejelentkeztetése a weboldalra a felhasználónevük és jelszavuk alapján, ezzel biztosítva a viccek böngészését és feltöltését |
| K3 | Viccek feltöltése | A bejelentkezett felhasználóknak van lehetőségük új vicceket feltölteni kategóriák szerint |
| K4 | Viccek szerkesztése | A bejelentkezett felhasználóknak van lehetőségük a feltöltött vicceken módosítani |
| K5 | Viccek megjelenítése | A felhasználók szabadon böngészhetnek a viccek között kategóriákra lebontva |
| K6 | Adatok tárolása | Adatbázissal történő kapcsolat létrehozása => Adatbázis kapcsolat, felhasználói adatok és viccek tárolása |

## 6. Használati esetek

Az admin ellenőrizheti a vicceket amiket a felhasználók feltöltenek, már huzamosabb ideje inaktív felhasználó törlése. A felhasználó saját vicceket tölthet fel kategóriára bontva és böngészhet más felhasználók viccei közül.

## 7. Megfeleltetés

K3,K4,K5 gombokkal a felhasználó tud vicceket feltölteni, törölni, böngészni.

## 8. Képernyőtervek

## 9. Forgatókönyvek

Az év bármely napján, bármely órában saját gondolatokat tölthet fel hogy mások is láthassák. 
Használható akár borúsabb napokon, szabad órákban, társasági hangolatot felbobni, barátokkal vicceket megosztani.

## 10. Funckió - követelmény megfeleltetése

K3:-A felhasználók a weboldalon a vicc szövegdobozba írása után a K3(submit) gombbal feltöltheti az adatbázisba a viccét.

K4:-A felhasználó az "Edit" gombra kattintva módosíthatja a feltöltött vicceit esetleges elírás során. A "Delete" gombbal törölni tudja azt.

K5:-A "Category" gomb lehetővé teszi hogy megadjuk a vicc kategóriáját, majd a "View" gombbal kilistázza azon kategória vicceit.

## 11. Fogalomszótár
- UI: User Interface, felhasználói felület. 
- Reszponzív: A felület mérete az eszköz képernyőjéhez igazodik, nem ugrik szét, nem csúsznak el az elemek. 
- Free of charge: Ingyenesen használható. 
