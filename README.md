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
Agregar .env con un alias ejemplo .env.dev
```bash 
firebase use --add  
```
### Desplegar
Uso del las variables de entorno de dev
```bash 
firebase use dev  
```
Accedemos a la carpeta functions y ejecutamos el siguiente comando:
```bash 
cd functions && npm install
```
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
