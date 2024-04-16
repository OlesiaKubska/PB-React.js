# PS 8 - 14.04.2024 - Material UI / React Context

## Zadanie 0 Instalacja biblioteki MaterialUI /

Dokumentacja : https://mui.com/material-ui/getting-started/

Material UI to biblioteka z gotowymi rozwiązaniami w postaci ostylowanych komponentów / widoków i innych przydatnych rozwiązań. Na zajęciach nie będziemy się uczyć stylowania w CSS, zatem postarajmy się użyć gotowego rozwiązania aby w pewnym stopniu ostylować niektóre widoki.

Na początku zainstaluj MUI zgodnie z zaleceniami https://mui.com/material-ui/getting-started/installation/
Zatem wykonaj
```bash
npm install @mui/material @emotion/react @emotion/styled
```


## Zadanie 1 Ostylowanie strony logowania (komponent Login)

Użyjmy gotowych rozwiązań takich jak < Box> < Container> < TextField> oraz < Button> aby ostylować stronę logowania. Dla ułatwienia poniżej umieszczono kod który wymagał nieznacznego dodatkowe stylowania.

Każdy z komponentów Material UI na końcu swojej dokumentacji posiada sekcję "API" w której opisuje wszystkie właściwości które może przyjmować komponent, przykład dla < Button> tutaj -> https://mui.com/material-ui/react-button/#api

Style poniżej
```
return (

<Box
	display="flex"
	justifyContent="center"
	alignItems="center"
	minHeight="100vh"
>
	<Container  maxWidth="xs">
		<form
			onSubmit={handleLogin}
			style={{  display: "flex", flexDirection: "column", gap: "1rem"  }}
		>
	// TextField dla login
	// TextField dla password
	// Button dla submit sutton
		</form>
	</Container>
</Box>
);
```


## Zadanie 2 - Material UI / Komponent Tabs / nawigacja w komponencie Header

W ramach tego zadania umieść komponent Tabs - https://mui.com/material-ui/react-tabs/ w utworzonym na poprzednich zajęciach komponecie Header. Komponent Tabs powinien zawierać dwie zakłądki (Tab) o nazwach "Dashboard" oraz "Users".

- Kliknięcie na "Dashboard" powinno przenosić użytkownika na http://localhost:5000/dashboard
- Kliknięcie na "Users" powinno przenosić użytkownika na http://localhost:5000/dashboard/users

Info: Wykorzystaj dokumentację oraz przykłady użycia komponentu Tabs np. https://mui.com/material-ui/react-tabs/#colored-tab, aby zrozumieć jak obsługiwać kliknięcie na opcje oraz odczytywać z nich wartości

## Zadanie 3 - React Contenxt - utworzenie globalnego contextu AuthContext oraz wczytanie wartości w dowolnym komponencie

Dodatek do Chrome: https://chromewebstore.google.com/detail/react-context-devtool/oddhnidmicpefilikhgeagedibnefkcf

W ramach tego zadania utwórz globalny "worek" na informacje [stany] o nazwie AuthContext, opakuj w niego cała aplikację oraz wypisz przykładową wartość w dowolnym komponencie, aby tego dokonać wykonaj następujące kroki:

- utwórz nowy plik w context/authContext.jsx i umieść w nim poniższy kod (to przykładowa definicja kontextu wraz z domyślnymi wartościami

```
import { createContext, useState } from  "react";

const  AuthContext  =  createContext();

const  AuthProvider  = ({ children }) => {
	const [authUser, setAuthUser] =  useState({
		username:  "",
		password:  "",
	});

	return (
		<AuthContext.Provider  value={{ authUser, setAuthUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
```
- w pliku main.jsx "opakuj" całą aplikację w < AuthProvider> który utworzyłeś powyżej i wyexportowałeś do ogólnego użytku
- w komponencie < Login> za pomocą hook'a useContext uzyskaj dostęp do wartości z utworzonego kontekstu i wypisz je w konsoli


## Zadanie 4 - Logowanie - zastąpienie l.storage poprzez React Context

W ramach tego zadania zrezygnujmy z używania localStorage do obłsługiwania sesji i zastąpmy ją poprzez context, aby tego dokonaćmusimy wykonaćkilka kroków, a mianowicie:

- w kompnencie < Login> zastąp zapisywanie do l.storage wywołaniem metody setAuthUser do której podasz dane logowanegoużytkownika
- w hook'u useAuth zamieńmy sprawdzanie użytkowanika z l.storage na spawdzenie wartości w authContext
- w komponencie Header wypisujemy dane zalogowanego użytkownika, wypisz je z context'u zamiast z l.storage

## Zadanie 5 - Header / nowy Tab / zmien nazwę zalogowanego użytkownika

Celem tego zadania jest utworzenie nowego przycisku < Tab> w kompnencie < Tabs> o nazwie "zmien nazwę", którego zadaniem będzie zmiana nazwy zalogowanego użytkownika na "Jak Kowalski", aby tego dokonać potrzebujesz:

- po kliknięciu w nowo dodany Tab wywołać funkcję "useAuthUser" i jako argument podać użytkownika ze zmianioną nazwą

Jeżeli wszystko zadziała poprawnie powinieneś zauważyć, że wyświetlana nazwa użytkownika automatycznie sie zmieniła (zmieniłeś gobalny stan, zatem wszystkie komponenty które z niego korzystają wykryły ta zmianę i się przerenderowały)

## Zadanie 6 - UsersContext

W tym zadaniu utwórzmy drugi niezależny kontext o nazwie UsersContext, umieśćmy w nim domyślnie listę użytkowników z pliku oraz odczytajmy tę listę w komponencie < Users> aby poprawnie wyświetlić użytkowników. Aby to zrobić wykonaj poniższe kroki:

- utwórz nowy plik /context/usersContext.jsx
- opakuj aplikację w nowo utworzony context
- wewnątrz kontextu utwórz stan users i przypisz do niego użytkowników zapisanych w pliku /const/usersList.js
- odczytaj wartość z contextu w komponencie < Users> i wypisz poprawnie listę użytkowników

## Zadanie 7 - Nowy tab / Delete user1

W ramach tego zadania utwórz ponownie nowy Tab w nagłówku o nazwie "usuń użytkownika user1". Kliknięcie na ten tab powinno usunąć ze store'a użytkownika o nazwie user1.
Podpowiedź: Aby w prosty sposób zrealizować to zadanie utwórz wewnąrz UserContext metodę o nazwie deleteUserByName(name), którą wyeksportujesz z kontekstu w taki sam sposób jak inne elementy. Metoda ta powinna ustawić nową odfiltrowaną listę użytkowników.
Dzięki utwórzeniu funckji pomocniczej wewnątrz context'u w komponencie wystarczy wywołać funkcję z odpowiednim argumentem, to tyle !