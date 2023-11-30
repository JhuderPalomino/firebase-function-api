# Firebase Functions

### Node version
18.x

### Instalar y ejecutar
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
Agregar .env con un alias ejemplo .env.dev
```bash 
firebase use --add  
```
Uso del las variables de entorno de dev
```bash 
firebase use dev  
```
Desplegar el proyecto:
```bash 
firebase deploy  --only functions  
```
Empezar a emular el proyecto localmente:
```bash 
firebase emulators:start  
```
