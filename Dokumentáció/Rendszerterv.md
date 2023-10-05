## 1. Rendszer célja

A rendszer célja egy webes felülettel rendelkező bejegyzésrendszer. Ezen a felületen a felhasználó bejegyzéseket tehet közzé és módosíthatja, törölheti azokat
Ezeket a bejegyzéseket a weboldal eltárolja egy adatbázisban és láthatóvá teszi az oldalt használó felhasználók számára.

## 2. Projektterv

### Projekttszerepkörök:
  * Termék tulajdonos: Random csapat
### Projekttmunkások és felelősségek:
  * Backend munkálatok: Bárdos Botond, Erdélyi Patrik
  * Frontend munkálatok: Koczka Gergő

### Feladatuk: 
- adatbázis létrehozása az adatok tárolásához
- megfelelő funkciók elkészítése az oldal megfelelő működésének érdekében
- felhasználói felület kialakítása

### Ütemterv:
 - 09.28 Követelmény specifikáció 
 - 09.28 Funkcionális specifikáció
 - 09.28 Rendszerterv
 - 10.01 Adatbázis kialakítása
 - 10.02 Backend funkciók elkészítése
 - 10.03 Frontend design megtervezése
 - 10.04 Felhasználói felület kialakítása

 ## 3. Követelmények

**Funkcionális követelmények**
  - **Felhasználó bejegyzéseinek tárolása**
  - **Felhasználó tudják változtatni a bejegyzéseiket**
  - **Felhasználó tudják módosítani és törölni a létrehozott bejegyzéseiket**

  **Nem funkcionális követelmények**

  **Törvényi előírások, szabványok:**
  - **GDPR-nek való megfelelés**


  ## 4. Funkcionális terv

**Rendszerszereplők:**
  - **Felhasználó**

  **Rendszerhasználati esetek és lefutásaik:**
  - **Felhasználó**
    - **Megtekintheti a bejegyzéseket**
    - **Törölheti a korábban létrehozott bejegyzéseket**
    - **Módosíthatja a bejegyzéseket**
  
## 5. Fizikai környezet

- **Az alkalmazás csak web platformra készül, AWS EC2 instance-ra telepített Apache szerveren, MySQL adatbázissal lesz futtatva.**
  - **Nincsenek megvásárolt komponensek.**
  - **Fejlesztői eszközök:**
    - **Visual Studio Code**
    - **Notepad++**
    - **XAMPP**

## 6. Architekturális terv

A rendszer tökéletes működéséhez szükség van egy adatbázis szerverre, ebben az esetben MySql-t használunk. A webes felület HTML, CSS és JavaScript nyelven fog elkészülni, NodeJS futtató környezettel.

## 7. Adatbázis terv

### **Táblák**
- **vicc:** Az oldalon létrehozott viccek
  - **id:** Azonosító szám, a viccek egyedi azonosítója
  - **kategoria:** A viccek kategóriája
  - **vicc_tartalom:** A viccek tartalma

- **viccportal:** Az oldalon létrehozott user 
  - **id:** Azonosító szám, a user egyedi azonosítója
  - **username:** A user felhasználó neve
  - **password:** A felhasználó által létrehozott jelszó

**DSL**


```

CREATE TABLE `vicc` (
  `id` int(11) NOT NULL COMMENT 'A viccek azonosító száma',
  `kategoria` varchar(100) NOT NULL COMMENT 'A vicc kategoriája',
  `vicc_tartalom` text NOT NULL COMMENT 'A viccek szöveges tartalma'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



ALTER TABLE `posts`
  ADD PRIMARY KEY (`pid`);



ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'A viccek azonosító száma';
COMMIT;

```

```

CREATE TABLE `viccportal` (
  `id` int(11) NOT NULL COMMENT 'A user azonosító száma',
  `username` varchar(100) NOT NULL COMMENT 'A felhasználó neve',
  `password` varchar(100) NOT NULL COMMENT 'A jelszó tartalma'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



ALTER TABLE `posts`
  ADD PRIMARY KEY (`pid`);



ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'A felhasználók azonosító száma';
COMMIT;

```

**UML**



## 8. Implementációs terv

A webes felület HTML, CSS és JavaScript nyelven fog elkészülni, NodeJS futtató környezettel. A különböző technológiákat amennyire csak lehet, külön fájlokba írva készítjük el, úgy csatoljuk egymáshoz ezzel is egy átláthatóbb, könnyebben változtatható és bővíthető weboldal lesz. Az adatokat egy MYSQL adatbázisban fogjuk tárolni.

## 9. Tesztterv

Az alább leírt tesztelések célja a rendszer és funkcióinak teljes körű vizsgálata, ellenőrzése.

Gombok, linkek tesztelése: tesztünk célja: a weboldalon megjelenő gombok és linkek megfelelő működésének ellenőrzése.
Adatrögzítések leelenőrzése, hogy sikeresen feltöltődtek-e az adatbázisba. 
Adatok betöltése az adatbázisból.

Műveletek tesztelése: Törlés, módosítás, hozzáadás.
A weboldal helyes működésének letesztelése különböző böngészőkben például Microsoft Edge, Google Chrome, Firefox…
A weboldal hibátlan megfelelő megjelenés tesztelése számítógépen illetve mobiltelefonon.

## 10. Telepítési terv

A szoftver webes felületéhez csak egy böngésző telepítése szükséges.

**Windows - Microsoft Edge**

**Linux - Mozilla Firefox**

**Mac - Safari**

A webszerverre közvetlenül az internetről kapcsolódnak rá a kliensek. A weboldal URL címét szükséges ismerni és ezt beírni a böngésző címsorába.

## 11. Karbantartási terv

A felhasználók az oldalon megadott elérhetőségen jelenthetik be az esetlegesen felmerülő problémákat, hibákat, melyeket fejlesztőink javítanak.


