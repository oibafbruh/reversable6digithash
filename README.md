# Auftragsnummerverschlüsselung

Für den Fall, dass interne Aufträge z.B. nach Jahr und Nummer numeriert werden (202401, 202402, ...) und nicht offenlegen möchte wieviele Auftrage man dieses Jahr bereits bekommen hat, wurde diese einfache CLI entwickelt.

> [!WARNING]
> Wichtig: Interner Key für Verschlüsselung entspricht nicht dem mitgelieferten Beispielkeys!

# Verwendung

1. Node.js installieren: https://www.nodejs.org/en/download/
2. Projektordner erstellen.
3. permutation.js und cli.js in den Ordner geben.
4. Terminal in diesem Ordner öffnen. (cd path)
5. CLI starten
```console
node cli.js 202501
```
Output -> 969812

# Befehle

Normaler (forward) hash:
```console
node cli.js "SIX DIGIT NUMBER"
```

Beispiel: 
```console
node cli.js 130902
```
Output -> 490716

Umgekehrter (reverse) hash:
Mit -r Argument
```console
node cli.js -r "SIX DIGIT NUMBER"
```

Beispiel:
```console
node cli.js -r 490716
```
Output -> 130902

