# Firebase Functions

### Node version
18.x

### Instalar
Instalar Firebase CLI:
```bash
 npm install -g firebase-tools  
 ```
Iniciar sesión en Firebase:
```bash
firebase login  
```
Inicializar el proyecto:
```bash
firebase init  
```

### Desplegar

Accedemos a la carpeta functions y ejecutamos el siguiente comando:
```bash 
cd functions && npm install
```
Crear firebase credentials y en el archivo functions/firebase-credentials.json como el ejemplo.

Crear variables de entorno functions/.env como el ejemplo.

Desplegar el proyecto:
```bash 
firebase deploy  --only functions  
```
### Ejecutar localmente
Accedemos a la carpeta functions y ejecutamos el siguiente comando:
```bash 
cd functions && npm install
```
Empezar a emular el proyecto localmente:
```bash 
firebase emulators:start  
```
