# Terminheld/ Android e2e-Regressiontest
Appium-WebdriverIO Projekt für einen end-to-end Regression-Test der Android-App "**Terminheld**": 

https://play.google.com/store/apps/details?id=de.buchner.terminheld.mobile.application&hl=de'

Es werden Tests auf virtuellen Devices sowie auf (Android-)Hardware unterstützt. Referenz ist das Mobiltelefon
"**Huawei Nexus 6P**" mit Android 8.1 in der deutschen Standartkonfiguration.

Folgende Software ist Voraussetzung:

- **node**
- **npm**
- **Java SDK**
- **Android SDK**
- **Android Studio (inkl. der Debug-Bridge)**

Ferner werden die folgenden Systemvariablen benötigt:
- **ANDROID_HOME** <-- Pfad zum Android-SDK 
- **JAVA_HOME** <-- Pfad zum JDK (Voraussetzung: JDK 13 min.)

zudem unter der Systemvariablen '**Path**':
- **%JAVA_HOME%\bin**
- **%ANDROID_HOME%\tools**
- **%ANDROID_HOME%\platform-tools**
- **%ANDROID_HOME%\emulator**
- **%ANDROID_HOME%\tools\bin**

## Installation 
Zur Installation des Projekts folgende Befehle in der Eingabeaufforderung ausführen:

> 1. **cd [PROJEKT-PFAD]** <-- zum Pfad des Projekt-Ordners navigieren
> 2. **npm i** <-- installiert die Dependencies (bzw. **'npm install'**)

**Als nächstes muss der Appium-Server global installiert werden. Dies geschieht mit dem Befehl:** 

> npm install -g appium

## Der Technologiestack
Das node-package "**appium doctor**" hilft dabei, den Technologie-Stack auf Vollständigkeit zu überprüfen:

> npm install appium-doctor -g
> appium-doctor

## Setup eines Tests 
Zunächst das Mobiltelefon anschließen, bzw. das virtuelle Device starten, auf dem der Test ausgeführt werden soll. Eine 
performantere Alternative zum AVD ist  '**Bluestacks 4**'. Für diesen Zweck muss Bluestacks nach dem starten zunächst als 
virtuelles device registriert werden:
 
    adb connect localhost:5555
 
_Mit diesem Befehl erhält man eine Liste mit den udids aller für den Test verfügbaren Devices:_

    adb devices

Gegebenenfalls müssen die Informationen zum Testgerät aktualisiert werden. Die Konfigurationsdaten befinden sich in der 
Datei:

> ./src/config/androidTestInfrastructure.ts

##Starten des Appium-Servers mit REferenz auf den Chromedriver

Da es sich bei der App **Terminheld** um eine Hybrid-App handelt, benötigt der Appium-Server den Chromedriver zum Ausführen 
der Tests. Die Version des Chromedrivers muss mit der Chrome-Version auf dem Test-Device übereinstimmen! 

Der Chromedriver im Projektorder "**chromedriverV78**" ist kompatibel mit dem Huawei Nexus 6P (API 8.1). Der Befehl zum
 starten des Appium-Servers mit dem Verweis auf den Chromedriver:
 
 > appium --chromedriver-executable C:/VERWEIS_AUF_DEN_PROJEKTORDNER/Appium-master/chromedriverV78/chromedriver.exe

## Ausführen eines Tests
> 1.  **cd [PROJEKT-PFAD]** 
> 2. **npm t** <-- (wahlweise **'npm test'**) zum Starten der Testsuite

